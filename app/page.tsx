"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Download, Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import ParticlesBackground from "@/components/ParticlesBackground"

import WavesBackground from "@/components/WavesBackground"




export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const downloadCV = () => {
    // In a real application, you would link to your actual CV file
    const link = document.createElement("a")
    link.href = "/CV_abderraouf.pdf" // Replace with your actual CV path
    link.download = "CV_abderraouf.pdf"
    link.click()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const projects = [
    {
      title: "Speakly - Language Learning App",
      description: "A modern and interactive platform designed to make learning new languages easier and more engaging. Built with Next.js, Tailwind CSS, and Shadcn/UI to deliver a clean UI, responsive design, and smooth user experience.",
      image: "/placeholder.png?height=200&width=300",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "https://speakly-liard.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description: "A professional portfolio website showcasing my projects, skills, and experience. Designed with a clean UI using Next.js, Tailwind CSS, and Shadcn/UI.",
      image: "/placeholder1.png?height=200&width=300",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "https://portfolio-eight-lac-32.vercel.app/",
    },
  
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Html", "Css", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "PHP", "Laravel"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Jest", "GitHub"] },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RPK17
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-blue-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition-colors">
                Contact
              </button>
              <Button
                onClick={downloadCV}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent"
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button onClick={toggleDarkMode} variant="ghost" size="sm">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button onClick={toggleDarkMode} variant="ghost" size="sm">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} variant="ghost" size="sm">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
                <Button
                  onClick={downloadCV}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 w-fit bg-transparent"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden">
      {/* خلفيتان متداخلتان: النجوم والموجة */}
      <ParticlesBackground />

      <WavesBackground />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/ps1.PNG?height=150&width=150"
                alt="Abderraouf Akhrouf"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-blue-600"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
  Hi, Im <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Abderraouf Akhrouf</span>
</h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection("projects")} size="lg" className="bg-blue-600 hover:bg-blue-700">
                View My Work
              </Button>
              <Button
                onClick={downloadCV}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
  id="about"
  className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors"
>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    
    {/* Image side with glow effect */}
    <div className="relative w-full lg:w-1/2 flex justify-center">
      <div className="relative z-10 rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl">
        <img
          src="/ps1.PNG"
          alt="Abderraouf Akhrouf"
          className="w-72 h-72 object-cover rounded-2xl"
        />
      </div>
      <div className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-30 rounded-full -z-10" />
    </div>

    {/* Content Side */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Get to Know Me <span className="text-blue-600">👋</span>
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
         <strong className="text-blue-600">Abderraouf Akhrouf</strong>I’m a 21-year-old Computer Science student in
 my third year of university, With degrees in Computer Science , and
 a strong passion for web development and user interface design. I
 combine my technical expertise and creative skills to deliver
 effective digital solutions and outstanding user experiences.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {[
          { label: "Experience", value: "2+ yrs", color: "text-blue-500" },
          { label: "Projects", value: "5+", color: "text-purple-500" },
          { label: "Clients", value: "5+", color: "text-green-500" },
          { label: "Dedication", value: "100%", color: "text-pink-500" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm text-center"
          >
            <h3 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Social Buttons */}
      <div className="flex gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          className="hover:scale-105 transition-transform"
        >
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </a>
      </div>
    </div>
  </div>
</section>




      <section
  id="projects"
  className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        My Projects 🧩
      </h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        A closer look at some of my favorite creations, combining innovation, code, and design.
      </p>
    </div>

    <div className="space-y-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={project.image || "/placeholder.png"}
              alt={project.title}
              width={600}
              height={350}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-600/10 dark:bg-blue-400/10 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I work with a variety of technologies to bring ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    {/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Lets Work Together</h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Im always interested in new opportunities and exciting projects. Lets connect!
      </p>
    </div>
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ready to start your next project? Send me an email and lets discuss how we can work together.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Email */}
              <a href="mailto:akhroufraouf40@gmail.com">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-5 h-5" />
                  akhroufraouf40@gmail.com
                </Button>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raouf-akhrouf-b37b3a2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Abderraouf Akhrouf. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
