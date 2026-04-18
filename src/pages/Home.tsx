import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { images } from '../utils/images';
import GoogleReviews from '../components/GoogleReviews';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-20 lg:pt-16 lg:pb-40 bg-white">
        {/* Abstract Background Waves */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <svg className="w-full h-full animate-float-slow" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100,400 Q200,200 500,400 T1100,400 T1600,300" stroke="#1D544F" strokeWidth="2" fill="none" />
            <path d="M-100,450 Q250,550 550,450 T1150,450 T1600,550" stroke="#1D544F" strokeWidth="1" fill="none" />
            <path d="M-100,500 Q300,300 600,500 T1200,500 T1600,400" stroke="#1D544F" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle,rgba(130,207,176,0.15)_0%,transparent_60%)] -z-10 animate-pulse-subtle" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-[radial-gradient(circle,rgba(29,84,79,0.08)_0%,transparent_70%)] -z-10 animate-float-reverse" />
        
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

            {/* Hero Text — Staggered reveal */}
            <motion.div
              className="flex-1 max-w-[540px] xl:max-w-[600px] relative z-10"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-[#277A75] text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#277A75]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#277A75]"></span>
                HEARWELL SPEECH & HEARING
              </motion.div>
              <motion.h1 variants={heroItem} className="font-sans font-extrabold text-[2.75rem] md:text-5xl lg:text-[4rem] text-[#1E2A38] leading-[1.05] mb-6 tracking-tight">
                Solve your hearing problem in just <br />
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1D544F] to-[#6BBD9D] uppercase text-[3.25rem] md:text-6xl lg:text-[4.5rem] xl:text-[5rem] tracking-tight drop-shadow-sm block mt-2">ONE DAY</span>
              </motion.h1>
              <motion.p variants={heroItem} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-[90%]">
                Professional hearing care and speech therapy services for children and adults aiming to restore the joy of sound.
              </motion.p>
              <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <Link to="/booking" className="btn-primary w-full sm:w-auto">
                  Book an Appointment
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
                  Explore Services <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image — Fade + Scale */}
            <FadeScaleIn className="flex-1 w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-[#1D544F]/5 rounded-full blur-3xl -z-10 hidden lg:block"></div>
              
              {/* Abstract Wave Behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30 animate-float">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] text-[#82CFB0]">
                  <path fill="currentColor" d="M42.7,-73.4C55.9,-65.4,67.6,-54.3,77.5,-41.2C87.4,-28.1,95.5,-14,94.2,-0.7C92.9,12.5,82.3,25.1,72.4,36.5C62.5,47.9,53.3,58.3,41.9,65.8C30.4,73.4,16.8,78.2,2.7,73.8C-11.4,69.5,-25.9,56,-39.8,47.3C-53.7,38.6,-67,34.7,-77.1,25C-87.2,15.3,-94.1,-0.3,-89.7,-13C-85.3,-25.7,-69.6,-35.4,-55.8,-42.8C-42,-50.2,-30.1,-55.3,-17.8,-61.6C-5.5,-67.9,7.2,-75.4,20.5,-75.8C33.8,-76.2,47.7,-69.5,42.7,-73.4Z" transform="translate(100 100)" />
                </svg>
              </div>

              <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:ml-auto mt-12 lg:mt-0 lg:mr-8 relative z-10">
                <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-[0_20px_50px_rgba(29,84,79,0.15)] border-[8px] border-white/90 backdrop-blur-sm transition-all duration-700 hover:rounded-[50%_50%_40%_60%/60%_40%_50%_50%] relative z-10 bg-gray-100">
                  <OptimizedImage src={images.hero.main} alt="Audiologist showing hearing aid to patient" priority className="w-full h-full object-cover scale-105" containerClassName="w-full h-full" />
                </div>
                
                {/* Custom "10+ YEARS EXP" Badge — inline on mobile, absolute on desktop */}
                <div className="hidden lg:flex absolute -bottom-12 -left-16 z-20 items-center">
                  {/* Left Soundwave swoosh */}
                  <svg className="w-20 h-20 text-[#1D544F] opacity-90 -mr-8 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,50 C40,50 40,20 60,50 C80,80 80,50 100,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  
                  {/* Badge */}
                  <div className="relative z-10 w-[150px] h-[150px] bg-gradient-to-br from-[#1D544F] to-[#123834] rounded-full flex flex-col items-center justify-center p-4 border-[6px] border-white shadow-[0_15px_30px_-5px_rgba(29,84,79,0.4)] transition-transform hover:scale-105">
                    <span className="text-white font-black text-4xl mb-0 leading-none">10+</span>
                    <span className="text-[#82CFB0] text-[10px] font-bold uppercase tracking-[0.15em] mt-1 relative">Years Exp
                      <div className="absolute -top-6 -right-6 w-3 h-3 bg-[#82CFB0] rounded-full opacity-50 blur-[2px]"></div>
                    </span>
                  </div>

                  {/* Right Soundwave wave */}
                  <svg className="w-32 h-20 text-[#1D544F] opacity-90 -ml-6 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,50 C20,50 20,80 40,50 C60,20 60,50 80,50 C90,50 95,50 100,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M10,50 C25,50 25,70 40,50 C55,30 55,50 70,50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                    <path d="M15,50 C30,50 30,60 45,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                </div>
              </div>

              {/* Mobile badge — inline below image */}
              <div className="flex lg:hidden justify-center mt-6">
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D544F] to-[#123834] text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-black text-2xl">10+</span>
                  <span className="text-[#82CFB0] text-xs font-bold uppercase tracking-wider">Years Experience</span>
                </div>
              </div>
            </FadeScaleIn>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Snippet */}
      <SectionReveal className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About The Clinic</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Expert care focused on your well-being.</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in 2014, Hearwell provides early childhood intervention, individualized education programs, and advanced audiology services designed for lasting results.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>

      {/* Services Overview - Staggered Masonry feel */}
      <SectionReveal className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Primary Services</h2>
            <p className="text-gray-600 max-w-2xl text-lg">Comprehensive diagnostic and therapeutic solutions.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hearing Aids - large card */}
            <StaggerItem className="md:col-span-8 bg-white modern-card card-hover-glow relative overflow-hidden rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 overflow-hidden group-hover:scale-110 transition-transform duration-700">
                <OptimizedImage src={images.home.testingAidTile} alt="Audiometry Equipment" className="opacity-40 group-hover:opacity-60 transition-opacity" disableBlur />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Hearing Testing & Aids</h3>
                  <p className="text-gray-600 max-w-md mb-8">Digital hearing aids, OAE (Newborn Screening), and comprehensive diagnostic evaluations.</p>
                </div>
                <Link to="/hearing-aids" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Explore Solutions <ArrowRight size={18} />
                </Link>
              </div>
            </StaggerItem>

            {/* Speech Therapy - small card */}
            <StaggerItem className="md:col-span-4 bg-primary text-white rounded-[32px] p-8 shadow-sm card-hover-lift flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 transition-transform duration-700">
                <OptimizedImage src="/images/speech-therapy.png" alt="Speech Therapy session" disableBlur />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Speech Therapy</h3>
                <p className="text-white/80 mb-8">Specialized programs including AVT (Auditory Verbal Therapy) for clear communication.</p>
              </div>
              <Link to="/services" className="relative z-10 inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all mt-auto">
                Read More <ArrowRight size={18} />
              </Link>
            </StaggerItem>

            {/* Child Dev - wide card */}
            <StaggerItem className="md:col-span-12 bg-white modern-card card-hover-border relative overflow-hidden rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] overflow-hidden hidden lg:block">
                <OptimizedImage src="/images/child-development.png" alt="Pediatric Therapy" className="opacity-20 group-hover:opacity-40 transition-opacity" disableBlur />
              </div>
              <div className="max-w-2xl relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Child Development Programs</h3>
                <p className="text-gray-600 mb-6 lg:mb-0">Occupational Therapy, Individualised Education Programs (IEP), and School Readiness.</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-200">Occupational Therapy</span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full border border-gray-200">Special Care & Education</span>
                </div>
              </div>
              <Link to="/programs" className="relative z-10 shrink-0 bg-gray-50 text-gray-700 w-14 h-14 rounded-full flex items-center justify-center border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                <ArrowRight size={20} />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Doctor Profile Snippet */}
      <SectionReveal className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              className="w-full lg:w-5/12 relative"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="absolute inset-0 bg-gray-100 rounded-[40px] rotate-3 scale-105 transform -z-10"></div>
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-[40px] overflow-hidden shadow-lg border-4 border-white relative z-10">
                <OptimizedImage src="/images/doctor.webp" alt="Ms. Babitha Venugopal" aspectRatio="4/5" />
              </div>

              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 z-20 max-w-[200px]">
                <div className="flex items-center gap-3 font-semibold text-gray-800 mb-1">
                  <CheckCircle2 size={20} className="text-primary" /> BASLP
                </div>
                <p className="text-xs text-gray-500">AWH Special College</p>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-7/12"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Chief Audiologist</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ms. Babitha Venugopal</h3>
              <p className="text-xl text-gray-500 font-medium mb-8 pb-8 border-b border-gray-100">16 years total experience • Audiologist</p>

              <blockquote className="text-xl lg:text-2xl text-gray-700 italic font-serif leading-relaxed mb-8">
                "My commitment is to restore the joy of sound and communication to every patient through personalized, expert care."
              </blockquote>

              <Link to="/doctor" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 hover:gap-3 transition-all">
                View Full Profile <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionReveal>

      {/* Locations Section */}
      <SectionReveal className="py-20 lg:py-28 bg-[#F8FAF9] border-t border-gray-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(130,207,176,0.15),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(29,84,79,0.05),transparent_60%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Clinics</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">Conveniently located to serve you.</h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Perumbavoor Location */}
            <StaggerItem className="relative bg-gradient-to-b from-white to-gray-50/50 rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden z-10">
              
              {/* Subtle Watermark */}
              <div className="absolute -bottom-10 -right-10 text-primary/[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none z-0">
                <MapPin size={220} />
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-10 w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-b-full z-10"></div>

              <div className="relative z-10 w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <MapPin size={24} />
              </div>
              
              <h4 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Perumbavoor Branch</h4>
              
              <div className="relative z-10 pl-5 border-l-2 border-primary/20 flex-grow mb-8 text-gray-600 leading-relaxed font-medium">
                Hariharraiyyer Rd, <br />
                Opp. Govt Boys HSS<br />
                Perumbavoor, Kerala
              </div>
              
              <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-col xl:flex-row gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perumbavoor" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md">
                  <Navigation size={16} /> Get Directions
                </a>
                <a href="tel:+919633626656" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-3.5 rounded-full font-medium text-sm hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all">
                  <Phone size={16} /> Call Clinic
                </a>
              </div>
            </StaggerItem>

            {/* Perinjanam Location */}
            <StaggerItem className="relative bg-gradient-to-b from-white to-gray-50/50 rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden z-10">
              
              {/* Subtle Watermark */}
              <div className="absolute -bottom-10 -right-10 text-primary/[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none z-0">
                <MapPin size={220} />
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-10 w-16 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-b-full z-10"></div>

              <div className="relative z-10 w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <MapPin size={24} />
              </div>
              
              <h4 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Perinjanam Branch</h4>
              
              <div className="relative z-10 pl-5 border-l-2 border-primary/20 flex-grow mb-8 text-gray-600 leading-relaxed font-medium">
                Near Vadakke Bus Stop, <br />
                Perinjanam,<br />
                Thrissur District
              </div>
              
              <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-col xl:flex-row gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perinjanam" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md">
                  <Navigation size={16} /> Get Directions
                </a>
                <a href="tel:+919846464906" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-3.5 rounded-full font-medium text-sm hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all">
                  <Phone size={16} /> Call Clinic
                </a>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Home;
