import qrCode from '../assets/images/final-logo-kute.png';
import '../components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src={qrCode} alt="QR Code" className="qr-code-fixed" />

      <div className="hero-content">
        <h1>Find Real Connections.</h1>
        <p>Modern dating, with a touch of class.</p>
        <div className="coming-soon">Coming Soon</div>
      </div>
    </section>
  );
};

export default Hero;
