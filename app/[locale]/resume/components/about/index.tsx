import { useTranslations } from "next-intl";
import { Section, SectionTitle } from "../ui/section";
import { Strong } from "../ui/strong";

export function AboutSection() {
  const t = useTranslations("Resume");

  return (
    <Section id="about">
      <SectionTitle>{t("aboutSection.sectionTitle")}</SectionTitle>

      <div className="px-2 flex flex-col gap-2">
        <p>
          I am a software developer with <Strong>over 5 years</Strong> of
          professional experience, specializing in mobile and web development.
          Focused on creating beautiful, user-friendly and high performant
          applications.
        </p>
        <p>
          Throughout my career, I've worked on large-scale, public-facing
          projects, honing my mobile and frontend development skills. I'm driven
          by creating solutions that optimize users' lives, always focusing on
          quality, organization, and technical excellence.
        </p>
        <p>
          I currently work as a Senior Frontend Developer at Jazz Tech, where I
          contribute to the development of high-performance interfaces and user
          experiences using technologies such as React Native, Next.js, and
          Angular, as well as agile practices based on Scrum.
        </p>
      </div>
    </Section>
  );
}
