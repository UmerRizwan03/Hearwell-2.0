import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/doctor' },
    { name: 'Services', path: '/services' },
    { name: 'Programs', path: '/programs' },
    { name: 'Hearing Aids', path: '/hearing-aids' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Fixed Header Bar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-white py-4 shadow-none'
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
              : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
          {/* Logo area */}
          <Link to="/" className="flex items-center gap-2 relative z-[60]" onClick={closeMenu}>
            <img src="/logo.png" alt="Hearwell Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">Hearwell</h1>
              <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Speech & Hearing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-primary rounded-full" />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: '0 4px 15px -4px rgba(29,84,79,0.4)' }}
              >
                Book Appointment
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 relative z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay — outside the header so it truly covers the full viewport */}
      <div
        className={`fixed inset-0 bg-white z-[45] lg:hidden transition-transform duration-300 ease-in-out flex flex-col pt-24 px-8 pb-10 overflow-y-auto overscroll-contain ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 flex-grow">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={closeMenu}
                className={`text-2xl font-bold transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              to="/booking"
              onClick={closeMenu}
              className="btn-primary w-full"
            >
              Book Appointment
            </Link>
          </li>
        </ul>

        <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-primary" />
            <span>+91 9633626656</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-primary" />
            <span>Perumbavoor & Perinjanam</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
