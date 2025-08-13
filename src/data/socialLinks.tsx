import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import type { SocialLink } from "../types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/seu-usuario",
    label: "LinkedIn",
    icon: <LinkedinLogoIcon size={24} weight="bold" />,
  },
  {
    href: "https://www.instagram.com/_tambue",
    label: "Instagram",
    icon: <InstagramLogoIcon size={24} weight="bold" />,
  },
  {
    href: "https://github.com/joao-tambue",
    label: "GitHub",
    icon: <GithubLogoIcon size={24} weight="bold" />,
  },
  {
    href: "mailto:joaotambue13@email.com",
    label: "E-mail",
    icon: <EnvelopeSimpleIcon size={24} weight="bold" />,
  },
];