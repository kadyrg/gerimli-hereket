"use client"

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, Phone, X } from "lucide-react";
import { LanguageToggle } from "../shared/language-toggle";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  {title: "Home", url: '/'},
  {title: "About us", url: '/about'},
  {title: "Contact us", url: '/contact'},
]

export function Header() {
  const router = useRouter();
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={cn(
        'fixed top-0 w-full h-12 z-50 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 bg-slate-100/95 backdrop-blur-[60px] transition-[height]',
        open && 'h-screen'
      )}>
        <div className="max-w-7xl h-12 mx-auto flex items-center justify-between">
          <div  className="flex gap-4">
            <h1 className="">
              GERIMLI HEREKET
            </h1>
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
            <LanguageToggle />
            <Button variant={"ghost"} size="icon" className="size-7 md:hidden" onClick={() => setOpen(prev => !prev)}>
              <X className={cn('absolute transition-[scale]', !open && 'scale-0')} />
              <Menu className={cn('absolute transition-[scale]', open && 'scale-0')} />
            </Button>
          </div>
        </div>
      </header>
      <div className="h-12" />
    </>
  )
}
