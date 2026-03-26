import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Phone, Mail, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';

const faqs = [
  {
    q: 'What are the modes of payment accepted?',
    a: 'We accept payments via Cash, Cheque, and Demand Draft.',
  },
  {
    q: 'Which is the nearest landmark to the Perumbavoor clinic?',
    a: 'Our Perumbavoor centre is located directly opposite Govt. Boys Higher Secondary School Ground on Hariharraiyyer Road. It is easy to locate.',
  },
  {
    q: 'What are the hours of operation?',
    a: 'We are open Monday through Saturday, 9:00 AM to 5:30 PM. The clinic is closed on Sundays.',
  },
  {
    q: 'Do I need a prior appointment for a consultation?',
    a: 'Walk-ins are welcome, but we strongly recommend booking an appointment to avoid waiting. You can book online through our website or call us directly.',
  },
  {
    q: 'What age groups do you provide speech therapy for?',
    a: 'We provide speech and language therapy for all age groups — from toddlers and young children to adolescents and adults. Early intervention is our specialty.',
  },
  {
    q: 'Do you offer trial periods for hearing aids?',
    a: 'Yes, we offer trial fittings so you can experience the hearing aid before committing to a purchase. Our audiologist will guide you through the entire process.',
  },
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) => (
  <button
    onClick={toggle}
    className="w-full text-left bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all duration-300 overflow-hidden group"
  >
    <div className="flex items-center justify-between p-6 gap-4">
      <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">{faq.q}</h4>
      <ChevronDown
        size={20}
        className={`shrink-0 text-gray-400 group-hover:text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
    <div
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-6 text-gray-500 leading-relaxed text-[15px]">{faq.a}</p>
      </div>
    </div>
  </button>
);

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              
              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                  <a href="tel:+919633626656" className="block text-gray-600 hover:text-primary font-medium">+91 9633626656</a>
                  <a href="tel:+919947314906" className="block text-gray-600 hover:text-primary font-medium">+91 9947314906</a>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
                  <p className="text-gray-500 text-sm mb-2">Message our clinic directly</p>
                  <a href="https://wa.me/919633626656" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">Start Chat</a>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                  <a href="mailto:care@hearwell.in" className="block text-gray-600 hover:text-primary mb-1">care@hearwell.in</a>
                  <p className="text-xs text-gray-400">Response within 24 hours</p>
                </div>
              </StaggerItem>

              <StaggerItem className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-5 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
                  <p className="text-gray-600 font-medium mb-1">Perumbavoor Branch</p>
                  <p className="text-gray-600 font-medium mb-2">Perinjanam Branch</p>
                  <a href="/locations" className="text-xs text-primary font-semibold uppercase tracking-wider">View Maps</a>
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
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="+91 99999 99999" 
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
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
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors duration-300 outline-none placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Please describe your inquiry..." 
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors duration-300 outline-none resize-none placeholder:text-gray-400"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary w-full text-lg py-4 shadow-md mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </SectionReveal>

      {/* FAQ Section */}
      <SectionReveal className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500">Quick answers to the questions we hear most often.</p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Contact;
