import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReviewsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      company: "Acme Corp",
      rating: 5,
      review: "Absolutely fantastic work. Delivered on time and exceeded expectations.",
      avatar: null
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCo",
      rating: 5,
      review: "Professional, creative, and easy to work with. Highly recommended!",
      avatar: null
    },
    {
      id: 3,
      name: "Mike Davis",
      role: "Founder",
      company: "StartupXYZ",
      rating: 5,
      review: "Transformed our brand completely. The results speak for themselves.",
      avatar: null
    }
  ];

  const isLoading = false;

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[#999] tracking-[0.3em] uppercase text-xs mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">
            Client <span className="italic">reviews</span>
          </h2>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.round(averageRating) ? "fill-[#1a1a1a] text-[#1a1a1a]" : "text-[#e5e5e5]"}
                  />
                ))}
              </div>
              <span className="text-[#666] text-sm">
                {averageRating} ({reviews.length})
              </span>
            </div>
          )}
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-xl md:text-2xl text-[#1a1a1a] leading-relaxed mb-12 font-light">
                "{currentReview.review}"
              </p>

              <div className="flex items-center justify-center gap-4">
                {currentReview.avatar ? (
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                    <span className="text-[#1a1a1a] font-medium text-xl">
                      {currentReview.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-left">
                  <p className="font-medium text-[#1a1a1a]">{currentReview.name}</p>
                  <p className="text-sm text-[#666]">
                    {currentReview.role}{currentReview.company ? `, ${currentReview.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              onClick={prevReview}
              variant="outline"
              size="icon"
              className="rounded-full border-[#e5e5e5] hover:border-[#1a1a1a] hover:bg-white"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </Button>
            
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#1a1a1a] w-6' : 'bg-[#e5e5e5]'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextReview}
              variant="outline"
              size="icon"
              className="rounded-full border-[#e5e5e5] hover:border-[#1a1a1a] hover:bg-white"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}