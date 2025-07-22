# TimeToTech - Digital Transformation Company Website

## Overview

This is a full-stack web application for TimeToTech, a French digital transformation consultancy. The application features a modern, minimalist landing page inspired by Ellipsus.com design, with a clean typography-focused approach and functional contact form system. Built with a clean separation between frontend and backend, it uses modern web technologies and follows best practices for scalability and maintainability.

## User Preferences

Preferred communication style: Simple, everyday language.
Design inspiration: Ellipsus.com - Clean, minimalist, typography-focused design rather than portfolio-style layouts.

## Recent Changes (July 19, 2025)

✓ Complete redesign inspired by Ellipsus.com aesthetic
✓ Simplified navigation with cleaner typography
✓ Minimalist hero section with large typography and italic accents
✓ Removed portfolio-style service cards for cleaner content sections
✓ Updated color scheme to match Ellipsus style (purple accent, clean grays)
✓ Simplified contact form with better visual hierarchy
✓ Added device icons section similar to Ellipsus layout
✓ Typography-focused approach throughout the site

### Latest Updates (July 19, 2025):
✓ IT-themed animations in hero section (binary code, code symbols, tech emojis)
✓ Dynamic text animation for "digitales" cycling through variants
✓ Created dedicated Services and About pages with full content
✓ Implemented dark mode toggle with theme persistence
✓ Added language switcher (French/English) with translation system
✓ Updated navigation to work with multi-page routing
✓ Enhanced all sections with improved animations and dark mode support

### Visual Enhancements Added:
✓ Advanced CSS animations (floating, fade-in, slide-up, pulse-subtle)
✓ Gradient backgrounds and text effects throughout
✓ Glassmorphism effects on contact form
✓ Floating animated background elements and particles
✓ Hover effects with scale transforms and glow shadows
✓ Smooth transitions on all interactive elements
✓ Backdrop blur effects on navigation
✓ Layered gradient overlays for depth
✓ IT-themed floating elements (binary code, code symbols, tech icons)
✓ Dynamic text animation system with smooth transitions

## System Architecture

### Full-Stack Architecture
The application follows a monorepo structure with clear separation of concerns:
- **Frontend**: React-based SPA with TypeScript
- **Backend**: Node.js/Express API server
- **Database**: PostgreSQL with Neon serverless connection
- **Shared**: Common schemas and types between frontend and backend

### Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Backend Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Extensive shadcn/ui component system with 30+ pre-built components
- **Styling System**: Tailwind CSS with custom CSS variables for consistent theming
- **Form Validation**: React Hook Form integrated with Zod schemas for type-safe validation
- **API Integration**: TanStack Query for efficient server state management
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts
- **Theme System**: Dark/light mode toggle with localStorage persistence
- **Internationalization**: French/English language switcher with translation context
- **Multi-page Routing**: Wouter-based routing with Services, About, and Home pages
- **Animation System**: Custom CSS animations with IT-themed elements and dynamic text effects

### Backend Architecture
- **API Structure**: RESTful endpoints with Express.js
- **Data Layer**: Drizzle ORM with schema-first approach
- **Storage Abstraction**: Interface-based storage layer supporting both in-memory and database implementations
- **Request Handling**: Comprehensive logging and error handling middleware
- **Development Setup**: Hot-reload with tsx and integrated Vite development server

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions**: Comprehensive contact form data capture (firstName, lastName, email, company, service, message, timestamps)
- **Schema Validation**: Drizzle-Zod integration for runtime validation

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. React Hook Form validates data using Zod schema
3. TanStack Query mutation sends validated data to `/api/contact`
4. Backend validates data again using shared schema
5. Storage layer persists submission to database
6. Success/error response returned to frontend
7. Toast notification displays result to user

### Development vs Production
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: Database storage with Neon PostgreSQL connection
- **Schema Migrations**: Drizzle Kit handles database schema changes

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Connection**: Uses `@neondatabase/serverless` for optimal serverless performance
- **Environment**: Requires `DATABASE_URL` environment variable

### UI/UX Libraries
- **Radix UI**: Headless component primitives for accessibility
- **Lucide Icons**: Comprehensive icon library
- **Embla Carousel**: Touch-friendly carousel component
- **Date-fns**: Date manipulation utilities

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **TypeScript**: Strict typing with path aliases for clean imports
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: `drizzle-kit push` applies schema changes
4. **Static Serving**: Express serves frontend assets in production

### Environment Configuration
- **Development**: `NODE_ENV=development` with hot-reload and in-memory storage
- **Production**: `NODE_ENV=production` with optimized builds and database storage
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scalability Considerations
- **Storage Interface**: Allows easy switching between storage backends
- **Serverless Ready**: Neon database and stateless server design
- **Asset Optimization**: Vite handles code splitting and asset optimization
- **TypeScript**: Compile-time error catching reduces runtime issues