import { Experience as ExperienceType } from "@/types";
import Link from "next/link";

export function Experience({
  company,
  finalDate,
  functions,
  initialDate,
  title,
}: ExperienceType) {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-xl mb-1">{title}</h4>
      <p className="italic">
        <Link
          href={company.linkedin!}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline "
        >
          {company.name} - {company.location}
        </Link>{" "}
        | {initialDate} - {finalDate}
      </p>
      <ul className="list-disc ml-4">
        {functions.map((fun) => (
          <li key={fun.slice(0, 20)}>{fun}</li>
        ))}
      </ul>
    </div>
  );
}
