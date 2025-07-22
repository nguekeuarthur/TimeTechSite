import { Navigation } from "@/components/navigation";

export default function Experts() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl floating" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Nos Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Une équipe de développeurs passionnés et expérimentés
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Notre Équipe</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
              Des experts passionnés qui donnent vie à vos projets digitaux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expert 1 */}
            <div className="group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto glow-accent group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2 text-center">Jean Sebastien</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 text-center font-medium">Lead Developer Frontend</p>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm text-center mb-4">
                Expert React, Vue.js et TypeScript avec 8 ans d'expérience dans le développement d'interfaces utilisateur modernes.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue.js</span>
              </div>
            </div>

            {/* Expert 2 */}
            <div className="group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto glow-accent group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">MC</span>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2 text-center">Marie Claire</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 text-center font-medium">Senior Backend Developer</p>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm text-center mb-4">
                Spécialiste Node.js, Python et architectures cloud avec une expertise en bases de données et APIs.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">AWS</span>
              </div>
            </div>

            {/* Expert 3 */}
            <div className="group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto glow-accent group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white font-bold">AD</span>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-2 text-center">Alexandre Dubois</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 text-center font-medium">Designer UI/UX</p>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm text-center mb-4">
                Créateur d'expériences utilisateur exceptionnelles avec une approche centrée sur l'humain et l'accessibilité.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Figma</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Adobe XD</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Nos Compétences</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Technologies et expertises maîtrisées par notre équipe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js',
              'Python', 'PHP', 'TypeScript', 'JavaScript',
              'AWS', 'Docker', 'MongoDB', 'PostgreSQL',
              'Figma', 'Adobe XD', 'Git', 'CI/CD'
            ].map((skill, index) => (
              <div 
                key={skill}
                className="p-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg text-center hover:scale-105 transition-all duration-300 slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="font-medium text-primary dark:text-primary">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}