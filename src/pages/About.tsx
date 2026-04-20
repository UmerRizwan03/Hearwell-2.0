import { Heart, Activity, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';

const About = () => {
  return (
    <div className="bg-white">
      {/* Typography-First Trust Anchor Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9] border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Typography Column */}
            <div className="lg:col-span-7">
              <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-2xl">
                <MicroLabel label="About Our Practice" />
                
                <motion.h1 
                  variants={heroItem} 
                  className="editorial-heading font-serif mb-8"
                >
                  Restoring <br /><span className="italic">connection.</span>
                </motion.h1>
                
                <motion.p 
                  variants={heroItem} 
                  className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance max-w-xl"
                >
                  Serving the community with dedicated hearing and speech care grounded in clinical excellence since 2014.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Context Image Anchor */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative rounded-lg overflow-hidden shadow-[0_24px_60px_-42px_rgba(18,56,52,0.55)] aspect-[4/5] max-w-sm mr-auto lg:ml-auto lg:mr-0 z-10 lg:translate-y-10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent z-10 pointer-events-none"></div>
                <OptimizedImage 
                  src="src/assets/images/about/aboutBanner.webp" 
                  alt="Hearwell Clinic Team" 
                  containerClassName="w-full h-full" 
                  priority 
                  className="w-full h-full object-cover" 
                  disableBlur 
                />
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>


      <SectionReveal className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Clinic Story - Asymmetrical Layout */}
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center mb-20">
            <motion.div
              className="w-full lg:w-1/2"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="section-heading mb-8">
                Established in 2014 to revolutionize hearing care.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hearwell Speech and Hearing Centre was founded with a singular mission: to provide professional, compassionate, and highly effective hearing care and speech therapy services for children and adults.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                We believe in early childhood intervention and personalized treatment plans that deliver long-lasting results. Our approach is medically sound, utilizing the latest in digital hearing aid technology and therapeutic techniques.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 relative h-[500px] lg:-ml-8"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="absolute inset-0 bg-gray-100 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden relative shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)]">
                <OptimizedImage src="src/assets/images/about/aboutTile.webp" alt="Hearwell Clinic Interior" containerClassName="w-full h-full" />
              </div>
              <div className="absolute -bottom-10 -left-4 lg:-left-12 bg-white text-gray-900 p-8 rounded-lg shadow-[0_20px_55px_-38px_rgba(18,56,52,0.85)] max-w-sm overflow-hidden border border-gray-100">
                <div className="relative z-10">
                  <h4 className="font-bold text-2xl mb-3">Our Mission</h4>
                  <p className="text-sm leading-relaxed font-medium text-gray-600">Empowering lives through clear communication and confident hearing.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </SectionReveal>

      <SectionDivider />

      {/* Core Values - Staggered List */}
      <SectionReveal className="py-24 lg:py-36 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="mb-20 max-w-3xl">
            <h2 className="section-heading">The values behind the appointment.</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <StaggerItem className="flex gap-6 group">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Trust</h3>
                <p className="text-gray-600 leading-relaxed">We build lasting relationships through transparent, honest, and reliable care.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group md:translate-y-8">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                <Heart size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compassionate Care</h3>
                <p className="text-gray-600 leading-relaxed">Every patient is treated with empathy, understanding, and respect for their unique needs.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Professionalism</h3>
                <p className="text-gray-600 leading-relaxed">We adhere to the highest clinical standards and continuous medical education.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group md:translate-y-8">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                <Activity size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Results-Driven</h3>
                <p className="text-gray-600 leading-relaxed">Our therapies and solutions are designed to provide measurable, life-improving outcomes.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Experience Stats */}
      <SectionReveal className="bg-white py-24 lg:py-32 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <StaggerItem className="p-6">
              <p className="text-6xl lg:text-8xl font-semibold tracking-tighter text-primary mb-4">10+</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Specialist Experience</p>
            </StaggerItem>
            <StaggerItem className="p-6">
              <p className="text-6xl lg:text-8xl font-semibold tracking-tighter text-primary mb-4">5k+</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Patients</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Lives Transformed</p>
            </StaggerItem>
            <StaggerItem className="p-6">
              <p className="text-6xl lg:text-8xl font-semibold tracking-tighter text-primary mb-4">2</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clinics</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">In Kerala</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>
    </div>
  );
};

export default About;
