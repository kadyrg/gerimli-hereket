"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const languages = [
  { title: "Türkmen", locale: "tm" },
  { title: "Русский", locale: "ru" },
  { title: "English", locale: "en" },
];

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const getCleanPathname = () => {
    const localeRegex = new RegExp(`^/(${languages.map(lang => lang.locale).join('|')})`);
    return pathname.replace(localeRegex, '') || '/';
  };

  const handleLanguageChange = (newLocale: string) => {
    const cleanPathname = getCleanPathname();
    router.replace(cleanPathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 transition-opacity duration-300"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="shadow-none">
        {languages.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleLanguageChange(item.locale)}
            className={cn("font-medium", locale === item.locale && "bg-accent pointer-events-none")}
          >
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}