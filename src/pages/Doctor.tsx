import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInRight, defaultViewport, animatedDivider } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';

const Doctor = () => {
  return (
    <div className="bg-white">
      {/* Typography-First Clinical Profile Header */}
      <section className="relative isolate pt-6 pb-16 lg:pt-16 lg:pb-24 bg-[#F8FAF9] border-b border-gray-100">
        <motion.div 
          variants={animatedDivider} 
          initial="hidden" 
          animate="visible" 
          className="absolute top-0 left-0 w-full h-[1px] bg-gray-200"
        />
        
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            
            {/* Left: Name & Title */}
            <div className="lg:w-7/12">
              <MicroLabel label="Lead Audiologist & Speech Therapist" />
              <motion.h1 
                variants={heroItem} 
                className="text-5xl md:text-7xl lg:text-[5rem] font-sans font-medium text-gray-900 tracking-tighter leading-none"
              >
                Ms. Babitha Fazal
              </motion.h1>
            </div>
            
            {/* Right: Clinical Credentials Summary */}
            <div className="lg:w-4/12">
              <motion.div variants={heroItem} className="border-l border-gray-200 pl-6 pb-2">
                <p className="text-lg text-gray-600 font-sans font-medium leading-relaxed">
                  Dedicated to delivering precision diagnostics and compassionate therapy drawn from over 16 years of clinical excellence.
                </p>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </section>

      <SectionReveal className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: Portrait & Credentials */}
            <div className="w-full lg:w-5/12">
              <FadeScaleIn>
                <div className="bg-gray-100 rounded-[32px] aspect-[3/4] mb-8 overflow-hidden relative shadow-lg">
                  <OptimizedImage src="/images/doctor.png" alt="Ms. Babitha Fazal" aspectRatio="3/4" />
                </div>
              </FadeScaleIn>

              <FadeIn>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Credentials</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-24">Degree:</span> BASLP
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-24">Institution:</span> AWH Special College
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold min-w-24">Year:</span> 2010
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn>
                <Link to="/booking" className="btn-primary w-full">
                  <Calendar size={20} /> Book an Appointment
                </Link>
              </FadeIn>
            </div>

            {/* Right: Experience Timeline & Bio */}
            <motion.div 
              className="w-full lg:w-7/12 pt-4"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <StaggerContainer className="grid grid-cols-2 gap-6 mb-12">
                <StaggerItem className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">16</p>
                  <p className="text-gray-800 font-semibold">Years Total Experience</p>
                </StaggerItem>
                <StaggerItem className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">10+</p>
                  <p className="text-gray-800 font-semibold">Years as Specialist</p>
                </StaggerItem>
              </StaggerContainer>

              <FadeIn>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Professional Journey</h3>
              </FadeIn>
              
              <StaggerContainer className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                
                {/* Timeline Item 1 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 group-[.is-active]:bg-primary text-gray-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-white shadow-sm card-hover-glow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-800">Present</div>
                      <time className="font-medium text-primary">2014 - Present</time>
                    </div>
                    <div className="text-gray-600">Lead Audiologist at Hearwell Speech and Hearing Centre.</div>
                  </div>
                </StaggerItem>

                {/* Timeline Item 2 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm card-hover-glow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-800">Swaram Hearing Aid Centre</div>
                      <time className="font-medium text-gray-500">2011 - 2012</time>
                    </div>
                    <div className="text-gray-600">Audiologist</div>
                  </div>
                </StaggerItem>

                {/* Timeline Item 3 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 text-gray-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm card-hover-glow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-800">Al-Shifa Hospital</div>
                      <time className="font-medium text-gray-500">2010 - 2011</time>
                    </div>
                    <div className="text-gray-600">Audiologist</div>
                  </div>
                </StaggerItem>

              </StaggerContainer>
              
              <SectionDivider className="my-8" />

              <FadeIn>
                <div className="bg-gray-50 rounded-2xl p-8 relative">
                   <div className="absolute top-4 left-4 text-7xl text-primary/10 font-serif leading-none">"</div>
                   <p className="text-xl text-gray-700 italic font-serif font-medium relative z-10 leading-relaxed text-center">
                    My commitment is to restore the joy of sound and communication to every patient through personalized, expert care.
                   </p>
                </div>
              </FadeIn>

            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Doctor;
