import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { images } from '../utils/images';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[#4A908F]/5">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

            {/* Hero Text — Staggered reveal */}
            <motion.div
              className="flex-1 max-w-2xl"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#4A908F] text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm border border-[#4A908F]/10">
                <span className="w-2 h-2 rounded-full bg-[#4A908F] animate-pulse"></span>
                Hearwell Speech & Hearing
              </motion.div>
              <motion.h1 variants={heroItem} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-[1.15] mb-6 tracking-tight">
                Solve your hearing problem in just <span className="text-[#4A908F]">one day.</span>
              </motion.h1>
              <motion.p variants={heroItem} className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                Professional hearing care and speech therapy services for children and adults aiming to restore the joy of sound.
              </motion.p>
              <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="bg-[#4A908F] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#4A908F]/90 hover:shadow-lg hover:shadow-[#4A908F]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  Book an Appointment <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-50 hover:scale-[1.02] border border-gray-200 transition-all">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image — Fade + Scale */}
            <FadeScaleIn className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-[#4A908F]/10 rounded-full blur-3xl transform -translate-x-12 translate-y-12"></div>
              <div className="relative h-[400px] md:h-[500px] w-full max-w-lg mx-auto lg:ml-auto">
                <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[32px] rounded-tr-[120px] bg-gray-200 overflow-hidden shadow-xl">
                  <OptimizedImage src={images.hero.main} alt="Audiologist showing hearing aid to patient" priority aspectRatio="4/3" />
                </div>
                <div className="absolute bottom-0 left-0 w-[55%] h-[50%] rounded-[24px] rounded-bl-[80px] bg-white p-2 shadow-2xl z-10">
                  <div className="w-full h-full rounded-[16px] rounded-bl-[72px] bg-gradient-to-tr from-[#4A908F]/20 to-[#4A908F]/5 flex items-center justify-center flex-col p-4 text-center">
                    <span className="text-[#4A908F] font-bold text-4xl mb-1">10+</span>
                    <span className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Years Exp</span>
                  </div>
                </div>
              </div>
            </FadeScaleIn>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <SectionReveal className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-semibold text-[#4A908F] uppercase tracking-wider mb-3">About The Clinic</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Expert care focused on your well-being.</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Established in 2014, Hearwell provides early childhood intervention, individualized education programs, and advanced audiology services designed for lasting results.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#4A908F] font-semibold hover:text-[#4A908F]/80 hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>

      {/* Services Overview - Staggered Masonry feel */}
      <SectionReveal className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Primary Services</h2>
            <p className="text-gray-600 max-w-2xl text-lg">Comprehensive diagnostic and therapeutic solutions.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hearing Aids - large card */}
            <StaggerItem className="md:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A908F]/5 rounded-bl-[100px] -mr-10 -mt-10 overflow-hidden group-hover:scale-110 transition-transform duration-700">
                <OptimizedImage src={images.home.testingAidTile} alt="Audiometry Equipment" className="opacity-40 group-hover:opacity-60 transition-opacity" disableBlur />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Hearing Testing & Aids</h3>
                  <p className="text-gray-600 max-w-md mb-8">Digital hearing aids, OAE (Newborn Screening), and comprehensive diagnostic evaluations.</p>
                </div>
                <Link to="/hearing-aids" className="inline-flex items-center gap-2 text-[#4A908F] font-semibold group-hover:gap-3 transition-all">
                  Explore Solutions <ArrowRight size={18} />
                </Link>
              </div>
            </StaggerItem>

            {/* Speech Therapy - small card */}
            <StaggerItem className="md:col-span-4 bg-[#4A908F] text-white rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group relative overflow-hidden">
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
            <StaggerItem className="md:col-span-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 items-center justify-between hover:shadow-md hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-[#4A908F]/5 rounded-l-[100px] overflow-hidden hidden lg:block">
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
              <Link to="/programs" className="relative z-10 shrink-0 bg-gray-50 text-gray-700 w-14 h-14 rounded-full flex items-center justify-center border border-gray-200 group-hover:bg-[#4A908F] group-hover:text-white group-hover:border-[#4A908F] transition-all">
                <ArrowRight size={20} />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Doctor Profile Snippet */}
      <SectionReveal className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
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
                <OptimizedImage src="/images/doctor.png" alt="Ms. Babitha Fazal" aspectRatio="4/5" />
              </div>

              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 z-20 max-w-[200px]">
                <div className="flex items-center gap-3 font-semibold text-gray-800 mb-1">
                  <CheckCircle2 size={20} className="text-[#4A908F]" /> BASLP
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
              <h2 className="text-sm font-semibold text-[#4A908F] uppercase tracking-wider mb-3">Lead Audiologist</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Ms. Babitha Fazal</h3>
              <p className="text-xl text-gray-500 font-medium mb-8 pb-8 border-b border-gray-100">16 years total experience • Audiologist</p>

              <blockquote className="text-xl lg:text-2xl text-gray-700 italic font-serif leading-relaxed mb-8">
                "My commitment is to restore the joy of sound and communication to every patient through personalized, expert care."
              </blockquote>

              <Link to="/doctor" className="inline-flex items-center gap-2 text-[#4A908F] font-semibold hover:text-[#4A908F]/80 hover:gap-3 transition-all">
                View Full Profile <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Home;
