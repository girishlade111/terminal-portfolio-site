"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Globe, Code2 } from "lucide-react"

interface Command {
  input: string
  output: string[]
  timestamp: Date
}

export default function TerminalPortfolio() {
  const [currentPath, setCurrentPath] = useState("~")
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const developer = {
    name: "Girish Lade",
    title: "Full Stack Developer",
    email: "admin@ladestack.in",
    phone: "+91-9876543210",
    address: "Maharashtra, India",
    website: "https://ladestack.in",
    github: "https://github.com/girishlade111",
    linkedin: "https://linkedin.com/in/girish-lade-075bba201",
    instagram: "https://www.instagram.com/girish_lade_/",
    codepen: "https://codepen.io/Girish-Lade-the-looper",
  }

  const socialLinks = [
    { name: "GitHub", url: developer.github, icon: Github, color: "text-gray-400" },
    { name: "LinkedIn", url: developer.linkedin, icon: Linkedin, color: "text-blue-400" },
    { name: "Instagram", url: developer.instagram, icon: Code2, color: "text-pink-400" },
    { name: "CodePen", url: developer.codepen, icon: Code2, color: "text-white" },
    { name: "Website", url: developer.website, icon: Globe, color: "text-green-400" },
    { name: "Email", url: `mailto:${developer.email}`, icon: Mail, color: "text-yellow-400" },
  ]

  const experience = [
    {
      title: "Mern Stack Developer - Front & Back End Development",
      company: "kaj Consultancy",
      period: "September 2023 - Present",
      description: [
        "Spearheading front-end web development, meticulously crafting visually stunning and highly interactive user interfaces",
        "Specializing in translating design concepts into seamless, responsive web applications",
        "Utilizing cutting-edge technologies for optimal user interface development",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "Matrix Tech Software Solutions",
      period: "December 2022 - December 2023",
      description: [
        "Developed and maintained full-stack web applications using the MERN stack",
        "Collaborated with cross-functional teams to gather project requirements",
        "Implemented responsive front-end interfaces with React.js",
        "Integrated RESTful APIs for seamless communication between components",
      ],
    },
    {
      title: "React Native Developer",
      company: "Matrix Tech Software Solutions",
      period: "December 2022 - December 2023",
      description: [
        "Crafted captivating cross-platform mobile applications",
        "Merged native power with unified codebase for enchanting user experiences",
        "Transformed project visions into technical solutions exceeding expectations",
      ],
    },
    {
      title: "Assistant Teacher - MERN Stack Development",
      company: "Jawan Pakistan",
      period: "December 2022 - August 2023",
      description: [
        "Conducted MERN Stack development training sessions for students",
        "Provided guidance on MongoDB, Express.js, React.js, and Node.js",
        "Supported students in problem-solving, debugging, and troubleshooting",
        "Fostered collaborative learning environment",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor's Degree In Progress",
      field: "Computer Science",
      institution: "SMIU",
      period: "2021 - Present",
    },
    {
      degree: "MERN Stack Development",
      field: "Full Stack Web Development",
      institution: "Jawan Pakistan",
      period: "2022",
    },
  ]

  const skills = {
    frontend: ["HTML/CSS", "JavaScript", "React JS", "Angular", "Next.js", "React Native", "Redux"],
    backend: ["Node.js", "Nest.js", "Express.js", "MongoDB", "SQL Lite", "Firebase"],
    styling: ["MUI", "Bootstrap", "Tailwind CSS"],
    cloud: ["AWS"],
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    databases: ["MongoDB", "SQLite", "Firebase"],
    tools: ["Git", "VS Code", "Postman", "npm", "yarn"],
  }

  const languages = {
    urdu: {
      speaking: "Native",
      listening: "Native",
      writing: "Native",
    },
    english: {
      speaking: "Fluent",
      listening: "Fluent",
      writing: "Fluent",
    },
  }

  const hobbies = ["Reading", "Searching", "Martial Arts", "Designing"]

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      status: "Production",
      type: "Web Application",
    },
    {
      name: "Task Management App",
      description: "Cross-platform mobile app for team collaboration and project tracking",
      tech: ["React Native", "Firebase", "Redux", "Node.js"],
      status: "Production",
      type: "Mobile Application",
    },
    {
      name: "Real Estate Portal",
      description: "Property listing platform with advanced search and filtering",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "AWS S3"],
      status: "Development",
      type: "Web Application",
    },
    {
      name: "Learning Management System",
      description: "Educational platform for online courses and student management",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      status: "Production",
      type: "Web Application",
    },
  ]

  const welcomeMessage = [
    `Welcome to ${developer.name}'s Portfolio Terminal`,
    `${developer.title} | ${developer.email}`,
    `Type 'help' to see available commands`,
    "",
  ]

  useEffect(() => {
    setHistory([
      {
        input: "",
        output: welcomeMessage,
        timestamp: new Date(),
      },
    ])
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Function to add command output instantly (no typing animation)
  const addInstantOutput = (cmd: string, output: string[]) => {
    const newCommand: Command = {
      input: cmd,
      output: output,
      timestamp: new Date(),
    }
    setHistory((prev) => [...prev, newCommand])
  }

  const typeText = async (text: string[], delay = 30) => {
    setIsTyping(true)
    const result: string[] = []

    for (const line of text) {
      let currentLine = ""
      for (const char of line) {
        currentLine += char
        result[result.length] = currentLine
        setHistory((prev) => [...prev.slice(0, -1), { ...prev[prev.length - 1], output: [...result] }])
        await new Promise((resolve) => setTimeout(resolve, delay))
      }
      result[result.length - 1] = line
      result.push("")
    }

    setIsTyping(false)
  }

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    const args = trimmedCmd.split(" ")
    const command = args[0]

    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd.trim()])
    }

    let output: string[] = []

    switch (command) {
      case "help":
        output = [
          "Available commands:",
          "",
          "  help          - Show this help message",
          "  clear         - Clear the terminal",
          "  ls            - List directory contents",
          "  cd <dir>      - Change directory",
          "  cat <file>    - Display file contents",
          "  pwd           - Show current directory",
          "  whoami        - Display user information",
          "  open <url>    - Open URL in new tab",
          "  history       - Show command history",
          "",
          "Direct access commands:",
          "  resume        - Display complete resume",
          "  about         - Show about information",
          "  experience    - Display work experience",
          "  education     - Show education background",
          "  skills        - Display technical skills",
          "  projects      - Show portfolio projects",
          "  contact       - Display contact information",
          "  languages     - Show language proficiency",
          "  hobbies       - Display hobbies and interests",
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "clear":
        setHistory([])
        return

      case "about":
        output = [
          `Hi, I'm ${developer.name}!`,
          "",
          "As a MERN Stack and React Native developer, my expertise lies in",
          "crafting versatile applications that seamlessly bridge the gap",
          "between web and mobile platforms.",
          "",
          "By harnessing the power of MongoDB, Express.js, React, and Node.js,",
          "I create dynamic web applications with intuitive user interfaces",
          "and robust backend functionalities.",
          "",
          "My proficiency in React Native enables me to extend these capabilities",
          "to mobile development, creating cross-platform apps with smooth",
          "performance and outstanding user experiences.",
          "",
          "Professional Summary:",
          "✨ MERN Stack Developer with 2+ years of experience",
          "📱 React Native specialist for cross-platform mobile apps",
          "🎓 Teaching experience in MERN Stack development",
          "🚀 Passionate about continuous learning and innovation",
          "🤝 Strong collaboration and problem-solving skills",
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "experience":
        output = [
          "PROFESSIONAL EXPERIENCE:",
          "=".repeat(50),
          "",
          ...experience.flatMap((exp, index) => [
            `${index + 1}. ${exp.title}`,
            `   Company: ${exp.company}`,
            `   Period: ${exp.period}`,
            "",
            "   Key Responsibilities:",
            ...exp.description.map((desc) => `   • ${desc}`),
            "",
          ]),
        ]
        addInstantOutput(cmd, output)
        return

      case "education":
        output = [
          "EDUCATION:",
          "=".repeat(30),
          "",
          ...education.flatMap((edu) => [
            `🎓 ${edu.degree}`,
            `   Field: ${edu.field}`,
            `   Institution: ${edu.institution}`,
            `   Period: ${edu.period}`,
            "",
          ]),
          "CERTIFICATIONS & TRAINING:",
          "",
          "🏆 MERN Stack Development - Jawan Pakistan (2022)",
          "📚 Full Stack Web Development Bootcamp",
          "🎯 React Native Mobile Development",
          "💻 Advanced JavaScript & ES6+",
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "skills":
        output = [
          "TECHNICAL SKILLS:",
          "=".repeat(40),
          "",
          "Frontend Technologies:",
          ...skills.frontend.map((skill) => `• ${skill}`),
          "",
          "Backend Technologies:",
          ...skills.backend.map((skill) => `• ${skill}`),
          "",
          "Styling Frameworks:",
          ...skills.styling.map((skill) => `• ${skill}`),
          "",
          "Cloud & DevOps:",
          ...skills.cloud.map((skill) => `• ${skill}`),
          "",
          "Development Tools:",
          ...skills.tools.map((tool) => `• ${tool}`),
          "",
          "Programming Languages:",
          ...skills.languages.map((lang) => `• ${lang}`),
          "",
          "Databases:",
          ...skills.databases.map((db) => `• ${db}`),
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "projects":
        output = [
          "PORTFOLIO PROJECTS:",
          "=".repeat(40),
          "",
          ...projects.flatMap((proj, index) => [
            `${index + 1}. ${proj.name}`,
            `   Type: ${proj.type}`,
            `   Status: ${proj.status}`,
            `   Description: ${proj.description}`,
            "",
            "   Technologies Used:",
            ...proj.tech.map((tech) => `   • ${tech}`),
            "",
          ]),
        ]
        addInstantOutput(cmd, output)
        return

      case "contact":
        output = [
          "CONTACT INFORMATION:",
          "=".repeat(40),
          "",
          `📧 Email: ${developer.email}`,
          `📱 Phone: ${developer.phone}`,
          `🌐 Website: ${developer.website}`,
          "",
          "Social & Professional Links:",
          `🌐 Website: ${developer.website}`,
          `🐙 GitHub: ${developer.github}`,
          `💼 LinkedIn: ${developer.linkedin}`,
          `📸 Instagram: ${developer.instagram}`,
          `✏️ CodePen: ${developer.codepen}`,
          "",
          "Feel free to connect and collaborate!",
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "languages":
        output = [
          "LANGUAGE PROFICIENCY:",
          "=".repeat(40),
          "",
          "Urdu:",
          `🗣️  Speaking: ${languages.urdu.speaking}`,
          `👂 Listening: ${languages.urdu.listening}`,
          `✍️  Writing: ${languages.urdu.writing}`,
          "",
          "English:",
          `🗣️  Speaking: ${languages.english.speaking}`,
          `👂 Listening: ${languages.english.listening}`,
          `✍️  Writing: ${languages.english.writing}`,
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "hobbies":
        output = [
          "HOBBIES & INTERESTS:",
          "=".repeat(40),
          "",
          ...hobbies.map((hobby) => `🎯 ${hobby}`),
          "",
          "These activities help me stay creative and maintain work-life balance!",
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "ls":
        if (currentPath === "~") {
          output = [
            "about/",
            "experience/",
            "education/",
            "skills/",
            "projects/",
            "contact/",
            "languages/",
            "hobbies/",
            "README.md",
            "resume.txt",
          ]
        } else {
          output = [`Contents of ${currentPath}:`, ""]
          switch (currentPath) {
            case "~/about":
              output.push("bio.txt", "summary.txt")
              break
            case "~/experience":
              output.push(...experience.map((exp, i) => `job_${i + 1}.txt`))
              break
            case "~/education":
              output.push("degree.txt", "certifications.txt")
              break
            case "~/skills":
              output.push("frontend.txt", "backend.txt", "styling.txt", "cloud.txt", "tools.txt")
              break
            case "~/projects":
              output.push(...projects.map((p) => `${p.name.toLowerCase().replace(/\s+/g, "_")}.txt`))
              break
            case "~/contact":
              output.push("info.txt", "social.txt")
              break
            case "~/languages":
              output.push("urdu.txt", "english.txt")
              break
            case "~/hobbies":
              output.push("interests.txt")
              break
          }
        }
        addInstantOutput(cmd, output)
        return

      case "cd":
        const dir = args[1]
        if (!dir || dir === "~") {
          setCurrentPath("~")
          output = ["Changed to home directory"]
        } else if (
          ["about", "experience", "education", "skills", "projects", "contact", "languages", "hobbies"].includes(dir)
        ) {
          setCurrentPath(`~/${dir}`)
          output = [`Changed to ${dir} directory`]
        } else {
          output = [`cd: ${dir}: No such directory`]
        }
        break

      case "pwd":
        output = [currentPath]
        break

      case "whoami":
        output = [developer.name, developer.title, developer.email]
        break

      case "resume":
        output = [
          "=".repeat(60),
          `${developer.name.toUpperCase()}`,
          `${developer.title.toUpperCase()}`,
          "=".repeat(60),
          "",
          "CONTACT:",
          `📧 ${developer.email}`,
          `📱 ${developer.phone}`,
          `📍 ${developer.address}`,
          "",
          "EXPERIENCE:",
          ...experience.flatMap((exp) => [
            `• ${exp.title}`,
            `  ${exp.company} | ${exp.period}`,
            ...exp.description.map((desc) => `  - ${desc}`),
            "",
          ]),
          "EDUCATION:",
          ...education.flatMap((edu) => [
            `• ${edu.degree} in ${edu.field}`,
            `  ${edu.institution} | ${edu.period}`,
            "",
          ]),
          "TECHNICAL SKILLS:",
          `Frontend: ${skills.frontend.join(", ")}`,
          `Backend: ${skills.backend.join(", ")}`,
          `Styling: ${skills.styling.join(", ")}`,
          `Cloud: ${skills.cloud.join(", ")}`,
          "",
          "LANGUAGES:",
          `Urdu: Speaking, Listening, Writing (Native)`,
          `English: Speaking, Listening, Writing (Fluent)`,
          "",
          "HOBBIES:",
          hobbies.join(", "),
          "",
        ]
        addInstantOutput(cmd, output)
        return

      case "cat":
        const file = args[1]
        if (!file) {
          output = ["cat: missing file operand"]
          break
        }

        switch (file) {
          case "README.md":
            output = [
              "# Girish Lade - Full Stack Developer Portfolio",
              "",
              `Welcome to ${developer.name}'s interactive terminal portfolio!`,
              "",
              "🚀 Full Stack Developer specializing in MERN Stack & React Native",
              "📱 Cross-platform mobile app development expert",
              "🎓 Computer Science student with hands-on industry experience",
              "",
              "Quick Commands:",
              "- resume      (Complete CV)",
              "- about       (About me)",
              "- experience  (Work history)",
              "- education   (Academic background)",
              "- skills      (Technical expertise)",
              "- projects    (Portfolio projects)",
              "- contact     (Get in touch)",
              "",
              "Type 'help' for all available commands",
              "",
            ]
            break

          case "resume.txt":
            executeCommand("resume")
            return

          default:
            output = [`cat: ${file}: No such file or directory`]
        }
        break

      case "open":
        const url = args[1]
        if (!url) {
          output = ["open: missing URL operand"]
        } else {
          window.open(url.startsWith("http") ? url : `https://${url}`, "_blank")
          output = [`Opening ${url} in new tab...`]
        }
        break

      case "history":
        output = commandHistory.map((cmd, i) => `${i + 1}  ${cmd}`)
        break

      default:
        if (trimmedCmd) {
          output = [`Command not found: ${command}`, 'Type "help" for available commands']
        }
    }

    const newCommand: Command = {
      input: cmd,
      output: [],
      timestamp: new Date(),
    }

    setHistory((prev) => [...prev, newCommand])

    if (output.length > 0) {
      await typeText(output, 20)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isTyping) {
      executeCommand(input)
      setInput("")
      setHistoryIndex(-1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      <div className="max-w-5xl mx-auto">
        {/* Terminal Window Header */}
        <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-300 text-sm hidden md:block">TerminalPortfolio</div>
          <div className="flex items-center space-x-3">
            <a href={developer.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Globe size={14} />
            </a>
            <a href={developer.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={14} />
            </a>
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={14} />
            </a>
            <a href={developer.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Code2 size={14} />
            </a>
            <a href={developer.codepen} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Code2 size={14} />
            </a>
            <a href={`mailto:${developer.email}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
              <Mail size={14} />
            </a>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="bg-black rounded-b-lg p-4 h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Command History */}
          {history.map((cmd, index) => (
            <div key={index} className="mb-2">
              {cmd.input && (
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">
                    {developer.name.toLowerCase().replace(/\s+/g, "")}@portfolio:{currentPath}$
                  </span>
                  <span className="text-white">{cmd.input}</span>
                </div>
              )}
              {cmd.output.map((line, lineIndex) => (
                <div key={lineIndex} className="text-green-300 whitespace-pre-wrap">
                  {line}
                </div>
              ))}
            </div>
          ))}

          {/* Current Input */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">
              {developer.name.toLowerCase().replace(/\s+/g, "")}@portfolio:{currentPath}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-white outline-none flex-1 caret-green-400"
              disabled={isTyping}
              autoComplete="off"
              spellCheck="false"
            />
            <span className="animate-pulse text-green-400 ml-1">█</span>
          </form>
        </div>

        {/* Quick Commands */}
        <div className="mt-4 text-center text-gray-500 text-sm space-y-2">
          <p>
            Quick commands: <code className="bg-gray-800 px-1 rounded">resume</code> |{" "}
            <code className="bg-gray-800 px-1 rounded">experience</code> |{" "}
            <code className="bg-gray-800 px-1 rounded">skills</code> |{" "}
            <code className="bg-gray-800 px-1 rounded">projects</code>
          </p>
          <p className="text-xs">
            Direct access: <code className="bg-gray-800 px-1 rounded">about</code>,{" "}
            <code className="bg-gray-800 px-1 rounded">contact</code>,{" "}
            <code className="bg-gray-800 px-1 rounded">education</code>
          </p>
        </div>
      </div>
    </div>
  )
}
