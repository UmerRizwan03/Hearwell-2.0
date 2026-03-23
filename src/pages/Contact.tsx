import PageHeader from '../components/PageHeader';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to answer your questions and help you start your journey to better health."
        image="/images/clinic-interior.png"
      />

      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Contact Details Matrix */}
            <StaggerContainer className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-[#4A908F]/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#4A908F]/10 text-[#4A908F] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                  <a href="tel:+919633626656" className="block text-gray-600 hover:text-[#4A908F] font-medium">+91 9633626656</a>
                  <a href="tel:+919947314906" className="block text-gray-600 hover:text-[#4A908F] font-medium">+91 9947314906</a>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-[#4A908F]/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
                  <p className="text-gray-500 text-sm mb-2">Message our clinic directly</p>
                  <a href="https://wa.me/919633626656" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">Start Chat</a>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-[#4A908F]/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#4A908F]/10 text-[#4A908F] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                  <a href="mailto:care@hearwell.in" className="block text-gray-600 hover:text-[#4A908F] mb-1">care@hearwell.in</a>
                  <p className="text-xs text-gray-400">Response within 24 hours</p>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-[#4A908F]/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#4A908F]/10 text-[#4A908F] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
                  <p className="text-gray-600 font-medium mb-1">Perumbavoor Branch</p>
                  <p className="text-gray-600 font-medium mb-2">Perinjanam Branch</p>
                  <a href="/locations" className="text-xs text-[#4A908F] font-semibold uppercase tracking-wider">View Maps</a>
                </div>
              </StaggerItem>

            </StaggerContainer>

            {/* General Inquiry Form */}
            <FadeIn className="w-full lg:w-7/12">
              <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-100 h-full">
                <h3 className="text-3xl font-bold text-gray-800 mb-8">Send us a message</h3>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe" 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#4A908F] focus:border-[#4A908F] block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+91 99999 99999" 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#4A908F] focus:border-[#4A908F] block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      placeholder="How can we help?" 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#4A908F] focus:border-[#4A908F] block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Please describe your inquiry..." 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-[#4A908F] focus:border-[#4A908F] block p-3.5 transition-colors duration-300 outline-none resize-none placeholder:text-gray-400"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full text-white bg-[#4A908F] hover:bg-[#4A908F]/90 hover:scale-[1.02] focus:ring-4 focus:outline-none focus:ring-[#4A908F]/50 font-bold rounded-xl text-lg px-5 py-4 text-center transition-all shadow-md mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Contact;
