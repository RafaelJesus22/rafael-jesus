import { useTranslations } from "next-intl";
import { Section, SectionTitle } from "../ui/section";
import { Strong } from "../ui/strong";

export function AboutSection() {
  const t = useTranslations("Resume");
  const summary = useTranslations("Resume.aboutSection.summary");

  function getSummary(): string[] {
    return ["0", "1", "2", "3"].map(summary.raw);
  }

  function getKey(paragraph: string): string {
    return paragraph.replace(/\s+/g, "").slice(0, 10);
  }

  return (
    <Section id="about">
      <SectionTitle>{t("aboutSection.sectionTitle")}</SectionTitle>

      <div className="px-2 flex flex-col gap-2">
        {getSummary().map((paragraph) => (
          <p key={getKey(paragraph)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
