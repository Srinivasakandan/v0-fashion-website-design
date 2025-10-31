"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-white text-foreground min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 p-6 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="flex gap-8 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-8 py-4 shadow-lg">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-amber-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:text-amber-500 transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-amber-500 transition-colors duration-200"
            >
              Contacts
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
              Hello, myself <span className="text-amber-500">Srinivasakandan</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Hi, I'm Srinivasakandan, a Computer Science Engineering student passionate about building interactive and
              smart web solutions.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollToSection("work")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-base font-medium"
              >
                Projects
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 px-8 py-3 text-base font-medium bg-transparent"
              >
                LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src="/srinivasakandan-portrait.jpg" alt="Srinivasakandan" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
              About Me
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              I'm a first-year Computer Science and Engineering student at Loyola ICAM College of Engineering and
              Technology. I'm passionate about learning new technologies, exploring modern web frameworks, and creating
              impactful web applications.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 border-slate-200 h-full hover:shadow-lg hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
                    Fullstack Developer
                  </h3>
                  <p className="text-slate-600 leading-relaxed hover:text-orange-500 transition-colors duration-300">
                    I specialize in creating interactive, responsive, and user-friendly web solutions using React,
                    Node.js, Express, and SQLite.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-50 border-slate-200 h-full hover:shadow-lg hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-colors duration-300">
                    Blockchain Expert
                  </h3>
                  <p className="text-slate-600 leading-relaxed hover:text-orange-500 transition-colors duration-300">
                    I build modern, secure, and user-friendly web and blockchain applications using technologies like
                    React, Node.js, and Solidity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "UI Design",
              "UX Research",
              "Prototyping",
              "Design Systems",
              "CSS",
              "JavaScript",
              "React",
              "User Testing",
              "Accessibility",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center border border-slate-200 hover:border-orange-500 hover:text-orange-500 hover:shadow-md hover:bg-orange-50 transition-all duration-300 cursor-pointer"
              >
                <p className="font-medium text-slate-800">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
          >
            My Projects
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                title: "Smart Parking System",
                description:
                  "An intelligent parking management system that helps users find available parking spaces in real-time using IoT sensors and machine learning algorithms to optimize parking efficiency.",
                tags: ["IoT", "Machine Learning", "Real-time Tracking"],
              },
              {
                title: "Parky",
                description:
                  "A mobile application designed to streamline the parking experience, providing users with real-time parking availability, booking capabilities, and seamless payment integration.",
                tags: ["React Native", "Payment Integration", "Mobile App"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-50 border-slate-200 overflow-hidden hover:shadow-lg hover:border-orange-400 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-slate-900 hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-amber-500 flex-shrink-0 hover:text-orange-500 transition-colors duration-300" />
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6 hover:text-orange-600 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 leading-relaxed mb-12"
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <a
              href="mailto:hello@example.com"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-20 bg-slate-950 text-slate-400 text-center text-sm">
        <p>© 2025 Srinivasakandan. All rights reserved.</p>
      </footer>
    </div>
  )
}
