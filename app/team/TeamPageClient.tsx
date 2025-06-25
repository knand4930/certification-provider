"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { CertificationShowcase } from "@/components/certification-showcase"
import Link from "next/link"
import {
  Users,
  Award,
  Globe,
  Star,
  ArrowRight,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Shield,
  Target,
  Phone,
  MapPin,
  TrendingUp,
} from "lucide-react"

export default function TeamPageClient() {
  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Visionary leader with 20+ years in quality management and certification. Former ISO Technical Committee member and recognized industry thought leader.",
      credentials: ["PhD Quality Management", "ISO 9001 Lead Auditor", "Six Sigma Master Black Belt", "ASQ Fellow"],
      specialties: ["Strategic Leadership", "Quality Systems", "Organizational Excellence", "Digital Transformation"],
      experience: "20+ years",
      certifications: 15,
      achievements: ["Founded CertifyPro Global", "ISO TC 176 Member", "Quality Award Winner", "Industry Speaker"],
      contact: { email: "sarah.mitchell@certifyprogloba.com", linkedin: "sarah-mitchell-ceo" },
      languages: ["English", "Spanish", "French"],
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Technology innovator and former blockchain architect with expertise in digital certification platforms and cybersecurity solutions.",
      credentials: ["MS Computer Science", "CISSP", "ISO 27001 Lead Implementer", "CISM"],
      specialties: ["Information Security", "Digital Innovation", "Technology Strategy", "Blockchain Technology"],
      experience: "18+ years",
      certifications: 12,
      achievements: [
        "Digital Platform Architect",
        "Cybersecurity Innovation",
        "Patent Holder",
        "Tech Conference Speaker",
      ],
      contact: { email: "michael.chen@certifyprogloba.com", linkedin: "michael-chen-cto" },
      languages: ["English", "Mandarin", "Japanese"],
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Global Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Operations excellence expert with deep knowledge of international standards and global certification program management across diverse industries.",
      credentials: ["MBA Operations", "ISO 14001 Lead Auditor", "PMP", "Lean Six Sigma Black Belt"],
      specialties: ["Operations Excellence", "Environmental Management", "Process Optimization", "Global Standards"],
      experience: "16+ years",
      certifications: 18,
      achievements: [
        "Global Expansion Leader",
        "Process Innovation",
        "Sustainability Champion",
        "Operations Excellence",
      ],
      contact: { email: "emma.rodriguez@certifyprogloba.com", linkedin: "emma-rodriguez-ops" },
      languages: ["English", "Spanish", "Portuguese"],
    },
    {
      name: "David Kim",
      role: "Chief Security Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Cybersecurity specialist with government clearance and international consulting experience in risk management and security frameworks.",
      credentials: ["MS Cybersecurity", "CISM", "ISO 27001 Lead Auditor", "CRISC"],
      specialties: ["Cybersecurity", "Risk Management", "Compliance", "Security Architecture"],
      experience: "15+ years",
      certifications: 10,
      achievements: [
        "Security Framework Design",
        "Government Consulting",
        "Risk Assessment Expert",
        "Security Speaker",
      ],
      contact: { email: "david.kim@certifyprogloba.com", linkedin: "david-kim-cso" },
      languages: ["English", "Korean", "German"],
    },
  ]

  const experts = [
    {
      name: "Dr. Lisa Wang",
      role: "Healthcare Certification Director",
      specialties: ["ISO 13485", "Medical Devices", "Healthcare Quality", "FDA Compliance"],
      experience: "14+ years",
      certifications: 8,
      location: "Boston, MA",
      industries: ["Healthcare", "Medical Devices", "Pharmaceuticals"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Thompson",
      role: "Manufacturing Standards Expert",
      specialties: ["ISO 9001", "IATF 16949", "Lean Manufacturing", "Automotive Standards"],
      experience: "19+ years",
      certifications: 12,
      location: "Detroit, MI",
      industries: ["Automotive", "Manufacturing", "Aerospace"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rachel Green",
      role: "Environmental Compliance Lead",
      specialties: ["ISO 14001", "Carbon Management", "Sustainability", "Environmental Auditing"],
      experience: "13+ years",
      certifications: 9,
      location: "San Francisco, CA",
      industries: ["Environmental", "Energy", "Sustainability"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Alex Johnson",
      role: "Information Security Consultant",
      specialties: ["ISO 27001", "GDPR", "Cybersecurity", "Data Protection"],
      experience: "11+ years",
      certifications: 7,
      location: "New York, NY",
      industries: ["Technology", "Financial Services", "Healthcare"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maria Santos",
      role: "Training & Development Manager",
      specialties: ["Adult Learning", "Curriculum Design", "Professional Development", "E-Learning"],
      experience: "12+ years",
      certifications: 6,
      location: "Miami, FL",
      industries: ["Education", "Training", "Professional Development"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Taylor",
      role: "Construction Standards Specialist",
      specialties: ["ISO 45001", "Construction Safety", "Risk Assessment", "Project Management"],
      experience: "17+ years",
      certifications: 11,
      location: "Chicago, IL",
      industries: ["Construction", "Infrastructure", "Real Estate"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const teamStats = [
    { icon: Users, value: "50+", label: "Expert Team Members", description: "Certified professionals worldwide" },
    { icon: Award, value: "200+", label: "Combined Certifications", description: "Across all major standards" },
    { icon: Globe, value: "25+", label: "Countries Represented", description: "Global expertise and reach" },
    { icon: Star, value: "20+", label: "Average Years Experience", description: "Deep industry knowledge" },
    { icon: GraduationCap, value: "95%", label: "Advanced Degrees", description: "Masters and PhD level" },
    { icon: TrendingUp, value: "98%", label: "Client Success Rate", description: "Proven track record" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity & Trust",
      description:
        "We maintain the highest ethical standards and build lasting relationships based on trust and transparency in all our certification processes.",
    },
    {
      icon: Target,
      title: "Excellence & Innovation",
      description:
        "We strive for excellence in every certification and training program, continuously innovating to meet evolving industry needs.",
    },
    {
      icon: Users,
      title: "Collaboration & Partnership",
      description:
        "We work closely with clients as trusted partners, understanding their unique challenges and goals to deliver tailored solutions.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "We stay current with industry trends, emerging standards, and best practices through ongoing professional development and knowledge sharing.",
    },
  ]

  const globalOffices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Business Ave, Suite 500",
      phone: "+1 (555) 123-4567",
      email: "newyork@certifyprogloba.com",
      teamSize: "15 experts",
      specialties: ["Financial Services", "Technology", "Healthcare"],
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Certification Street, Floor 8",
      phone: "+44 20 1234 5678",
      email: "london@certifyprogloba.com",
      teamSize: "12 experts",
      specialties: ["Manufacturing", "Energy", "Environmental"],
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Quality Road, Level 12",
      phone: "+65 6123 4567",
      email: "singapore@certifyprogloba.com",
      teamSize: "18 experts",
      specialties: ["Supply Chain", "Construction", "Logistics"],
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
            <Badge className="mb-6 bg-emerald-100 text-emerald-700">Meet Our Expert Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              World-Class Certification Experts
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our world-class team of certified professionals, industry experts, and thought leaders brings decades of
              combined experience to help organizations achieve certification excellence and drive business success.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>200+ Combined Certifications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Global Expertise</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-emerald-600" />
                <span>20+ Years Average Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamStats.map((stat, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Visionary Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders who guide CertifyPro Global's mission to deliver world-class certification
              services and drive industry innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center">
                          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                              {leader.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                        <p className="text-emerald-600 font-medium mb-3">{leader.role}</p>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{leader.bio}</p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm mb-1">Credentials:</h4>
                            <div className="flex flex-wrap gap-1">
                              {leader.credentials.map((cred) => (
                                <Badge key={cred} variant="outline" className="text-xs">
                                  {cred}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm mb-1">Specialties:</h4>
                            <div className="flex flex-wrap gap-1">
                              {leader.specialties.map((specialty) => (
                                <Badge key={specialty} className="bg-emerald-100 text-emerald-700 text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm mb-1">Key Achievements:</h4>
                            <div className="flex flex-wrap gap-1">
                              {leader.achievements.map((achievement) => (
                                <Badge key={achievement} variant="outline" className="text-xs border-emerald-200">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Briefcase className="w-3 h-3" />
                                <span>{leader.experience}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Award className="w-3 h-3" />
                                <span>{leader.certifications} Certs</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Globe className="w-3 h-3" />
                                <span>{leader.languages.join(", ")}</span>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                                <Mail className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                                <Linkedin className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
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

      {/* Expert Team */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Expert Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Industry Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of certified experts brings deep industry knowledge and practical experience to every
              certification project, ensuring your success across all major industries and standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-white">
                          {expert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{expert.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3 text-sm">{expert.role}</p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{expert.location}</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-700 text-xs mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {expert.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-700 text-xs mb-2">Industries:</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {expert.industries.map((industry) => (
                            <Badge key={industry} className="bg-emerald-100 text-emerald-700 text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-3 h-3" />
                          <span>{expert.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3" />
                          <span>{expert.certifications} Certs</span>
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

      {/* Global Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-emerald-100 text-emerald-700">Global Presence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Local expertise with global reach. Our teams are strategically located to serve clients worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {globalOffices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{office.city}</h3>
                      <p className="text-emerald-600 font-medium">{office.country}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{office.teamSize}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-700 text-sm mb-2">Local Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty) => (
                          <Badge key={specialty} className="bg-emerald-100 text-emerald-700 text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Drives Our Team</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The core values that guide our team in delivering exceptional certification services and building lasting
              client relationships across all industries and business sizes.
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
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 text-white text-center">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
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
        title="Our Team - FAQ"
        subtitle="Learn more about our expert team and their qualifications"
        faqs={[
          {
            question: "What qualifications do CertifyPro Global's certification experts have?",
            answer:
              "All our experts are certified lead auditors and implementers with extensive industry experience. They hold relevant advanced degrees, maintain current certifications in their specialization areas, and participate in continuous professional development programs.",
          },
          {
            question: "How does CertifyPro Global ensure the quality and expertise of its team?",
            answer:
              "We maintain rigorous hiring standards requiring advanced certifications and proven experience. Our team members participate in ongoing training, industry conferences, and regular performance evaluations to ensure they stay current with evolving standards and best practices.",
          },
          {
            question: "Can I request a specific expert for my certification project?",
            answer:
              "Yes, we can accommodate requests for specific experts based on their availability and expertise match with your project requirements. We'll work to assign the best-suited team member for your industry and certification needs.",
          },
          {
            question: "Do your experts have international experience and multilingual capabilities?",
            answer:
              "Our team has extensive international experience, having worked with organizations across 25+ countries. Many of our experts are multilingual and understand global compliance requirements, cultural nuances, and regional standards variations.",
          },
          {
            question: "How often do your experts update their certifications and knowledge?",
            answer:
              "Our experts maintain current certifications through regular recertification processes, typically every 3 years. They also participate in continuous professional development activities, industry seminars, and standards committee work to stay at the forefront of their fields.",
          },
          {
            question: "Can your team provide both certification and training services?",
            answer:
              "Our experts are also experienced trainers who deliver comprehensive training programs alongside our certification services. This ensures your team is well-prepared and knowledgeable throughout the certification process and beyond.",
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Work with Our Experts?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Connect with our world-class team of certification experts and discover how CertifyPro Global can help
              your organization achieve excellence through our comprehensive certification programs and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contactus">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg"
                  >
                    <Users className="mr-2 w-5 h-5" />
                    Meet Our Team
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg"
                  >
                    View Our Services
                    <ArrowRight className="ml-2 w-5 h-5" />
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
