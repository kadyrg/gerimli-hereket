"use client"

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Phone, X } from "lucide-react";
import { LanguageToggle } from "../shared/language-toggle";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image'
import { useTranslations } from "next-intl";

export function Header() {
  const router = useRouter();
  const pathname = usePathname()
  const t = useTranslations("Header")

  const [open, setOpen] = useState(false);

  const links = [
    {title: t("home"), url: '/'},
    {title: t("about"), url: '/about'},
    {title: t("contact"), url: '/contact'},
  ]

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  function handleNavigate(url: string) {
    router.push(url);
    setOpen(false);
  }

  return (
    <div className="flex flex-col items-center">
      <div className={cn('fixed z-50 px-4 w-full py-2 h-16 max-w-4xl transition-all', open ? 'duration-500 h-dvh bg-gray-300/85 backdrop-blur-md' : 'duration-1000')}>
        <header className={cn('rounded-[24px] h-full bg-background shadow-[0_0_10px_rgba(0,0,0,0.07)] px-3 transition-[height] duration-500 overflow-hidden')}>
          <div className="h-12 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href={"/"}>
                <Image src={"/logo.png"} alt={"Gerimli Hereket"} height={36} width={90} className="h-8" />
              </Link>
              <div className="hidden sm:flex">
                {links.map((item, index) => (
                  <Button key={index} onClick={() => router.push(item.url)} variant={"ghost"} className={cn('h-8', pathname === item.url && 'bg-accent')}>
                    <span>{item.title}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <LanguageToggle />
              <Link href={"tel:+99364837102"} className="hidden sm:flex">
                <Button className="h-8">
                  <Phone size={17} />
                  <span>+99364837102</span>
                </Button>
              </Link>
              <Button variant={"ghost"} size="icon" className="sm:hidden" onClick={() => setOpen(prev => !prev)}>
                <X className={cn('absolute transition-[scale]', !open && 'scale-0')} />
                <Menu className={cn('absolute transition-[scale]', open && 'scale-0')} />
              </Button>
            </div>
          </div>
          <div className={cn('py-6 px-2 flex flex-col gap-2 transition-all', open ? 'opacity-100 duration-1000' : 'opacity-0 duration-400')}>
            {links.map((item, index) => (
              <span onClick={() => handleNavigate(item.url)} key={index} className="text-2xl font-medium">
                {item.title}
              </span>
            ))}
          </div>
        </header>
      </div>
    </div>
  )
}
