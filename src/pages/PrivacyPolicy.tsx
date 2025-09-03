const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#101828]">
      <section className="max-w-4xl mx-auto px-5 py-8 text-gray-200 bg-gray-900 rounded-xl mt-0 mb-0 leading-relaxed font-sans">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent mb-5 text-center">Privacy Policy</h1>
        <p className="text-center text-gray-300 mb-6">Effective Date: 07/04/2025| Last Updated: 09/04/2025</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">1. Information We Collect</h2>
        <p className="mb-5 text-gray-300">We may collect the following information:</p>
        <ul className="ml-5 pl-5 mb-8 space-y-2">
          <li className="text-gray-300">Personal: Name, email, phone, gender, DOB, university, photos, bio, orientation</li>
          <li className="text-gray-300">Usage: Matches, chats, preferences, activity</li>
          <li className="text-gray-300">Device: IP, OS, app version, language, location (if allowed)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">2. How We Use Your Information</h2>
        <ul className="ml-5 pl-5 mb-8 space-y-2">
          <li className="text-gray-300">Create/manage accounts</li>
          <li className="text-gray-300">Enable matches and communication</li>
          <li className="text-gray-300">Send updates and improve experience</li>
          <li className="text-gray-300">Prevent fraud and abuse</li>
          <li className="text-gray-300">Provide premium features</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">3. Sharing of Information</h2>
        <p className="mb-5 text-gray-300">We do <strong>not sell</strong> your data. We may share with:</p>
        <ul className="ml-5 pl-5 mb-8 space-y-2">
          <li className="text-gray-300">Service providers (hosting, payments, etc.)</li>
          <li className="text-gray-300">Authorities (if required by law)</li>
          <li className="text-gray-300">To protect our rights or users' safety</li>
        </ul>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">4. Data Security</h2>
        <p className="mb-5 text-gray-300">We use encryption and secure practices. No system is 100% secure.</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">5. Your Rights</h2>
        <p className="mb-5 text-gray-300">You can request to view, update, or delete your data by contacting us at <strong>kutedating@gmail.com</strong>.</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">6. Cookies & Analytics</h2>
        <p className="mb-5 text-gray-300">We use analytics tools (like Firebase) and may use cookies. You can disable them via device settings.</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">7. Age Restriction</h2>
        <p className="mb-5 text-gray-300">Only users aged 18+ are allowed. We do not knowingly collect data from minors.</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">8. Policy Updates</h2>
        <p className="mb-5 text-gray-300">We may update this policy. Major changes will be notified via app or email.</p>

        <h2 className="text-2xl font-semibold text-cyan-400 mb-3 mt-10">9. Contact Us</h2>
        <p className="mb-5 text-gray-300">If you have questions, contact us at:</p>
        <p className="mb-5 text-gray-300">
          <strong>Kute Team</strong><br />
          📧 Email: kutedating@gmail.com<br />
          📍 Address: <span className="text-gray-300 leading-relaxed">
                    KP -7F
                    <br />
                    KIIT CAMPUS
                    <br />
                    Near Kafe Delizioso
                    <br />
                    Bhubaneswar, Odisha
                    <br />
                    751024
                  </span>
        </p>

        <p className="mt-12 text-sm text-gray-500 text-center">Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
