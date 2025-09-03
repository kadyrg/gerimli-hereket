import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon } from "../ui/icons";
import { getTranslations } from "next-intl/server";

const socials = [
  {icon: InstagramIcon},
  {icon: FacebookIcon}
]

async function links() {
  const t = await getTranslations("Footer")
  const data = [
    {
      title: t("company"),
      links: [
        {title: t("home"), url: "/"},
        {title: t("about"), url: "/about"},
        {title: t("contact"), url: "/contact"}
      ]
    },
    {
      title: t("socialMedia"),
      links: [
        {title: t("facebook"), url: "/"},
        {title: t("instagram"), url: "/about"},
        {title: t("tiktok"), url: "/contact"}
      ]
    },
    {
      title: t("contacts"),
      links: [
        {title: t("phoneNumber1"), url: "/"},
        {title: t("phoneNumber2"), url: "/contact"},
        {title: t("email"), url: "/about"},
      ]
    }
  ]
  return data
}

export async function Footer() {
  const t = await getTranslations("Footer")
  const data = await links()

  return (
    <footer className="px-3 bg-foreground-inset text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between py-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">{t("title")}</h1>
            <h3 className="text-background/80">{t("subTitle")}</h3>
          </div>
          <div className="flex gap-[6px]">
            {socials.map((item, index) => (
              <Button key={index} size={"icon"} variant={"secondary"} className="rounded-full size-8">
                <item.icon />
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          <span className="text-sm text-background/80">{t("copyright")}</span>
        </div>
      </div>
    </footer>
  )
}