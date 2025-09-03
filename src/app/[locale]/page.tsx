import { Hero } from "@/components/shared/hero";
import { YourLogisticsSolution } from "@/components/shared/your-logistics-solution";
import { LogisticsServices } from "@/components/shared/logistics-services";
import { TransportServices } from "@/components/shared/transport-services";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <TransportServices />
      <YourLogisticsSolution />
      <LogisticsServices />
    </>
  );
}
