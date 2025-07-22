import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

type LanguageProviderProps = {
  children: ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  fr: {
    // Navigation
    "nav.services": "Nos services",
    "nav.about": "À propos",
    "nav.contact": "Commencer un projet",
    
    // Hero section
    "hero.title": "Créer des solutions",
    "hero.title.end": "exceptionnelles",
    "hero.subtitle": "TimeToTech est une agence de transformation digitale dédiée à la créativité technologique sous toutes ses formes.",
    "hero.cta": "Commencer un projet",
    
    // Text variants
    "text.digitales": "digitales",
    "text.technologiques": "technologiques", 
    "text.innovantes": "innovantes",
    "text.numeriques": "numériques",
    
    // Home page sections
    "home.features.title": "Conçu pour les entreprises visionnaires",
    "home.features.subtitle1": "De nombreux outils existent pour les notes, mémos et listes de tâches. Ce n'est pas notre domaine.",
    "home.features.subtitle2": "TimeToTech est là pour vous aider à construire des expériences, innover, surprendre, et célébrer la créativité technologique dans toutes ses formes.",
    "home.devices.title": "sur tous les supports",
    "home.devices.subtitle": "C'est nous, en collaboration !",
    "home.process.title": "Une méthode éprouvée pour concevoir, développer et gérer vos projets avec TimeToTech.",
    "home.process.item1.title": "Gardez le contrôle avec des projets connectés",
    "home.process.item1.desc": "Architecture modulaire et évolutive",
    "home.process.item2.title": "Maintenez un feedback ciblé avec commentaires + tests",
    "home.process.item2.desc": "Processus collaboratif transparent",
    "home.process.item3.title": "Concevez, développez, déployez, répétez",
    "home.process.item3.desc": "Cycle d'innovation continu",
    "home.about.title": "Une alternative éthique—par des développeurs, pour des entreprises",
    "home.about.desc1": "Nous pensons que les entreprises doivent être libres d'exprimer leur vision créative—loin des contraintes techniques et des regards indiscrets de solutions génériques.",
    "home.about.desc2": "Votre projet est LE VÔTRE.",
    "home.about.desc3": "Aucune solution générique—jamais.",
    "home.contact.title": "Commencez—créez dès maintenant.",
    
    // Services page
    "services.hero.title": "Nos services",
    "services.hero.subtitle": "Découvrez notre gamme complète de solutions digitales pour transformer votre entreprise",
    "services.cta.title": "Prêt à transformer votre entreprise ?",
    "services.cta.subtitle": "Discutons de votre projet et trouvons ensemble la meilleure solution.",
    "services.cta.button": "Démarrer un projet",
    
    // About page
    "about.hero.title": "À propos",
    "about.hero.subtitle": "Découvrez l'histoire et la vision derrière TimeToTech",
    "about.story.title": "Notre histoire",
    "about.values.title": "Nos valeurs",
    "about.values.subtitle": "Les principes qui guident notre travail au quotidien",
    "about.team.title": "Notre équipe",
    "about.team.subtitle": "Des experts passionnés à votre service",
    "about.cta.title": "Travaillons ensemble",
    "about.cta.subtitle": "Découvrez comment TimeToTech peut accompagner votre transformation digitale.",
    "about.cta.button": "Contactez-nous",
    
    // Footer
    "footer.company": "Agence de transformation digitale",
    "footer.location": "Paris, France",
    "footer.quote": "Plus que toute autre invention, la technologie a transformé la conscience humaine.",
    
    // Common
    "common.contact": "Contact",
    "common.services": "Services",
    "common.about": "À propos",
  },
  en: {
    // Navigation
    "nav.services": "Our Services",
    "nav.about": "About",
    "nav.contact": "Start a Project",
    
    // Hero section
    "hero.title": "Create",
    "hero.title.end": "exceptional solutions",
    "hero.subtitle": "TimeToTech is a digital transformation agency dedicated to technological creativity in all its forms.",
    "hero.cta": "Start a Project",
    
    // Text variants
    "text.digitales": "digital",
    "text.technologiques": "technological",
    "text.innovantes": "innovative", 
    "text.numeriques": "digital",
    
    // Home page sections
    "home.features.title": "Designed for visionary companies",
    "home.features.subtitle1": "Many tools exist for notes, memos and to-do lists. This is not our domain.",
    "home.features.subtitle2": "TimeToTech is here to help you build experiences, innovate, surprise, and celebrate technological creativity in all its forms.",
    "home.devices.title": "on all platforms",
    "home.devices.subtitle": "That's us, in collaboration!",
    "home.process.title": "A proven method to design, develop and manage your projects with TimeToTech.",
    "home.process.item1.title": "Keep control with connected projects",
    "home.process.item1.desc": "Modular and scalable architecture",
    "home.process.item2.title": "Maintain targeted feedback with comments + tests",
    "home.process.item2.desc": "Transparent collaborative process",
    "home.process.item3.title": "Design, develop, deploy, repeat",
    "home.process.item3.desc": "Continuous innovation cycle",
    "home.about.title": "An ethical alternative—by developers, for businesses",
    "home.about.desc1": "We believe companies should be free to express their creative vision—away from technical constraints and prying eyes of generic solutions.",
    "home.about.desc2": "Your project is YOURS.",
    "home.about.desc3": "No generic solution—ever.",
    "home.contact.title": "Start—create now.",
    
    // Services page
    "services.hero.title": "Our Services",
    "services.hero.subtitle": "Discover our complete range of digital solutions to transform your business",
    "services.cta.title": "Ready to transform your business?",
    "services.cta.subtitle": "Let's discuss your project and find the best solution together.",
    "services.cta.button": "Start a Project",
    
    // About page
    "about.hero.title": "About",
    "about.hero.subtitle": "Discover the story and vision behind TimeToTech",
    "about.story.title": "Our Story",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide our daily work",
    "about.team.title": "Our Team",
    "about.team.subtitle": "Passionate experts at your service",
    "about.cta.title": "Let's work together",
    "about.cta.subtitle": "Discover how TimeToTech can support your digital transformation.",
    "about.cta.button": "Contact us",
    
    // Footer
    "footer.company": "Digital transformation agency",
    "footer.location": "Paris, France",
    "footer.quote": "More than any other invention, technology has transformed human consciousness.",
    
    // Common
    "common.contact": "Contact",
    "common.services": "Services", 
    "common.about": "About",
  }
};

const initialState: LanguageProviderState = {
  language: "fr",
  setLanguage: () => null,
  t: () => "",
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = "fr",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("timetotech-language") as Language) || defaultLanguage
  );

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const handleSetLanguage = (newLanguage: Language) => {
    localStorage.setItem("timetotech-language", newLanguage);
    setLanguage(newLanguage);
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};