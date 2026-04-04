import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0c2623] pt-20 pb-10 mt-auto border-t-[8px] border-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <img src="/logo.png" alt="Hearwell Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Hearwell</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Professional hearing care and speech therapy services for children and adults. Dedicated to restoring the joy of sound and clear communication since 2014.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100063747556166" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white/70 border border-white/10">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/hearwell_speech_and_hearing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white/70 border border-white/10">
                <Instagram size={18} />
              </a>
              <a href="https://www.practo.com/ernakulam/clinic/hearwell-speech-and-hearing-centre-perumbavoor-1/audiologist-ps-62" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-white/70 border border-white/10">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> About Clinic</Link></li>
              <li><Link to="/doctor" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> Our Audiologist</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> All Services</Link></li>
              <li><Link to="/programs" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> Child Programs</Link></li>
              <li><Link to="/hearing-aids" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> Hearing Aids</Link></li>
              <li><Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"><ArrowRight size={14} /> Latest News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="flex flex-col gap-5 text-sm text-white/70">
              <li className="flex items-start gap-4 group">
                <Phone size={20} className="text-primary shrink-0 group-hover:text-white transition-colors" />
                <div>
                  <a href="tel:+919633626656" className="block hover:text-white mb-1 transition-colors">+91 9633626656</a>
                  <a href="tel:+919947314906" className="block hover:text-white transition-colors">+91 9947314906</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail size={20} className="text-primary shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:care@hearwell.in" className="hover:text-white transition-colors">care@hearwell.in</a>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin size={24} className="text-primary shrink-0 group-hover:text-white transition-colors" />
                <span className="leading-relaxed">Hariharraiyyer Rd, Opp. Govt Boys HSS<br/>Perumbavoor, Kerala<br/>(Also in Perinjanam)</span>
              </li>
            </ul>
          </div>

          {/* Hours & Payments */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Operating Hours</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70 mb-8 bg-white/5 p-5 rounded-2xl border border-white/10">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary" />
                <span className="font-medium text-white">Mon - Sat: 9:00 AM - 5:30 PM</span>
              </li>
              <li className="flex items-center gap-3 pl-7">
                <span className="opacity-70">Sunday: Closed</span>
              </li>
            </ul>

            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Payment Methods</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded border border-white/10">UPI</span>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded border border-white/10">Cash</span>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded border border-white/10">Cheque</span>
              <span className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded border border-white/10">DD</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Hearwell Speech and Hearing Centre. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
