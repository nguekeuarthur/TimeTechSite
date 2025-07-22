import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Experts from "@/pages/experts";
import WebDevelopment from "@/pages/web-development";
import MobileDevelopment from "@/pages/mobile-development";
import GraphicDesign from "@/pages/graphic-design";
import ITConsulting from "@/pages/it-consulting";
import Portfolio from "@/pages/portfolio";
import Blog from "@/pages/blog";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experts" component={Experts} />
      <Route path="/services" component={Services} />
      <Route path="/services/web" component={WebDevelopment} />
      <Route path="/services/mobile" component={MobileDevelopment} />
      <Route path="/services/design" component={GraphicDesign} />
      <Route path="/services/conseil" component={ITConsulting} />
      <Route path="/realisations" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="timetotech-ui-theme">
          <LanguageProvider defaultLanguage="fr">
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
