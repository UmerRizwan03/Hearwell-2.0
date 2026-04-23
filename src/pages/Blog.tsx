import { CalendarDays, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import { heroContainer, heroItem } from '../utils/motion';
import OptimizedImage from '../components/OptimizedImage';
import { MicroLabel } from '../components/MicroLabel';
import SEO from '../components/SEO';

const Blog = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Hearing Health Blog"
        description="Expert articles on hearing health, speech development, and child wellness from Hearwell Speech & Hearing Centre."
        url="https://hearwell.com/blog"
      />
      {/* Typography-First Journal Header */}
      <section className="relative isolate pt-12 pb-24 lg:pt-24 lg:pb-36 bg-[#F8FAF9] border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div variants={heroContainer} initial="hidden" animate="visible" className="max-w-4xl">
            <MicroLabel label="Our Journal" />
            
            <motion.h1 
              variants={heroItem} 
              className="editorial-heading font-serif mb-8"
            >
              Insights & <br /><span className="italic">Research.</span>
            </motion.h1>
            
            <motion.p 
              variants={heroItem} 
              className="text-xl lg:text-2xl text-gray-600 font-sans leading-relaxed text-balance"
            >
              Expert insights and the latest updates in speech and hearing care, curated for our community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="py-24 md:py-36">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          
          {/* Featured Article */}
          <FadeScaleIn className="mb-20">
            <article className="group block bg-white modern-card card-hover-lift relative overflow-hidden rounded-lg shadow-md border border-gray-100">
               <div className="absolute top-6 left-6 z-20 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm">
                 Featured
               </div>
               <div className="relative h-[28rem] md:h-[34rem] w-full bg-gray-200 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                 <OptimizedImage src="/images/blog-banner.webp" alt="Early intervention in speech therapy" className="transform group-hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                    <div className="flex items-center gap-4 text-white/80 text-sm font-medium mb-3">
                      <span>Therapy</span>
                      <span className="w-1 h-1 rounded-full bg-white/50"></span>
                      <span className="flex items-center gap-1.5"><CalendarDays size={14}/> Oct 15, 2026</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white mb-4 group-hover:text-blue-50 transition-colors max-w-4xl">
                      Understanding the Importance of Early Intervention in Speech Therapy
                    </h2>
                 </div>
               </div>
            </article>
          </FadeScaleIn>

          {/* Article List */}
          <FadeIn>
            <h3 className="text-4xl font-semibold tracking-tight text-gray-900 mb-10 pb-5 border-b border-gray-100">Latest Articles</h3>
          </FadeIn>

          <StaggerContainer className="space-y-14">

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-7 md:gap-10 group border-b border-gray-100 pb-14">
                 <div className="shrink-0 w-full sm:w-48 md:w-64 aspect-video sm:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                    <OptimizedImage src="/images/hero.webp" alt="" className="transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" disableBlur />
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-md">Hearing Care</span>
                      <span>Oct 12</span>
                   </div>
                   <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      How Custom Hearing Aids Improve Quality of Life
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">Discover the profound impact that properly fitted, modern digital hearing aids can have on daily interactions and mental wellbeing.</p>
                   <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto cursor-default">
                     Read Full Article <ExternalLink size={16} />
                   </span>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-7 md:gap-10 group border-b border-gray-100 pb-14">
                 <div className="shrink-0 w-full sm:w-48 md:w-64 aspect-video sm:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                    <OptimizedImage src="/images/blog-child-iep.webp" alt="Child in educational therapy session" className="transform group-hover:scale-110 transition-transform duration-500" disableBlur />
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-md">Child Development</span>
                      <span>Oct 08</span>
                   </div>
                   <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      5 Signs Your Child Might Need an IEP
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">Understanding the subtle early indicators that your child could benefit from an Individualised Education Program at school.</p>
                   <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto cursor-default">
                     Read Full Article <ExternalLink size={16} />
                   </span>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-7 md:gap-10 group border-b border-gray-100 pb-14">
                 <div className="shrink-0 w-full sm:w-48 md:w-64 aspect-video sm:aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative">
                    <OptimizedImage src="/images/blog-newborn-screening.webp" alt="Newborn hearing screening" className="transform group-hover:scale-110 transition-transform duration-500" disableBlur />
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded-md">Audiology</span>
                      <span>Sep 29</span>
                   </div>
                   <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      What to Expect During a Newborn Hearing Screening (OAE)
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">A comprehensive parent's guide to the OAE process right after birth, explaining why it is painless and utterly crucial.</p>
                   <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto cursor-default">
                     Read Full Article <ExternalLink size={16} />
                   </span>
                 </div>
              </article>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Newsletter Signup */}
      <SectionReveal className="bg-primary-gradient py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Stay informed on hearing care.</h2>
            <p className="text-white/80 mb-10 text-lg">Subscribe to our monthly newsletter for expert tips, clinic updates, and educational resources directly to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-6 py-4 rounded-lg outline-none focus:bg-white/20 focus:border-white transition-colors duration-300"
                required
              />
              <button 
                type="submit"
                className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/50 text-xs mt-4">We respect your privacy. No spam, ever.</p>
          </FadeIn>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Blog;
