"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Globe, Users, Star, TrendingUp, Building } from "lucide-react"

export function CertificationShowcase() {
  const accreditations = [
    {
      icon: Shield,
      title: "IAF Accredited",
      description: "International Accreditation Forum recognized certification body",
      badge: "Primary Accreditation",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "ISO 17021 Certified",
      description: "Conformity assessment - Requirements for certification bodies",
      badge: "Quality Assurance",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Certificates accepted in 195+ countries worldwide",
      badge: "International",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "ANAB Approved",
      description: "ANSI National Accreditation Board approved programs",
      badge: "US Recognition",
      color: "from-orange-500 to-red-500",
    },
  ]

  const certificationStats = [
    { icon: Building, value: "15,000+", label: "Organizations Certified", description: "From startups to Fortune 500" },
    { icon: Award, value: "500+", label: "Certification Programs", description: "Across all major industries" },
    { icon: Users, value: "50,000+", label: "Professionals Trained", description: "Career advancement achieved" },
    { icon: Globe, value: "195+", label: "Countries Served", description: "Global certification reach" },
    { icon: Star, value: "98%", label: "Client Satisfaction", description: "Consistently high ratings" },
    { icon: TrendingUp, value: "25+", label: "Years Combined Experience", description: "Expert team average" },
  ]

  const industryPartners = [
    "Healthcare & Life Sciences",
    "Manufacturing & Engineering",
    "Technology & Innovation",
    "Construction & Infrastructure",
    "Energy & Utilities",
    "Financial Services",
    "Logistics & Supply Chain",
    "Environmental Services",
    "Education & Training",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-emerald-100 text-emerald-700">Trusted Certification Authority</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            CertifyPro Global: Your Trusted Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a market-aligned, industry-trusted certification provider, we empower professionals and businesses
            through verified, high-quality certifications recognized globally.
          </p>
        </motion.div>

        {/* Accreditations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accreditations.map((accreditation, index) => (
            <motion.div
              key={accreditation.title}
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
                    className={`w-16 h-16 bg-gradient-to-r ${accreditation.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <accreditation.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <Badge className="mb-2 bg-emerald-50 text-emerald-700">{accreditation.badge}</Badge>
                  <CardTitle className="text-lg text-gray-800">{accreditation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{accreditation.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Empowering Success Across All Business Sizes</h3>
                <p className="text-xl opacity-90">
                  From innovative startups to established SMEs and multinational corporations
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {certificationStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm font-medium mb-1">{stat.label}</div>
                    <div className="text-xs opacity-80">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Industry Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Serving All Major Industries</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industryPartners.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
                >
                  {industry}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
