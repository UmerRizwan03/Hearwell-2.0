import PageHeader from '../components/PageHeader';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal } from '../components/Motion';
import { slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';

const Programs = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Development Programs" 
        subtitle="Helping every child reach their full potential through individualized support."
        image="/images/child-development.png"
      />

      {/* Alternating Layout Sections */}
      <SectionReveal className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col gap-20 lg:gap-32">
          
          {/* Program 1: Occupational Therapy */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[24px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Occupational Therapy</h2>
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

          {/* Program 2: IEP (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[24px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">IEP (Individualised Education Program)</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Every child learns differently. We develop comprehensive IEPs tailored specifically to your child's unique educational and developmental needs to ensure academic inclusion.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-2">Our IEP Process:</h4>
                  <p className="text-gray-600 text-sm">Assessment &rarr; Goal Setting &rarr; Implementation &rarr; Ongoing Review</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Program 3: Special Care */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <FadeScaleIn className="w-full lg:w-1/2">
               <div className="bg-gray-100 rounded-[24px] aspect-video lg:aspect-square w-full shadow-lg relative overflow-hidden">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Care and Education</h2>
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
      <SectionReveal className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to support your child's journey?</h2>
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
