// Application constants
export const APP_CONFIG = {
  name: "TimeToTech",
  description: "Agence de transformation digitale",
  location: "Paris, France",
  email: "contact@timetotech.fr",
  phone: "+33 1 23 45 67 89",
  address: "123 Avenue de l'Innovation, 75001 Paris, France",
} as const;

export const SERVICES = [
  {
    id: "web",
    title: "Développement Web",
    description: "Applications web modernes, performantes et responsive",
    features: [
      "Sites web sur mesure",
      "Applications React/Vue.js", 
      "API REST et GraphQL",
      "Progressive Web Apps"
    ],
    path: "/services/web",
  },
  {
    id: "mobile",
    title: "Applications Mobile",
    description: "Apps natives et cross-platform pour iOS et Android",
    features: [
      "Applications React Native",
      "Applications Flutter",
      "Applications natives iOS/Android",
      "Intégration API et services"
    ],
    path: "/services/mobile",
  },
  {
    id: "design",
    title: "Design Graphique",
    description: "Créations visuelles qui marquent et captivent",
    features: [
      "Identité visuelle complète",
      "UI/UX Design moderne",
      "Supports print et digital",
      "Illustrations sur mesure"
    ],
    path: "/services/design",
  },
  {
    id: "consulting",
    title: "Conseil IT",
    description: "Expertise technique et stratégique",
    features: [
      "Audit technique et sécurité",
      "Architecture système et cloud",
      "Migration et modernisation",
      "Formation et accompagnement"
    ],
    path: "/services/conseil",
  },
] as const;

export const ANIMATION_DELAYS = {
  short: 0.3,
  medium: 0.6,
  long: 0.9,
} as const;

export const THEME_STORAGE_KEY = "timetotech-ui-theme";
export const LANGUAGE_STORAGE_KEY = "timetotech-language";