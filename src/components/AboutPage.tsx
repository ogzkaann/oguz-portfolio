import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Experience, SkillGroup } from "@/types/portfolio";

export async function AboutPage() {
  const t = await getTranslations("Portfolio");
  const experiences = t.raw("about.experiences") as Experience[];
  const skillGroups = t.raw("about.skillGroups") as SkillGroup[];
  const principles = t.raw("about.principles") as string[];

  return (
    <main className="about-page">
      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-photo">
          <Image
            src="/profile-oguz.jpg"
            alt={t("about.photoAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 32vw, 100vw"
          />
        </div>
        <div className="about-copy">
          <p className="about-eyebrow">{t("about.eyebrow")}</p>
          <h1 id="about-title">{t("about.title")}</h1>
          {(t.raw("about.paragraphs") as string[]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-dark-section" aria-labelledby="principles-title">
        <div className="about-section-heading">
          <p>{t("about.principlesEyebrow")}</p>
          <h2 id="principles-title">{t("about.principlesTitle")}</h2>
        </div>
        <ol className="principles-grid">
          {principles.map((principle, index) => (
            <li key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="about-section-heading">
          <p>{t("about.experienceEyebrow")}</p>
          <h2 id="experience-title">{t("about.experienceTitle")}</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.date}`} className="experience-item">
              <p className="experience-date">{experience.date}</p>
              <div>
                <h3>{experience.title}</h3>
                <p className="experience-company">{experience.company}</p>
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                {experience.note ? <p className="experience-note">{experience.note}</p> : null}
                <p className="experience-stack">{experience.technologies.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="about-section-heading">
          <p>{t("about.skillsEyebrow")}</p>
          <h2 id="skills-title">{t("about.skillsTitle")}</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <p>{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
