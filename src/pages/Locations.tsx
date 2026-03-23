import PageHeader from '../components/PageHeader';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem } from '../components/Motion';

const Locations = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Locations" 
        subtitle="Find the nearest Hearwell centre and check our operating hours."
        image="/images/clinic-interior.png"
      />

      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Clinic 1: Perumbavoor */}
            <StaggerItem className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="h-48 bg-gray-200 relative">
                 <div className="absolute inset-0 bg-gray-300 bg-cover bg-center opacity-70"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4A908F]">
                    <MapPin size={40} className="drop-shadow-md" fill="currentColor" />
                 </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Hearwell Perumbavoor</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-[#4A908F] shrink-0 mt-1" />
                    <p className="text-gray-600 leading-relaxed">
                      Opp. Govt. Boys Higher Secondary School Ground,<br/>
                      Hariharraiyyer Road,<br/>
                      Perumbavoor
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-[#4A908F] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-600 font-medium">Mon – Sat (9:00 AM – 5:30 PM)</p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-[#4A908F] shrink-0 mt-0.5" />
                    <div>
                      <a href="tel:+919633626656" className="block text-[#4A908F] font-semibold hover:underline">+91 9633626656</a>
                      <a href="tel:+919947314906" className="block text-[#4A908F] font-semibold hover:underline">+91 9947314906</a>
                    </div>
                  </div>
                </div>

                <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full gap-2 border-2 border-[#4A908F] text-[#4A908F] py-3 rounded-xl font-semibold hover:bg-[#4A908F] hover:text-white hover:scale-[1.02] transition-all">
                  <Navigation size={18} /> Get Directions
                </a>
              </div>
            </StaggerItem>

            {/* Clinic 2: Perinjanam */}
             <StaggerItem className="bg-white rounded-[24px] overflow-hidden shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="h-48 bg-gray-200 relative">
                 <div className="absolute inset-0 bg-gray-300 bg-cover bg-center opacity-70"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4A908F]">
                    <MapPin size={40} className="drop-shadow-md" fill="currentColor" />
                 </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Hearwell Perinjanam</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-[#4A908F] shrink-0 mt-1" />
                    <p className="text-gray-600 leading-relaxed">
                      Near Vadakke Bus Stop,<br/>
                      Perinjanam,<br/>
                      Kerala 680686
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-[#4A908F] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-600 font-medium">Mon – Sat (9:00 AM – 5:30 PM)</p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-[#4A908F] shrink-0 mt-0.5" />
                    <div>
                      <a href="tel:+919633626656" className="block text-[#4A908F] font-semibold hover:underline">+91 9633626656</a>
                      <a href="tel:+919947314906" className="block text-[#4A908F] font-semibold hover:underline">+91 9947314906</a>
                    </div>
                  </div>
                </div>

                <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full gap-2 border-2 border-[#4A908F] text-[#4A908F] py-3 rounded-xl font-semibold hover:bg-[#4A908F] hover:text-white hover:scale-[1.02] transition-all">
                  <Navigation size={18} /> Get Directions
                </a>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Locations;
