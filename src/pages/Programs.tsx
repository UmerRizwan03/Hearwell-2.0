import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';

const Programs = () => {
  return (
    <div className="bg-white">
      {/* Typography-First Layered Clarity Header */}
      <section className="relative isolate pt-6 pb-16 lg:pt-16 lg:pb-24 bg-[#FCFBF9] border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <MicroLabel label="Early Intervention" />
            
            <motion.h1 
              variants={heroItem} 
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-medium text-gray-900 tracking-tighter leading-[1.05] mb-8"
            >
              Nurturing <br />
              <span className="text-gray-400 font-normal">Growth & Communication</span>
            </motion.h1>
            
            <motion.p 
              variants={heroItem} 
              className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance"
            >
              Helping every child reach their full potential through individualized support and structured learning environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Layout Sections */}
      <SectionReveal className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col gap-20 lg:gap-32">
          
          {/* Program 1: Occupational Therapy */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[32px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
                 <OptimizedImage src="/images/occupational-therapy.png" alt="Occupational Therapy session" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Occupational Therapy</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our Occupational Therapy program helps children develop the fine motor, sensory processing, and independent living skills necessary for daily life and learning.
              </p>
              <ul className="space-y-4 mb-8">
                {['Fine and gross motor skill development', 'Sensory integration and processing', 'Self-care routines', 'Play and social interaction skills'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={24} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <SectionDivider />

          {/* Program 2: IEP (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[32px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
                 <OptimizedImage src="/images/child-development.png" alt="Child learning" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="bg-gray-50 p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">IEP (Individualised Education Program)</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Every child learns differently. We develop comprehensive IEPs tailored specifically to your child's unique educational and developmental needs to ensure academic inclusion.
                </p>
                <div className="bg-white rounded-2xl p-5 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Our IEP Process:</h4>
                  <p className="text-gray-600 text-sm flex items-center gap-2 flex-wrap">
                    Assessment <ArrowRight size={14} className="text-primary" /> Goal Setting <ArrowRight size={14} className="text-primary" /> Implementation <ArrowRight size={14} className="text-primary" /> Ongoing Review
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <SectionDivider />

          {/* Program 3: Special Care */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[32px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
                 <OptimizedImage src="/images/clinic-interior.png" alt="Clinic care environment" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Special Care and Education</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Dedicated support for children with complex needs. We provide specialized educational strategies and a nurturing environment to foster growth safely and effectively.
              </p>
              <ul className="space-y-4 mb-8">
                {['Autism Spectrum Disorder support', 'Attention Deficit therapies', 'Learning disability accommodations', 'Behavioral intervention plans'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 font-medium">
                    <CheckCircle2 size={24} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="bg-primary-gradient py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to support your child's journey?</h2>
            <Link to="/booking" className="btn-white text-lg px-10">
              Book an Assessment
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Programs;
