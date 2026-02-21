import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="relative">
            <div className="aspect-[4/5] bg-[#f5f5f5] rounded-sm overflow-hidden">
              <img
                src="/Devansh.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c9a227] opacity-10 rounded-sm" />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight">
                Passionate about
                <br />
                <span className="italic">meaningful design</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#666] leading-relaxed">
              <p>
                With over 8 years of experience in digital design and development, 
                I've had the privilege of working with startups and established brands 
                to bring their visions to life.
              </p>
              <p>
                My approach combines strategic thinking with aesthetic sensibility, 
                ensuring every project not only looks beautiful but serves its intended 
                purpose effectively.
              </p>
            </div>

            <div className="pt-4 flex gap-12">
              <div>
                <p className="text-4xl font-light text-[#1a1a1a]">50+</p>
                <p className="text-sm text-[#999] mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#1a1a1a]">8</p>
                <p className="text-sm text-[#999] mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#1a1a1a]">30+</p>
                <p className="text-sm text-[#999] mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}