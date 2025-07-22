import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  features, 
  className = "" 
}: ServiceCardProps) {
  return (
    <div className={`group p-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm border border-gray-200 dark:border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 glass-effect hover:scale-105 ${className}`}>
      <div className="w-16 h-16 gradient-bg rounded-lg flex items-center justify-center mb-6 glow-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary dark:text-primary mb-4">{title}</h3>
      <p className="text-muted-foreground dark:text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}