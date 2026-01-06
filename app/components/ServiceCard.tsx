'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  images: string[];
  description?: string;
}

export default function ServiceCard({ title, images, description }: ServiceCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 hover:border-red-300 transform hover:-translate-y-2">
      {/* Image Carousel Container */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-slate-900">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Dots Indicator - only show if more than 1 image */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image counter badge */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full z-10">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}
        {/* Decorative line */}
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-red-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
    </div>
  );
}

