"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Phone, Mail, ArrowRight, Menu, X } from "lucide-react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-emerald-100 shadow-sm"
    >
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-emerald-50">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>certifications@iafcertsearch.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
              Apply Online
            </Button>
            <Link href="/training">
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Training Programs
              </Button>
            </Link>
            <Link href="/industries">
              <Button size="sm" variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
                Industry Solutions
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  CertifyPro Global
                </span>
                <p className="text-xs text-gray-500">Leading Certification Authority</p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Industries", href: "/industries" },
              { name: "Training", href: "/training" },
              { name: "Blog", href: "/blog" },
              { name: "Team", href: "/team" },
              { name: "Contact Us", href: "/contactus" },
            ].map((item, index) => (
              <motion.div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
                <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:block"
            >
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6">
                Get Certified
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-emerald-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-emerald-100 py-4"
          >
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Industries", href: "/industries" },
                { name: "Training", href: "/training" },
                { name: "Blog", href: "/blog" },
                { name: "Team", href: "/team" },
                { name: "Contact Us", href: "/contactus" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 font-medium py-2 px-4 rounded-lg hover:bg-emerald-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-emerald-100">
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  Get Certified
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
