import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";

interface AnimatedTextProps {
  textOptions: string[];
  className?: string;
  typingSpeed?: number;
  changeInterval?: number;
}

export function AnimatedText({ 
  textOptions, 
  className = "", 
  typingSpeed = 100, 
  changeInterval = 4000 
}: AnimatedTextProps) {
  const { t } = useLanguage();
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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
      }, typingSpeed);
      
      return typeInterval;
    };
    
    // Initial typewriter effect
    const initialTimeout = setTimeout(() => {
      typewriterEffect(currentText);
    }, 500);
    
    // Set up interval for changing text
    const changeTextInterval = setInterval(() => {
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
    }, changeInterval);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(changeTextInterval);
    };
  }, [textOptions, t, typingSpeed, changeInterval]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-1 h-12 md:h-16 bg-cyan-300 ml-1 typewriter-cursor">|</span>
    </span>
  );
}