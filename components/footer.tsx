"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/vinaydev19",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/porandlavinay",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vinaykumarporandla19@gmail.com",
    label: "Email",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo/Name */}
          <h3 className="text-2xl font-bold text-white mb-4">Vinay Kumar Porandla</h3>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            MERN Stack Developer passionate about creating innovative web solutions
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-slate-700 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
              by Vinay Kumar Porandla
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
