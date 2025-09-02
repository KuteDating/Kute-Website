import './legalPages.css';

const ChildSecurity = () => {
  return (
    <section className="legal-page max-w-5xl">
      <h1>Child Safety Standards</h1>
      <p className="text-center mb-12">Effective Date: September 1, 2025 | Last Updated: September 1, 2025</p>

      <div className="bg-red-900/20 border border-red-500 rounded-lg p-8 mb-12">
        <h2 className="text-red-400 text-xl font-bold mb-4">Age Restriction Notice</h2>
        <p className="text-red-200 text-lg leading-relaxed">
          Kute is exclusively designed for adults aged 18 and above. We strictly prohibit minors from using our platform and are fully compliant with Google Play's Child Safety Standards policy for Social and Dating apps.
        </p>
      </div>

      <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-8 mb-12">
        <h2 className="text-blue-400 text-xl font-bold mb-4">Google Play Child Safety Standards Compliance</h2>
        <p className="text-blue-200 text-lg leading-relaxed mb-4">
          This policy addresses all five requirements of Google Play's Child Safety Standards:
        </p>
        <ul className="text-blue-200 space-y-2">
          <li className="text-lg">✓ Published standards against child sexual abuse and exploitation (CSAE)</li>
          <li className="text-lg">✓ In-app mechanism for user feedback and reporting</li>
          <li className="text-lg">✓ Comprehensive approach to addressing child sexual abuse material (CSAM)</li>
          <li className="text-lg">✓ Full compliance with child safety laws</li>
          <li className="text-lg">✓ Dedicated child safety point of contact</li>
        </ul>
      </div>

      <h2>1. Standards Against Child Sexual Abuse and Exploitation (CSAE)</h2>
      <p className="mb-6 text-lg leading-relaxed">Kute maintains zero tolerance for child sexual abuse and exploitation. Our comprehensive standards include:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>Absolute Prohibition:</strong> Any content, behavior, or communication related to child sexual abuse or exploitation is strictly forbidden</li>
        <li className="text-lg leading-relaxed"><strong>Proactive Detection:</strong> Advanced AI systems continuously scan for potential CSAE content and behavior patterns</li>
        <li className="text-lg leading-relaxed"><strong>Immediate Action:</strong> Suspected CSAE results in instant account termination, device banning, and law enforcement notification</li>
        <li className="text-lg leading-relaxed"><strong>Staff Training:</strong> All team members receive specialized training on identifying and responding to CSAE</li>
        <li className="text-lg leading-relaxed"><strong>External Partnerships:</strong> We collaborate with child safety organizations and law enforcement agencies</li>
      </ul>

      <h2>2. In-App User Feedback and Reporting Mechanism</h2>
      <p className="mb-6 text-lg leading-relaxed">Kute provides multiple accessible reporting channels within our application:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>Profile Reporting:</strong> Every user profile includes a prominent "Report" button for immediate concerns</li>
        <li className="text-lg leading-relaxed"><strong>Message Reporting:</strong> Users can report inappropriate messages directly within conversations</li>
        <li className="text-lg leading-relaxed"><strong>Anonymous Reporting:</strong> Users can submit reports without revealing their identity</li>
        <li className="text-lg leading-relaxed"><strong>Emergency Reporting:</strong> Dedicated emergency button for immediate child safety concerns</li>
        <li className="text-lg leading-relaxed"><strong>24/7 Response:</strong> All reports are reviewed within 2 hours, with emergency reports prioritized immediately</li>
      </ul>

      <div className="bg-green-900/20 border border-green-500 rounded-lg p-8 mb-12">
        <h3 className="text-green-400 font-semibold mb-6 text-xl">How to Report Child Safety Concerns:</h3>
        <ul className="text-green-200 space-y-3">
          <li className="text-lg leading-relaxed"><strong>In-App:</strong> Use the "Report" button on any profile or conversation</li>
          <li className="text-lg leading-relaxed"><strong>Emergency Button:</strong> Red "Child Safety Alert" button in app settings</li>
          <li className="text-lg leading-relaxed"><strong>Direct Email:</strong> safety@kutedating.com (monitored 24/7)</li>
          <li className="text-lg leading-relaxed"><strong>Anonymous Tips:</strong> Anonymous reporting form in app help section</li>
        </ul>
      </div>

      <h2>3. Child Sexual Abuse Material (CSAM) Prevention</h2>
      <p className="mb-6 text-lg leading-relaxed">Kute employs comprehensive measures to prevent and address CSAM:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>PhotoDNA Technology:</strong> Industry-standard hash-based detection to identify known CSAM</li>
        <li className="text-lg leading-relaxed"><strong>AI Visual Analysis:</strong> Machine learning algorithms scan all uploaded images for potential CSAM</li>
        <li className="text-lg leading-relaxed"><strong>Human Verification:</strong> Trained moderators review flagged content within 30 minutes</li>
        <li className="text-lg leading-relaxed"><strong>NCMEC Reporting:</strong> Mandatory reporting to National Center for Missing & Exploited Children</li>
        <li className="text-lg leading-relaxed"><strong>Law Enforcement Cooperation:</strong> Direct coordination with federal and local authorities</li>
        <li className="text-lg leading-relaxed"><strong>Hash Database:</strong> Continuous updates to blocked content signatures</li>
      </ul>

      <h2>4. Age Verification and Minor Protection</h2>
      <p className="mb-6 text-lg leading-relaxed">Our multi-layered approach ensures only adults access our platform:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>Mandatory Age Declaration:</strong> All users must confirm they are 18+ during registration</li>
        <li className="text-lg leading-relaxed"><strong>Document Verification:</strong> Government-issued ID verification for suspicious accounts</li>
        <li className="text-lg leading-relaxed"><strong>Educational Institution Blocking:</strong> High school email domains are automatically blocked</li>
        <li className="text-lg leading-relaxed"><strong>Behavioral Analysis:</strong> AI monitors for patterns typical of underage users</li>
        <li className="text-lg leading-relaxed"><strong>Device Fingerprinting:</strong> Prevents banned minors from creating new accounts</li>
        <li className="text-lg leading-relaxed"><strong>University Verification:</strong> Integration with higher education databases for student verification</li>
      </ul>

      <h2>5. Child Safety Laws Compliance</h2>
      <p className="mb-6 text-lg leading-relaxed">Kute maintains full compliance with all applicable child safety legislation:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>Children's Online Privacy Protection Act (COPPA):</strong> Complete compliance with data collection restrictions</li>
        <li className="text-lg leading-relaxed"><strong>FOSTA-SESTA:</strong> Full adherence to anti-trafficking and exploitation provisions</li>
        <li className="text-lg leading-relaxed"><strong>General Data Protection Regulation (GDPR):</strong> Enhanced child protection under Article 8</li>
        <li className="text-lg leading-relaxed"><strong>UK Age Appropriate Design Code:</strong> Compliance with privacy and safety standards</li>
        <li className="text-lg leading-relaxed"><strong>Indian Information Technology Act:</strong> Adherence to child protection provisions</li>
        <li className="text-lg leading-relaxed"><strong>State and Local Laws:</strong> Compliance with jurisdiction-specific child safety requirements</li>
      </ul>

      <h2>6. Data Protection for Minors</h2>
      <p className="mb-6 text-lg leading-relaxed">In the event minor data is inadvertently collected:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed">Immediate deletion of all associated data upon discovery</li>
        <li className="text-lg leading-relaxed">No data sharing with third parties under any circumstances</li>
        <li className="text-lg leading-relaxed">Parent/guardian notification when possible</li>
        <li className="text-lg leading-relaxed">Permanent device and IP blocking to prevent re-registration</li>
        <li className="text-lg leading-relaxed">Incident logging for compliance and improvement purposes</li>
      </ul>

      <h2>7. Parental Guidance & Resources</h2>
      <div className="bg-green-900/20 border border-green-500 rounded-lg p-8 mb-12">
        <h3 className="text-green-400 font-semibold mb-6 text-xl">For Parents & Guardians:</h3>
        <ul className="text-green-200 space-y-3">
          <li className="text-lg leading-relaxed">Monitor your teen's app downloads and online activities</li>
          <li className="text-lg leading-relaxed">Use parental control software to block dating apps</li>
          <li className="text-lg leading-relaxed">Educate teens about online safety and appropriate relationships</li>
          <li className="text-lg leading-relaxed">Report any suspected underage use to our child safety team immediately</li>
          <li className="text-lg leading-relaxed">Access resources through Tech Coalition's best practices for Combating Online CSEA</li>
        </ul>
      </div>

      <h2>8. Legal Compliance and Enforcement</h2>
      <p className="mb-6 text-lg leading-relaxed">Kute maintains strict legal compliance through:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed"><strong>Google Play Compliance:</strong> Full adherence to Child Safety Standards policy requirements</li>
        <li className="text-lg leading-relaxed"><strong>Declaration Submission:</strong> Completed Google Play declaration form submitted by required deadline</li>
        <li className="text-lg leading-relaxed"><strong>Regular Audits:</strong> Quarterly compliance reviews and third-party security assessments</li>
        <li className="text-lg leading-relaxed"><strong>Law Enforcement Partnership:</strong> Direct cooperation with federal, state, and local authorities</li>
        <li className="text-lg leading-relaxed"><strong>Industry Collaboration:</strong> Active participation in child safety initiatives and working groups</li>
      </ul>

      <h2>9. Community Guidelines Enforcement</h2>
      <p className="mb-6 text-lg leading-relaxed">Our community standards strictly enforce:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed">Zero tolerance for age misrepresentation with permanent account termination</li>
        <li className="text-lg leading-relaxed">Mandatory reporting of suspected child endangerment to authorities</li>
        <li className="text-lg leading-relaxed">Immediate suspension for any content that could attract or exploit minors</li>
        <li className="text-lg leading-relaxed">Education on consent, healthy relationships, and digital safety</li>
        <li className="text-lg leading-relaxed">Proactive identification and removal of predatory behavior patterns</li>
      </ul>

      <h2>10. Continuous Safety Improvement</h2>
      <p className="mb-6 text-lg leading-relaxed">We continuously enhance child safety through:</p>
      <ul className="mb-10 space-y-3">
        <li className="text-lg leading-relaxed">Monthly security updates and AI model improvements</li>
        <li className="text-lg leading-relaxed">Partnership with child safety organizations and NGOs</li>
        <li className="text-lg leading-relaxed">Regular staff training on emerging threats and detection methods</li>
        <li className="text-lg leading-relaxed">Technology investment in advanced detection and prevention systems</li>
        <li className="text-lg leading-relaxed">User feedback integration for safety feature enhancement</li>
      </ul>

      <div className="bg-yellow-900/20 border border-yellow-500 rounded-lg p-8 mb-12">
        <h3 className="text-yellow-400 font-semibold mb-4 text-xl">Zero Tolerance Policy</h3>
        <p className="text-yellow-200 text-lg leading-relaxed">
          Kute maintains a zero-tolerance policy for any content, behavior, or users that could endanger children. 
          Violations result in immediate account termination, permanent device banning, law enforcement notification, 
          and full cooperation with criminal investigations.
        </p>
      </div>

      <h2>11. Child Safety Point of Contact</h2>
      <p className="mb-8 text-lg leading-relaxed">As required by Google Play Child Safety Standards, Kute provides a dedicated child safety contact:</p>
      <div className="bg-gray-800 rounded-lg p-8 mt-6 mb-12">
        <p className="text-xl font-semibold mb-6 text-cyan-400">Child Safety Officer</p>
        <p className="mb-4 text-lg"><strong>Primary Contact:</strong> Sarah Martinez, Child Safety Director</p>
        <p className="mb-4 text-lg">Email: <strong className="text-cyan-400">safety@kutedating.com</strong></p>
        <p className="mb-4 text-lg">Legal Compliance: <strong className="text-cyan-400">legal@kutedating.com</strong></p>
        <p className="mb-4 text-lg">Emergency Response: <strong className="text-red-400">Available 24/7 through app emergency button</strong></p>
        <p className="mb-4 text-lg">NCMEC CyberTipline: <strong className="text-cyan-400">Verified reporting partner</strong></p>
        <p className="text-lg">Business Address: 
          <span className="text-[#dddddd] leading-relaxed block ml-4 mt-2">
            Kute Dating - Child Safety Division<br />
            Attention: Child Safety Officer<br />
            KP -7F, KIIT CAMPUS<br />
            Near Kafe Delizioso<br />
            Bhubaneswar, Odisha 751024<br />
            India
          </span>
        </p>
      </div>

      <div className="bg-purple-900/20 border border-purple-500 rounded-lg p-8 mb-12">
        <h3 className="text-purple-400 font-semibold mb-4 text-xl">Google Play Compliance Declaration</h3>
        <p className="text-purple-200 text-lg leading-relaxed mb-4">
          Kute has submitted the required Child Safety Standards declaration form to Google Play Console, 
          confirming our full compliance with all five policy requirements as of the mandatory deadline.
        </p>
        <ul className="text-purple-200 space-y-2">
          <li>✓ Declaration form submitted before January 22, 2025 deadline</li>
          <li>✓ Full policy compliance achieved before March 19, 2025</li>
          <li>✓ Regular compliance monitoring and updates maintained</li>
        </ul>
      </div>

      <div className="mt-12 text-center py-8">
        <p className="text-cyan-400 font-semibold text-xl mb-4">
          Together, we can create a safe digital environment for everyone.
        </p>
        <p className="text-lg text-gray-400 mt-6">
          This policy is reviewed and updated regularly to ensure maximum protection.<br />
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default ChildSecurity;