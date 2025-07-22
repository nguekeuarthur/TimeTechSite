import { Navigation } from "@/components/navigation";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-emerald-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Actualités, conseils et tendances du monde digital
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary dark:text-primary mb-8 text-center">Article à la Une</h2>
            
            <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4">L'IA Générative en 2025</h3>
                    <p className="opacity-90">Comment l'intelligence artificielle transforme le développement web</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">Technologie</span>
                    <span className="text-sm text-muted-foreground dark:text-muted-foreground">15 Janvier 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">
                    L'Intelligence Artificielle Générative : Révolution du Développement Web
                  </h3>
                  <p className="text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                    L'IA générative transforme radicalement la façon dont nous développons des applications web. 
                    De la génération de code à l'optimisation des interfaces utilisateur, découvrez comment 
                    ces technologies révolutionnent notre approche du développement...
                  </p>
                  <button className="text-primary dark:text-primary hover:underline font-medium">
                    Lire l'article complet →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-emerald-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary dark:text-primary mb-12 text-center">Derniers Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">React 19</h3>
                  <p className="text-sm opacity-90">Nouvelles fonctionnalités</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">React</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">10 Janvier 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  React 19 : Les Nouveautés qui Changent la Donne
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Découvrez les nouvelles fonctionnalités de React 19 qui simplifient le développement et améliorent les performances...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">Cybersécurité</h3>
                  <p className="text-sm opacity-90">Bonnes pratiques 2025</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs rounded-full">Sécurité</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">8 Janvier 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  Cybersécurité : 10 Règles d'Or pour 2025
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Les menaces évoluent, vos défenses aussi. Guide complet des meilleures pratiques de sécurité...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">UX Design</h3>
                  <p className="text-sm opacity-90">Tendances émergentes</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 text-xs rounded-full">Design</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">5 Janvier 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  UX Design : 5 Tendances qui Dominent 2025
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  De l'IA conversationnelle aux interfaces adaptatives, découvrez ce qui façonne l'UX moderne...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">Cloud Native</h3>
                  <p className="text-sm opacity-90">Architecture moderne</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">Cloud</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">3 Janvier 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  Architecture Cloud Native : Guide Complet
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Microservices, containers, Kubernetes : construisez des applications résilientes et scalables...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

            {/* Article 5 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">Performance</h3>
                  <p className="text-sm opacity-90">Optimisation web</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs rounded-full">Performance</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">1er Janvier 2025</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  Optimisation Web : Core Web Vitals 2025
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Techniques avancées pour améliorer les performances et l'expérience utilisateur...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

            {/* Article 6 */}
            <article className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-xl font-bold">Mobile First</h3>
                  <p className="text-sm opacity-90">Développement moderne</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 text-xs rounded-full">Mobile</span>
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground">30 Décembre 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-primary dark:text-primary mb-3">
                  Mobile-First : Plus Qu'une Tendance, Une Nécessité
                </h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                  Stratégies et outils pour créer des expériences mobiles exceptionnelles en 2025...
                </p>
                <button className="text-primary dark:text-primary hover:underline text-sm font-medium">
                  Lire plus →
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-primary dark:text-primary mb-4">
              Restez informé des dernières tendances
            </h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-8">
              Recevez nos articles directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="px-6 py-3 gradient-bg text-white rounded-lg hover:scale-105 transition-all duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}