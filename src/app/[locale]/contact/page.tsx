import { ContactForm } from "@/components/shared/contact-form";
import { ContactPageMarquee } from "@/components/shared/contact-page-marquee";

export default async function ContactPage() {
  return (
    <section className="relative h-[calc(100vh-60px)] flex flex-col">
      <div className="px-4 pb-8 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium text-center p-4">Contact us</h1>
        <ContactForm />
      </div>
      <div className="w-full bottom-0 bg-slate-100">
        <ContactPageMarquee />
      </div>
    </section>
  );
}
