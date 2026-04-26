# Terminal Portfolio Site

> An interactive CLI-style portfolio website that mimics a terminal/command-line interface. Perfect for developers who want to showcase their work in a unique, command-line inspired presentation.

---

## Live Demo

**Deployed URL:** [https://ladestack.in](https://ladestack.in)

---

## Visual Demonstration

### Terminal UI Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  ● ● ●                                        TerminalPortfolio │  ← Window Controls
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Welcome to Girish Balaso Lade's Portfolio Terminal               │
│  Automation Tester and Programmer | admin@ladestack.in        │
│  Type 'help' to see available commands                         │
│                                                                 │
│  ═══════════════════════════════════════════════════════════════ │
│                                                                 │
│  girish@portfolio:~$ help                                      │
│                                                                 │
│  Available commands:                                          │
│                                                                 │
│    help          - Show this help message                         │
│    clear         - Clear the terminal                            │
│    ls            - List directory contents                    │
│    cd <dir>      - Change directory                          │
│    cat <file>    - Display file contents                     │
│    pwd           - Show current directory                   │
│    whoami        - Display user information                 │
│    open <url>    - Open URL in new tab                      │
│    history       - Show command history                     │
│                                                                 │
│  Direct access commands:                                      │
│    resume        - Display complete resume                   │
│    about         - Show about information                    │
│    experience    - Display work experience                  │
│    education     - Show education background               │
│    skills        - Display technical skills               │
│    projects      - Show portfolio projects                │
│    contact       - Display contact information             │
│    languages     - Show language proficiency             │
│    hobbies       - Display hobbies and interests          │
│                                                                 │
│  ───────────────────────────────────────────────────────────   │
│                                                                 │
│  girish@portfolio:~$ █                                         │  ← Blinking Cursor
│                                                                 │
└─────────────���───────────────────────────────────────────────────┘
```

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                        APP FLOW                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌────────┐  │
│   │  User    │───▶│  Input   │───▶│ Command  │───▶│ Output │  │
│   │  Types   │    │  Field   │    │ Parser   │    │ Display│  │
│   └──────────┘    └──────────┘    └──────────┘    └────────┘  │
│        │                                        │              │
│        │         ┌──────────────────────────────┘              │
│        │         │                                           │
│        ▼         ▼                                           ▼
│   ┌─────────┐  ┌──────────────┐  ┌─────────────────────────────────┐
│   │ History │  │ TypeText   │  │ Terminal Content               │
│   │ Nav    │  │ Animation │  │ auto-scroll to bottom            │
│   └─────────┘  └──────────────┘  └─────────────────────────────────┘
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Command Execution Flow

```
1. User types command:     "skills"
                         ↓
2. Parser extracts:      command = "skills"
                         ↓
3. Switch matches:      case "skills":
                         ↓
4. Process data:        gather skills from data object
                         ↓
5. Type animation:      animateText(output, delay)
                         ↓
6. Display result:      "TECHNICAL SKILLS: ..."
```

### Terminal Window Components

```
┌────────────────────────────────────────────────┐
│  ● ○ ○  │ Mac-style Window Controls            │
├────────────────────────────────────────────────┤
│                                                │
│  [Social Links Header]                          │
│  🌐 │ 🐙 │ 💼 │ 📸 │ ✉️                       │
│                                                │
├────────────────────────────────────────────────┤
│                                                │
│  ┌────────────────────────────────────────┐   │
│  │                                       │   │
│  │      TERMINAL CONTENT AREA              │   │
│  │      (scrollable)                      │   │
│  │                                       │   │
│  │  > command input                      │   │
│  │  █ (blinking cursor)                │   │
│  │                                       │   │
│  └────────────────────────────────────────┘   │
│                                                │
├────────────────────────────────────────────────┤
│  Quick: resume | skills | projects | about | contact │
└────────────────────────────────────────────────┘
```

### Directory Navigation Structure

```
~ (root)
├── about/
│   ├── bio.txt
│   └── summary.txt
├── experience/
│   └── job_1.txt
├── education/
│   ├── degree.txt
│   └── certifications.txt
├── skills/
│   ├── frontend.txt
│   ├── backend.txt
│   └── tools.txt
├── projects/
│   ├── gb_coder.txt
│   ├── resagent.txt
│   └── imagesqueeze.txt
├── contact/
│   ├── info.txt
│   └── social.txt
├── languages/
│   ├── marathi.txt
│   ├── hindi.txt
│   └── english.txt
├── hobbies/
│   └── interests.txt
├── README.md
└── resume.txt
```

### Example Usage

```
┌─────────────────────────────────────────────────────────────────┐
│  ▶ Initial Load (Welcome Message)                        │
├─────────────────────────────────────────────────────────────────┤
│  Welcome to Girish Balaso Lade's Portfolio Terminal   │
│  Automation Tester and Programmer | admin@ladestack.in  │
│  Type 'help' to see available commands           │
│                                                          │
│  girish@portfolio:~$                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  ▶ Type 'about'                                     │
├─────────────────────────────────────────────────────────────────┤
│  girish@portfolio:~$ about                        │
│                                                          │
│  Hi, I'm Girish Balaso Lade!                        │
│                                                          │
│  As an Automation Tester and Programmer...        │
│  ...                                               │
│  Professional Summary:                           │
│  ✨ Automation Software Tester                 │
│  🛠️ UI/UX Designer and Developer               │
│  🚀 Founder of Ladestack (AI SaaS Products)     │
│  ...                                               │
└───────────────────────────────────────────────────────────────��─��

┌─────────────────────────────────────────────────────────────────┐
│  ▶ Type 'projects'                                │
├─────────────────────────────────────────────────────────────────┤
│  girish@portfolio:~$ projects                    │
│                                                          │
│  PORTFOLIO PROJECTS:                                │
│  ================================================ │
│                                                          │
│  1. GB Coder                                       │
│     Type: Web Application                          │
│     Status: Production                             │
│     Description: AI powered HTML, CSS & JS...     │
│                                                          │
│     Technologies Used:                            │
│     • Node.js                                    │
│     • React                                     │
│     • TypeScript                                │
│                                                          │
│  2. ResAgent                                     │
│     Type: AI Research Platform                   │
│     Status: Development                          │
│  ...                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Features

### Core Features

- **Interactive Terminal Interface**
  - Command-line input with typing animations
  - Command history navigation (Arrow Up/Down keys)
  - Tab-completion style directory navigation
  - Auto-scroll to bottom on new output
  - Real-time command execution

- **Built-in Commands**
  - `help` - Display all available commands
  - `clear` - Clear terminal screen
  - `ls` - List directory contents
  - `cd <dir>` - Change directory
  - `cat <file>` - Display file contents
  - `pwd` - Print working directory
  - `whoami` - Display user information
  - `open <url>` - Open URL in new tab
  - `history` - Show command history

- **Quick Access Commands**
  - `resume` - Complete CV/resume
  - `about` - About information
  - `experience` - Work experience
  - `education` - Education background
  - `skills` - Technical skills
  - `projects` - Portfolio projects
  - `contact` - Contact information
  - `languages` - Language proficiency
  - `hobbies` - Hobbies & interests

### Visual Features

- **Terminal Window**
  - Mac-style window controls (red/yellow/green dots)
  - Custom scrollbar styling
  - CRT-style green text on black background
  - Typing animation effect
  - Auto-scroll to bottom on new output

- **Social Links**
  - GitHub, LinkedIn, Instagram, CodePen icons in header
  - Website and email links
  - Hover effects with brand colors

- **Responsive Design**
  - Mobile-friendly terminal interface
  - Fluid typography scaling
  - Adaptive padding

---

## Tech Stack (Development)

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.2.4 | React framework |
| **React** | 19 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.17 | Styling |
| **Lucide React** | 0.454.0 | Icons |

### UI Components

- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Component library base
- **Geist** - Font family (Sans & Mono)
- **clsx** - Conditional class names
- **tailwind-merge** - Tailwind utility merging

### Build Tools

| Tool | Purpose |
|------|---------|
| **PostCSS** | CSS processing |
| **Autoprefixer** | Vendor prefixing |
| **Tailwind CSS Animate** | Animation utilities |

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended), npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/terminal-portfolio-site.git

