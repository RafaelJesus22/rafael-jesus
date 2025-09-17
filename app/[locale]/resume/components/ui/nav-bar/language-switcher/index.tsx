"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Select, SelectItem } from "@heroui/select";
import { useLocale } from "next-intl";

export const languages = [
  { key: "pt", label: "🇧🇷 PT" },
  { key: "en", label: "🇺🇸 EN" },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  function handleLanguageChange(locale: string) {
    router.replace({ pathname }, { locale });
  }

  return (
    <Select
      // className="max-w-[8rem]"
      defaultSelectedKeys={[locale]}
      size="md"
      value={locale}
      disabledKeys={[locale]}
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      {languages.map((language) => (
        <SelectItem key={language.key}>{language.label}</SelectItem>
      ))}
    </Select>
  );
}
