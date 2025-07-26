"use client";

import { Image } from "@heroui/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeSwitchIconSrc = {
    light: "./moon.svg",
    dark: "./sun.svg",
  };

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button onClick={switchTheme} isIconOnly variant="ghost">
      <Image
        className="cursor-pointer w-8 h-8 p-1"
        src={themeSwitchIconSrc[(theme as "light" | "dark") || "light"]}
      />
    </Button>
  );
}
