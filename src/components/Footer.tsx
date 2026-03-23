import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Hearwell Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-gray-800">Hearwell</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Professional hearing care and speech therapy services for children and adults. Solve your hearing problem in just one day.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer flex items-center justify-center"></div>
              <div className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary/20 hover:text-primary transition-colors cursor-pointer flex items-center justify-center"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Clinic</Link></li>
              <li><Link to="/doctor" className="hover:text-primary transition-colors">Our Audiologist</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Child Programs</Link></li>
              <li><Link to="/hearing-aids" className="hover:text-primary transition-colors">Hearing Aids</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919633626656" className="block hover:text-primary">+91 9633626656</a>
                  <a href="tel:+919947314906" className="block hover:text-primary">+91 9947314906</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:care@hearwell.in" className="hover:text-primary">care@hearwell.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Perumbavoor • Perinjanam</span>
              </li>
            </ul>
          </div>

          {/* Hours & Payments */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-5">Operating Hours</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 mb-6">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary" />
                <span>Mon - Sat: 9:00 AM - 5:30 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[18px]"></div> {/* Spacer */}
                <span>Sunday: Closed</span>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 mb-3">Payment Methods</h3>
            <div className="flex gap-2">
              <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">UPI</span>
              <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">Cash</span>
              <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">Cheque</span>
              <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded">DD</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hearwell Speech and Hearing Centre. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-600">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
