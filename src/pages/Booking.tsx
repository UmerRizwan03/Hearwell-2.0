import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Lock, CalendarCheck } from 'lucide-react';
import { FadeIn, SectionReveal } from '../components/Motion';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('Hearing Test');
  const [selectedLocation, setSelectedLocation] = useState('Perumbavoor');

  const services = ['Hearing Test', 'Speech Therapy', 'Hearing Aids', 'Pediatric Service'];
  const locations = ['Perumbavoor', 'Perinjanam'];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Book Appointment" 
        subtitle="Schedule your visit in minutes. Quick, convenient, and patient-focused."
        image="/images/clinic-interior.png"
      />

      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mx-auto bg-white modern-card relative overflow-hidden rounded-[32px] p-8 md:p-12 shadow-md border border-gray-100">
            
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Section 1: Patient Info */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#4A908F]/10 text-[#4A908F] flex items-center justify-center text-sm">1</span> 
                  Patient Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-[#4A908F]/50 focus:border-[#4A908F] p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
                    <input type="number" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-[#4A908F]/50 focus:border-[#4A908F] p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-[#4A908F]/50 focus:border-[#4A908F] p-3.5 transition-colors duration-300 outline-none" required />
                  </div>
                </div>
              </div>

              {/* Section 2: Service */}
              <div className="mb-12 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#4A908F]/10 text-[#4A908F] flex items-center justify-center text-sm">2</span> 
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
                        ? 'bg-[#4A908F] text-white border-[#4A908F] shadow-sm scale-[1.02]' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-[#4A908F]/30 hover:bg-gray-50'
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
                  <span className="w-8 h-8 rounded-full bg-[#4A908F]/10 text-[#4A908F] flex items-center justify-center text-sm">3</span> 
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
                        ? 'bg-[#4A908F]/5 border-[#4A908F] text-[#4A908F] scale-[1.02]'
                        : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 4: Date */}
              <div className="mb-12">
                 <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#4A908F]/10 text-[#4A908F] flex items-center justify-center text-sm">4</span> 
                  Preferred Date
                </h3>
                <div>
                  <input type="date" className="w-full md:w-1/2 bg-gray-50 border border-gray-200 text-gray-800 rounded-xl focus:ring-2 focus:ring-[#4A908F]/50 focus:border-[#4A908F] p-3.5 transition-colors duration-300 outline-none" required />
                </div>
              </div>

              {/* Submit Area */}
              <div className="flex flex-col items-center pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-6">
                  <Lock size={16} className="text-[#4A908F]" /> Secure & Confidential
                </div>
                
                <button 
                  type="submit"
                  className="w-full shadow-lg shadow-[#4A908F]/20 text-white bg-[#4A908F] hover:bg-[#4A908F]/90 focus:ring-4 focus:outline-none focus:ring-[#4A908F]/50 font-bold rounded-full text-lg px-8 py-5 text-center flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
                >
                  <CalendarCheck size={24} /> Confirm Appointment Request
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center max-w-sm">Our team will call you shortly to confirm the exact time of your appointment.</p>
              </div>

            </form>

          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Booking;
