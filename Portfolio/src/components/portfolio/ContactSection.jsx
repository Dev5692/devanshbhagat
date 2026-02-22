import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const response = await fetch('/', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
    }
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
                  <p className="text-[#1a1a1a]">+1 (925) 499 6823</p>
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
            data-netlify="true"
            name="contact"
            className="grid grid-cols-2 gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Name</label>
              <input 
                name="name"
                required
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 transition-colors bg-transparent focus:border-[#1a1a1a]"
              />
            </div>

            <div>
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Email</label>
              <input 
                name="email"
                type="email"
                required
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 transition-colors bg-transparent focus:border-[#1a1a1a]"
              />
            </div>

            <div className="col-span-2">
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Subject</label>
              <input 
                name="subject"
                required
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 transition-colors bg-transparent focus:border-[#1a1a1a]"
              />
            </div>

            <div className="col-span-2">
              <label className="text-xs text-[#999] uppercase tracking-wider mb-2 block">Message</label>
              <textarea 
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                required
                style={{ outline: 'none', boxShadow: 'none' }}
                className="w-full border-0 border-b border-[#e5e5e5] rounded-none px-0 py-3 transition-colors resize-none bg-transparent focus:border-[#1a1a1a]"
              />
            </div>

              {status === 'success' && (
                <p className="col-span-2 text-green-600 text-sm">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="col-span-2 text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}

              <div className="col-span-2">
                <button 
                  type="submit"
                  className="border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2"
                >
                  Send Message
                  <ArrowUpRight size={14} />
                </button>
              </div>

            </motion.form>       
            </motion.div>
      </div>
    </section>
  );
}