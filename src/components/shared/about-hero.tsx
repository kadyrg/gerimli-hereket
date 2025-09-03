import { getTranslations } from "next-intl/server"

export async function AboutHero() {
  const t = await getTranslations("AboutPage")

  return (
    <div className="max-w-xl mx-auto space-y-2 pt-22 pb-10 px-6">
      <h1 className="text-2xl md:text-3xl text-center font-medium">{t("aboutTitle")}</h1>
      <h3 className="text-center md:text-lg">{t("aboutDescription")}</h3>
    </div>
  )
}
