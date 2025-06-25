"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CertificationShowcase } from "@/components/certification-showcase"
import { FAQSection } from "@/components/faq-section"
import {
  Search,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Award,
  Clock,
  Zap,
  Phone,
  Mail,
} from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Military-grade encryption with blockchain technology for ultimate certificate security",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get verification results in under 3 seconds with our advanced processing systems",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Certificates accepted worldwide with IAF accreditation and international standards",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 support from certified professionals with decades of industry experience",
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { icon: Users, value: "15,000+", label: "Organizations Certified", description: "From startups to Fortune 500" },
    { icon: Award, value: "500+", label: "Certification Programs", description: "Across all major industries" },
    { icon: Globe, value: "195+", label: "Countries Served", description: "Global certification reach" },
    { icon: Star, value: "98%", label: "Client Satisfaction", description: "Consistently high ratings" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Quality Director",
      company: "TechCorp Industries",
      content:
        "CertifyPro Global transformed our quality management system. Their expert guidance made ISO 9001 certification seamless and valuable for our business growth.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "CISO",
      company: "SecureData Solutions",
      content:
        "Outstanding expertise in information security. The ISO 27001 implementation was thorough, professional, and delivered exactly what we needed for compliance.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emma Rodriguez",
      role: "Sustainability Manager",
      company: "GreenTech Innovations",
      content:
        "Their environmental management expertise helped us achieve ISO 14001 certification while actually reducing costs and improving our environmental impact.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const certificationPrograms = [
    {
      title: "Quality Management",
      standard: "ISO 9001:2015",
      description: "Build robust quality systems that drive customer satisfaction and operational excellence",
      benefits: ["Improved processes", "Customer satisfaction", "Cost reduction", "Market access"],
      duration: "4-8 weeks",
      popularity: "Most Popular",
    },
    {
      title: "Information Security",
      standard: "ISO 27001:2022",
      description: "Protect your information assets with comprehensive security management systems",
      benefits: ["Data protection", "Risk management", "Compliance", "Customer trust"],
      duration: "6-10 weeks",
      popularity: "High Demand",
    },
    {
      title: "Environmental Management",
      standard: "ISO 14001:2015",
      description: "Demonstrate environmental responsibility and achieve sustainability goals",
      benefits: ["Environmental impact", "Cost savings", "Compliance", "Brand reputation"],
      duration: "5-9 weeks",
      popularity: "Growing",
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
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">
              CertifyPro Global - Leading Certification Authority
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Empowering Excellence Through Verified Certifications
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Market-aligned, industry-trusted certification provider empowering professionals and businesses through
              verified, high-quality certifications recognized globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg"
                >
                  Start Your Certification Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg"
                  >
                    Explore Programs
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>IAF Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>ISO 17021 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>195+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>15,000+ Organizations</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-16 h-16 bg-teal-200 rounded-full opacity-20"
        />
      </section>

      {/* Certificate Search Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Instant Verification</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Verify Certificates Instantly</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Search and verify any certificate in our global database with advanced security and real-time results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter certificate ID, name, or organization..."
                      className="h-12 text-lg border-emerald-200 focus:border-emerald-400"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                  <span>Blockchain-secured verification in under 3 seconds</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Why Choose CertifyPro Global</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From innovative startups to established SMEs and multinational corporations, we provide the expertise and
              support needed for certification success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl text-center">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Empowering Success Worldwide</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Trusted by organizations of all sizes across every major industry and geographic region.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-medium mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Popular Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Leading Certification Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive certification programs designed to meet the diverse needs of modern organizations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {certificationPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-emerald-100 text-emerald-700">{program.popularity}</Badge>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{program.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-gray-800 mb-2">{program.title}</CardTitle>
                    <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
                      {program.standard}
                    </Badge>
                    <CardDescription className="text-gray-600 leading-relaxed">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {program.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                        Learn More
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Client Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from organizations that have achieved certification success with CertifyPro Global.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-emerald-600">{testimonial.company}</p>
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
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our certification services and programs"
        faqs={[
          {
            question: "What makes CertifyPro Global different from other certification bodies?",
            answer:
              "CertifyPro Global combines deep industry expertise with personalized service, offering comprehensive support from training through certification. Our IAF-accredited programs are recognized globally, and we serve organizations of all sizes with tailored solutions.",
          },
          {
            question: "How long does the certification process typically take?",
            answer:
              "Certification timelines vary by program and organization readiness, typically ranging from 4-12 weeks. We provide detailed project timelines during initial consultation and work closely with you to meet your specific deadlines.",
          },
          {
            question: "Do you provide training along with certification services?",
            answer:
              "Yes! We offer comprehensive training programs led by certified experts, available in multiple formats including online, in-person, and hybrid sessions. Training is often included as part of our certification packages.",
          },
          {
            question: "Are your certifications recognized internationally?",
            answer:
              "Absolutely. All CertifyPro Global certifications are IAF-accredited and ISO 17021 certified, ensuring international recognition and acceptance in 195+ countries worldwide.",
          },
          {
            question: "What ongoing support do you provide after certification?",
            answer:
              "We provide continuous support including surveillance audits, recertification services, updates on standard changes, ongoing consultation, and access to our expert team for any questions or challenges.",
          },
          {
            question: "Can small businesses and startups afford your certification programs?",
            answer:
              "Yes! We offer flexible pricing options and scalable programs designed for organizations of all sizes, from startups to multinational corporations. Contact us for a customized quote based on your specific needs.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Certified?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of organizations worldwide who trust CertifyPro Global for their certification needs. Start
              your journey to excellence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contactus">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Get Expert Consultation
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
                    Explore Programs
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>certifications@certifyprogloba.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
