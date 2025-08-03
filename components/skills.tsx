"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Redux" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "TailwindCSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "RESTful APIs" }, { name: "JWT Authentication" }],
  },
  {
    title: "Database",
    skills: [{ name: "MongoDB" }, { name: "Mongoose" }],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Cloudinary" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-purple-400">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">{category.title}</h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center justify-center"
                  >
                    <span className="text-gray-300 text-sm bg-slate-700/50 px-3 py-2 rounded-full border border-slate-600 hover:border-purple-500/50 transition-colors duration-200 w-full text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
