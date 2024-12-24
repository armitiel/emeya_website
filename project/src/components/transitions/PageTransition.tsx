import React, { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [content, setContent] = useState(children);

  useEffect(() => {
    // Handle navigation events
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && !link.target && link.href) {
        e.preventDefault();
        setIsExiting(true);
        
        // Wait for exit animation to complete
        setTimeout(() => {
          window.location.href = link.href;
        }, 300); // Match the CSS animation duration
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  useEffect(() => {
    setContent(children);
  }, [children]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      {content}
    </div>
  );
};

export default PageTransition;