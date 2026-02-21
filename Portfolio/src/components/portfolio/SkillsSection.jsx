import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code2, Lightbulb, Layers } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating distinctive visual identities that communicate your brand's essence and values.",
    number: "01"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building responsive, performant websites and applications with modern technologies.",
    number: "02"
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Developing comprehensive digital strategies that align with your business objectives.",
    number: "03"
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Crafting intuitive interfaces that delight users and drive meaningful engagement.",
    number: "04"
  }
];

const technologies = [
  "React", "Next.js", "TypeScript", "Figma", "Framer", "Tailwind CSS", 
  "Node.js", "Python", "Adobe Creative Suite", "Webflow"
];

function SkillCard({ skill, index, isInView }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-64 perspective-1000"
    >
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-full cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 bg-white border border-[#e5e5e5] rounded-sm p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <div>
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 bg-[#fafafa] rounded-full flex items-center justify-center">
                <skill.icon size={24} className="text-[#1a1a1a]" strokeWidth={1.5} />
              </div>
              <span className="text-sm text-[#e5e5e5] font-light">{skill.number}</span>
            </div>
            
            <h3 className="text-2xl font-light text-[#1a1a1a] mb-3">
              {skill.title}
            </h3>
          </div>
          
          <p className="text-[#999] text-xs tracking-[0.2em] uppercase">
            Click to explore →
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 bg-[#1a1a1a] rounded-sm p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <skill.icon size={32} className="text-white mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl font-light text-white mb-4">
              {skill.title}
            </h3>
            <p className="text-[#999] text-sm leading-relaxed">
              {skill.description}
            </p>
          </div>
          
          <p className="text-[#666] text-xs tracking-[0.2em] uppercase">
            ← Click to go back
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-[#999] tracking-[0.3em] uppercase text-xs mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
            What I <span className="italic">do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}