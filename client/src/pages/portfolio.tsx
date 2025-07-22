import { Navigation } from "@/components/navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/20 to-indigo-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Nos Réalisations</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Découvrez nos projets réalisés avec passion et expertise
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-purple-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">E-Shop Mode</h3>
                  <p className="text-sm opacity-90">Boutique en ligne</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et interface d'administration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Stripe</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2024</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 to-teal-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">GreenTech App</h3>
                  <p className="text-sm opacity-90">Application mobile</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Application mobile pour le suivi écologique avec géolocalisation et gamification.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Firebase</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Maps</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2024</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-red-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">RestauPlus</h3>
                  <p className="text-sm opacity-90">Plateforme restaurant</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Système de gestion complet pour restaurants avec commandes en ligne et livraisons.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Vue.js</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Laravel</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">MySQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2023</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/80 to-purple-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">EduConnect</h3>
                  <p className="text-sm opacity-90">Plateforme éducative</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Plateforme d'apprentissage en ligne avec cours interactifs et suivi des progrès.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Angular</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Django</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">PostgreSQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2023</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-blue-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">FinanceFlow</h3>
                  <p className="text-sm opacity-90">Dashboard financier</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Tableau de bord analytique pour la gestion financière avec visualisations avancées.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">D3.js</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Python</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2023</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 to-cyan-600/80"></div>
                <div className="relative z-10 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">MedCare</h3>
                  <p className="text-sm opacity-90">Application santé</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                  Application de gestion médicale avec prise de rendez-vous et dossiers patients.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">MongoDB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground dark:text-muted-foreground">2022</span>
                  <button className="text-primary dark:text-primary hover:underline text-sm font-medium">Voir le projet →</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Nos Résultats</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Des chiffres qui témoignent de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projets réalisés' },
              { number: '98%', label: 'Clients satisfaits' },
              { number: '24h', label: 'Support réactif' },
              { number: '5★', label: 'Note moyenne' }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="text-4xl font-bold text-primary dark:text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}