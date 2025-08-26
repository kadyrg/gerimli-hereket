import { Link } from "@/i18n/navigation";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
  return (
    <>
      <header className="fixed w-full h-13 z-50 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 bg-slate-100/85 backdrop-blur-md border-b">
        <div className="max-w-7xl h-full mx-auto flex items-center justify-between">
          <h1 className="">
            GERIMLI HEREKET
          </h1>
          <div>
            <Link href={""} className="flex items-end gap-[6px] hover:text-primary">
                <Phone size={17} />
                <span className="text-sm font-medium">+99364837102</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-13" />
    </>
  )
}
