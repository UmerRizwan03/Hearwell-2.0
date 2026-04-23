import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { images } from '../utils/images';
import GoogleReviews from '../components/GoogleReviews';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Hearwell Speech & Hearing Centre"
        description="Expert hearing tests, hearing aid fitting, and speech therapy in Perumbavoor & Perinjanam, Kerala. Book an appointment today."
        url="https://hearwell.com"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[calc(100svh-72px)] py-4 lg:py-8 bg-white">
        {/* Abstract Background Waves */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] hidden lg:block">
          <svg className="w-full h-full animate-float-slow" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M-100,400 Q200,200 500,400 T1100,400 T1600,300" stroke="#1D544F" strokeWidth="2" fill="none" />
            <path d="M-100,450 Q250,550 550,450 T1150,450 T1600,550" stroke="#1D544F" strokeWidth="1" fill="none" />
            <path d="M-100,500 Q300,300 600,500 T1200,500 T1600,400" stroke="#1D544F" strokeWidth="1" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 z-10 relative h-full">
          <div className="grid h-full grid-cols-1 lg:grid-cols-12 items-center content-center gap-6 md:gap-8 lg:gap-10">

            {/* Hero Text — Staggered reveal */}
            <motion.div
              className="lg:col-span-7 max-w-[720px] relative z-10"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroItem} className="inline-flex items-center gap-3 border-l-2 border-primary pl-4 text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] mb-4 md:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                HEARWELL SPEECH & HEARING
              </motion.div>
              <motion.h1 variants={heroItem} className="font-sans font-semibold text-[clamp(2.35rem,8vw,4.6rem)] lg:text-[clamp(4.25rem,5.8vw,6.2rem)] text-gray-900 leading-[0.94] mb-5 md:mb-6 tracking-tighter">
                Hearing care that feels personal from day one.
              </motion.h1>
              <motion.p variants={heroItem} className="text-base md:text-xl xl:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl">
                Expert diagnostics, hearing aid fitting, and speech therapy delivered with clinical precision and human patience.
              </motion.p>
              <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Link to="/booking" className="btn-primary w-full sm:w-auto">
                  Book an Appointment
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-lg">
                  Explore Services <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image — Fade + Scale */}
            <FadeScaleIn className="hidden lg:block lg:col-span-5 w-full relative lg:translate-y-6">
              <div className="absolute -left-6 top-10 h-[76%] w-px bg-primary/20 hidden lg:block" />
              
              {/* Abstract Wave Behind Image */}
              <div className="hidden">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] text-[#82CFB0]">
                  <path fill="currentColor" d="M42.7,-73.4C55.9,-65.4,67.6,-54.3,77.5,-41.2C87.4,-28.1,95.5,-14,94.2,-0.7C92.9,12.5,82.3,25.1,72.4,36.5C62.5,47.9,53.3,58.3,41.9,65.8C30.4,73.4,16.8,78.2,2.7,73.8C-11.4,69.5,-25.9,56,-39.8,47.3C-53.7,38.6,-67,34.7,-77.1,25C-87.2,15.3,-94.1,-0.3,-89.7,-13C-85.3,-25.7,-69.6,-35.4,-55.8,-42.8C-42,-50.2,-30.1,-55.3,-17.8,-61.6C-5.5,-67.9,7.2,-75.4,20.5,-75.8C33.8,-76.2,47.7,-69.5,42.7,-73.4Z" transform="translate(100 100)" />
                </svg>
              </div>

              <div className="relative w-full aspect-[4/5] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[460px] max-h-[32svh] lg:max-h-[calc(100svh-180px)] mx-auto lg:ml-auto lg:mr-0 z-10">
                <div className="w-full h-full rounded-lg overflow-hidden shadow-[0_30px_70px_-50px_rgba(18,56,52,0.7)] relative z-10 bg-gray-100">
                  <OptimizedImage src={images.hero.main} alt="Audiologist showing hearing aid to patient" priority className="w-full h-full object-cover scale-105" containerClassName="w-full h-full" />
                </div>
                
                {/* Custom "10+ YEARS EXP" Badge — inline on mobile, absolute on desktop */}
                <div className="hidden lg:flex absolute -bottom-10 -left-14 z-20 items-center">
                  {/* Left Soundwave swoosh */}
                  <svg className="w-20 h-20 text-[#1D544F] opacity-90 -mr-8 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,50 C40,50 40,20 60,50 C80,80 80,50 100,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  
                  {/* Badge */}
                  <div className="relative z-10 w-[154px] bg-[#123834] rounded-lg flex flex-col items-start justify-center p-6 border border-white shadow-[0_20px_40px_-25px_rgba(18,56,52,0.9)] transition-transform hover:-translate-y-1">
                    <span className="text-white font-black text-4xl mb-0 leading-none">10+</span>
                    <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.15em] mt-2 relative">Years of care</span>
                  </div>

                  {/* Right Soundwave wave */}
                  <svg className="w-32 h-20 text-[#1D544F] opacity-90 -ml-6 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,50 C20,50 20,80 40,50 C60,20 60,50 80,50 C90,50 95,50 100,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M10,50 C25,50 25,70 40,50 C55,30 55,50 70,50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                    <path d="M15,50 C30,50 30,60 45,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                </div>
              </div>

            </FadeScaleIn>

            <motion.div
              variants={heroItem}
              className="lg:hidden inline-flex w-fit items-center gap-4 rounded-lg border border-primary/10 bg-[#F8FAF9] px-5 py-3 shadow-[0_18px_40px_-34px_rgba(18,56,52,0.75)]"
            >
              <span className="text-3xl font-semibold tracking-tighter leading-none text-primary">10+</span>
              <span className="max-w-[9rem] text-[11px] font-bold uppercase tracking-[0.16em] leading-snug text-gray-600">
                Years of clinical care
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Snippet */}
      <SectionReveal className="py-24 lg:py-36 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-5xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-5">About The Clinic</h2>
            <h3 className="section-heading max-w-3xl mb-8">A local clinic built around listening first.</h3>
            <p className="quiet-copy mb-8 max-w-2xl ml-0 lg:ml-24">
              Established in 2014, Hearwell provides early childhood intervention, individualized education programs, and advanced audiology services designed for lasting results.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 hover:gap-3 transition-all ml-0 lg:ml-24">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>

      {/* Services Overview - Staggered Masonry feel */}
      <SectionReveal className="py-24 lg:py-36 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="mb-14 md:mb-20 max-w-4xl">
            <h2 className="section-heading mb-5">Start with the care that matters most.</h2>
            <p className="quiet-copy max-w-2xl">Comprehensive diagnostics and therapy with hearing care given the visual weight it deserves.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            {/* Hearing Aids - large card */}
            <StaggerItem className="md:col-span-8 bg-white modern-card card-hover-glow relative overflow-hidden rounded-lg p-8 md:p-14 shadow-sm border border-gray-100 group min-h-[420px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -mr-10 -mt-10 overflow-hidden group-hover:scale-110 transition-transform duration-700">
                <OptimizedImage src={images.home.testingAidTile} alt="Audiometry Equipment" className="opacity-40 group-hover:opacity-60 transition-opacity" disableBlur />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900 mb-5">Hearing Testing & Aids</h3>
                  <p className="text-gray-600 text-lg max-w-md mb-8">Digital hearing aids, OAE newborn screening, and comprehensive diagnostic evaluations.</p>
                </div>
                <Link to="/hearing-aids" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Explore Solutions <ArrowRight size={18} />
                </Link>
              </div>
            </StaggerItem>

            {/* Speech Therapy - small card */}
            <StaggerItem className="md:col-span-4 bg-primary text-white rounded-lg p-8 shadow-sm card-hover-lift flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 transition-transform duration-700">
                <OptimizedImage src="/images/speech-therapy.webp" alt="Speech Therapy session" disableBlur />
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
            <StaggerItem className="md:col-span-10 md:col-start-2 bg-white modern-card card-hover-border relative overflow-hidden rounded-lg p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center justify-between group">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[100px] overflow-hidden hidden lg:block">
                <OptimizedImage src="/images/child-development.webp" alt="Pediatric Therapy" className="opacity-20 group-hover:opacity-40 transition-opacity" disableBlur />
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
      <SectionReveal className="py-24 lg:py-36 bg-[#F8FAF9] border-t border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn className="mb-16 max-w-3xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Our Clinics</h2>
            <h3 className="section-heading">Conveniently located to serve you.</h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Perumbavoor Location */}
            <StaggerItem className="relative bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden z-10">
              
              {/* Subtle Watermark */}
              <div className="absolute -bottom-10 -right-10 text-primary/[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none z-0">
                <MapPin size={220} />
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-10 w-16 h-1 bg-primary rounded-b-full z-10"></div>

              <div className="relative z-10 w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <MapPin size={24} />
              </div>
              
              <h4 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Perumbavoor Branch</h4>
              
              <div className="relative z-10 pl-5 border-l-2 border-primary/20 flex-grow mb-8 text-gray-600 leading-relaxed font-medium">
                Hariharraiyyer Rd, <br />
                Opp. Govt Boys HSS<br />
                Perumbavoor, Kerala
              </div>
              
              <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-col xl:flex-row gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perumbavoor" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3.5 rounded-lg font-medium text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md">
                  <Navigation size={16} /> Get Directions
                </a>
                <a href="tel:+919633626656" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-3.5 rounded-lg font-medium text-sm hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all">
                  <Phone size={16} /> Call Clinic
                </a>
              </div>
            </StaggerItem>

            {/* Perinjanam Location */}
            <StaggerItem className="relative bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-300 overflow-hidden z-10 md:translate-y-8">
              
              {/* Subtle Watermark */}
              <div className="absolute -bottom-10 -right-10 text-primary/[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none z-0">
                <MapPin size={220} />
              </div>

              {/* Accent Line */}
              <div className="absolute top-0 left-10 w-16 h-1 bg-primary rounded-b-full z-10"></div>

              <div className="relative z-10 w-14 h-14 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <MapPin size={24} />
              </div>
              
              <h4 className="relative z-10 text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">Perinjanam Branch</h4>
              
              <div className="relative z-10 pl-5 border-l-2 border-primary/20 flex-grow mb-8 text-gray-600 leading-relaxed font-medium">
                Near Vadakke Bus Stop, <br />
                Perinjanam,<br />
                Thrissur District
              </div>
              
              <div className="relative z-10 pt-6 border-t border-gray-100 flex flex-col xl:flex-row gap-3 mt-auto">
                <a href="https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perinjanam" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3.5 rounded-lg font-medium text-sm hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md">
                  <Navigation size={16} /> Get Directions
                </a>
                <a href="tel:+919846464906" className="flex-1 inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-3.5 rounded-lg font-medium text-sm hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all">
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
