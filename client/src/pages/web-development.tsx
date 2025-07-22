import { Navigation } from "@/components/navigation";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-cyan-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Développement Web</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Applications web modernes, performantes et sur mesure
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-primary dark:text-primary mb-6">Technologies Modernes</h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                Nous développons des applications web avec les dernières technologies pour garantir 
                performance, sécurité et évolutivité.
              </p>
              <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>React, Vue.js, Angular - Frameworks frontend</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Node.js, Python, PHP - Backend robuste</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Progressive Web Apps (PWA)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>API REST et GraphQL</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-slate-800/50 dark:to-slate-700/50 p-8 rounded-2xl slide-up">
              <div className="text-center">
                <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto glow-accent">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">Performance Optimale</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Applications optimisées pour la vitesse et l'expérience utilisateur
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Sites Vitrines</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Sites web élégants et responsive pour présenter votre entreprise
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Design moderne et responsive</li>
                <li>• Optimisation SEO</li>
                <li>• Temps de chargement rapide</li>
                <li>• CMS intégré</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">E-commerce</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Boutiques en ligne complètes avec gestion des commandes
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Panier et paiement sécurisé</li>
                <li>• Gestion des stocks</li>
                <li>• Interface d'administration</li>
                <li>• Intégrations tierces</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Applications Web</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Plateformes métier sur mesure pour optimiser vos processus
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Interface utilisateur intuitive</li>
                <li>• Base de données performante</li>
                <li>• Authentification sécurisée</li>
                <li>• Tableaux de bord analytiques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Notre Processus</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Une méthodologie éprouvée pour des résultats garantis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'Étude de vos besoins et définition du projet' },
              { step: '02', title: 'Design', desc: 'Création des maquettes et prototypes' },
              { step: '03', title: 'Développement', desc: 'Codage et intégration des fonctionnalités' },
              { step: '04', title: 'Déploiement', desc: 'Mise en ligne et formation' }
            ].map((item, index) => (
              <div 
                key={item.step}
                className="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}