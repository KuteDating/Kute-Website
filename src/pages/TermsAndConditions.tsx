
const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="max-w-4xl mx-auto px-5 py-8 text-gray-200 bg-gray-900 rounded-xl mt-0 mb-0 leading-relaxed font-sans">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent mb-10 text-center">
            Terms and Conditions
          </h1>

          <p className="mb-6 text-gray-300">
            Welcome to our platform. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you must not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">1. Acceptance of Terms</h2>
          <p className="mb-6 text-gray-300">
            These Terms & Conditions govern your use of our website and services. By registering, accessing, or using any part of the platform, you agree to be legally bound by these terms.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">2. Eligibility</h2>
          <p className="mb-6 text-gray-300">
            You must be at least 18 years of age to use our services. By using the platform, you represent and warrant that you meet the age requirement.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">3. User Conduct</h2>
          <p className="mb-6 text-gray-300">
            You agree to use our services only for lawful purposes and in a way that does not violate the rights of others or restrict their use of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">4. Intellectual Property</h2>
          <p className="mb-6 text-gray-300">
            All content on this site—including text, graphics, logos, and software—is the property of our platform and protected by copyright and intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">5. Privacy</h2>
          <p className="mb-6 text-gray-300">
            Your use of the platform is also governed by our <a href="/PrivacyPolicy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</a>, which outlines how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">6. Limitation of Liability</h2>
          <p className="mb-6 text-gray-300">
            We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of our platform.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">7. Termination</h2>
          <p className="mb-6 text-gray-300">
            We reserve the right to suspend or terminate your access to the platform at our sole discretion, without prior notice.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">8. Changes to Terms</h2>
          <p className="mb-6 text-gray-300">
            We may update these Terms & Conditions from time to time. Continued use of the platform after changes are made constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold text-cyan-400 mb-4 mt-10">9. Governing Law</h2>
          <p className="mb-6 text-gray-300">
            These Terms shall be governed and interpreted in accordance with the laws of your local jurisdiction.
          </p>

          <p className="mt-10 text-sm text-gray-500 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  );
};export default TermsAndConditions;
