"use client"

import { motion } from "framer-motion"
import { Download, FileText, GraduationCap, Award, MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mansi Bharat Gada Degree College of Commerce, University of Mumbai",
    period: "July 2022 - April 2025",
    grade: "CGPA: 8.0",
    specialization: "Information Technology",
  },
  {
    degree: "HSC 12th",
    institution: "BNN College, Maharashtra State Board",
    period: "July 2020 - March 2022",
    grade: "57.83%",
  },
  {
    degree: "SSC 10th",
    institution: "PTMV School Maharashtra State Board",
    period: "July 2019 - March 2020",
    grade: "54.20%",
  },
]

const certifications = [
  {
    title: "Complete Web Development Bootcamp",
    provider: "Udemy",
    instructor: "Hitesh Choudhary",
    description: "Comprehensive full-stack web development course covering MERN stack",
  },
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "vinaykumarporandla19@gmail.com" },
  { icon: Phone, label: "Mobile", value: "9579353237" },
  { icon: MapPin, label: "Location", value: "Bhiwandi, Maharashtra" },
]

export default function Resume() {
  const handleDownload = () => {
    // Open your Google Drive resume link in a new tab
    window.open("https://drive.google.com/file/d/1768PslzIaaD5yMHP1XIv_nRYBptQBx_f/view?usp=sharing", "_blank")
  }

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Download my complete resume or view my educational background and certifications below
          </p>

          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume PDF
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <FileText className="mr-2 h-5 w-5 text-purple-400" />
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="h-5 w-5 text-purple-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-purple-400" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-white font-medium">{edu.degree}</h4>
                  <p className="text-purple-300 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                  <p className="text-gray-300 text-sm font-medium">{edu.grade}</p>
                  {edu.specialization && <p className="text-gray-400 text-sm">Specialization: {edu.specialization}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Award className="mr-2 h-5 w-5 text-purple-400" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-purple-500 pl-4">
                  <h4 className="text-white font-medium">{cert.title}</h4>
                  <p className="text-purple-300 text-sm">{cert.provider}</p>
                  <p className="text-gray-400 text-sm">Instructor: {cert.instructor}</p>
                  <p className="text-gray-300 text-sm mt-2">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-800/50 p-8 rounded-lg border border-slate-700"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Profile Summary</h3>
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            MERN Stack Developer with experience building and deploying scalable full-stack web applications using
            React.js, Node.js, Express.js, and MongoDB. Skilled in designing RESTful APIs, implementing JWT
            authentication, and building responsive UIs with Redux. Committed to writing clean, maintainable code.
            Graduated with a B.Sc. in Information Technology (CGPA: 8.0) from the University of Mumbai.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
