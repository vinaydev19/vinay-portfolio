"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Fusion ERP",
    description:
      "A comprehensive ERP system with 10+ modules including Inventory, Sales, Finance, CRM, and Employee Management. Features dynamic frontend with React and Redux, RESTful APIs with JWT authentication, and integrated analytics.",
    image: "/fusionerp.png",
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Chart.js",
    ],
    features: [
      "10+ ERP modules (Inventory, Sales, Finance, CRM)",
      "JWT-based authentication with 100% session security",
      "Auto-generated PDF invoices",
      "Chart-based analytics and reporting",
      "File management with Cloudinary integration",
      "Responsive design with optimized performance",
    ],
    challenges: [
      "Implementing secure authentication across multiple modules",
      "Optimizing database queries for large datasets",
      "Creating dynamic PDF generation system",
    ],
    learned: [
      "Advanced React patterns and Redux state management",
      "RESTful API design and JWT implementation",
      "File upload and management with cloud services",
    ],
    github: "https://github.com/vinaydev19/fusion-ERP-Project",
    demo: "https://fusion-erp-project.vercel.app", // Add your actual demo link here
    category: "Full-Stack",
  },
  {
    title: "Twitter Clone",
    description:
      "A responsive, full-stack clone of Twitter allowing users to post, view, and delete tweets. Built with robust JWT authentication and RESTful backend APIs, handling 200+ mock user interactions seamlessly.",
    image: "/twitter.png",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "CSS3",
    ],
    features: [
      "Post, view, and delete tweets functionality",
      "Secure user authentication and registration",
      "Real-time tweet updates",
      "Responsive design for all devices",
      "User profile management",
      "Scalable tweet storage with MongoDB",
    ],
    challenges: [
      "Implementing real-time updates without WebSockets",
      "Optimizing tweet loading for better performance",
      "Handling user authentication securely",
    ],
    learned: [
      "Full-stack application architecture",
      "User authentication best practices",
      "Database optimization techniques",
    ],
    github: "https://github.com/vinaydev19/twitter-clone",
    demo: "https://twitter-clone-murex-five.vercel.app", // Add your actual demo link here
    category: "Full-Stack",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-4 left-4 bg-purple-500/90 text-white">
                  {project.category}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
                    <Code className="mr-2 h-4 w-4 text-purple-400" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 text-xs"
                      >
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
                    <BarChart3 className="mr-2 h-4 w-4 text-purple-400" />
                    Key Features
                  </h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-400 mr-2 text-xs">•</span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    size="sm"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent flex-1"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
