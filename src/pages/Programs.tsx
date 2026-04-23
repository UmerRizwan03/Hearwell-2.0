import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, SectionDivider } from '../components/Motion';
import { heroContainer, heroItem, slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';
import SEO from '../components/SEO';

const Programs = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Child Development Programs"
        description="Hearwell's occupational therapy, IEP, and special care programs help children achieve their developmental and educational potential."
        url="https://hearwell.com/programs"
      />
      {/* Typography-First Layered Clarity Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9] border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <MicroLabel label="Early Intervention" />
            
            <motion.h1 
              variants={heroItem} 
              className="editorial-heading font-sans font-medium mb-8"
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
      <SectionReveal className="py-24 lg:py-36">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col gap-24 lg:gap-40">
          
          {/* Program 1: Occupational Therapy */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <FadeScaleIn className="w-full lg:w-1/2 lg:-translate-y-8">
               <div className="bg-gray-100 rounded-lg aspect-video lg:aspect-square w-full shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)] relative overflow-hidden">
                 <OptimizedImage src="/images/occupational-therapy.webp" alt="Occupational Therapy session" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="section-heading mb-6">Occupational Therapy</h2>
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
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-lg aspect-video lg:aspect-square w-full shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)] relative overflow-hidden">
                 <OptimizedImage src="/images/child-development.webp" alt="Child learning" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm lg:-translate-y-10">
                <h2 className="section-heading mb-6">IEP (Individualised Education Program)</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Every child learns differently. We develop comprehensive IEPs tailored specifically to your child's unique educational and developmental needs to ensure academic inclusion.
                </p>
                <div className="bg-white rounded-lg p-5 border border-gray-100">
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
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-lg aspect-video lg:aspect-square w-full shadow-[0_24px_70px_-48px_rgba(18,56,52,0.7)] relative overflow-hidden">
                 <OptimizedImage src="/images/clinic-interior.webp" alt="Clinic care environment" />
               </div>
            </FadeScaleIn>
            <motion.div 
              className="w-full lg:w-1/2"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="section-heading mb-6">Special Care and Education</h2>
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
      <SectionReveal className="bg-primary-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white mb-8">Ready to support your child's journey?</h2>
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
