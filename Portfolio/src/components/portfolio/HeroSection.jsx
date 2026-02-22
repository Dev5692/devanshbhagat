import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 bg-[#faf9f6]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
       className="absolute top-14 left-10"
      >
       <img src="/logo.png" alt="Devansh Bhagat" className="h-20 w-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#c9a227] tracking-[0.3em] uppercase text-sm mb-6 font-medium"
        >
          Designer & Developer
        </motion.p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a] tracking-tight leading-[1.1]">
          Creating digital
          <br />
          <span className="italic font-normal">experiences</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-[#666] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          I craft thoughtful digital products that blend aesthetics with functionality, 
          creating memorable experiences that resonate.
        </motion.p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToWork}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-[#1a1a1a] hover:text-[#c9a227] transition-colors duration-500 cursor-pointer"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[#e5e5e5] rounded-full opacity-50" />
      <div className="absolute bottom-32 right-16 w-32 h-32 border border-[#e5e5e5] rounded-full opacity-30" />
    </section>
  );
}