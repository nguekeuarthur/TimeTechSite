import { Navigation } from "@/components/navigation";

export default function ITConsulting() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-orange-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Conseil IT</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Expertise technique et stratégique pour transformer votre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-primary dark:text-primary mb-6">Accompagnement Stratégique</h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                Nos experts vous accompagnent dans votre transformation digitale avec une approche 
                sur mesure adaptée à vos enjeux métier et votre contexte technologique.
              </p>
              <ul className="space-y-3 text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Audit technique et sécurité</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Architecture système et cloud</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Migration et modernisation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Formation et accompagnement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100/50 to-amber-100/50 dark:from-slate-800/50 dark:to-slate-700/50 p-8 rounded-2xl slide-up">
              <div className="text-center">
                <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto glow-accent">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">Expertise Reconnue</h3>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Plus de 10 ans d'expérience dans l'accompagnement digital
                </p>
              </div>
            </div>
          </div>

          {/* Consulting Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Audit & Diagnostic</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Analyse complète de votre infrastructure et identification des axes d'amélioration
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Audit de sécurité</li>
                <li>• Performance système</li>
                <li>• Analyse des coûts</li>
                <li>• Recommandations prioritaires</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Architecture Cloud</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Conception et déploiement d'architectures cloud scalables et sécurisées
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• AWS, Azure, Google Cloud</li>
                <li>• Microservices</li>
                <li>• Containerisation Docker</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>

            <div className="p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Transformation Digitale</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-4">
                Stratégie globale pour digitaliser vos processus métier
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li>• Feuille de route digitale</li>
                <li>• Automatisation des processus</li>
                <li>• Intégration des systèmes</li>
                <li>• Conduite du changement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 bg-gradient-to-b from-orange-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Notre Méthodologie</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Une approche structurée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'Étude approfondie de votre contexte et besoins' },
              { step: '02', title: 'Stratégie', desc: 'Définition de la roadmap et des priorités' },
              { step: '03', title: 'Mise en œuvre', desc: 'Accompagnement dans la réalisation' },
              { step: '04', title: 'Suivi', desc: 'Monitoring et optimisation continue' }
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

      {/* Technologies */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Technologies Maîtrisées</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground">
              Expertise sur l'ensemble de l'écosystème technologique moderne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Cloud & Infrastructure</h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <div>AWS, Azure, Google Cloud</div>
                <div>Kubernetes, Docker</div>
                <div>Terraform, Ansible</div>
                <div>CI/CD, DevOps</div>
              </div>
            </div>

            <div className="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Développement</h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <div>JavaScript, Python, Java</div>
                <div>React, Vue.js, Angular</div>
                <div>Node.js, Django, Spring</div>
                <div>API REST, GraphQL</div>
              </div>
            </div>

            <div className="text-center p-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">Data & Sécurité</h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <div>PostgreSQL, MongoDB</div>
                <div>Elasticsearch, Redis</div>
                <div>OWASP, SSL/TLS</div>
                <div>RGPD, ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}