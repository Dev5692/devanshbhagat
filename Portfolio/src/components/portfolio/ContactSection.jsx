import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-20"
        >
          <div>
            <p className="text-[#c9a227] tracking-[0.3em] uppercase text-xs mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8">
              Let's create
              <br />
              <span className="italic">something great</span>
            </h2>
            <p className="text-[#666] leading-relaxed mb-12 max-w-md">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              work together to bring your ideas to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-[#1a1a1a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-[#999] uppercase tracking-wider">Email</p>
                  <p className="text-[#1a1a1a]">bhagat.devansh@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-[#1a1a1a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-[#999] uppercase tracking-wider">Phone</p>
                  <p className="text-[#1a1a1a]">+1 (925) 499-6823</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#faf9f6] rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-[#1a1a1a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-[#999] uppercase tracking-wider">Location</p>
                  <p className="text-[#1a1a1a]">San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Name</label>
                <Input 
                  //placeholder="Your name"
                  className="border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-[#1a1a1a] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Email</label>
                <Input 
                  type="email"
                  //placeholder="your@email.com"
                  className="border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-[#1a1a1a] transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Subject</label>
              <Input 
                //placeholder="Project inquiry"
                className="border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-[#1a1a1a] transition-colors"
              />
            </div>
            
            <div>
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Message</label>
              <Textarea 
                placeholder="Tell me about your project..."
                rows={5}
                className="border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-[#1a1a1a] transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit"
              className="mt-8 bg-[#1a1a1a] hover:bg-[#333] text-white px-8 py-6 rounded-none text-sm tracking-wider uppercase group"
            >
              Send Message
              <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}