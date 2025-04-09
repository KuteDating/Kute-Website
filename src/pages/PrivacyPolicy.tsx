import React from 'react';
import './legalPages.css'; // Make sure the path is correct

const PrivacyPolicy = () => {
  return (
    <section className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="text-center">Effective Date: 07/04/2025| Last Updated: 09/04/2025</p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>Personal: Name, email, phone, gender, DOB, university, photos, bio, orientation</li>
        <li>Usage: Matches, chats, preferences, activity</li>
        <li>Device: IP, OS, app version, language, location (if allowed)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Create/manage accounts</li>
        <li>Enable matches and communication</li>
        <li>Send updates and improve experience</li>
        <li>Prevent fraud and abuse</li>
        <li>Provide premium features</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do <strong>not sell</strong> your data. We may share with:</p>
      <ul>
        <li>Service providers (hosting, payments, etc.)</li>
        <li>Authorities (if required by law)</li>
        <li>To protect our rights or users’ safety</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We use encryption and secure practices. No system is 100% secure.</p>

      <h2>5. Your Rights</h2>
      <p>You can request to view, update, or delete your data by contacting us at <strong>kutedating@gmail.com</strong>.</p>

      <h2>6. Cookies & Analytics</h2>
      <p>We use analytics tools (like Firebase) and may use cookies. You can disable them via device settings.</p>

      <h2>7. Age Restriction</h2>
      <p>Only users aged 18+ are allowed. We do not knowingly collect data from minors.</p>

      <h2>8. Policy Updates</h2>
      <p>We may update this policy. Major changes will be notified via app or email.</p>

      <h2>9. Contact Us</h2>
      <p>If you have questions, contact us at:</p>
      <p>
        <strong>Kute Team</strong><br />
        📧 Email: kutedating@gmail.com<br />
        📍 Address: <span className="text-[#dddddd] leading-relaxed">
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

      <p className="footer-note">Last updated: {new Date().toLocaleDateString()}</p>
    </section>
  );
};

export default PrivacyPolicy;