"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, MessageSquare, Users2, Globe, Mail, CheckCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">CertifyPro Global</span>
                <p className="text-xs text-gray-400">Leading Certification Authority</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering organizations and professionals with market-aligned certifications for over a decade.
            </p>
            <div className="flex space-x-4">
              {[MessageSquare, Users2, Globe, Mail].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Certification Programs</h3>
            <ul className="space-y-3 text-gray-400">
              {["Management Systems", "Information Security", "Professional Development", "Industry Specific"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Industries</h3>
            <ul className="space-y-3 text-gray-400">
              {["Healthcare", "Manufacturing", "Technology", "Construction"].map((item) => (
                <li key={item}>
                  <Link
                    href="/industries"
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/contactus" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 CertifyPro Global. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>IAF Accredited</span>
              </span>
              <span className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>ISO 17021 Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
