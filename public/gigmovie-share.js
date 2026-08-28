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

  function feedback(button, message) {
    var wrap = button && button.closest ? button.closest('.article-share-inline') : null;
    var node = wrap ? wrap.querySelector('.share-feedback') : null;

    if (node) {
      node.textContent = message;
      window.setTimeout(function () {
        node.textContent = '';
      }, 2200);
      return;
    }

    button.textContent = message;
    window.setTimeout(function () {
      button.textContent = 'Linki kopyala';
    }, 1800);
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

  document.addEventListener('click', function (event) {
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
    }
  });

  window.copyGigMovieLink = function (button) {
    copyLink(button);
    return false;
  };
})();
