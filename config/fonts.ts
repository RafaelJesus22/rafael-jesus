import { Montserrat, Inter } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = Montserrat({
  subsets: ["latin"],
  variable: "--font-mono",
});
