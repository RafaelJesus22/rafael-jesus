import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/components/providers";

import { fontSans, fontMono } from "@/config/fonts";
import { routing } from "@/i18n/routing";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          "[&_*::selection]:bg-cyan-600 [&_*::selection]:text-white"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "white" }}>
          <NextIntlClientProvider>
            <div className="relative flex flex-col h-screen">
              <main className="container mx-auto max-w-7xl flex-grow">
                {children}
              </main>
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
