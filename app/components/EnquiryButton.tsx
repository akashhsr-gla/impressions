'use client';

import { useState } from 'react';
import FormModal from './FormModal';
import SuccessModal from './SuccessModal';

interface EnquiryButtonProps {
  whatsappNumber?: string;
  variant?: 'default' | 'floating' | 'inline';
  className?: string;
}

export default function EnquiryButton({ 
  whatsappNumber = '+919876543210', 
  variant = 'default',
  className = '' 
}: EnquiryButtonProps) {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    contactNo: '',
    requirements: '',
    email: ''
  });
  const [errors, setErrors] = useState<{ contactNo?: string; requirements?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { contactNo?: string; requirements?: string; email?: string } = {};
    
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^[0-9]{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Please enter a valid 10-digit contact number';
    }
    
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Requirements are required';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const message = `*New Enquiry*\n\n` +
      `*Contact Number:* ${formData.contactNo}\n` +
      `*Requirements:* ${formData.requirements}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : '') +
      `\n_Enquiry submitted from Impression Imaging website_`;
    
    // Clean WhatsApp number (remove + and spaces)
    const cleanNumber = whatsappNumber.replace(/[\s+-]/g, '');
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      contactNo: '',
      requirements: '',
      email: ''
    });
    
    setIsSubmitting(false);
    
    // Close form modal
    setShowFormModal(false);
    
    // Show success modal
    setShowSuccessModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // For contact number, only allow digits
    if (name === 'contactNo') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const buttonContent = (
    <button
      onClick={() => setShowFormModal(true)}
      className={`bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`}
    >
      Raise Enquiry
    </button>
  );

  if (variant === 'floating') {
    return (
      <>
        <button
          onClick={() => setShowFormModal(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-110 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span>Raise Enquiry</span>
        </button>

        <FormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contactNo-btn" className="block text-slate-900 font-semibold mb-2">
                Contact Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="contactNo-btn"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="Enter your 10-digit contact number"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-black"
                maxLength={10}
              />
              {errors.contactNo && (
                <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="requirements-btn" className="block text-slate-900 font-semibold mb-2">
                Requirements <span className="text-red-600">*</span>
              </label>
              <textarea
                id="requirements-btn"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Describe your requirements in detail..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none placeholder:text-black"
              />
              {errors.requirements && (
                <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email-btn" className="block text-slate-900 font-semibold mb-2">
                Email <span className="text-slate-500 text-sm font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="email-btn"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-black"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>
        </FormModal>

        <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      </>
    );
  }

  return (
    <>
      {buttonContent}

      <FormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contactNo-btn" className="block text-slate-900 font-semibold mb-2">
              Contact Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="contactNo-btn"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Enter your 10-digit contact number"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-black"
              maxLength={10}
            />
            {errors.contactNo && (
              <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="requirements-btn" className="block text-slate-900 font-semibold mb-2">
              Requirements <span className="text-red-600">*</span>
            </label>
            <textarea
              id="requirements-btn"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your requirements in detail..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none placeholder:text-black"
            />
            {errors.requirements && (
              <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email-btn" className="block text-slate-900 font-semibold mb-2">
              Email <span className="text-slate-500 text-sm font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email-btn"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all placeholder:text-black"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
      </FormModal>

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </>
  );
}

