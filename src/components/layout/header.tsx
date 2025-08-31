"use client"

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Phone, X } from "lucide-react";
import { LanguageToggle } from "../shared/language-toggle";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image'

const links = [
  {title: "Home", url: '/'},
  {title: "About us", url: '/about'},
  {title: "Contact us", url: '/contact'},
]

export function Header() {
  const router = useRouter();
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

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
    <>
      <header className={cn(
        'fixed top-0 w-full h-12 z-50 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 bg-slate-100/85 backdrop-blur-[60px] transition-[height] overflow-hidden',
        open && 'h-screen'
      )}>
        <div className="max-w-7xl h-12 mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className={cn('transition-opacity duration-300', open && 'opacity-0 pointer-events-none')}>
              <Image src={"/logo.png"} alt={"Gerimli Hereket"} height={36} width={90} className="h-8" />
            </div>
            <div className="hidden md:flex">
              {links.map((item, index) => (
                <Button key={index} onClick={() => router.push(item.url)} variant={"ghost"} className={cn('h-7', pathname === item.url && 'bg-accent')}>
                  <span>{item.title}</span>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <Link href={""} className="hidden md:flex">
              <Button variant={"ghost"} className="h-7">
                <Phone size={17} />
                <span>+99364837102</span>
              </Button>
            </Link>
            <LanguageToggle className={cn(open && 'opacity-0 pointer-events-none')} />
            <Button variant={"ghost"} size="icon" className="size-7 md:hidden" onClick={() => setOpen(prev => !prev)}>
              <X className={cn('absolute transition-[scale]', !open && 'scale-0')} />
              <Menu className={cn('absolute transition-[scale]', open && 'scale-0')} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 p-4">
          {links.map((item, index) => (
            <button key={index} onClick={() => handleNavigate(item.url)} className="text-2xl font-semibold">
              {item.title}
            </button>
          ))}
        </div>
      </header>
      <div className="h-12" />
    </>
  )
}
