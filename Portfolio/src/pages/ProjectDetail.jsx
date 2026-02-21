import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/portfolio/Navigation';
import Footer from '@/components/portfolio/Footer';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf9f6]">
        <Navigation />
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-light text-[#1a1a1a] mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')} className="bg-[#1a1a1a] hover:bg-[#333] text-white">
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#666] hover:text-[#1a1a1a] transition-colors mb-12"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            <span>Back to projects</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              <p className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-4">{project.category}</p>
              <h1 className="text-5xl md:text-6xl font-light text-[#1a1a1a] mb-6">{project.title}</h1>
              {project.description && (
                <p className="text-lg text-[#666] leading-relaxed max-w-3xl">{project.description}</p>
              )}
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16 pb-12 border-b border-[#e5e5e5]">
              {project.client && (
                <div>
                  <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Client</p>
                  <p className="text-[#1a1a1a]">{project.client}</p>
                </div>
              )}
              {project.role && (
                <div>
                  <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Role</p>
                  <p className="text-[#1a1a1a]">{project.role}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Year</p>
                <p className="text-[#1a1a1a]">{project.year}</p>
              </div>
              {project.link && (
                <div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#1a1a1a] transition-colors">
                    <span className="text-xs uppercase tracking-wider">View Live</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>

            <div className="mb-16">
              <img src={project.image} alt={project.title} className="w-full rounded-sm shadow-lg" />
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-light text-[#1a1a1a] mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white border border-[#e5e5e5] text-[#666] text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-light text-[#1a1a1a] mb-6">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((img, index) => (
                    <img key={index} src={img} alt={`${project.title} gallery ${index + 1}`} className="w-full rounded-sm shadow-md" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}