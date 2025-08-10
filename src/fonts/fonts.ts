import { Asap, Inconsolata, Maven_Pro } from "next/font/google";

export const asap = Asap({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-asap"
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inconsolata"
});

export const mavenPro = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mavenpro"
});

/**
 * Configuração tipográfica baseada no design que esta no figma
 * (valores exatos de tamanho, altura de linha e peso).
 */
export const typography = {
  titleLg: {
    fontFamily: "var(--font-asap)",
    fontSize: "56px",
    lineHeight: "120%",
    fontWeight: 700 as const
  },
  titleMd: {
    fontFamily: "var(--font-asap)",
    fontSize: "24px",
    lineHeight: "120%",
    fontWeight: 700 as const
  },
  titleSm: {
    fontFamily: "var(--font-asap)",
    fontSize: "16px",
    lineHeight: "120%",
    fontWeight: 700 as const
  },

  subtitle: {
    fontFamily: "var(--font-inconsolata)",
    fontSize: "20px",
    lineHeight: "120%",
    fontWeight: 400 as const
  },

  textMd: {
    fontFamily: "var(--font-mavenpro)",
    fontSize: "16px",
    lineHeight: "140%",
    fontWeight: 400 as const
  },
  textSm: {
    fontFamily: "var(--font-mavenpro)",
    fontSize: "14px",
    lineHeight: "140%",
    fontWeight: 400 as const
  }
};
