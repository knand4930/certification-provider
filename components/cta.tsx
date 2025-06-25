"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"

interface CTAProps {
  companyName?: string
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export function CTA({
  companyName = "CertifyPro Global",
  title = "Ready to Get Certified?",
  subtitle = "Join thousands of organizations who trust CertifyPro Global for their certification needs.",
  primaryButtonText = "Get Expert Consultation",
  primaryButtonLink = "/contactus",
  secondaryButtonText = "Explore Programs",
  secondaryButtonLink = "/services",
}: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={primaryButtonLink}>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  {primaryButtonText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={secondaryButtonLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg"
                >
                  {secondaryButtonText}
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
  )
}

export default CTA
