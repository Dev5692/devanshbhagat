import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      onClick={() => navigate(`/project/${project.id}`)}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-[#f5f5f5] aspect-[4/3] rounded-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={18} className="text-[#1a1a1a]" />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-light text-[#1a1a1a] group-hover:text-[#c9a227] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-[#999] mt-1">{project.category}</p>
        </div>
        <span className="text-sm text-[#999]">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 px-6 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a]">
            Recent <span className="italic">projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}