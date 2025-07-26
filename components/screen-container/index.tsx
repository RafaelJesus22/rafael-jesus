import { ReactNode } from "react";

export function Container({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="px-4 max-w-[720px] m-auto mb-12">{children}</div>;
}
