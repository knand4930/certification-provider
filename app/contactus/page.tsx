"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Send,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  HeadphonesIcon,
  Video,
} from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CertificationShowcase } from "@/components/certification-showcase"
import { FAQSection } from "@/components/faq-section"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "+1 (555) 123-4567",
      description: "Available 24/7 for urgent certification needs",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "certifications@certifyprogloba.com",
      description: "Response within 2 hours during business days",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Global Offices",
      details: "New York • London • Singapore",
      description: "Local support in major business hubs",
      color: "from-emerald-600 to-teal-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8AM-8PM EST",
      description: "Extended hours for international clients",
      color: "from-teal-600 to-emerald-400",
    },
  ]

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat Support",
      description: "Get instant help from our certification experts",
      action: "Start Chat",
      availability: "Available Now",
      color: "bg-emerald-500",
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Schedule a personalized consultation session",
      action: "Book Meeting",
      availability: "Next Available: Today 3PM",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Training Demo",
      description: "See our training programs in action",
      action: "Schedule Demo",
      availability: "Multiple slots available",
      color: "bg-purple-500",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Get help with certification processes",
      action: "Get Support",
      availability: "24/7 Available",
      color: "bg-orange-500",
    },
  ]

  const inquiryTypes = [
    { value: "certification", label: "Certification Programs", icon: Award },
    { value: "training", label: "Training Courses", icon: BookOpen },
    { value: "consulting", label: "Consulting Services", icon: Briefcase },
    { value: "partnership", label: "Partnership Opportunities", icon: Users },
    { value: "other", label: "Other Inquiries", icon: MessageSquare },
  ]

  const industries = [
    "Healthcare & Life Sciences",
    "Manufacturing & Engineering",
    "Technology & Innovation",
    "Construction & Infrastructure",
    "Energy & Utilities",
    "Logistics & Supply Chain",
    "Environmental & Sustainability",
    "Retail & Consumer Goods",
    "Education & Training",
    "Financial Services",
    "Other",
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
              <Badge className="mb-6 bg-emerald-100 text-emerald-700">Contact Us</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Let's Discuss Your Certification Needs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to advance your organization or career? Our certification experts are here to guide you through
                the perfect program for your goals. Get personalized recommendations and expert support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg text-center">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <info.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg text-gray-800">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-emerald-600 mb-2">{info.details}</p>
                      <CardDescription className="text-gray-600">{info.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form & Support Options */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-emerald-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">Get Expert Consultation</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and our certification experts will contact you within 24 hours with
                      personalized recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-emerald-200 focus:border-emerald-400"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-emerald-200 focus:border-emerald-400"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                              Company/Organization
                            </label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="border-emerald-200 focus:border-emerald-400"
                              placeholder="CertifyPro Global"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="border-emerald-200 focus:border-emerald-400"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                              Industry
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:border-emerald-400 focus:outline-none"
                            >
                              <option value="">Select Industry</option>
                              {industries.map((industry) => (
                                <option key={industry} value={industry}>
                                  {industry}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                              Area of Interest *
                            </label>
                            <select
                              id="interest"
                              name="interest"
                              value={formData.interest}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:border-emerald-400 focus:outline-none"
                            >
                              <option value="">Select Interest</option>
                              {inquiryTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="border-emerald-200 focus:border-emerald-400"
                            placeholder="Tell us about your certification goals, timeline, and any specific requirements..."
                          />
                        </div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3"
                          >
                            {isSubmitting ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                            ) : (
                              <Send className="w-5 h-5 mr-2" />
                            )}
                            {isSubmitting ? "Sending..." : "Get Expert Consultation"}
                          </Button>
                        </motion.div>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600 mb-6">
                          Your inquiry has been received. Our certification expert will contact you within 24 hours with
                          personalized recommendations.
                        </p>
                        <Button
                          onClick={() => {
                            setIsSubmitted(false)
                            setFormData({
                              name: "",
                              email: "",
                              company: "",
                              phone: "",
                              industry: "",
                              interest: "",
                              message: "",
                            })
                          }}
                          variant="outline"
                          className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                        >
                          Send Another Inquiry
                        </Button>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Support Options */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Multiple Ways to Connect</h2>
                  <p className="text-gray-600 mb-8">
                    Choose the support option that works best for you. Our certification experts are available through
                    multiple channels to ensure you get the guidance you need.
                  </p>
                </div>

                {supportOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <option.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold text-gray-800">{option.title}</h3>
                              <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-600">
                                {option.availability}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                            <Button
                              variant="outline"
                              className="border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                            >
                              {option.action}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Quick Resources</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-emerald-600 justify-start"
                        >
                          <BookOpen className="mr-2 w-4 h-4" />
                          Program Guide
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-emerald-600 justify-start"
                        >
                          <Calendar className="mr-2 w-4 h-4" />
                          Training Schedule
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-emerald-600 justify-start"
                        >
                          <Award className="mr-2 w-4 h-4" />
                          Certification Paths
                        </Button>
                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-emerald-600 justify-start"
                        >
                          <Globe className="mr-2 w-4 h-4" />
                          Global Offices
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certification Showcase */}
        <CertificationShowcase />

        {/* FAQ Section */}
        <FAQSection
          title="Contact & Support - FAQ"
          subtitle="Quick answers to help you get in touch with the right expert"
          faqs={[
            {
              question: "What's the best way to contact CertifyPro Global?",
              answer:
                "For general inquiries, use our contact form or email us at certifications@certifyprogloba.com. For urgent matters, call +1 (555) 123-4567. We also offer live chat support during business hours.",
            },
            {
              question: "How quickly do you respond to inquiries?",
              answer:
                "We respond to all inquiries within 24 hours during business days. Urgent certification matters are typically addressed within 2-4 hours during business hours.",
            },
            {
              question: "Can I schedule a consultation to discuss my certification needs?",
              answer:
                "Yes! We offer free initial consultations to discuss your certification goals, timeline, and requirements. You can schedule a consultation through our contact form or by calling us directly.",
            },
            {
              question: "Do you provide support in multiple languages?",
              answer:
                "Yes, our team includes multilingual experts who can provide support in English, Spanish, French, German, Mandarin, and several other languages depending on your needs.",
            },
            {
              question: "What information should I include when contacting you?",
              answer:
                "Please include your organization name, industry, specific certification interests, timeline, and any particular challenges or requirements you're facing. This helps us provide more targeted assistance.",
            },
            {
              question: "Do you offer emergency or expedited certification services?",
              answer:
                "Yes, we can accommodate urgent certification needs with expedited services. Contact us directly to discuss your timeline and we'll work to find a solution that meets your requirements.",
            },
          ]}
        />
      </div>
      <Footer />
    </>
  )
}
