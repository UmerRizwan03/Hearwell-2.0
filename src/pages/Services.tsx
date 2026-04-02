import PageHeader from '../components/PageHeader';
import { Ear, Mic2, Puzzle, Waves, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import OptimizedImage from '../components/OptimizedImage';

const Services = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Care for Speech, Hearing, and Childhood Development." 
        image="/images/hearing-test.png"
      />

      <SectionReveal className="py-20 lg:py-28 relative">
        <div className="absolute right-0 top-40 w-1/3 h-64 bg-primary/5 transform -skew-y-6"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Feature Block: Audiology (Full Width) */}
          <FadeIn className="flex flex-col lg:flex-row bg-white modern-card relative overflow-hidden rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-10 group hover:shadow-md transition-shadow">
            <FadeScaleIn className="w-full lg:w-1/2 bg-gray-100 min-h-[300px] relative overflow-hidden">
               <OptimizedImage src="/images/hearing-test.png" alt="Hearing Test Diagnostic" className="group-hover:scale-105 transition-transform duration-700" />
            </FadeScaleIn>
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Ear size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hearing Testing & Audiology</h2>
              <p className="text-gray-600 mb-6 text-lg">
                State-of-the-art diagnostic evaluations for all ages. We offer comprehensive audiometry, tympanometry, and specialist OAE (Newborn Hearing Screening) to detect issues early.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Pure Tone Audiometry</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> OAE (Newborn Screening)</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Digital Hearing Aids Fitting</li>
              </ul>
              <Link to="/hearing-aids" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                View Hearing Aids <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>

          {/* Split Row: Speech Therapy & AVT */}
          <StaggerContainer className="flex flex-col lg:flex-row gap-8 mb-10">
            <StaggerItem className="w-full lg:w-1/2 bg-gray-50 rounded-3xl p-10 lg:p-12 hover:shadow-md hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <OptimizedImage src="/images/speech-therapy.png" alt="" className="grayscale" disableBlur />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                  <Mic2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Speech Therapy</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Expert therapy addressing articulation disorders, stuttering, voice disorders, and language delays in both children and adults. Our approach builds confidence and clarity.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                  Consult a Therapist <ArrowRight size={18} />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem className="w-full lg:w-1/2 bg-white modern-card relative overflow-hidden rounded-3xl p-10 lg:p-12 border-2 border-primary/10 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all group relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <OptimizedImage src="/images/child-development.png" alt="" className="sepia-[.2]" disableBlur />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Waves size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">AVT (Auditory Verbal Therapy)</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  A highly structured program designed to teach children with hearing impairments to listen and speak using their amplified residual hearing or cochlear implants.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </SectionReveal>

      {/* Child Development Mosaic */}
      <SectionReveal className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Child Development Programs</h2>
            <div className="h-px bg-gray-200 flex-grow"></div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Large Block */}
            <StaggerItem className="md:col-span-2 bg-primary text-white rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-10 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">School Readiness Program</h3>
                <p className="text-white/90 text-lg mb-8 max-w-lg">
                  Comprehensive preparation ensuring children have the essential communication, social, and academic pre-skills for a successful transition to school life.
                </p>
                <Link to="/programs" className="btn-white text-sm">
                  Explore Programs
                </Link>
              </div>
            </StaggerItem>

            {/* Stacked Small Blocks */}
            <div className="md:col-span-1 flex flex-col gap-6">
              <StaggerItem className="bg-white modern-card relative overflow-hidden rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all flex-grow flex flex-col group">
                <div className="flex items-center gap-3 mb-3">
                  <Puzzle size={20} className="text-primary" />
                  <h4 className="font-bold text-gray-800 text-lg">Occupational Therapy</h4>
                </div>
                <p className="text-gray-500 text-sm mb-4">Enhancing fine motor skills, sensory processing, and daily living skills.</p>
                <Link to="/programs" className="mt-auto text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Details <ArrowRight size={14} /></Link>
              </StaggerItem>
              
              <StaggerItem className="bg-white modern-card relative overflow-hidden rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all flex-grow flex flex-col group">
                 <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={20} className="text-primary" />
                  <h4 className="font-bold text-gray-800 text-lg">IEP & Special Care</h4>
                </div>
                <p className="text-gray-500 text-sm mb-4">Individualised Education Programs tailored to unique developmental needs.</p>
                <Link to="/programs" className="mt-auto text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Details <ArrowRight size={14} /></Link>
              </StaggerItem>
            </div>
            
          </StaggerContainer>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Services;
