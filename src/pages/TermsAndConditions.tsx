
import '../pages/legalPages.css';

const TermsAndConditions = () => {
  return (
    <section className="legal-page">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-playfair text-[#5de383] mb-10 text-center">Terms and Conditions</h1>

        <p className="mb-6">
          Welcome to our platform. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          These Terms & Conditions govern your use of our website and services. By registering, accessing, or using any part of the platform, you agree to be legally bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">2. Eligibility</h2>
        <p className="mb-6">
          You must be at least 18 years of age to use our services. By using the platform, you represent and warrant that you meet the age requirement.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">3. User Conduct</h2>
        <p className="mb-6">
          You agree to use our services only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the platform.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">4. Intellectual Property</h2>
        <p className="mb-6">
          All content on this site—including text, graphics, logos, and software—is the property of our platform and protected by copyright and intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">5. Privacy</h2>
        <p className="mb-6">
          Your use of the platform is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">6. Limitation of Liability</h2>
        <p className="mb-6">
          We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our platform.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">7. Termination</h2>
        <p className="mb-6">
          We reserve the right to suspend or terminate your access to the platform at our sole discretion, without prior notice.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">8. Changes to Terms</h2>
        <p className="mb-6">
          We may update these Terms & Conditions from time to time. Continued use of the platform after changes are made constitutes acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff4e50] mb-4">9. Governing Law</h2>
        <p className="mb-6">
          These Terms shall be governed and interpreted in accordance with the laws of your local jurisdiction.
        </p>

        <p className="mt-10 text-sm text-[#aaaaaa] text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
