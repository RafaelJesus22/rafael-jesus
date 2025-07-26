export function Experience({
  company,
  finalDate,
  functions,
  initialDate,
  location,
  title,
}: Readonly<{
  title: string;
  company: string;
  location: string;
  initialDate: string;
  finalDate: string;
  functions: string[];
}>) {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-xl mb-1">{title}</h4>
      <p className="italic">
        {company} - {location} | {initialDate} - {finalDate}
      </p>
      <ul className="list-disc ml-4">
        {functions.map((fun) => (
          <li key={fun.slice(0, 10)}>{fun}</li>
        ))}
      </ul>
    </div>
  );
}
