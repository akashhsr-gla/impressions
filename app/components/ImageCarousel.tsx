'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselImages = [
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.38 (1).jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.40 (1).jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.40.jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.41.jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.44.jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.46.jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.48 (2).jpeg',
  '/carousel/WhatsApp Image 2025-12-30 at 16.26.54 (1).jpeg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
      {/* Carousel Images */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

