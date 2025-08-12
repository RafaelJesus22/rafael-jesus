import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { ReactNode } from "react";

export function SkillChip({
  children,
  imgSrc,
  imgAlt,
}: Readonly<{ children: ReactNode; imgSrc?: string; imgAlt?: string }>) {
  return (
    <li>
      <Chip
        size="lg"
        radius="sm"
        startContent={
          imgSrc && (
            <Image src={imgSrc} alt={imgAlt} height={20} radius="none" />
          )
        }
        classNames={{
          base: "bg-linear-to-br from-purple-600  to-cyan-500 border-none border-white/50 shadow-indigo-500/30",
          content:
            "drop-shadow-xs shadow-black text-white text-md font-semibold font-mono",
        }}
      >
        {children}
      </Chip>
    </li>
  );
}
