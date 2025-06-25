"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Calendar,
  Monitor,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"

export default function TrainingPage() {
  const trainingPrograms = [
    {
      title: "ISO 9001:2015 Lead Auditor Training",
      description: "Become a certified lead auditor and master the principles of quality management systems.",
      duration: "5 days",
      format: "In-person / Online",
      level: "Advanced",
      price: "$2,499",
      features: [
        "Comprehensive curriculum",
        "Expert instruction",
        "Certification exam preparation",
        "Practical exercises",
        "Case studies",
        "Certificate of completion",
      ],
      nextDate: "April 15, 2024",
      rating: 4.9,
      students: 1250,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "ISO 27001:2022 Lead Implementer Training",
      description: "Implement and manage an information security management system based on ISO 27001 standards.",
      duration: "4 days",
      format: "In-person / Online",
      level: "Intermediate",
      price: "$2,299",
      features: [
        "Updated 2022 standards",
        "Implementation guidance",
        "Risk assessment techniques",
        "Documentation templates",
        "Real-world scenarios",
        "Expert mentorship",
      ],
      nextDate: "April 22, 2024",
      rating: 4.8,
      students: 980,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "ISO 14001:2015 Environmental Management",
      description: "Learn to implement environmental management systems that drive sustainability and compliance.",
      duration: "3 days",
      format: "In-person / Online",
      level: "Intermediate",
      price: "$1,899",
      features: [
        "Environmental compliance",
        "Sustainability strategies",
        "Legal requirements",
        "Performance monitoring",
        "Continuous improvement",
        "Industry best practices",
      ],
      nextDate: "May 6, 2024",
      rating: 4.7,
      students: 750,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "ISO 45001:2018 Occupational Health & Safety",
      description: "Master workplace safety management systems to protect employees and enhance performance.",
      duration: "4 days",
      format: "In-person / Online",
      level: "Intermediate",
      price: "$2,199",
      features: [
        "Safety management systems",
        "Risk assessment methods",
        "Legal compliance",
        "Incident investigation",
        "Performance measurement",
        "Worker participation",
      ],
      nextDate: "May 13, 2024",
      rating: 4.8,
      students: 650,
      color: "from-red-500 to-orange-500",
    },
  ]

  const trainingFormats = [
    {
      icon: Monitor,
      title: "Live Online Training",
      description: "Interactive virtual sessions with real-time instructor guidance",
      features: ["Real-time interaction", "Digital materials", "Recording access", "Global accessibility"],
      popular: true,
    },
    {
      icon: MapPin,
      title: "In-Person Training",
      description: "Traditional classroom experience with hands-on activities",
      features: ["Face-to-face learning", "Networking opportunities", "Hands-on exercises", "Immediate feedback"],
      popular: false,
    },
    {
      icon: Users,
      title: "Corporate Training",
      description: "Customized training programs delivered at your organization",
      features: ["Tailored content", "On-site delivery", "Team building", "Cost-effective"],
      popular: false,
    },
    {
      icon: BookOpen,
      title: "Self-Paced Learning",
      description: "Flexible online modules you can complete at your own pace",
      features: ["Flexible schedule", "Lifetime access", "Progress tracking", "Mobile compatible"],
      popular: false,
    },
  ]

  const trainingStats = [
    { icon: Users, value: "25,000+", label: "Professionals Trained", description: "Across all programs" },
    { icon: Award, value: "500+", label: "Training Programs", description: "Comprehensive curriculum" },
    { icon: Star, value: "4.8/5", label: "Average Rating", description: "Student satisfaction" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Certification exam pass rate" },
  ]

  const instructors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Quality Management Instructor",
      credentials: ["PhD Quality Management", "ISO 9001 Lead Auditor", "Six Sigma Master Black Belt"],
      experience: "20+ years",
      rating: 4.9,
      courses: 45,
    },
    {
      name: "Michael Chen",
      role: "Information Security Expert",
      credentials: ["MS Cybersecurity", "CISSP", "ISO 27001 Lead Auditor"],
      experience: "18+ years",
      rating: 4.8,
      courses: 32,
    },
    {
      name: "Emma Rodriguez",
      role: "Environmental Management Specialist",
      credentials: ["MBA Environmental", "ISO 14001 Lead Auditor", "LEED AP"],
      experience: "16+ years",
      rating: 4.9,
      courses: 28,
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
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">Expert-Led Training Programs</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Elevate Your Skills with World-Class Training
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive training programs designed to meet industry standards and accelerate your professional
              growth. Learn from certified experts with decades of real-world experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>25,000+ Professionals Trained</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>95% Exam Pass Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-emerald-600" />
                <span>4.8/5 Average Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingStats.map((stat, index) => (
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

      {/* Training Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Popular Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Featured Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading training programs designed by experts to accelerate your certification journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">{program.price}</div>
                        <div className="text-sm text-gray-500">per person</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-800 mb-2">{program.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {program.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Monitor className="w-3 h-3 mr-1" />
                        {program.format}
                      </Badge>
                      <Badge className="bg-emerald-100 text-emerald-700 text-xs">{program.level}</Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{program.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{program.students} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{program.nextDate}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">What You'll Learn:</h4>
                        <ul className="space-y-1">
                          {program.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                        Enroll Now
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

      {/* Training Formats */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Training Formats</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Choose Your Learning Style</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible training options designed to accommodate different learning preferences and schedules.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                {format.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-emerald-500 text-white px-3 py-1">Most Popular</Badge>
                  </div>
                )}
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg text-center">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <format.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-lg text-gray-800">{format.title}</CardTitle>
                    <CardDescription className="text-gray-600">{format.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {format.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Instructors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Expert Instructors</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Learn from Industry Leaders</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our certified instructors bring decades of real-world experience and deep expertise to every training
              session.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">
                          {instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{instructor.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3 text-sm">{instructor.role}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-700 text-xs mb-2">Credentials:</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {instructor.credentials.map((credential) => (
                            <Badge key={credential} variant="outline" className="text-xs">
                              {credential}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{instructor.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span>{instructor.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-3 h-3" />
                          <span>{instructor.courses} courses</span>
                        </div>
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
        title="Training Programs - FAQ"
        subtitle="Everything you need to know about our expert-led training programs"
        faqs={[
          {
            question: "What training formats do you offer?",
            answer:
              "We offer multiple training formats including in-person classroom sessions, live online training, hybrid programs, and self-paced e-learning modules to accommodate different learning preferences and schedules.",
          },
          {
            question: "Are your trainers certified professionals?",
            answer:
              "Yes, all our trainers are certified lead auditors and implementers with extensive industry experience. They maintain current certifications and participate in ongoing professional development.",
          },
          {
            question: "Do you provide training materials and resources?",
            answer:
              "Yes, all training programs include comprehensive materials, templates, checklists, and resources that participants can use in their organizations after completing the training.",
          },
          {
            question: "Can you customize training programs for our organization?",
            answer:
              "We offer customized training programs tailored to your organization's specific needs, industry requirements, and existing knowledge levels.",
          },
          {
            question: "Do you offer certification upon training completion?",
            answer:
              "Yes, participants receive certificates of completion for all training programs. Some programs also prepare participants for external certification exams.",
          },
          {
            question: "What is your training success rate?",
            answer:
              "We maintain a 95%+ participant satisfaction rate and high success rates for certification exam preparation. Our practical, hands-on approach ensures effective learning outcomes.",
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers with CertifyPro Global's expert-led
              training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contactus">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                    Enroll Today
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
