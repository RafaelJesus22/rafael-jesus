import { ReactNode } from "react";

export function Strong({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <strong className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500  to-purple-700">
      {children}
    </strong>
  );
}
