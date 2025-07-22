import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { scrollToSection, formatAnimationDelay } from "@/lib/utils";
import { ANIMATION_DELAYS } from "@/lib/constants";

export default function Home() {
  const { t, language } = useLanguage();
  const [currentText, setCurrentText] = useState("digitales");
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const textOptions = ["digitales", "technologiques", "innovantes", "numériques"];
  
  // Images for the background slider
  const backgroundImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Team meeting
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Business team
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Modern office
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // Professional woman
  ];
  
  useEffect(() => {
    const typewriterEffect = (text: string) => {
      setIsTyping(true);
      setDisplayText("");
      const translatedText = t(`text.${text}`);
      
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < translatedText.length) {
          setDisplayText(prev => prev + translatedText.charAt(i));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 100);
      
      return typeInterval;
    };
    
    // Initial typewriter effect
    const initialTimeout = setTimeout(() => {
      typewriterEffect(currentText);
    }, 500);
    
    // Set up interval for changing text
    const changeInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = textOptions.indexOf(prev);
        const newText = textOptions[(currentIndex + 1) % textOptions.length];
        
        // Clear current text with backspace effect
        let currentDisplay = t(`text.${prev}`);
        const eraseInterval = setInterval(() => {
          if (currentDisplay.length > 0) {
            currentDisplay = currentDisplay.slice(0, -1);
            setDisplayText(currentDisplay);
          } else {
            clearInterval(eraseInterval);
            // Start typing new text after a brief pause
            setTimeout(() => {
              typewriterEffect(newText);
            }, 200);
          }
        }, 50);
        
        return newText;
      });
    }, 4000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(changeInterval);
    };
  }, [language]); // Re-run when language changes
  
  // Background image slider effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(slideInterval);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004767]/90 via-[#004767]/70 to-[#004767]/50"></div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide(prev => prev === 0 ? backgroundImages.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Image précédente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % backgroundImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Image suivante"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-left max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight fade-in">
              {t("hero.title")}{' '}
              <span className="text-cyan-300 font-light italic">
                {displayText}
                <span className="inline-block w-1 h-12 md:h-16 bg-cyan-300 ml-1 typewriter-cursor">|</span>
              </span>{' '}
              <br />
              <span className="text-cyan-300">{t("hero.title.end")}</span>
            </h1>
            <p className="text-xl text-white/90 mb-12 leading-relaxed slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.short)}}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.medium)}}>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("hero.cta")}
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#004767] px-8 py-4 text-lg rounded-md transition-all duration-300"
              >
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-300' : 'bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Service Cards Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#004767]/95 backdrop-blur-sm p-6 rounded-lg border border-cyan-300/20 hover:bg-[#004767] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#004767]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Expertise technique</h3>
                    <p className="text-cyan-300 text-sm">À la pointe de la technologie</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#004767]/95 backdrop-blur-sm p-6 rounded-lg border border-cyan-300/20 hover:bg-[#004767] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#004767]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Expérience personnalisée</h3>
                    <p className="text-cyan-300 text-sm">Chaque projet est unique</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#004767]/95 backdrop-blur-sm p-6 rounded-lg border border-cyan-300/20 hover:bg-[#004767] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#004767]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Service de qualité</h3>
                    <p className="text-cyan-300 text-sm">Clients satisfaits à l'international</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-light text-foreground dark:text-foreground mb-4">
              {t("home.features.title")}
            </h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
              {t("home.features.subtitle1")}
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto mt-4">
              {t("home.features.subtitle2")}
            </p>
          </div>
        </div>
      </section>

      {/* Device Icons Section */}
      <section className="py-16 px-6 bg-gradient-secondary dark:bg-gradient-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-blue-50/30 dark:from-slate-800/30 dark:to-slate-700/30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-xl font-light text-foreground dark:text-foreground mb-8 fade-in">
              {t("home.devices.title")}
            </h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center pulse-subtle shadow-lg hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v16h10V4H7z"/>
                </svg>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center pulse-subtle shadow-lg hover:scale-110 transition-transform duration-300" style={{animationDelay: '1s'}}>
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6l2 2h2v2H6v-2h2l2-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v10h16V6H4z"/>
                </svg>
              </div>
              <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center pulse-subtle shadow-lg hover:scale-110 transition-transform duration-300" style={{animationDelay: '2s'}}>
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-6 italic slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.short)}}>
              {t("home.devices.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-background dark:bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary mb-8 leading-tight">
              {t("home.about.title")}
            </h2>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
              {t("home.process.title")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg glow-accent group-hover:shadow-xl">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary mb-2 fade-in">{t("home.process.item1.title")}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm slide-up">{t("home.process.item1.desc")}</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg glow-accent group-hover:shadow-xl">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary mb-2 fade-in">{t("home.process.item2.title")}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm slide-up">{t("home.process.item2.desc")}</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 gradient-bg rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg glow-accent group-hover:shadow-xl">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary dark:text-primary mb-2 fade-in">{t("home.process.item3.title")}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground text-sm slide-up">{t("home.process.item3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-cyan-50/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-blue-300/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-cyan-300/10 to-teal-300/10 rounded-full blur-2xl floating" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight fade-in">
              {t("home.about.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.short)}}>
              {t("home.about.desc1")}
            </p>
            <div className="space-y-4">
              <p className="text-lg slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.medium)}}>
                <strong className="gradient-text text-2xl">{t("home.about.desc2")}</strong>
              </p>
              <p className="text-lg slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.long)}}>
                <strong className="gradient-text text-xl">{t("home.about.desc3")}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full floating"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full floating" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 fade-in">
              {t("home.contact.title")}
            </h2>
            <Button 
              onClick={() => scrollToSection("contact-form")}
              className="gradient-bg hover:scale-105 text-white px-8 py-4 text-lg rounded-md mb-16 transition-all duration-300 glow-accent shadow-lg slide-up"
              style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.short)}}
            >
              {t("hero.cta")}
            </Button>
          </div>
          
          <div id="contact-form" className="max-w-2xl mx-auto slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.medium)}}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/10 to-transparent"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-8 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-8 right-1/3 w-16 h-16 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-lg floating" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
            <div className="space-y-4 fade-in">
              <div className="font-bold text-xl gradient-text">TimeToTech</div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>{t("footer.company")}</p>
                <p>{t("footer.location")}</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-sm slide-up">
              <a href="#services" className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                Nos services
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                À propos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-muted-foreground italic fade-in" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.short)}}>
              "Plus que toute autre invention, la technologie a transformé la conscience humaine."
            </p>
            <p className="text-xs text-muted-foreground mt-2 slide-up" style={{animationDelay: formatAnimationDelay(ANIMATION_DELAYS.medium)}}>TimeToTech</p>
          </div>
        </div>
      </footer>
    </div>
  );
}