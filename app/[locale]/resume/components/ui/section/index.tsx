import { Card, CardBody } from "@heroui/card";
import { ReactNode } from "react";

export function Section({
  children,
  id,
}: Readonly<{ children: ReactNode; id: string }>) {
  return (
    <section id={id} className="my-4 rounded bg-[#0cdf790]">
      {children}
    </section>
  );
}

export function SectionTitle({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card radius="sm" isBlurred={false} className="mb-2">
      <CardBody>
        <h1 className="font-bold uppercase">{children}</h1>
      </CardBody>
    </Card>
  );
}
