import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon } from "../ui/icons";

const socials = [
  {icon: InstagramIcon},
  {icon: FacebookIcon}
]

const data = [
  {
    title: "Company",
    links: [
      {title: "Home", url: "/"},
      {title: "About us", url: "/about"},
      {title: "Contact us", url: "/contact"}
    ]
  },
  {
    title: "Social",
    links: [
      {title: "Facebook", url: "/"},
      {title: "Instagram", url: "/about"},
      {title: "Twitter", url: "/contact"}
    ]
  },
  {
    title: "Social media",
    links: [
      {title: "Facebook", url: "/"},
      {title: "Instagram", url: "/about"},
      {title: "Twitter", url: "/contact"}
    ]
  },
  {
    title: "Contacts",
    links: [
      {title: "+99368837102", url: "/"},
      {title: "+99366666666", url: "/contact"},
      {title: "h.agayev@gmail.com", url: "/about"},
    ]
  }
]

export function Footer() {
  return (
    <footer className="px-3 bg-foreground-inset text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between py-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Gerimli Hereket</h1>
            <h3 className="text-background/80">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div className="flex gap-[6px]">
            {socials.map((item, index) => (
              <Button key={index} size={"icon"} variant={"secondary"} className="rounded-full size-8">
                <item.icon />
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl">{item.title}</h3>
              <div className="flex flex-col gap-2 py-3">
                {item.links.map((i, index) => (
                  <Link key={index} href={i.url} className="text-background/80 hover:text-background transition-[color]">
                    {i.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="py-3">
          <span className="text-sm text-background/80">Copyright © 2025 Gerimli Hereket. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}