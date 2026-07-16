# 🚀 My App Foundations

A Next.js application scaffold with complete routing, responsive navigation, and health monitoring. Built with modern web technologies and deployed on Vercel.

---

## 🌐 Live Demo

**View the live application:** [(https://my-app-foundations.vercel.app)]

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Routes](#-routes)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Features
- ✅ **Complete Routing Structure** — Home, Dashboard, Profile, Settings, Health pages
- ✅ **Server Components by Default** — optimized performance and SEO
- ✅ **Client Components When Needed** — interactive navigation with mobile menu
- ✅ **Responsive Design** — works perfectly at 375px (mobile) and 1280px (desktop)
- ✅ **Mobile Hamburger Menu** — smooth mobile navigation experience
- ✅ **Health Check Page** — displays system status with fetched data
- ✅ **API Integration** — health check API endpoint with JSON response
- ✅ **Tailwind CSS** — utility-first styling with custom design tokens

### Developer Experience
- ✅ **TypeScript** — type safety and better IDE support
- ✅ **Hot Reload** — instant feedback during development
- ✅ **Environment Variables** — secure configuration management
- ✅ **Vercel Deployment** — preview deployments on every push
- ✅ **No Secrets in Repository** — all sensitive data excluded via `.gitignore`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.2.4 | React framework |
| [React](https://reactjs.org/) | 18.3.1 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.5.3 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.4 | Styling |
| [Vercel](https://vercel.com/) | – | Hosting & deployment |

---

## 📁 Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts       # Health check API endpoint
│   ├── dashboard/
│   │   └── page.tsx           # Dashboard page
│   ├── health/
│   │   └── page.tsx           # Health monitoring page
│   ├── profile/
│   │   └── page.tsx           # User profile page
│   ├── settings/
│   │   └── page.tsx           # Settings page
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout with navigation
│   └── page.tsx               # Home page
├── components/
│   └── Navigation.tsx         # Navigation component (client)
├── lib/
│   └── health.ts              # Health data fetching logic
├── public/                    # Static assets
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore rules
├── next.config.ts             # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.mjs         # PostCSS configuration
├── README.md                  # Documentation
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vercel.json                # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)
- **Git** (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rehman481/my-app-foundations.git
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file
   echo "NEXT_PUBLIC_APP_VERSION=1.0.0" > .env.local
   echo "NEXT_PUBLIC_API_URL=http://localhost:3000" >> .env.local
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**

   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📜 Available Scripts

### Development

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Run TypeScript type checking |

### Deployment

| Command | Description |
|---|---|
| `npm run build` | Create optimized production build |
| `vercel` | Deploy preview to Vercel |
| `vercel --prod` | Deploy to production |

---

## 🗺️ Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Welcome page with feature highlights |
| `/dashboard` | Dashboard | Analytics and metrics overview |
| `/profile` | Profile | User profile information |
| `/settings` | Settings | User preferences and account settings |
| `/health` | Health | System status and service health |
| `/api/health` | API | Health check JSON endpoint |

**Example navigation config:**

```typescript
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
  { href: '/health', label: 'Health' },
];
```

---

## 📱 Responsive Design

### Breakpoints

| Device | Screen Width | Layout |
|---|---|---|
| Mobile | 375px | Single column, hamburger menu |
| Tablet | 768px | Two columns, full navigation |
| Desktop | 1280px | Multi-column, full navigation |

### Testing Responsiveness

1. Open Chrome DevTools (`F12`)
2. Toggle device toolbar (`Ctrl+Shift+M`)
3. Select iPhone SE (375px) or set a custom width (1280px)
4. Verify layout and navigation work correctly

**Mobile Menu (375px)**

```
┌──────────────────────────────────┐
│ [MyApp]                    [☰]  │  ← Hamburger menu icon
└──────────────────────────────────┘
```

When clicked, the menu slides down with all navigation links.

**Desktop Menu (1280px)**

```
┌────────────────────────────────────────────────────────────────┐
│ [MyApp]  Home  Dashboard  Profile  Settings  Health             │  ← All links visible
└────────────────────────────────────────────────────────────────┘
```

---

## 🚢 Deployment

### Deploy to Vercel

**Option 1: Vercel CLI (quick)**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy a preview
vercel

# Follow the prompts:
# - Deploy to production? Yes
# - Project name: my-app
# - Directory: ./
# - Override settings? No

# Deploy to production
vercel --prod
```

**Option 2: GitHub integration**

1. Push code to GitHub:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **Add New → Project**
4. Import your GitHub repository
5. Configure project settings
6. Click **Deploy**

### Environment Variables in Vercel

After deployment, add these in **Vercel Dashboard → Project → Settings → Environment Variables**:

```env
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_API_URL=https://your-app.vercel.app
```

---

## 🔒 Environment Variables

### Development (`.env.local`)

```env
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

### Production (Vercel)

Set these in **Vercel Dashboard → Project → Settings → Environment Variables**.

> ⚠️ **Important:** Never commit `.env` or `.env.local` files to version control. They are already excluded via `.gitignore`.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
