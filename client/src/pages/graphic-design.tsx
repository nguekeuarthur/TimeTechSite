import { Navigation } from "@/components/navigation";

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/20 to-purple-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Design Graphique</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Créations visuelles qui marquent et captivent votre audience
            </p>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-primary dark:text-primary mb-6">Design qui Convertit</h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                Notre équipe de designers crée des visuels percutants qui reflètent votre identité 
                et engagent votre audience sur tous les supports.
              </p>
              <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Identité visuelle complète</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>UI/UX Design moderne</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Supports print et digital</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Illustrations sur mesure</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100/50 to-purple-100/50 dark:from-slate-800/50 dark:to-slate-700/50 p-8 rounded-2xl slide-up">
              <div className="text-center">
                <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto glow-accent">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                    <path d="M9 11l3 3 8-8M4 7l3 3"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">Design Centré Utilisateur</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Chaque création est pensée pour optimiser l'expérience utilisateur
                </p>
              </div>
            </div>
          </div>

          {/* Design Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Identité Visuelle</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Logo, charte graphique et déclinaisons pour une image de marque cohérente
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Création de logo unique</li>
                <li>• Charte graphique complète</li>
                <li>• Déclinaisons multi-supports</li>
                <li>• Guide d'utilisation</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Interfaces utilisateur intuitives et expériences optimisées
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Wireframes et prototypes</li>
                <li>• Design responsive</li>
                <li>• Tests utilisateurs</li>
                <li>• Système de design</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Communication Visuelle</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Supports de communication print et digital percutants
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Affiches et flyers</li>
                <li>• Bannières web</li>
                <li>• Réseaux sociaux</li>
                <li>• Presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Notre Processus Créatif</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              De l'idée à la réalisation, une approche structurée pour des résultats d'exception
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Brief', desc: 'Analyse de vos besoins et objectifs créatifs' },
              { step: '02', title: 'Concept', desc: 'Recherche créative et propositions de direction' },
              { step: '03', title: 'Création', desc: 'Réalisation des visuels et itérations' },
              { step: '04', title: 'Livraison', desc: 'Finalisation et remise des fichiers sources' }
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

      {/* Tools & Software */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Outils Professionnels</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Nous maîtrisons les meilleurs logiciels de création
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe XD',
              'Figma', 'Sketch', 'Canva Pro', 'Procreate',
              'After Effects', 'Premiere Pro', 'Blender', 'Cinema 4D'
            ].map((tool, index) => (
              <div 
                key={tool}
                className="p-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg text-center hover:scale-105 transition-all duration-300 slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="font-medium text-primary dark:text-primary text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}