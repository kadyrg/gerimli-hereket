import { ContactForm } from "@/components/shared/contact-form";
import { ContactPageMarquee } from "@/components/shared/contact-page-marquee";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("ContactPage")

  return (
    <section className="relative h-[calc(100vh-60px)] flex flex-col">
      <div className="px-4 pb-8 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium text-center p-4">{t("contact")}</h1>
        <ContactForm />
      </div>
      <div className="w-full bottom-0 bg-slate-100">
        <ContactPageMarquee />
      </div>
    </section>
  );
}
