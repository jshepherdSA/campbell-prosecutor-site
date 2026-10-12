import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { trafficDiversion as service } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: service.href },
};

export default function TrafficDiversionPage() {
  return (
    <ServicePage service={service} parent={{ label: site.office, href: "/" }} />
  );
}
