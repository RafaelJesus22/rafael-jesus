"use client";

import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";

export const languages = [
  { key: "pt-BR", label: "🇧🇷 PT" },
  { key: "en-US", label: "🇺🇸 EN" },
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = useState("pt-BR");

  return (
    <Select
      className="max-w-[6rem]"
      defaultSelectedKeys={["pt-BR"]}
      size="md"
      value={selectedLanguage}
      disabledKeys={[selectedLanguage]}
      onChange={(e) => setSelectedLanguage(e.target.value)}
    >
      {languages.map((language) => (
        <SelectItem key={language.key}>{language.label}</SelectItem>
      ))}
    </Select>
  );
}
