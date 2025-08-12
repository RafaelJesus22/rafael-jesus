import { useTranslations } from "next-intl";
import { Section, SectionTitle } from "../ui/section";
import { Degree } from "@/messages/type";
import Link from "next/link";

export function EducationSection() {
  const t = useTranslations("Resume.educationSection");
  const degrees = useTranslations("Resume.educationSection.degrees");

  function getDegrees(): Degree[] {
    const keys = ["0"];
    return keys.map(degrees.raw);
  }

  return (
    <Section id="education">
      <SectionTitle>{t("sectionTitle")}</SectionTitle>
      {getDegrees().map((degree) => (
        <div key={degree.title}>
          <h4 className="font-bold text-xl mb-1">{degree.title}</h4>
          <p>
            <Link
              href={degree.institution.linkedin!}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              {degree.institution.name}, {degree.institution.location}
            </Link>
          </p>
          <p>
            {degree.initialDate} - {degree.finalDate}
          </p>
        </div>
      ))}
    </Section>
  );
}
