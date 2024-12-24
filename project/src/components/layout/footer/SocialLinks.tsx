import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';

const SocialLinks = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook', delay: 0 },
    { Icon: Instagram, href: '#', label: 'Instagram', delay: 150 },
    { Icon: Twitter, href: '#', label: 'Twitter', delay: 300 },
  ];

  return (
    <div 
      ref={ref}
      className="flex space-x-4"
    >
      {socialLinks.map(({ Icon, href, label, delay }) => (
        <a
          key={label}
          href={href}
          className={`p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300 group
                     transform ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: `${delay}ms` }}
          aria-label={label}
        >
          <Icon className="h-5 w-5 text-primary-light group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;