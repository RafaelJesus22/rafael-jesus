import { Experience as ExperienceType } from "@/types";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export function Experience({
  company,
  finalDate,
  functions,
  initialDate,
  title,
  roles,
}: ExperienceType) {
  const t = useTranslations("Resume.experienceSection.experiences");

  return (
    <div className="mb-4">
      <h4 className="font-bold text-xl">{title}</h4>
      <p>
        <Link
          href={company.linkedin!}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline "
        >
          {company.name} - {company.location}
        </Link>
        {" | "}
        {initialDate} - {finalDate}
      </p>

      {roles && (
        <div className="my-2">
          <h4 className="font-semibold">{t("rolesLabel")}</h4>
          <ul className="list-disc ml-4">
            {Object.values(roles).map((role) => (
              <li key={role.title}>
                <p>
                  {role.title} ({role.initialDate} - {role.finalDate})
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="font-semibold mb-1">{t("functionsLabel")}</h4>

        <ul className="list-disc ml-4">
          {functions.map((fun) => (
            <li key={fun.slice(12, 50)}>{fun}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
