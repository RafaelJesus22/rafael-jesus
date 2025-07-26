import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { ReactNode } from "react";
import Link from "next/link";

export function ContactLink({
  children,
  href,
  imgAlt,
  imgSrc,
  width,
}: Readonly<{
  href: string;
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
  width: number;
}>) {
  return (
    <Link href={href} target="_blanck" color="foreground">
      <Chip
        classNames={{
          base: "bg-linear-to-br from-purple-600  to-cyan-500 border-none border-white/50 shadow-indigo-500/30",
          content: "drop-shadow-xs shadow-black text-md",
        }}
        variant="shadow"
        radius="sm"
        color="secondary"
        size="md"
        startContent={
          <Image src={imgSrc} alt={imgAlt} width={width} radius="none" />
        }
      >
        {children}
      </Chip>
    </Link>
  );
}
