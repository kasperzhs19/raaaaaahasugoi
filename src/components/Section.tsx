import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-gray-900">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">{subtitle}</p>}
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>
        {children}
      </motion.div>
    </section>
  );
};
