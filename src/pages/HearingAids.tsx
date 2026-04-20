import { Bluetooth, BatteryCharging, BrainCircuit, Ear, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, animatedDivider } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';

const HearingAids = () => {
  return (
    <div className="bg-white">
      {/* Typography-First Clarity Spec Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9] border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl relative">
            {/* Absolute positioned tech spec label to frame the space */}
            <motion.div variants={heroItem} className="absolute -top-6 lg:-top-16 right-0 hidden md:block">
              <span className="font-mono text-[10px] text-gray-400 tracking-[0.3em] uppercase">SYS // TECH.VIEW_001</span>
            </motion.div>
            
            <MicroLabel label="Next Gen Solutions" />
            
            <motion.h1 
              variants={heroItem} 
              className="editorial-heading font-sans font-medium mb-8"
            >
              Advanced <br />
              <span className="text-gray-400 font-normal">Hearing Tech.</span>
            </motion.h1>
            
            <motion.p 
              variants={heroItem} 
              className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance"
            >
              Life-changing digital technology for clearer hearing, effortless connections, and better communication.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Structural animated divider */}
        <motion.div 
          variants={animatedDivider} 
          initial="hidden" 
          animate="visible" 
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200"
        />
      </section>

      <section className="py-24 lg:py-36 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <FadeScaleIn className="lg:col-span-7">
               <div className="bg-gray-50 rounded-lg aspect-[5/4] overflow-hidden shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)] border border-gray-100 p-8 md:p-14 flex items-center justify-center">
                  <OptimizedImage src="/images/hearing-aid.png" alt="Premium Hearing Aid" objectFit="contain" />
               </div>
             </FadeScaleIn>
             
             <FadeIn className="lg:col-span-5 lg:-ml-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-8">
                  <Ear size={24} />
                </div>
                <h2 className="section-heading mb-6">Cutting-edge Hearing Technology</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We offer a wide range of world-class digital hearing aids, including invisible-in-canal (IIC), behind-the-ear (BTE), and rechargeable models that sync with your smartphone.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {['Rechargeable Options', 'Smartphone Connectivity', 'Automatic Adjustments', 'Noise Reduction Technology'].map((feature, i) => (
                    <div key={i} className="flex gap-2 text-gray-700 font-medium">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                       <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/booking" className="btn-primary">
                  Book Consultation <ArrowRight size={18} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

      <SectionDivider />

      {/* The Hearwell Process */}
      <SectionReveal className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="mb-20 max-w-3xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Approach</h2>
            <h3 className="section-heading">The Hearwell Process</h3>
          </FadeIn>

          <StaggerContainer className="max-w-4xl relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-px before:bg-primary/20">
            
            {[
              { title: 'Comprehensive Hearing Test', desc: 'Detailed audiometric evaluation to understand your specific hearing profile.' },
              { title: 'Personalized Consultation & Selection', desc: 'Discussing lifestyle needs and matching you with the perfect device type (IIC, RIC, BTE).' },
              { title: 'Precision Fitting & Tuning', desc: 'Custom earmolds and advanced software tuning for optimal comfort and sound.' },
              { title: 'Ongoing Support & Care', desc: 'Regular check-ups, cleanings, and adjustments to ensure lasting performance.' }
             ].map((step, idx) => (
              <StaggerItem key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold shadow shrink-0 z-10 border-4 border-white">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-800 text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
            
          </StaggerContainer>
        </div>
      </SectionReveal>

      <SectionDivider />

      {/* Product Showcase */}
      <SectionReveal className="py-24 lg:py-36 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="mb-20 max-w-3xl">
            <h2 className="section-heading mb-5">Finding Your Perfect Fit</h2>
            <p className="quiet-copy max-w-2xl">A focused range of styles from industry-leading brands to suit comfort, lifestyle, and cosmetic preferences.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <StaggerItem className="bg-white modern-card card-hover-border relative overflow-hidden rounded-lg p-8 text-center shadow-sm border border-gray-100">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-6 flex items-center justify-center">
                <Ear size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">IIC Styles</h3>
              <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Invisible in the Canal</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Designed to fit completely inside the ear canal for ultimate discretion. Custom-molded for maximum comfort.</p>
            </StaggerItem>

            <StaggerItem className="bg-white modern-card card-hover-glow relative overflow-hidden rounded-lg p-8 text-center shadow-sm border border-primary/20 transform md:scale-105 z-10">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">MOST POPULAR</div>
              <div className="w-40 h-40 mx-auto bg-gray-100 rounded-full mb-6 flex items-center justify-center">
                <Ear size={56} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">RIC Styles</h3>
              <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Receiver in Canal</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Small, discreet, and powerful. The speaker rests directly in the ear canal for crisp, clear sound quality.</p>
            </StaggerItem>

            <StaggerItem className="bg-white modern-card card-hover-lift relative overflow-hidden rounded-lg p-8 text-center shadow-sm border border-gray-100">
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-6 flex items-center justify-center">
                <Ear size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">BTE Styles</h3>
              <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-wider">Behind The Ear</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Durable and powerful, suitable for severe to profound hearing loss. Houses all technology in a case behind the ear.</p>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Technology Badges */}
      <SectionReveal className="py-20 lg:py-24">
         <div className="container mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Powered by Advanced Technologies</h2>
            </FadeIn>
            <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              
              <StaggerItem className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg shadow-sm card-hover-border">
                <Bluetooth className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">Bluetooth Connectivity</span>
              </StaggerItem>
              
              <StaggerItem className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg shadow-sm card-hover-border">
                <BatteryCharging className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">Rechargeable Options</span>
              </StaggerItem>

               <StaggerItem className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg shadow-sm card-hover-border">
                <BrainCircuit className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">AI Noise Reduction</span>
              </StaggerItem>
              
              <StaggerItem className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-lg shadow-sm card-hover-border">
                <Ear className="text-primary" size={24} />
                <span className="font-semibold text-gray-700">Directional Microphones</span>
              </StaggerItem>

            </StaggerContainer>
         </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="bg-primary-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">Take the first step towards better hearing</h2>
            <p className="text-white/90 text-xl mx-auto mb-10">Schedule a comprehensive hearing evaluation with our specialists.</p>
            <Link to="/booking" className="btn-white text-lg px-10">
              Book a Trial <ArrowRight size={20} />
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default HearingAids;
