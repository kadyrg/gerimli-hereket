import { getTranslations } from "next-intl/server"

export async function OurLocation() {
  const t = await getTranslations("AboutPage")

  return (
    <div className="max-w-5xl mx-auto space-y-4 py-8">
      <h1 className="text-2xl font-semibold">{t("ourLocation")}</h1>
      <div className="rounded-xl bg-background h-100 overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21554.36150262346!2d21.635015149999997!3d47.52311580000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470dfc18929cd9%3A0xb43200d446010c99!2sElite%20Beauty%20Salon!5e0!3m2!1sen!2shu!4v1756644515624!5m2!1sen!2shu" width="100%" height="100%" loading="lazy"></iframe>
        </div>
    </div>
  )
}