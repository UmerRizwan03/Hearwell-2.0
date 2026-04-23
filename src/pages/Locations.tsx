import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import { heroContainer, heroItem, animatedDivider } from '../utils/motion';
import { MicroLabel } from '../components/MicroLabel';
import SEO from '../components/SEO';

const Locations = () => {
  return (
    <div className="bg-white z-0 relative">
      <SEO
        title="Our Clinic Locations"
        description="Visit Hearwell Speech & Hearing Centre in Perumbavoor or Perinjanam, Kerala. Open Mon–Sat 9:00 AM to 5:30 PM."
        url="https://hearwell.com/locations"
      />
      {/* Typography-First Directory Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <MicroLabel label="Clinic Network" />
            
            <motion.h1 
              variants={heroItem} 
              className="editorial-heading font-sans font-medium mb-8"
            >
              Our <br />
              <span className="text-gray-400 font-normal">Centres.</span>
            </motion.h1>
            
            <motion.p 
              variants={heroItem} 
              className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance"
            >
              Find the nearest Hearwell clinic. Professional care is closer than you think.
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

      <SectionReveal className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Clinic 1: Perumbavoor */}
            <StaggerItem className="lg:col-span-7 bg-white modern-card relative overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <a href="https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Opp+Govt+Boys+Higher+Secondary+School+Ground+Hariharraiyyer+Road+Perumbavoor" target="_blank" rel="noreferrer" className="block h-72 relative overflow-hidden group/map bg-gray-50/50">
                {/* Modern Map Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-primary/5 to-primary/10"></div>
                {/* Interactive Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(29,84,79,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(29,84,79,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                
                {/* Pin Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover/map:-translate-y-3">
                  <div className="relative">
                    <div className="absolute -inset-5 bg-primary/10 rounded-full"></div>
                    <MapPin size={46} className="relative text-primary drop-shadow-xl group-hover/map:scale-110 transition-transform duration-300" fill="white" />
                  </div>
                  <span className="mt-6 px-6 py-2.5 bg-white/95 rounded-lg text-[11px] font-bold tracking-[0.25em] text-primary uppercase shadow-[0_4px_20px_-3px_rgba(29,84,79,0.2)] opacity-0 translate-y-4 group-hover/map:opacity-100 group-hover/map:translate-y-0 transition-all duration-300">
                    Open Map
                  </span>
                </div>
              </a>
              
              <div className="p-8 md:p-10 relative z-10 bg-white flex-grow flex flex-col">
                <h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-8">Hearwell Perumbavoor</h3>
                
                <div className="space-y-6 mb-10 flex-grow">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Opp. Govt. Boys Higher Secondary School Ground,<br/>
                      Hariharraiyyer Road, Perumbavoor
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div className="mt-1">
                      <p className="text-gray-600 font-medium">Mon – Sat (9:00 AM – 5:30 PM)</p>
                      <p className="text-gray-400 text-sm mt-1">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+919633626656" className="block text-gray-600 hover:text-primary font-medium transition-colors">+91 9633626656</a>
                      <a href="tel:+919947314906" className="block text-gray-600 hover:text-primary font-medium transition-colors">+91 9947314906</a>
                    </div>
                  </div>
                </div>

                <a href="https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Opp+Govt+Boys+Higher+Secondary+School+Ground+Hariharraiyyer+Road+Perumbavoor" target="_blank" rel="noreferrer" className="btn-ghost w-full py-4">
                  <Navigation size={18} /> GET DIRECTIONS
                </a>
              </div>
            </StaggerItem>

            {/* Clinic 2: Perinjanam */}
             <StaggerItem className="lg:col-span-5 bg-white modern-card relative overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:translate-y-16">
              <a href="https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Near+Vadakke+Bus+Stop+Perinjanam+Kerala+680686" target="_blank" rel="noreferrer" className="block h-56 relative overflow-hidden group/map bg-gray-50/50">
                {/* Modern Map Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-primary/5 to-primary/10"></div>
                {/* Interactive Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(29,84,79,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(29,84,79,0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                
                {/* Pin Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover/map:-translate-y-3">
                  <div className="relative">
                    <div className="absolute -inset-5 bg-primary/10 rounded-full"></div>
                    <MapPin size={46} className="relative text-primary drop-shadow-xl group-hover/map:scale-110 transition-transform duration-300" fill="white" />
                  </div>
                  <span className="mt-6 px-6 py-2.5 bg-white/95 rounded-lg text-[11px] font-bold tracking-[0.25em] text-primary uppercase shadow-[0_4px_20px_-3px_rgba(29,84,79,0.2)] opacity-0 translate-y-4 group-hover/map:opacity-100 group-hover/map:translate-y-0 transition-all duration-300">
                    Open Map
                  </span>
                </div>
              </a>
              
              <div className="p-8 md:p-10 relative z-10 bg-white flex-grow flex flex-col">
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">Hearwell Perinjanam</h3>
                
                <div className="space-y-6 mb-10 flex-grow">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-1">
                      Near Vadakke Bus Stop,<br/>
                      Perinjanam, Kerala 680686
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div className="mt-1">
                      <p className="text-gray-600 font-medium">Mon – Sat (9:00 AM – 5:30 PM)</p>
                      <p className="text-gray-400 text-sm mt-1">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+919633626656" className="block text-gray-600 hover:text-primary font-medium transition-colors">+91 9633626656</a>
                      <a href="tel:+919947314906" className="block text-gray-600 hover:text-primary font-medium transition-colors">+91 9947314906</a>
                    </div>
                  </div>
                </div>

                <a href="https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Near+Vadakke+Bus+Stop+Perinjanam+Kerala+680686" target="_blank" rel="noreferrer" className="btn-ghost w-full py-4">
                  <Navigation size={18} /> GET DIRECTIONS
                </a>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Locations;
