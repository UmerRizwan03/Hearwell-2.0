import { useState } from 'react';
import { CalendarCheck, Lock, CheckCircle, Loader2, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SectionReveal } from '../components/Motion';
import { heroContainer, heroItem, animatedDivider } from '../utils/motion';
import { MicroLabel } from '../components/MicroLabel';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('Hearing Test');
  const [selectedLocation, setSelectedLocation] = useState('Perumbavoor');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const services = ['Hearing Test', 'Speech Therapy', 'Hearing Aids', 'Pediatric Service'];
  const locations = ['Perumbavoor', 'Perinjanam'];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Typography-First Action Utility Header */}
      <section className="relative isolate pt-6 pb-16 lg:pt-16 lg:pb-24 bg-[#F8FAF9]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <MicroLabel label="Patient Portal" />
            
            <motion.h1 
              variants={heroItem} 
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-medium text-gray-900 tracking-tighter leading-[1.05] mb-8"
            >
              Book an <br />
              <span className="text-gray-400 font-normal">Appointment.</span>
            </motion.h1>
            
            <motion.p 
              variants={heroItem} 
              className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance"
            >
              Take the first step toward better hearing and speech. Quick, convenient, and entirely patient-focused.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          variants={animatedDivider} 
          initial="hidden" 
          animate="visible" 
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"
        />
      </section>

      <SectionReveal className="pb-16 lg:pb-24 -mt-24 lg:-mt-36 relative z-20">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto bg-white modern-card relative overflow-hidden rounded-[32px] p-8 md:p-12 shadow-md border border-gray-100">
            
            {isSuccess ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Request Received!</h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
                  Thank you for choosing Hearwell. Our team will contact you shortly to confirm the exact time of your appointment.
                </p>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 inline-block text-left text-sm">
                  <p className="text-gray-500 mb-2"><strong className="text-gray-800 font-semibold mr-2">Service:</strong> {selectedService}</p>
                  <p className="text-gray-500"><strong className="text-gray-800 font-semibold mr-2">Location:</strong> {selectedLocation}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
              {/* Section 1: Patient Info */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span> 
                  Patient Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                    <input type="number" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                </div>
              </div>

              {/* Section 2: Service */}
              <div className="mb-12 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span> 
                  Select Service
                </h3>
                <div className="flex flex-wrap gap-3">
                  {services.map(service => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                        selectedService === service 
                        ? 'bg-primary text-white border-primary shadow-sm scale-[1.02]' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:bg-gray-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Location */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">3</span> 
                  Preferred Location
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {locations.map(loc => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setSelectedLocation(loc)}
                      className={`p-4 rounded-2xl text-center font-bold transition-all duration-300 border-2 ${
                        selectedLocation === loc
                        ? 'bg-primary/5 border-primary text-primary scale-[1.02]'
                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 4: Date — styled date picker */}
              <div className="mb-12">
                 <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">4</span> 
                  Preferred Date
                </h3>
                <div className="date-input-wrapper w-full md:w-1/2 relative">
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none z-10">
                    <CalendarDays size={20} />
                  </div>
                  <input 
                    type="date" 
                    required 
                    disabled={isSubmitting} 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary p-3.5 pr-12 transition-colors duration-300 outline-none disabled:opacity-70" 
                  />
                </div>
              </div>

              {/* Submit Area */}
              <div className="flex flex-col items-center pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6">
                  <Lock size={16} className="text-primary" /> Secure & Confidential
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-5 shadow-xl flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={24} className="animate-spin" /> Confirming...
                    </>
                  ) : (
                    <>
                      <CalendarCheck size={24} /> Confirm Appointment Request
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center max-w-sm">Our team will call you shortly to confirm the exact time of your appointment.</p>
              </div>

            </form>
            )}

          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Booking;
