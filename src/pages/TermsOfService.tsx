import { SectionReveal } from '../components/Motion';
import { FadeIn } from '../components/Motion';

const TermsOfService = () => {
  return (
    <div className="bg-white">
      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 tracking-tight">Terms of Service</h1>
            <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest font-semibold italic">Last Updated: April 2, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">1. Agreement to Terms</h2>
                <p>
                  By accessing the Hearwell Speech and Hearing Centre website and utilizing our clinical services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">2. Clinical Services</h2>
                <p>
                  Hearwell provides specialized audiological and speech therapy services. All treatments and recommendations are based on professional clinical evaluations and established medical practices. We reserve the right to modify our service offerings and clinical protocols at any time.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 font-medium">
                  <li>Appointment scheduling is subject to availability.</li>
                  <li>Cancellations should be made at least 24 hours in advance.</li>
                  <li>Patients are responsible for providing accurate health information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">3. Use of Website</h2>
                <p>
                  The content provided on this website is for informational purposes only and does not constitute medical advice. You agree to use the website for lawful purposes and refrain from any activity that may disrupt site security or operation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">4. Intellectual Property</h2>
                <p>
                  All content, logos, images, and clinical materials on our website are the intellectual property of Hearwell Speech and Hearing Centre and are protected by applicable intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">5. Limitation of Liability</h2>
                <p>
                  While we strive for clinical excellence, Hearwell shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or services, except as required by law. Clinical outcomes may vary based on individual physiological factors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">6. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India and the state of Kerala. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kerala.
                </p>
              </section>

              <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="mb-0">
                  For any questions regarding these Terms of Service, please contact us at:<br /><br />
                  <strong>Hearwell Speech and Hearing Centre</strong><br />
                  Hariharraiyyer Rd, Opp. Govt Boys HSS<br />
                  Perumbavoor, Kerala<br />
                  Email: care@hearwell.in<br />
                  Phone: +91 9633626656
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default TermsOfService;
