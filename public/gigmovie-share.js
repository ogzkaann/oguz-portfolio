(function () {
  'use strict';

  function getShareUrl() {
    var canonical = document.querySelector('link[rel="canonical"]');
    return canonical && canonical.href ? canonical.href : window.location.href;
  }

  function getShareTitle() {
    var title = document.querySelector('.article-title');
    return title && title.textContent ? title.textContent.trim() : document.title;
  }

  function getStoryExcerpt() {
    var paragraphs = document.querySelectorAll('.article-body p');
    for (var i = 0; i < paragraphs.length; i += 1) {
      var value = (paragraphs[i].textContent || '').replace(/\s+/g, ' ').trim();
      if (value.length >= 45) return value.slice(0, 300);
    }

    var body = document.querySelector('.article-body');
    return body ? (body.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 300) : '';
  }

  function normalizeStoryImageUrl(value) {
    if (!value) return '';

    try {
      var url = new URL(value, window.location.href);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return '';

      var host = url.hostname.toLowerCase();
      if (
        host.indexOf('googleusercontent.com') !== -1 ||
        host.indexOf('blogspot.com') !== -1 ||
        host.indexOf('ggpht.com') !== -1
      ) {
        url.pathname = url.pathname.replace(
          /\/(?:s\d+|w\d+(?:-h\d+)?(?:-[a-z])?)\//i,
          '/s1600/'
        );
      }

      return url.toString();
    } catch (e) {
      return '';
    }
  }

  function getLargestSrcsetCandidate(srcset) {
    if (!srcset) return '';

    var best = '';
    var bestWidth = 0;
    srcset.split(',').forEach(function (candidate) {
      var bits = candidate.trim().split(/\s+/);
      var url = bits[0] || '';
      var width = bits[1] && /\d+w/.test(bits[1]) ? parseInt(bits[1], 10) : 0;
      if (!best || width >= bestWidth) {
        best = url;
        bestWidth = width;
      }
    });
    return best;
  }

  function getStoryImage() {
    var image = document.querySelector(
      '.article-body img, .post-body img, article img, .post img'
    );

    if (image) {
      var anchor = image.closest ? image.closest('a') : null;
      var candidates = [
        image.getAttribute('data-original-src'),
        image.getAttribute('data-src'),
        image.getAttribute('data-original-url'),
        anchor && anchor.getAttribute('href'),
        getLargestSrcsetCandidate(image.getAttribute('srcset')),
        image.currentSrc,
        image.src,
        image.getAttribute('src')
      ];

      for (var i = 0; i < candidates.length; i += 1) {
        var normalized = normalizeStoryImageUrl(candidates[i]);
        if (normalized) return normalized;
      }
    }

    var metaSelectors = [
      'meta[property="og:image"]',
      'meta[property="og:image:secure_url"]',
      'meta[name="twitter:image"]',
      'link[rel="image_src"]'
    ];

    for (var m = 0; m < metaSelectors.length; m += 1) {
      var node = document.querySelector(metaSelectors[m]);
      if (!node) continue;
      var value = node.getAttribute('content') || node.getAttribute('href');
      var fallback = normalizeStoryImageUrl(value);
      if (fallback) return fallback;
    }

    return '';
  }

  function feedback(button, message, timeout) {
    var wrap = button && button.closest ? button.closest('.article-share-inline') : null;
    var node = wrap ? wrap.querySelector('.share-feedback') : null;

    if (node) {
      node.textContent = message;
      if (timeout !== 0) {
        window.setTimeout(function () {
          node.textContent = '';
        }, timeout || 2200);
      }
      return;
    }

    if (!button) return;
    var original = button.getAttribute('data-original-label') || button.textContent;
    button.setAttribute('data-original-label', original);
    button.textContent = message;
    if (timeout !== 0) {
      window.setTimeout(function () {
        button.textContent = original;
      }, timeout || 1800);
    }
  }

  function legacyCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.top = '0';
    area.style.left = '-9999px';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.focus();
    area.select();
    area.setSelectionRange(0, area.value.length);

    var copied = false;
    try {
      copied = document.execCommand('copy');
    } catch (e) {}

    document.body.removeChild(area);
    return copied;
  }

  function copyLink(button) {
    var url = getShareUrl();

    function fallback() {
      if (legacyCopy(url)) {
        feedback(button, 'Link kopyalandı');
      } else {
        window.prompt('Bağlantıyı kopyala:', url);
      }
    }

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(url)
          .then(function () {
            feedback(button, 'Link kopyalandı');
          })
          .catch(fallback);
      } else {
        fallback();
      }
    } catch (e) {
      fallback();
    }
  }

  function deviceShare(button) {
    var payload = {
      title: getShareTitle(),
      url: getShareUrl()
    };

    if (navigator.share && typeof navigator.share === 'function') {
      navigator.share(payload).catch(function () {});
      return;
    }

    copyLink(button);
  }

  function closeShareMenu(button) {
    var menu = button && button.closest ? button.closest('.share-menu') : null;
    if (menu) menu.removeAttribute('open');
  }

  function downloadStory(blob, button) {
    var objectUrl = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = objectUrl;
    link.download = 'gig-movie-story.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(function () { URL.revokeObjectURL(objectUrl); }, 1500);
    feedback(button, 'Story görseli kaydedildi', 3000);
  }

  async function shareInstagramStory(button) {
    if (button.disabled) return;
    button.disabled = true;
    button.classList.add('is-loading');
    feedback(button, 'Story hazırlanıyor…', 0);

    try {
      var imageUrl = getStoryImage();
      var params = new URLSearchParams({
        title: getShareTitle(),
        excerpt: getStoryExcerpt(),
        image: imageUrl,
        url: getShareUrl()
      });
      var endpoint = 'https://okdere.com/api/gigmovie/story?' + params.toString();
      var response = await fetch(endpoint, { mode: 'cors' });
      if (!response.ok) throw new Error('Story image request failed');

      var blob = await response.blob();
      var file = new File([blob], 'gig-movie-story.png', { type: 'image/png' });
      var shareData = { files: [file], title: getShareTitle() };

      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        feedback(button, 'Paylaşım ekranı açıldı', 2200);
      } else {
        downloadStory(blob, button);
      }
    } catch (error) {
      if (error && error.name === 'AbortError') {
        feedback(button, '', 1);
      } else {
        feedback(button, 'Story açılamadı · görsel açılıyor', 2800);
        var fallbackParams = new URLSearchParams({
          title: getShareTitle(),
          excerpt: getStoryExcerpt(),
          image: getStoryImage(),
          url: getShareUrl()
        });
        window.open('https://okdere.com/api/gigmovie/story?' + fallbackParams.toString(), '_blank', 'noopener,noreferrer');
      }
    } finally {
      button.disabled = false;
      button.classList.remove('is-loading');
      closeShareMenu(button);
    }
  }

  document.addEventListener('click', function (event) {
    var close = event.target.closest && event.target.closest('.share-close');
    if (close) {
      event.preventDefault();
      closeShareMenu(close);
      return;
    }

    var menuLink = event.target.closest && event.target.closest('.share-popover a');
    if (menuLink) {
      closeShareMenu(menuLink);
      return;
    }

    var copy = event.target.closest && event.target.closest('.share-copy');
    if (copy) {
      event.preventDefault();
      copyLink(copy);
      return;
    }

    var device = event.target.closest && event.target.closest('.share-device');
    if (device) {
      event.preventDefault();
      deviceShare(device);
      return;
    }

    var instagram = event.target.closest && event.target.closest('.share-instagram');
    if (instagram) {
      event.preventDefault();
      shareInstagramStory(instagram);
    }
  });

  window.copyGigMovieLink = function (button) {
    copyLink(button);
    return false;
  };
})();
