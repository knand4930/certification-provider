"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Shield, Globe, Target, Eye, Heart, Zap, ArrowRight, Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"

export default function AboutPage() {
  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a vision to revolutionize certificate verification",
    },
    {
      year: "2016",
      title: "Blockchain Integration",
      description: "First to implement blockchain technology for certificate security",
    },
    { year: "2018", title: "Global Expansion", description: "Expanded services to 50+ countries worldwide" },
    {
      year: "2020",
      title: "AI-Powered Verification",
      description: "Introduced AI algorithms for instant verification",
    },
    { year: "2022", title: "100K+ Certificates", description: "Reached milestone of 100,000 verified certificates" },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as the leading certification verification platform",
    },
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every certificate is protected with military-grade encryption and blockchain technology.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get verification results in under 3 seconds with our advanced processing systems.",
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "We prioritize user experience and customer satisfaction in everything we do.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving organizations across 195+ countries with 24/7 support availability.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years in cybersecurity and digital transformation",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former blockchain architect at leading tech companies",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in quality management and process optimization",
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Cybersecurity specialist with government clearance",
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
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">About CertifyPro Global</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Pioneering Trust in Digital Certification
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over a decade, we've been at the forefront of certificate verification technology, building trust
              through innovation and securing digital credentials for organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed opacity-90">
                    To revolutionize certificate verification by providing the world's most secure, fast, and reliable
                    platform that builds trust between organizations and individuals through cutting-edge technology and
                    uncompromising security standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-800">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-gray-600">
                    To create a world where every digital certificate is instantly verifiable, completely secure, and
                    universally trusted. We envision a future where credential fraud is eliminated and professional
                    achievements are authentically recognized globally.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Our Journey</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">A Decade of Innovation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to the world's leading certification verification platform.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-emerald-600">{milestone.year}</CardTitle>
                          <CardDescription className="font-semibold text-gray-800">{milestone.title}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every solution we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl text-center">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-800">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Leadership Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals driving innovation in certificate verification technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
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
        title="About CertifyPro Global - FAQ"
        subtitle="Learn more about our company, mission, and certification expertise"
        faqs={[
          {
            question: "How long has CertifyPro Global been in business?",
            answer:
              "CertifyPro Global has been a leading certification authority for over 10 years, serving organizations worldwide with expert certification and training services.",
          },
          {
            question: "What makes CertifyPro Global different from other certification bodies?",
            answer:
              "Our unique combination of industry expertise, personalized approach, and comprehensive support from training to certification sets us apart. We serve organizations of all sizes with tailored solutions.",
          },
          {
            question: "Are your certifications internationally recognized?",
            answer:
              "Yes, all our certifications are IAF accredited and ISO 17021 certified, ensuring international recognition and acceptance worldwide.",
          },
          {
            question: "Do you provide training along with certification?",
            answer:
              "Absolutely! We offer comprehensive training programs led by industry experts, available in multiple formats including online, in-person, and hybrid sessions.",
          },
          {
            question: "What industries do you specialize in?",
            answer:
              "We serve all major industries including healthcare, manufacturing, technology, construction, energy, logistics, environmental services, retail, and education.",
          },
          {
            question: "How do you ensure the quality of your certification process?",
            answer:
              "Our certification process follows strict international standards, with regular audits, continuous monitoring, and a team of experienced auditors and technical experts.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Be part of the future of certificate verification. Experience the security and reliability that thousands
              of organizations trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                  >
                    Start Verifying
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
