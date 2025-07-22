import { Button } from "@/components/ui/button";
import { BackgroundSlider } from "@/components/background-slider";
import { AnimatedText } from "@/components/animated-text";
import { useLanguage } from "@/components/language-provider";
import { scrollToSection } from "@/lib/utils";

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

const TEXT_OPTIONS = ["digitales", "technologiques", "innovantes", "numériques"];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <BackgroundSlider 
      images={BACKGROUND_IMAGES} 
      className="min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight fade-in">
            {t("hero.title")}{' '}
            <AnimatedText 
              textOptions={TEXT_OPTIONS}
              className="text-cyan-300 font-light italic"
            />
            <br />
            <span className="text-cyan-300">{t("hero.title.end")}</span>
          </h1>
          <p className="text-xl text-white/90 mb-12 leading-relaxed slide-up" style={{animationDelay: '0.3s'}}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{animationDelay: '0.6s'}}>
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

      {/* Service Cards Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ServiceHighlight 
              icon="⭐"
              title="Expertise technique"
              subtitle="À la pointe de la technologie"
            />
            <ServiceHighlight 
              icon="✓"
              title="Expérience personnalisée"
              subtitle="Chaque projet est unique"
            />
            <ServiceHighlight 
              icon="✓"
              title="Service de qualité"
              subtitle="Clients satisfaits à l'international"
            />
          </div>
        </div>
      </div>
    </BackgroundSlider>
  );
}

interface ServiceHighlightProps {
  icon: string;
  title: string;
  subtitle: string;
}

function ServiceHighlight({ icon, title, subtitle }: ServiceHighlightProps) {
  return (
    <div className="bg-[#004767]/95 backdrop-blur-sm p-6 rounded-lg border border-cyan-300/20 hover:bg-[#004767] transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mr-4">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-cyan-300 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}