import { SidebarLinkIF } from "@/components/SidebarItems";
import { Cog, HomeIcon, GraduationCap, FileStack, SquareUserRound} from "lucide-react";
import appConstants from "./constants";

type AdditionalLinks = {
  title: string;
  links: SidebarLinkIF[];
};

export const defaultLinks: SidebarLinkIF[] = [
  // { href: "/dashboard", title: "Dashboard", icon: HomeIcon },
  { href: appConstants.TUTOR_ROUTE, title: "Tutor", icon: GraduationCap },
  { href: "/app/question-bank", title: "Question Bank", icon: FileStack },
  // { href: "/account", title: "Subscription", icon: SquareUserRound },
  { href: "/app/settings", title: "Settings", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
