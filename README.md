# Terminal Portfolio Site

> An interactive CLI-style portfolio website that mimics a terminal/command-line interface. Built with modern web technologies for a unique developer-focused presentation.

---

## Live Demo

**Deployed URL:** [https://v0-terminal-portfolio-site.vercel.app](https://v0-terminal-portfolio-site.vercel.app)

---

## Features

### Core Features

- **Interactive Terminal Interface**
  - Command-line input with typing animations
  - Command history navigation (Arrow Up/Down keys)
  - Tab-completion style directory navigation
  
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
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main terminal component
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
└── tsconfig.json      # TypeScript configuration
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

## License

MIT License - Feel free to use this project for your own portfolio.

---

## Author

**Muhammad Ali**
- Email: muhammadaliofficial001@gmail.com
- GitHub: [https://github.com/muhammadali](https://github.com/muhammadali)
- LinkedIn: [https://linkedin.com/in/muhammadali](https://linkedin.com/in/muhammadali)

---

## Acknowledgments

- Created with [v0.dev](https://v0.dev)
- Deployed on [Vercel](https://vercel.com)
- Built with [shadcn/ui](https://ui.shadcn.com) components
- Styled with [Tailwind CSS](https://tailwindcss.com)