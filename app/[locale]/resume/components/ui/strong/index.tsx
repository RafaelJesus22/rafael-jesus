import { ReactNode } from "react";

export function Strong({ children }: Readonly<{ children: ReactNode }>) {
  const darkModeStyle = "dark:from-primary-700 dark:to-secondary-700";

  return (
    <strong
      className={`font-normal text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-secondary-600 ${darkModeStyle}`}
    >
      {children}
    </strong>
  );
}
