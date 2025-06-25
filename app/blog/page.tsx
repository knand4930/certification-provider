import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Expert Insights & Industry Blog | CertifyPro Global - Certification Authority",
  description:
    "Stay updated with latest certification trends, ISO standards updates, industry insights, and expert tips from CertifyPro Global's certification specialists.",
  keywords:
    "certification blog, ISO standards, quality management insights, certification trends, industry best practices, compliance updates, audit tips, certification success stories",
}

export default function BlogPage() {
  return <BlogClientPage />
}
