import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { fiscalCourtAdvisor as service } from "@/lib/services";

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
  alternates: { canonical: service.href },
};

export default function FiscalCourtAdvisorPage() {
  return <ServicePage service={service} />;
}
