import React from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  className = '',
  align = 'center'
}) => {
  return (
    <div className={`max-w-3xl mx-auto mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-[2.75rem] font-['Lexend'] font-medium text-primary mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-gray-600 font-body">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;