import { useTranslations } from "next-intl";
import { Section, SectionTitle } from "../ui/section";
import { SkillChip } from "../ui/skill-chip";

export function SkillsSection() {
  const t = useTranslations("Resume");

  return (
    <Section id="skills">
      <SectionTitle>{t("skillsSection.sectionTitle")}</SectionTitle>
      <ul className="flex gap-2 flex-wrap justify-center">
        <SkillChip imgSrc="/react.svg" imgAlt="React.js">
          React Native
        </SkillChip>
        <SkillChip imgSrc="/react.svg" imgAlt="React.js">
          React.js
        </SkillChip>
        <SkillChip imgSrc="/nextjs.svg" imgAlt="Next.js">
          Next.js
        </SkillChip>
        <SkillChip imgSrc="/js.svg" imgAlt="JavaScript">
          JavaScript
        </SkillChip>
        <SkillChip imgSrc="/ts.svg" imgAlt="TypeScript">
          TypeScript
        </SkillChip>
        <SkillChip imgSrc="/angular.svg" imgAlt="Angular">
          Angular
        </SkillChip>
        <SkillChip imgSrc="/redux.svg" imgAlt="Redux">
          Redux
        </SkillChip>
      </ul>
    </Section>
  );
}
