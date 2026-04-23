import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInRight, defaultViewport, animatedDivider } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';
import SEO from '../components/SEO';

const Doctor = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Our Specialist Team"
        description="Meet Ms. Babitha Venugopal and the specialist team at Hearwell — experienced audiologists and speech language pathologists."
        url="https://hearwell.com/doctor"
      />
      {/* Typography-First Clinical Profile Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9] border-b border-gray-100">
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
              <MicroLabel label="Chief Audiologist & Speech Language Pathologist" />
              <motion.h1 
                variants={heroItem} 
                className="editorial-heading font-sans font-medium"
              >
                Ms. Babitha Venugopal
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

      <SectionReveal className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left: Portrait & Credentials */}
            <div className="w-full lg:w-5/12">
              <FadeScaleIn>
                <div className="bg-gray-100 rounded-lg aspect-[3/4] mb-10 overflow-hidden relative shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)] lg:scale-105 lg:origin-top-left">
                  <OptimizedImage src="/images/doctor.webp" alt="Ms. Babitha Venugopal" aspectRatio="3/4" />
                </div>
              </FadeScaleIn>

              <FadeIn>
                <div className="mb-8 border-y border-gray-100 py-7">
                  <h3 className="font-bold text-gray-800 text-lg mb-5">Credentials</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">Degree:</span> BASLP
                    </li>
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">Institution:</span> AWH Special College
                    </li>
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">Year:</span> 2010
                    </li>
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">CRR No:</span> A56404
                    </li>
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">Blood Group:</span> O+ve
                    </li>
                    <li className="flex gap-2 border-b border-gray-50 pb-3">
                      <span className="font-semibold min-w-24">Phone:</span> 9633626656
                    </li>
                    <li className="flex gap-2 flex-col">
                      <span className="font-semibold min-w-24">Address:</span>
                      <span className="text-sm">Near Vadakke Bus Stop, Perinjanam, Thrissur Dist. 9846464906</span>
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
              <StaggerContainer className="grid grid-cols-2 gap-6 mb-16">
                <StaggerItem className="bg-white p-7 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-5xl lg:text-6xl font-semibold tracking-tighter text-primary mb-2">16</p>
                  <p className="text-gray-800 font-semibold">Years Total Experience</p>
                </StaggerItem>
                <StaggerItem className="bg-white p-7 rounded-lg border border-gray-100 shadow-sm translate-y-6">
                  <p className="text-5xl lg:text-6xl font-semibold tracking-tighter text-primary mb-2">10+</p>
                  <p className="text-gray-800 font-semibold">Years as Specialist</p>
                </StaggerItem>
              </StaggerContainer>

              <FadeIn>
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-10">Professional Journey</h3>
              </FadeIn>
              
              <StaggerContainer className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-px before:bg-gray-200">
                
                {/* Timeline Item 1 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow-sm shrink-0 z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-800">Present</div>
                      <time className="font-medium text-primary">2014 - Present</time>
                    </div>
                    <div className="text-gray-600">Lead Audiologist at Hearwell Speech and Hearing Centre.</div>
                  </div>
                </StaggerItem>

                {/* Timeline Item 2 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 text-gray-500 shadow-sm shrink-0 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-800">Swaram Hearing Aid Centre</div>
                      <time className="font-medium text-gray-500">2011 - 2012</time>
                    </div>
                    <div className="text-gray-600">Audiologist</div>
                  </div>
                </StaggerItem>

                {/* Timeline Item 3 */}
                <StaggerItem className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 text-gray-500 shadow-sm shrink-0 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
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
                <div className="bg-[#F8FAF9] rounded-lg p-10 md:p-14 relative">
                   <div className="absolute top-4 left-4 text-7xl text-primary/10 font-serif leading-none">"</div>
                   <p className="text-2xl md:text-4xl text-gray-800 italic font-serif font-medium relative z-10 leading-tight">
                    My commitment is to restore the joy of sound and communication to every patient through personalized, expert care.
                   </p>
                </div>
              </FadeIn>

            </motion.div>
          </div>
        </div>
      </SectionReveal>

      {/* Other Specialists */}
      <SectionReveal className="py-24 lg:py-36 bg-[#F8FAF9] border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Specialists</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Dedicated professionals committed to providing exceptional care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vandana Sanesh */}
            <FadeIn>
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-gray-50 shadow-sm">
                    <OptimizedImage src="/images/Vandana.webp" alt="Vandana Sanesh" aspectRatio="1/1" />
                  </div>
                  <div>
                    <div className="mb-3">
                      <MicroLabel label="Audiologist" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Vandana Sanesh</h3>
                    <p className="text-primary font-medium leading-snug">Audiologist & Speech Language Pathologist</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 mt-auto">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">CRR No.</span>
                    <span>B15690</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">Blood Group</span>
                    <span>O-ve</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">Phone</span>
                    <span>9745609672</span>
                  </div>
                  <div className="py-2">
                    <span className="font-semibold text-gray-800 block mb-1">Address</span>
                    <span className="text-sm">Opp. Govt. Boys School Ground, Perumbavoor<br/>9947314906, 9633626656</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Abitha K S */}
            <FadeIn>
              <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-4 border-gray-50 shadow-sm">
                    <OptimizedImage src="/images/Abitha.webp" alt="Abitha K S" aspectRatio="1/1" />
                  </div>
                  <div>
                    <div className="mb-3">
                      <MicroLabel label="Special Educator" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Abitha K S</h3>
                    <p className="text-primary font-medium leading-snug">Special Educator</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 mt-auto">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">CRR No.</span>
                    <span>A115127</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">Blood Group</span>
                    <span>O+ve</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="font-semibold text-gray-800">Phone</span>
                    <span>9562969816</span>
                  </div>
                  <div className="py-2">
                    <span className="font-semibold text-gray-800 block mb-1">Address</span>
                    <span className="text-sm">Opp. Govt. Boys School Ground, Perumbavoor<br/>9947314906, 9633626656</span>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Doctor;