# Navigate to project directory
cd terminal-portfolio-site

# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
pnpm build
# or
npm run build
# or
yarn build
```

### Start Production Server

```bash
# Start production server
pnpm start
# or
npm start
# or
yarn start
```

---

## Project Structure

```
terminal-portfolio-site/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx         # Root layout with SEO meta tags
│   ├── page.tsx          # Main terminal component
│   ├── robots.ts        # Robots.txt generation
│   └── sitemap.ts       # Sitemap.xml generation
├── components/
│   ├── components.json  # shadcn configuration
│   └── theme-provider.tsx # Theme provider
├── lib/
│   └── utils.ts         # Utility functions
├── public/
│   ├── placeholder.svg
│   ├── placeholder.jpg
│   └── placeholder-user.jpg
├── .gitignore
├── next.config.mjs       # Next.js configuration
├── package.json
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

---

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Next.js configuration
NEXT_PUBLIC_API_URL=your_api_url

# Optional analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Tailwind Configuration

Custom colors and theme extensions can be configured in `tailwind.config.ts`:

```typescript
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom configurations
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add other plugins here
  ],
}
```

### Next.js Configuration

Additional configuration options in `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: ['your-image-domain.com'],
  },
}

export default nextConfig
```

### SEO Configuration

The portfolio includes comprehensive SEO setup:

