"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Shield,
  Search,
  Lock,
  Database,
  Smartphone,
  Cloud,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart,
  Bell,
  Download,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Search,
      title: "Certificate Verification",
      description: "Instantly verify any certificate with our advanced search and validation system.",
      features: ["Real-time verification", "Blockchain security", "Global database access", "Instant results"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Database,
      title: "Certificate Management",
      description: "Comprehensive platform for managing and organizing all your certificates.",
      features: ["Centralized storage", "Easy organization", "Bulk operations", "Export capabilities"],
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance to international standards.",
      features: ["ISO 27001 certified", "GDPR compliant", "End-to-end encryption", "Audit trails"],
      color: "from-emerald-600 to-teal-400",
    },
    {
      icon: Cloud,
      title: "API Integration",
      description: "Seamlessly integrate our verification services into your existing systems.",
      features: ["RESTful API", "Real-time webhooks", "SDKs available", "24/7 support"],
      color: "from-teal-600 to-emerald-400",
    },
  ]

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Verification",
      description: "Verify certificates on-the-go with our mobile app",
      price: "Free",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reporting tools",
      price: "From $29/month",
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get notified of certificate status changes",
      price: "From $19/month",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Collaborate with team members and manage permissions",
      price: "From $49/month",
    },
    {
      icon: Download,
      title: "Bulk Export",
      description: "Export verification results in multiple formats",
      price: "From $39/month",
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Enhanced security features for enterprise clients",
      price: "Custom pricing",
    },
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small teams",
      features: [
        "100 verifications/month",
        "Basic search functionality",
        "Email support",
        "Mobile app access",
        "Standard security",
      ],
      color: "border-gray-200",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "5,000 verifications/month",
        "Advanced search & filters",
        "Priority support",
        "API access",
        "Analytics dashboard",
        "Team collaboration",
      ],
      color: "border-emerald-300 ring-2 ring-emerald-200",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited verifications",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Advanced security",
        "Custom reporting",
        "White-label options",
      ],
      color: "border-teal-300",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-6 bg-emerald-100 text-emerald-700">Our Services</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Comprehensive Certificate Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From instant verification to enterprise-grade management, we provide all the tools you need for secure
                and reliable certificate handling.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Core Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Everything You Need</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful tools and services designed to streamline your certificate verification process.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-2xl text-gray-800 mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div className="mt-6" whileHover={{ scale: 1.02 }}>
                        <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Additional Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Enhanced Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take your certificate management to the next level with our premium add-on services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-2xl font-bold text-emerald-600 mb-4">{service.price}</div>
                      <Button
                        variant="outline"
                        className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">Pricing Plans</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Choose Your Plan</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible pricing options to suit organizations of all sizes, from startups to enterprises.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-emerald-500 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  <Card
                    className={`h-full bg-white/80 backdrop-blur-sm ${plan.color} hover:shadow-xl transition-all duration-300`}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-gray-800 mb-2">{plan.name}</CardTitle>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                        {plan.period && <span className="text-gray-600">{plan.period}</span>}
                      </div>
                      <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button className={`w-full ${plan.buttonColor} text-white`}>
                          {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
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
          title="Services & Programs - FAQ"
          subtitle="Common questions about our certification programs and services"
          faqs={[
            {
              question: "What certification programs does CertifyPro Global offer?",
              answer:
                "We offer comprehensive certification programs including ISO management systems (9001, 14001, 45001, 27001), industry-specific certifications, professional development programs, and specialized training courses.",
            },
            {
              question: "How long does the certification process typically take?",
              answer:
                "Certification timelines vary by program and organization size, typically ranging from 4-12 weeks. We provide detailed project timelines during the initial consultation.",
            },
            {
              question: "Do you offer both certification and training services?",
              answer:
                "Yes, we provide end-to-end services including pre-certification training, gap analysis, implementation support, certification audits, and ongoing maintenance support.",
            },
            {
              question: "Can small businesses afford your certification programs?",
              answer:
                "We offer flexible pricing options and tailored programs for organizations of all sizes, from startups to multinational corporations. Contact us for a customized quote.",
            },
            {
              question: "What ongoing support do you provide after certification?",
              answer:
                "We provide continuous support including surveillance audits, recertification services, updates on standard changes, and ongoing consultation to maintain your certification status.",
            },
            {
              question: "Are your certifications accepted globally?",
              answer:
                "Yes, our IAF-accredited certifications are recognized and accepted worldwide, enabling global market access and international business opportunities.",
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of organizations who trust CertifyPro Global for their certificate verification needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contactus">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
