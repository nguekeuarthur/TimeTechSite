import { Navigation } from "@/components/navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-50/30 to-white dark:from-slate-800/30 dark:to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-cyan-50/20 dark:from-slate-700/20 dark:to-slate-600/20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-primary mb-8 leading-tight fade-in">
              <span className="gradient-text italic">Contact</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto slide-up" style={{animationDelay: '0.3s'}}>
              Parlons de votre projet ensemble
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary dark:text-primary mb-8">Démarrons votre projet</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Entreprise
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Service souhaité *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors">
                    <option value="">Sélectionnez un service</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Développement Mobile</option>
                    <option value="design">Design Graphique</option>
                    <option value="consulting">Conseil Informatique</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground dark:text-foreground mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-background dark:bg-background text-foreground dark:text-foreground focus:ring-2 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full gradient-bg text-white py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 font-medium"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary dark:text-primary mb-8">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        123 Avenue de l'Innovation<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-foreground mb-1">Téléphone</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        +33 1 23 45 67 89
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        contact@timetotech.fr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground dark:text-foreground mb-1">Horaires</h3>
                      <p className="text-muted-foreground dark:text-muted-foreground">
                        Lun - Ven : 9h00 - 18h00<br />
                        Support 24h/7j
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary dark:text-primary mb-4">Contact rapide</h3>
                <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                  Besoin d'une réponse immédiate ? Contactez-nous directement :
                </p>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="currentColor">
                      <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.46-.01a.87.87 0 0 0-.64.3c-.22.25-.84.82-.84 2.01 0 1.19.86 2.34.98 2.5.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
                    </svg>
                    <span className="text-foreground dark:text-foreground font-medium">WhatsApp</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-center space-x-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:scale-105 transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                    </svg>
                    <span className="text-foreground dark:text-foreground font-medium">Instagram</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-50/30 to-white dark:from-slate-800/30 dark:to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary dark:text-primary text-center mb-12">Notre Localisation</h2>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-12 text-center">
            <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-primary mb-4">Au cœur de Paris</h3>
            <p className="text-muted-foreground dark:text-muted-foreground mb-6">
              Nos bureaux sont situés dans le quartier de l'innovation parisien, 
              facilement accessibles en transport en commun.
            </p>
            <button className="gradient-bg text-white px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300">
              Voir sur Google Maps
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}