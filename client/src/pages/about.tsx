import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { useLanguage } from "@/components/language-provider";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-purple-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">{t("about.hero.title")}</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <div className="text-center fade-in">
              <h2 className="text-4xl font-bold text-primary dark:text-primary mb-8">Notre histoire</h2>
              <p className="text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed">
                TimeToTech est née d'une vision simple : <strong>démocratiser l'innovation technologique</strong> 
                pour toutes les entreprises, quelle que soit leur taille. Fondée par une équipe de développeurs 
                passionnés, notre agence s'est donnée pour mission de créer des solutions digitales sur mesure 
                qui respectent l'identité unique de chaque client.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-6 slide-up" style={{animationDelay: '0.3s'}}>
                <h3 className="text-2xl font-semibold text-primary">Notre philosophie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous croyons fermement que chaque entreprise mérite une solution technologique 
                  qui lui ressemble. Contrairement aux approches génériques, nous prenons le temps 
                  de comprendre vos besoins spécifiques, votre culture d'entreprise et vos objectifs 
                  à long terme.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre approche éthique nous différencie : transparence totale, respect de la 
                  propriété intellectuelle, et engagement vers des solutions durables et évolutives.
                </p>
              </div>

              <div className="space-y-6 slide-up" style={{animationDelay: '0.6s'}}>
                <h3 className="text-2xl font-semibold text-primary">Notre expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Avec plus de 10 ans d'expérience collective dans le développement web, mobile 
                  et cloud, notre équipe maîtrise les technologies les plus récentes tout en 
                  gardant une approche pragmatique centrée sur la valeur ajoutée.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  De la startup innovante à l'entreprise établie, nous adaptons notre méthodologie 
                  pour répondre aux défis spécifiques de chaque secteur d'activité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/20 to-purple-50/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 fade-in">Nos valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valeur 1 */}
            <div className="group text-center p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg mx-auto mb-6 flex items-center justify-center glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Transparence</h3>
              <p className="text-muted-foreground">
                Communication claire, pricing transparent, et collaboration ouverte à chaque étape du projet.
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="group text-center p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg mx-auto mb-6 flex items-center justify-center glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                Code de qualité, architecture robuste, et attention minutieuse aux détails dans chaque livrable.
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="group text-center p-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105">
              <div className="w-16 h-16 gradient-bg rounded-lg mx-auto mb-6 flex items-center justify-center glow-accent group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Veille technologique constante et adoption des meilleures pratiques pour rester à la pointe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 fade-in">Notre équipe</h2>
            <p className="text-xl text-muted-foreground slide-up" style={{animationDelay: '0.3s'}}>
              Des experts passionnés à votre service
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center slide-up" style={{animationDelay: '0.6s'}}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe multidisciplinaire rassemble des développeurs full-stack, des designers UX/UI, 
                des architectes cloud et des consultants en transformation digitale. Chaque membre apporte 
                son expertise unique pour créer des solutions complètes et innovantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6 slide-up" style={{animationDelay: '0.9s'}}>
                <h3 className="text-2xl font-semibold text-primary">Expertise technique</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Développement Frontend (React, Vue.js, Angular)</li>
                  <li>• Développement Backend (Node.js, Python, PHP)</li>
                  <li>• Mobile (React Native, Flutter)</li>
                  <li>• Cloud & DevOps (AWS, Azure, Docker)</li>
                  <li>• Design & UX/UI (Figma, Adobe Creative Suite)</li>
                </ul>
              </div>

              <div className="space-y-6 slide-up" style={{animationDelay: '1.2s'}}>
                <h3 className="text-2xl font-semibold text-primary">Certifications</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• AWS Certified Solutions Architect</li>
                  <li>• Google Cloud Professional</li>
                  <li>• Microsoft Azure Expert</li>
                  <li>• Certified Scrum Master (CSM)</li>
                  <li>• UX Design Certification (Nielsen Norman Group)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 to-blue-50/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-primary mb-8 fade-in">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-muted-foreground mb-8 slide-up" style={{animationDelay: '0.3s'}}>
            Découvrez comment TimeToTech peut accompagner votre transformation digitale.
          </p>
          <Link href="/contact">
            <Button className="gradient-bg hover:scale-105 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 glow-accent shadow-lg slide-up" style={{animationDelay: '0.6s'}}>
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}