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
    name: "Girish Balaso Lade",
    title: "Automation Tester and Programmer",
    email: "admin@ladestack.in",
    phone: "+91-9765868216",
    address: "Mumbai, India",
    website: "https://ladestack.in",
    github: "https://github.com/girishlade111",
    linkedin: "https://www.linkedin.com/in/girish-lade-075bba201/",
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
      title: "Automation Software Tester",
      company: "ladestack.in",
      period: "2027 - Present",
      description: [
        "Automation software tester",
        "UI/UX designer and developer",
        "Founder and owner of 'ladestack.in'",
        "LadeStack provides free to use AI powered SaaS products and tools for developers and programmers",
      ],
    },
  ]

  const education = [
    {
      degree: "Graduation",
      field: "Mechanical and IT",
      institution: "Sveri College, Pandharpur",
      period: "2021 - 2024",
    },
  ]

  const skills = {
    frontend: ["n8n", "typescript", "javascript", "react", "next.js", "three.js", "supabase", "mongoDB", "cursor", "claude code", "copilot", "opencode", "aws", "azure"],
    backend: ["node.js", "express", "mongoDB", "redis", "supabase", "appwrite", "firebase"],
    languages: ["Python", "JavaScript", "TypeScript", "Java", "React", "Next.js"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Supabase", "Appwrite", "Firebase"],
    tools: ["Git", "Docker", "AWS", "Azure", "VS Code", "n8n", "Slack", "Vercel", "Netlify"],
  }

  const languages = {
    marathi: {
      speaking: "Native",
      listening: "Native",
      writing: "Native",
    },
    hindi: {
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

  const hobbies = ["Coding", "Exploring AI tools"]

  const projects = [
    {
      name: "GB Coder",
      description: "AI powered HTML, CSS & JS code compiler, editor and enhancer",
      tech: ["Node.js", "React", "TypeScript"],
      status: "Production",
      type: "Web Application",
    },
    {
      name: "ResAgent",
      description: "Production-grade, multi-agent AI research system for depth, accuracy, and scale",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "NVIDIA NIM", "OpenRouter"],
      status: "Development",
      type: "AI Research Platform",
    },
    {
      name: "Lade Slides Studio",
      description: "Web-based presentation and spreadsheet application with real-time collaboration",
      tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Zustand"],
      status: "Development",
      type: "Web Application",
    },
    {
      name: "ImageSqueeze",
      description: "Free image compressor, resizer & WebP converter - 100% client-side privacy",
      tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "browser-image-compression"],
      status: "Production",
      type: "Web Tool",
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
          "As an Automation Tester and Programmer, my expertise lies in",
          "building powerful AI-powered tools and SaaS products that help",
          "developers and programmers streamline their workflow.",
          "",
          "I am the founder and owner of Ladestack, a company dedicated to",
          "providing free AI-powered SaaS products and tools for developers.",
          "",
          "Professional Summary:",
          "✨ Automation Software Tester",
          "🛠️ UI/UX Designer and Developer",
          "🚀 Founder of Ladestack (AI SaaS Products)",
          "🤖 Passionate about AI tools and automation",
          "💡 Always exploring new technologies",
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
          "🏆 Founder of Ladestack - AI SaaS Products",
          "📚 Developer and Programmer",
          "🎯 Automation Testing Expert",
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
          "Programming Languages:",
          ...skills.languages.map((lang) => `• ${lang}`),
          "",
          "Databases:",
          ...skills.databases.map((db) => `• ${db}`),
          "",
          "Development Tools:",
          ...skills.tools.map((tool) => `• ${tool}`),
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
          "Marathi:",
          `🗣️  Speaking: ${languages.marathi.speaking}`,
          `👂 Listening: ${languages.marathi.listening}`,
          `✍️  Writing: ${languages.marathi.writing}`,
          "",
          "Hindi:",
          `🗣️  Speaking: ${languages.hindi.speaking}`,
          `👂 Listening: ${languages.hindi.listening}`,
          `✍️  Writing: ${languages.hindi.writing}`,
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
          `Languages: ${skills.languages.join(", ")}`,
          `Databases: ${skills.databases.join(", ")}`,
          `Tools: ${skills.tools.join(", ")}`,
          "",
          "LANGUAGES:",
          `Marathi: Speaking, Listening, Writing (Native)`,
          `Hindi: Speaking, Listening, Writing (Native)`,
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
              "# Girish Balaso Lade - Automation Tester & Programmer Portfolio",
              "",
              `Welcome to ${developer.name}'s interactive terminal portfolio!`,
              "",
              "🤖 Automation Software Tester",
              "🛠️ UI/UX Designer and Developer",
              "🚀 Founder of Ladestack (AI SaaS Products)",
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
