import React from 'react';
import { motion } from 'framer-motion';

interface StoryCardProps {
  name: string;
  period: string;
  description: string;
  quote: string;
  index: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({ name, period, description, quote, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-stone-50 p-8 rounded-lg shadow-sm border border-stone-200 hover:shadow-xl hover:border-amber-200 transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-serif text-amber-900 font-medium">{name}</h3>
        <span className="text-sm font-sans text-stone-500 bg-stone-100 px-3 py-1 rounded-full">{period}</span>
      </div>
      <p className="text-stone-700 leading-relaxed mb-6 font-light">
        {description}
      </p>
      <div className="relative pt-4 border-t border-stone-200 italic text-stone-600">
        <span className="absolute -top-3 left-4 bg-stone-50 px-2 text-2xl text-amber-600 font-serif">“</span>
        {quote}
      </div>
    </motion.div>
  );
};
