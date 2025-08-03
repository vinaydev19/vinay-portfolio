"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React.js, Redux, HTML5, CSS3, JavaScript (ES6+), TailwindCSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express.js, RESTful APIs, JWT Authentication",
  },
  {
    icon: Globe,
    title: "Database Management",
    description: "MongoDB, Mongoose, Data Modeling, Query Optimization",
  },
  {
    icon: Zap,
    title: "Tools & Deployment",
    description: "Git, GitHub, Postman, Cloudinary, Vercel, Netlify",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Developer Journey</h3>

            <p className="text-gray-300 leading-relaxed">
              I'm a passionate MERN Stack Developer with experience building and deploying scalable full-stack web
              applications. Currently pursuing my B.Sc. in Information Technology from the University of Mumbai with a
              CGPA of 8.0.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My expertise lies in designing RESTful APIs, implementing JWT authentication, and building responsive UIs
              with Redux. I'm committed to writing clean, maintainable code and staying updated with the latest web
              technologies.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Based in Bhiwandi, Maharashtra, I enjoy solving complex problems and creating user-friendly applications
              that make a difference. When I'm not coding, I love exploring new technologies and contributing to
              open-source projects.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Problem Solving", "Team Collaboration", "Continuous Learning", "Open Source"].map((trait) => (
                <span key={trait} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-purple-500 transition-colors duration-300"
              >
                <item.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
