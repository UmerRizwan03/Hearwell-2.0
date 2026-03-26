import PageHeader from '../components/PageHeader';
import { CalendarDays, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, FadeScaleIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';
import OptimizedImage from '../components/OptimizedImage';

const Blog = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Health Resources" 
        subtitle="Expert insights and the latest updates in speech and hearing care."
        image="/images/blog-banner.png"
      />

      <SectionReveal className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          {/* Featured Article */}
          <FadeScaleIn className="mb-20">
            <Link to="#" className="group block bg-white modern-card relative overflow-hidden rounded-[32px] overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all relative">
               <div className="absolute top-6 left-6 z-20 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                 Featured
               </div>
               <div className="relative h-64 md:h-96 w-full bg-gray-200 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-80"></div>
                 <OptimizedImage src="/images/blog-banner.png" alt="Early intervention in speech therapy" className="transform group-hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                    <div className="flex items-center gap-4 text-white/80 text-sm font-medium mb-3">
                      <span>Therapy</span>
                      <span className="w-1 h-1 rounded-full bg-white/50"></span>
                      <span className="flex items-center gap-1.5"><CalendarDays size={14}/> Oct 15, 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors">
                      Understanding the Importance of Early Intervention in Speech Therapy
                    </h2>
                 </div>
               </div>
            </Link>
          </FadeScaleIn>

          {/* Article List */}
          <FadeIn>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">Latest Articles</h3>
          </FadeIn>

          <StaggerContainer className="space-y-10">

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-6 md:gap-8 group border-b border-gray-100 pb-10">
                 <div className="shrink-0 w-full sm:w-40 md:w-48 aspect-video sm:aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                    <OptimizedImage src="/images/hero.png" alt="" className="transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" disableBlur />
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Hearing Care</span>
                      <span>Oct 12</span>
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      How Custom Hearing Aids Improve Quality of Life
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">Discover the profound impact that properly fitted, modern digital hearing aids can have on daily interactions and mental wellbeing.</p>
                   <Link to="#" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                     Read Full Article <ExternalLink size={16} />
                   </Link>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-6 md:gap-8 group border-b border-gray-100 pb-10">
                 <div className="shrink-0 w-full sm:w-40 md:w-48 aspect-video sm:aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-gray-300 to-gray-200 transform group-hover:scale-110 transition-transform duration-500"></div>
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Child Development</span>
                      <span>Oct 08</span>
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      5 Signs Your Child Might Need an IEP
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">Understanding the subtle early indicators that your child could benefit from an Individualised Education Program at school.</p>
                   <Link to="#" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                     Read Full Article <ExternalLink size={16} />
                   </Link>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="flex flex-col sm:flex-row gap-6 md:gap-8 group border-b border-gray-100 pb-10">
                 <div className="shrink-0 w-full sm:w-40 md:w-48 aspect-video sm:aspect-square bg-gray-100 rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-gray-200 transform group-hover:scale-110 transition-transform duration-500"></div>
                 </div>
                 <div className="flex flex-col justify-center flex-grow py-2">
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-3">
                      <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Audiology</span>
                      <span>Sep 29</span>
                   </div>
                   <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      What to Expect During a Newborn Hearing Screening (OAE)
                   </h4>
                   <p className="text-gray-600 mb-4 line-clamp-2">A comprehensive parent's guide to the OAE process right after birth, explaining why it is painless and utterly crucial.</p>
                   <Link to="#" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                     Read Full Article <ExternalLink size={16} />
                   </Link>
                 </div>
              </article>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Newsletter Signup */}
      <SectionReveal className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay informed on hearing care.</h2>
            <p className="text-white/80 mb-10 text-lg">Subscribe to our monthly newsletter for expert tips, clinic updates, and educational resources directly to your inbox.</p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-6 py-4 rounded-full outline-none focus:bg-white/20 focus:border-white transition-colors duration-300"
                required
              />
              <button 
                type="submit"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02] transition-all"
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
