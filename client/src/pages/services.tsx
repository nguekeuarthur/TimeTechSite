import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/components/language-provider";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-cyan-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">{t("services.hero.title")}</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              {t("services.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Développement Web</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">Applications web modernes, performantes et responsive. React, Vue.js, Node.js et plus encore.</p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Sites web sur mesure</li>
                <li>• Applications React/Vue.js</li>
                <li>• API REST et GraphQL</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v16h10V4H7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Applications Mobile</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">Applications natives et cross-platform pour iOS et Android avec React Native et Flutter.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Applications React Native</li>
                <li>• Applications Flutter</li>
                <li>• Applications natives iOS/Android</li>
                <li>• Intégration API et services</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Cloud & DevOps</h3>
              <p className="text-muted-foreground mb-6">Infrastructure cloud, déploiement automatisé et optimisation des performances.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Déploiement AWS, Azure, GCP</li>
                <li>• CI/CD avec GitHub Actions</li>
                <li>• Containerisation Docker</li>
                <li>• Monitoring et analytics</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">UX/UI Design</h3>
              <p className="text-muted-foreground mb-6">Design d'interface utilisateur moderne et expérience utilisateur optimisée.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prototypage Figma</li>
                <li>• Design systems</li>
                <li>• Tests utilisateurs</li>
                <li>• Optimisation conversion</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="group p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Consulting Digital</h3>
              <p className="text-muted-foreground mb-6">Accompagnement stratégique pour votre transformation digitale et vos choix technologiques.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Audit technique</li>
                <li>• Architecture logicielle</li>
                <li>• Stratégie digitale</li>
                <li>• Formation équipes</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="group p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Intelligence Artificielle</h3>
              <p className="text-muted-foreground mb-6">Intégration d'IA et automatisation pour optimiser vos processus métier.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Chatbots intelligents</li>
                <li>• Analyse de données</li>
                <li>• Machine Learning</li>
                <li>• Automatisation RPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-8 fade-in">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 slide-up" style={{animationDelay: '0.3s'}}>
            Discutons de votre projet et trouvons ensemble la meilleure solution.
          </p>
          <Link href="/contact">
            <Button className="gradient-bg hover:scale-105 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 glow-accent shadow-lg slide-up" style={{animationDelay: '0.6s'}}>
              Démarrer un projet
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}