import {
  NavigationJurusanType,
  NavigationKegiatanType,
  NavigationMenuMoreType,
  NavigationWebTechnologyType,
  NavMenuHomeItemType,
} from "@/types/navigation";
import { BracesIcon, LayoutTemplate, Wind } from "lucide-react";

export const NavigationMenuKegiatan: NavigationKegiatanType[] = [
  {
    title: "Upacara",
    // href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Sholat Dhuha Bersama",
    // href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Senam Bersama",
    // href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Lomba 17 Agustus",
    // href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Kegiatan Belajar Mengajar",
    // href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Praktek",
    // href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const NavigationMenuJurusan: NavigationJurusanType[] = [
  {
    href: "rpl",
    jurusan: "Rekayasa Perangkat Lunak",
    keahlihan: "Coding | Database | Debugging",
  },
  {
    href: "dkv",
    jurusan: "Desain komunikasi Visual",
    keahlihan: "Desain | Ilustrasi | Editing",
  },
  {
    href: "tkj",
    jurusan: "Teknik Jaringan Komputer",
    keahlihan: "Networking | Server | Troubleshooting",
  },
  {
    href: "to",
    jurusan: "Teknik Otomotif",
    keahlihan: "Mesin | Perawatan | Diagnosa",
  },
];

export const NavigationWebTechnology: NavigationWebTechnologyType[] = [
  {
    technology: "Next.JS FrameWork",
    href: "https://nextjs.org/",
    icon: BracesIcon,
  },
  {
    technology: "TailwindCSS Library",
    href: "https://tailwindcss.com/",
    icon: Wind,
  },
  {
    technology: "Shadcn UI",
    href: "https://ui.shadcn.com/",
    icon: LayoutTemplate,
  },
];

export const NavMenuHomeItems: NavMenuHomeItemType[] = [
  {
    href: "#",
    title: "Introdution",
    description: "Who is SMK Otomindo",
  },
  {
    href: "#",
    title: "Hosana's foundation",
    description: "Who Is Hosana's Foundation",
  },
  {
    href: "#",
    title: "...",
    description: "...",
  },
];

export const NavigationMenuMore: NavigationMenuMoreType[] = [
  {
    href: "https://otomindorpl.weebly.com/",
    name: "Senior Website",
  },
  {
    href: "/more/social_media",
    name: "Social Media",
  },
  {
    href: "/more/contact_us",
    name: "Contact Us",
  },
];
