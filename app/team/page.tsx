import type { Metadata } from "next"
import TeamPageClient from "./TeamPageClient"

export const metadata: Metadata = {
  title: "Expert Team | CertifyPro Global - Meet Our Certification Specialists",
  description:
    "Meet CertifyPro Global's world-class team of certified professionals, industry experts, and thought leaders with decades of combined experience in certification and training.",
  keywords:
    "certification experts, lead auditors, ISO specialists, quality management professionals, information security experts, environmental consultants, safety specialists",
}

export default function TeamPage() {
  return <TeamPageClient />
}
