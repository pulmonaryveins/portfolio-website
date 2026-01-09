import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const FloatingDock = ({ items = [], className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!Array.isArray(items) || items.length === 0) return null;
  
  return (
    <div className={cn("fixed top-0 left-0 right-0 z-50", className)}>
      <div className="pt-2 sm:pt-3 px-2 sm:px-4">
        <motion.div
          className={cn(
            "max-w-fit mx-auto flex items-center justify-center",
            isMobile ? "gap-1 rounded-xl px-2 py-2" : "gap-3 rounded-full px-4 py-2.5",
            "border border-gray-200 dark:border-gray-800",
            "bg-white/95 dark:bg-gray-950/95",
            "backdrop-blur-lg shadow-lg"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
        {items.map((item, index) => {
          if (!item || !item.icon) return null;
          
          return (
            <FloatingDockIcon 
              key={item.title || index} 
              title={item.title || ""} 
              icon={item.icon} 
              href={item.href || "#"}
              isMobile={isMobile}
            />
          );
        })}
        </motion.div>
      </div>
    </div>
  );
};

const FloatingDockIcon = ({ title, icon, href, isMobile }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (href && href !== "#") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center rounded-full",
        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900",
        "hover:shadow-md hover:scale-105 active:scale-95",
        "transition-all duration-200 cursor-pointer group relative",
        isMobile ? "w-10 h-10 min-w-[40px]" : "w-11 h-11"
      )}
      aria-label={title}
    >
      <div className={cn(
        "flex items-center justify-center text-black dark:text-white transition-transform group-hover:scale-110",
        isMobile ? "[&>svg]:w-[18px] [&>svg]:h-[18px]" : "[&>svg]:w-5 [&>svg]:h-5"
      )}>
        {icon}
      </div>
      {title && !isMobile && (
        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {title}
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-px border-4 border-transparent border-b-black dark:border-b-white"></span>
        </span>
      )}
    </a>
  );
};
