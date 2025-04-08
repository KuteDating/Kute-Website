import '../components/Download.css';
import { useEffect, useState } from 'react';
import playstoreimage from '../assets/images/play-store.png';
import appstoreimage from '../assets/images/app-store.png';

const Download = () => {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (!/android|iPad|iPhone|iPod/i.test(userAgent)) {
      setIsSupported(false);
    }
  }, []);

  return (
    <section id="download" className="download">
      <div className="download-container">
        <h2 className="download-title">Get the App</h2>
        <p className="download-subtitle">Seamlessly crafted for mobile devices</p>

        {!isSupported && (
          <p className="unsupported-warning">❌ Sorry, our app is currently only supported on Android and iOS devices.</p>
        )}

        {isSupported && (
          <div className="store-links">
            <a href="https://play.google.com/store/apps/details?id=yourapp">
              <img src={playstoreimage} alt="Google Play Store" className="store-icon" />
            </a>
            <a href="https://apps.apple.com/app/yourapp">
              <img src={appstoreimage} alt="Apple App Store" className="store-icon" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Download;