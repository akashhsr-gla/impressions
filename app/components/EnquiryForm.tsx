'use client';

import { useState } from 'react';
import SuccessModal from './SuccessModal';
import FormModal from './FormModal';

interface EnquiryFormProps {
  variant?: 'hero' | 'inline' | 'compact';
  whatsappNumber?: string;
}

export default function EnquiryForm({ variant = 'inline', whatsappNumber = '+919876543210' }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    contactNo: '',
    requirements: '',
    email: ''
  });
  const [errors, setErrors] = useState<{ contactNo?: string; requirements?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

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
    
    // Close form modal if open (for compact variant)
    if (variant === 'compact') {
      setShowFormModal(false);
    }
    
    // Show success modal
    setShowModal(true);
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

  if (variant === 'hero') {
    return (
      <>
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Raise an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contactNo-hero" className="block text-white font-medium mb-2">
                  Contact Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNo-hero"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit contact number"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  maxLength={10}
                />
                {errors.contactNo && (
                  <p className="mt-1 text-sm text-red-300">{errors.contactNo}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="requirements-hero" className="block text-white font-medium mb-2">
                  Requirements <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="requirements-hero"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all resize-none"
                />
                {errors.requirements && (
                  <p className="mt-1 text-sm text-red-300">{errors.requirements}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email-hero" className="block text-white font-medium mb-2">
                  Email <span className="text-slate-400 text-sm">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email-hero"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email}</p>
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
          </div>
        </div>
        
        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  if (variant === 'compact') {

    return (
      <>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Enquiry</h3>
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setShowFormModal(true)}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-left text-slate-600 hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer font-medium"
            >
              <span className="text-black">Contact Number *</span>
            </button>
            
            <button
              type="button"
              onClick={() => setShowFormModal(true)}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-left text-slate-600 hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer font-medium min-h-[80px] flex items-start"
            >
              <span className="text-black">Requirements *</span>
            </button>
            
            <button
              type="button"
              onClick={() => setShowFormModal(true)}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 bg-white text-left text-slate-600 hover:border-red-500 hover:bg-red-50 transition-all cursor-pointer font-medium"
            >
              <span className="text-black">Email (Optional)</span>
            </button>
            
            <button
              type="button"
              onClick={() => setShowFormModal(true)}
              className="w-full bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
        
        <FormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="contactNo-compact" className="block text-slate-900 font-semibold mb-2">
                Contact Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="contactNo-compact"
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
              <label htmlFor="requirements-compact" className="block text-slate-900 font-semibold mb-2">
                Requirements <span className="text-red-600">*</span>
              </label>
              <textarea
                id="requirements-compact"
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
              <label htmlFor="email-compact" className="block text-slate-900 font-semibold mb-2">
                Email <span className="text-slate-500 text-sm font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="email-compact"
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
        
        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  // Default inline variant
  return (
    <>
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-xl p-8 border border-slate-200">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">Raise an Enquiry</h3>
        <p className="text-slate-600 text-center mb-6">Get in touch with us for your branding needs</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contactNo" className="block text-slate-900 font-semibold mb-2">
              Contact Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Enter your 10-digit contact number"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              maxLength={10}
            />
            {errors.contactNo && (
              <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="requirements" className="block text-slate-900 font-semibold mb-2">
              Requirements <span className="text-red-600">*</span>
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your requirements in detail..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
            />
            {errors.requirements && (
              <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-slate-900 font-semibold mb-2">
              Email <span className="text-slate-500 text-sm font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
      </div>
      
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

