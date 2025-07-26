import { languages } from "@/config/language";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: languages,
  defaultLocale: "pt",
  pathnames: {
    "/": "/",
    "/resume": {
      pt: "/curriculo",
      en: "/resume",
    },
  },
  localeCookie: {
    name: "USER_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});
