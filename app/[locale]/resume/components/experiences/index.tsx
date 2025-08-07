import { useTranslations } from "next-intl";
import { Experience } from "../ui/experience";
import { Section, SectionTitle } from "../ui/section";
import { Experience as ExperienceType } from "@/messages/type";

export function ExperiencesSection() {
  const t = useTranslations("Resume.experienceSection");
  const experiences = useTranslations("Resume.experienceSection.experiences");

  function getExperiences(): ExperienceType[] {
    const keys = ["0", "1", "2"];
    return keys.map(experiences.raw);
  }

  function getKey(experience: ExperienceType) {
    return `${experience.title}-${experience.company.name}`;
  }

  return (
    <Section id="experience">
      <SectionTitle>{t("sectionTitle")}</SectionTitle>

      {getExperiences().map((e) => (
        <Experience
          key={getKey(e)}
          title={e.title}
          initialDate={e.initialDate}
          finalDate={e.finalDate}
          functions={e.functions}
          roles={e.roles}
          company={{
            name: e.company.name,
            location: e.company.location,
            linkedin: e.company.linkedin,
          }}
        />
      ))}
    </Section>
  );
}
