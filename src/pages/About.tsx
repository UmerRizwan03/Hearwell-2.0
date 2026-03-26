import PageHeader from '../components/PageHeader';
import { Heart, Activity, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import { slideInLeft, slideInRight, defaultViewport } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';

const About = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Our Clinic"
        subtitle="Serving the community with dedicated hearing and speech care since 2014."
        image="src/assets/images/about/aboutBanner.webp"
      />

      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          {/* Clinic Story - Asymmetrical Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-28">
            <motion.div
              className="w-full lg:w-1/2"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
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
              className="w-full lg:w-1/2 relative h-[500px]"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <div className="absolute inset-0 bg-gray-100 rounded-[24px] transform translate-x-4 translate-y-4"></div>
              <div className="w-full h-full bg-gray-300 rounded-[24px] overflow-hidden relative shadow-lg">
                <OptimizedImage src="src/assets/images/about/aboutTile.webp" alt="Hearwell Clinic Interior" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <OptimizedImage src="/images/blog-banner.png" alt="" className="grayscale" disableBlur />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-2xl mb-2">Our Mission</h4>
                  <p className="text-sm text-center leading-relaxed font-medium">Empowering lives through clear communication and confident hearing.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </SectionReveal>

      {/* Core Values - Staggered List */}
      <SectionReveal className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Core Values</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <StaggerItem className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Trust</h3>
                <p className="text-gray-600 leading-relaxed">We build lasting relationships through transparent, honest, and reliable care.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group md:translate-y-8">
              <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Heart size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compassionate Care</h3>
                <p className="text-gray-600 leading-relaxed">Every patient is treated with empathy, understanding, and respect for their unique needs.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group">
              <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Professionalism</h3>
                <p className="text-gray-600 leading-relaxed">We adhere to the highest clinical standards and continuous medical education.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-6 group md:translate-y-8">
              <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Activity size={32} />
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
      <SectionReveal className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <StaggerItem className="p-6">
              <p className="text-5xl lg:text-7xl font-bold text-primary mb-4">10+</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Specialist Experience</p>
            </StaggerItem>
            <StaggerItem className="p-6">
              <p className="text-5xl lg:text-7xl font-bold text-primary mb-4">5k+</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Patients</h3>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Lives Transformed</p>
            </StaggerItem>
            <StaggerItem className="p-6">
              <p className="text-5xl lg:text-7xl font-bold text-primary mb-4">2</p>
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