- **Meta Tags** - Title, description, keywords, authors, Open Graph, Twitter Cards
- **Robots.txt** - Allows all search engine crawlers
- **Sitemap.xml** - Auto-generated with priority levels
- **Canonical URL** - Proper URL structure

---

## Stats

| Metric | Value |
|-------|-------|
| **Total Files** | ~45 files |
| **Dependencies** | 35+ packages |
| **Lines of Code** | ~1700+ lines |
| **Build Size** | Optimized for production |
| **Lighthouse Score** | 90+ (Performance) |

---

## Commands Reference

### Terminal Commands

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Show all commands | `help` |
| `clear` | Clear screen | `clear` |
| `ls` | List contents | `ls` |
| `cd` | Change directory | `cd about` |
| `cat` | View file | `cat README.md` |
| `pwd` | Current path | `pwd` |
| `whoami` | User info | `whoami` |
| `open` | Open URL | `open github.com` |
| `history` | Command history | `history` |

### Quick Access Commands

| Command | Description | Example |
|---------|-------------|---------|
| `resume` | Full resume | `resume` |
| `about` | About page | `about` |
| `experience` | Work history | `experience` |
| `education` | Education | `education` |
| `skills` | Technical skills | `skills` |
| `projects` | Portfolio | `projects` |
| `contact` | Contact info | `contact` |
| `languages` | Languages | `languages` |
| `hobbies` | Hobbies | `hobbies` |

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

### Manual Deployment

1. Build the project: `pnpm build`
2. Deploy the `.next` folder to your hosting provider
3. Configure environment variables
4. Start the server: `pnpm start`

---

## Customization

### Updating Profile Information

Edit the data in `app/page.tsx`:

```typescript
const developer = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  phone: "+91-XXXXXXXXXX",
  address: "City, Country",
  website: "https://yourwebsite.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
  codepen: "https://codepen.io/yourusername",
}
```

### Updating Experience

```typescript
const experience = [
  {
    title: "Job Title",
    company: "Company Name",
    period: "2023 - Present",
    description: [
      "Responsibility 1",
      "Responsibility 2",
    ],
  },
]
```

### Adding Projects

```typescript
const projects = [
  {
    name: "Project Name",
    description: "Project description",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Production",
    type: "Web Application",
  },
]
```

---

## License

MIT License - Feel free to use this project for your own portfolio.

---

## Author

**Girish Balaso Lade**

- **Title:** Automation Tester and Programmer
- **Email:** [admin@ladestack.in](mailto:admin@ladestack.in)
- **Website:** [https://ladestack.in](https://ladestack.in)
- **GitHub:** [https://github.com/girishlade111](https://github.com/girishlade111)
- **LinkedIn:** [https://www.linkedin.com/in/girish-lade-075bba201/](https://www.linkedin.com/in/girish-lade-075bba201/)
- **Instagram:** [https://www.instagram.com/girish_lade_/](https://www.instagram.com/girish_lade_/)
- **CodePen:** [https://codepen.io/Girish-Lade-the-looper](https://codepen.io/Girish-Lade-the-looper)

---

## Acknowledgments

- Built with modern web technologies
- Deployed on [Vercel](https://vercel.com)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)