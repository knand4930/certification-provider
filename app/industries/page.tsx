"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Heart,
  Factory,
  Leaf,
  Truck,
  Cpu,
  Building,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Globe,
  TrendingUp,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare & Life Sciences",
      description:
        "Comprehensive certification programs for healthcare organizations, medical device manufacturers, and pharmaceutical companies.",
      certCount: "45+",
      standards: ["ISO 13485", "ISO 15189", "ISO 14155", "GMP"],
      benefits: ["Patient safety", "Regulatory compliance", "Quality assurance", "Market access"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Factory,
      name: "Manufacturing & Engineering",
      description:
        "Quality management and operational excellence certifications for manufacturing and engineering companies.",
      certCount: "60+",
      standards: ["ISO 9001", "IATF 16949", "AS9100", "ISO 50001"],
      benefits: ["Process optimization", "Cost reduction", "Quality improvement", "Customer satisfaction"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Leaf,
      name: "Environmental & Sustainability",
      description:
        "Environmental management and sustainability certifications for organizations committed to environmental responsibility.",
      certCount: "30+",
      standards: ["ISO 14001", "ISO 50001", "Carbon Trust", "LEED"],
      benefits: ["Environmental impact", "Cost savings", "Brand reputation", "Regulatory compliance"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Truck,
      name: "Logistics & Supply Chain",
      description:
        "Supply chain security and logistics management certifications for transportation and logistics companies.",
      certCount: "25+",
      standards: ["ISO 28000", "ISO 39001", "TAPA", "C-TPAT"],
      benefits: ["Supply chain security", "Risk management", "Operational efficiency", "Customer trust"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cpu,
      name: "Technology & Innovation",
      description: "Information security and technology management certifications for IT companies and tech startups.",
      certCount: "40+",
      standards: ["ISO 27001", "ISO 20000", "SOC 2", "GDPR"],
      benefits: ["Data protection", "Customer trust", "Competitive advantage", "Risk mitigation"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: Building,
      name: "Construction & Infrastructure",
      description:
        "Safety and quality management certifications for construction companies and infrastructure projects.",
      certCount: "35+",
      standards: ["ISO 45001", "ISO 9001", "ISO 14001", "OHSAS 18001"],
      benefits: ["Worker safety", "Project quality", "Risk reduction", "Regulatory compliance"],
      image: "/placeholder.svg?height=200&width=300",
      color: "from-gray-500 to-slate-500",
    },
  ]

  const industryStats = [
    { icon: Users, value: "15,000+", label: "Organizations Certified", description: "Across all industries" },
    { icon: Award, value: "500+", label: "Industry Standards", description: "Comprehensive coverage" },
    { icon: Globe, value: "195+", label: "Countries Served", description: "Global industry reach" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", description: "Industry certification success" },
  ]

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedTech Solutions",
      challenge: "FDA compliance for medical device manufacturing",
      solution: "ISO 13485 certification with FDA alignment",
      result: "30% faster FDA approval process",
      timeline: "8 weeks",
    },
    {
      industry: "Manufacturing",
      company: "AutoParts Global",
      challenge: "Automotive industry quality requirements",
      solution: "IATF 16949 certification implementation",
      result: "25% reduction in defect rates",
      timeline: "12 weeks",
    },
    {
      industry: "Technology",
      company: "CloudSecure Inc.",
      challenge: "Customer data security concerns",
      solution: "ISO 27001 and SOC 2 certification",
      result: "40% increase in enterprise clients",
      timeline: "10 weeks",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">Industry Solutions</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sector-Specific Certification Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tailored certification programs designed for the unique challenges and requirements of your industry. From
              startups to Fortune 500 companies, we provide specialized expertise across all major sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Industries We Serve</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Comprehensive Industry Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industry experts understand the unique challenges, regulations, and standards specific to your sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`w-20 h-20 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center backdrop-blur-sm`}
                      >
                        <industry.icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-emerald-500 text-white">{industry.certCount} Programs</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-gray-800 mb-2">{industry.name}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Key Standards:</h4>
                        <div className="flex flex-wrap gap-1">
                          {industry.standards.map((standard) => (
                            <Badge key={standard} variant="outline" className="text-xs">
                              {standard}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {industry.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                        Explore Programs
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Industry Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how our industry-specific expertise drives certification success.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-emerald-100 text-emerald-700">{study.industry}</Badge>
                      <span className="text-sm text-gray-500">{study.timeline}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-800">{study.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Solution:</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">Result:</h4>
                        <p className="text-emerald-600 text-sm font-medium">{study.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Showcase */}
      <CertificationShowcase />

      {/* FAQ Section */}
      <FAQSection
        title="Industry Solutions - FAQ"
        subtitle="Answers to common questions about our industry-specific certification programs"
        faqs={[
          {
            question: "Which industries does CertifyPro Global serve?",
            answer:
              "We serve all major industries including healthcare, manufacturing, technology, construction, energy, logistics, environmental services, retail, education, and financial services with specialized certification programs.",
          },
          {
            question: "Do you have industry-specific certification experts?",
            answer:
              "Yes, our team includes certified experts with deep knowledge in specific industries, ensuring you receive relevant guidance and support tailored to your sector's unique requirements.",
          },
          {
            question: "How do you customize certification programs for different industries?",
            answer:
              "We adapt our certification approach based on industry regulations, standards, and best practices, providing sector-specific training materials, audit criteria, and implementation guidance.",
          },
          {
            question: "Can you help with industry-specific regulatory compliance?",
            answer:
              "Our industry experts understand regulatory requirements and can help ensure your certification program addresses all relevant compliance obligations for your sector.",
          },
          {
            question: "Do you offer industry benchmarking and best practices?",
            answer:
              "Yes, we provide industry benchmarking data and share best practices from leading organizations in your sector to help you achieve superior performance.",
          },
          {
            question: "How do you stay current with industry trends and changes?",
            answer:
              "Our experts actively participate in industry associations, standards committees, and professional networks to stay informed about emerging trends, regulatory changes, and evolving best practices.",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Industry Presence?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our industry experts and discover how sector-specific certification can drive your
              organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contactus">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Get Industry Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                  >
                    View All Programs
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
