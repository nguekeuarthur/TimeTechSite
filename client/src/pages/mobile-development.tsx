import { Navigation } from "@/components/navigation";

export default function MobileDevelopment() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Apps Mobile</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Applications natives et cross-platform pour iOS et Android
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Development Content */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-primary dark:text-primary mb-6">Développement Cross-Platform</h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                Créez une application pour iOS et Android avec un seul code source, 
                réduisant les coûts et accélérant le time-to-market.
              </p>
              <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>React Native - Performance native</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Flutter - UI fluide et moderne</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Ionic - Web technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>API REST intégrées</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-100/50 to-teal-100/50 dark:from-slate-800/50 dark:to-slate-700/50 p-8 rounded-2xl slide-up">
              <div className="text-center">
                <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto glow-accent">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                    <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v16h10V4H7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">Expérience Native</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Applications fluides avec l'apparence et les performances natives
                </p>
              </div>
            </div>
          </div>

          {/* App Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Apps E-commerce</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Boutiques mobiles avec paiement intégré et gestion des commandes
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Catalogue produits interactif</li>
                <li>• Paiement mobile sécurisé</li>
                <li>• Notifications push</li>
                <li>• Programme de fidélité</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Apps Métier</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Applications professionnelles pour optimiser les processus internes
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Gestion des tâches</li>
                <li>• Synchronisation offline</li>
                <li>• Géolocalisation</li>
                <li>• Reporting en temps réel</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Apps Sociales</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Plateformes communautaires avec chat et partage de contenu
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Messagerie instantanée</li>
                <li>• Partage multimédia</li>
                <li>• Profils utilisateurs</li>
                <li>• Système de likes/commentaires</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Fonctionnalités Avancées</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Technologies et intégrations pour des applications complètes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Notifications Push', 
                desc: 'Engagement utilisateur avec notifications personnalisées',
                icon: '🔔'
              },
              { 
                title: 'Géolocalisation', 
                desc: 'Services basés sur la localisation et cartes interactives',
                icon: '📍'
              },
              { 
                title: 'Mode Offline', 
                desc: 'Fonctionnement sans connexion avec synchronisation automatique',
                icon: '📱'
              },
              { 
                title: 'Authentification', 
                desc: 'Connexion sécurisée avec biométrie et OAuth',
                icon: '🔐'
              },
              { 
                title: 'Paiements Mobiles', 
                desc: 'Intégration Apple Pay, Google Pay et solutions tierces',
                icon: '💳'
              },
              { 
                title: 'Analytics', 
                desc: 'Suivi des performances et comportement utilisateur',
                icon: '📊'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground dark:text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}