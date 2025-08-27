import { Hero } from "@/components/shared/hero";
import { Partner } from "@/components/shared/partner";
import { Services } from "@/components/shared/services";
import { Shipping } from "@/components/shared/shipping";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Shipping />
      <Partner />
      <Services />
    </>
  );
}
