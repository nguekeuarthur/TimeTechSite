# TimeToTech - Digital Transformation Company Website

## 🚀 Overview

TimeToTech is a modern, full-stack web application for a French digital transformation consultancy. Built with React, TypeScript, and Express.js, it features a clean, minimalist design inspired by modern web aesthetics with comprehensive functionality for showcasing services and handling client inquiries.

## ✨ Features

### Frontend
- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-language Support**: French/English with context-based translations
- **Dark/Light Theme**: Persistent theme switching with system preference detection
- **Interactive Components**: Animated hero section, background slider, typewriter effects
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state management
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Backend
- **Express.js API**: RESTful endpoints with TypeScript
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Rate Limiting**: Configurable rate limiting for API protection
- **Input Validation**: Server-side validation with Zod schemas
- **Error Handling**: Comprehensive error handling and logging
- **Development Tools**: Hot-reload with tsx and integrated Vite dev server

### Architecture
- **Monorepo Structure**: Clean separation between client, server, and shared code
- **Type Safety**: End-to-end TypeScript with shared schemas
- **Component Library**: Extensive shadcn/ui component system
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Core Technologies
- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with CSS variables
- **Forms**: React Hook Form + Zod validation
- **State**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

### UI/UX Libraries
- **Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind
- **Themes**: Custom theme system with dark mode

### Development Tools
- **Build**: Vite with ESBuild
- **Database**: Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking
- **Linting**: TypeScript strict mode
- **Environment**: Replit integration with custom plugins

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   └── index.css      # Global styles and Tailwind
├── server/                # Backend Express application
│   ├── middleware/        # Express middleware
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data access layer
│   └── index.ts          # Server entry point
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schemas and validation
└── dist/                 # Production build output
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database (or use in-memory storage for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd timetotech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Optional: Set up database connection
   export DATABASE_URL="postgresql://user:password@localhost:5432/timetotech"
   ```

4. **Database Setup** (if using PostgreSQL)
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep blue (#004767) - Professional and trustworthy
- **Accent**: Cyan (#38bdf8) - Modern and energetic  
- **Secondary**: Light grays for backgrounds and text
- **Success**: Green for positive actions
- **Error**: Red for warnings and errors

### Typography
- **Font**: System font stack for optimal performance
- **Hierarchy**: Clear heading structure (h1-h6)
- **Spacing**: Consistent line heights (150% body, 120% headings)
- **Weights**: Maximum 3 font weights for performance

### Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Glass morphism effects with subtle shadows
- **Forms**: Clean inputs with focus states
- **Navigation**: Responsive with mobile-first approach

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Development/production mode
- `DATABASE_URL`: PostgreSQL connection string (optional)
- `PORT`: Server port (default: 5000)

### Customization
- **Themes**: Modify CSS variables in `client/src/index.css`
- **Translations**: Update translations in `client/src/components/language-provider.tsx`
- **Services**: Configure services in `client/src/lib/constants.ts`

## 📱 Features in Detail

### Contact Form
- **Validation**: Client and server-side validation
- **Rate Limiting**: Prevents spam submissions
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Toast notifications for user feedback

### Multi-language Support
- **Languages**: French (default) and English
- **Persistence**: Language preference saved to localStorage
- **Context**: React Context for global language state
- **Fallbacks**: Graceful fallback to keys if translations missing

### Theme System
- **Modes**: Light, dark, and system preference
- **Persistence**: Theme saved to localStorage
- **CSS Variables**: Dynamic theme switching
- **Components**: All components support both themes

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with proper loading
- **Caching**: TanStack Query for intelligent caching
- **Bundle Size**: Optimized imports and tree shaking

## 🧪 Testing

```bash
# Type checking
npm run check

# Linting
npm run lint
```

## 🚀 Deployment

### Build Process
1. Frontend builds to `dist/public` with Vite
2. Backend builds to `dist/index.js` with ESBuild
3. Static assets served by Express in production

### Deployment Platforms
- **Replit**: Native support with custom configuration
- **Vercel/Netlify**: Frontend-only deployment
- **Railway/Render**: Full-stack deployment with database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Ellipsus.com for clean, typography-focused design
- **UI Components**: shadcn/ui for the comprehensive component library
- **Icons**: Lucide React for beautiful, consistent icons
- **Images**: Unsplash for high-quality stock photography

---

**TimeToTech** - Transforming businesses through innovative digital solutions.