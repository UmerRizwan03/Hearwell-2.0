import { Link } from 'react-router-dom';
import { ArrowRight, Ear } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist. Return to the Hearwell homepage."
        url="https://hearwell.com/404"
      />
      <div className="min-h-[calc(100dvh-72px)] bg-[#F8FAF9] flex items-center justify-center px-6">
        <div className="max-w-lg w-full text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary">
            <Ear size={40} />
          </div>

          {/* Headline */}
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary mb-4">404 — Not Found</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-5">
            We couldn't find that page.
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            The page you're looking for may have been moved or doesn't exist. 
            Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Return Home <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4 font-medium">Or explore a section:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Hearing Aids', path: '/hearing-aids' },
                { name: 'Book Appointment', path: '/booking' },
                { name: 'Locations', path: '/locations' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-primary/30 hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
