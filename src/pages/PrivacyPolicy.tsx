import { SectionReveal } from '../components/Motion';
import { FadeIn } from '../components/Motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <SectionReveal className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest font-semibold italic">Last Updated: April 2, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">1. Introduction</h2>
                <p>
                  At Hearwell Speech and Hearing Centre, we are committed to protecting your privacy and ensuring the confidentiality of your health information. This Privacy Policy outlines how we collect, use, and safeguard the personal data you provide to us through our website and clinic services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">2. Information Collection</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when you book an appointment, contact us through our website, or visit our clinic. This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Full Name and Contact Information (phone, email, address)</li>
                  <li>Medical history and previous audiological results</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">3. Use of Information</h2>
                <p>
                  The information we collect is used solely for the purpose of providing you with high-quality audiological and speech therapy services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Managing and scheduling appointments</li>
                  <li>Developing personalized treatment plans</li>
                  <li>Communicating with you regarding your care</li>
                  <li>Ensuring accurate billing and record-keeping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">4. Data Protection & Confidentiality</h2>
                <p>
                  Hearwell adheres to strict clinical standards for data protection. Your health records are treated with the utmost confidentiality and are only accessible by authorized clinical staff directly involved in your care. We do not sell or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">5. Website Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience and analyze site traffic. These cookies do not collect personally identifiable information and are used for technical optimization only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-100">6. Your Rights</h2>
                <p>
                  You have the right to access your medical records, request corrections to your personal information, and withdraw consent for certain data uses at any time. For any inquiries regarding your data, please contact our clinic directly.
                </p>
              </section>

              <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mt-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p className="mb-0">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:<br /><br />
                  <strong>Hearwell Speech and Hearing Centre</strong><br />
                  Hariharraiyyer Rd, Opp. Govt Boys HSS<br />
                  Perumbavoor, Kerala<br />
                  Email: hearwellspeechandhearing@gmail.com<br />
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

export default PrivacyPolicy;
