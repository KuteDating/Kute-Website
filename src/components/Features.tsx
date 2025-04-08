import '../components/Features.css';
import starryEyesIcon from '../assets/icons/starry-eyes-icon.png';
import lockIcon from '../assets/icons/lock-icon.png';
import cupidIcon from '../assets/icons/cupid-icon.png';
import rainbowIcon from '../assets/icons/rainbow-icon.png';
import coinIcon from '../assets/icons/coin-icon.png';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="features-title">App Features</h2>
        <p className="features-subtitle">Crafted for genuine connections and modern love</p>
        <ul className="features-list">
            <li><img src={starryEyesIcon} alt="Checkmark Icon" style={{ width: '40px', height: '40px' , marginBottom: '10px'}} /> No more endless swiping, find your one effortlessly</li>
            <li><img src={lockIcon} alt="Lock Icon" style={{ width: '40px', height: '40px' , marginBottom: '10px'}} /> Secure chat with end-to-end encryption, so your perfect replies aren't being stolen from you</li>
            <li><img src={cupidIcon} alt="Heart Icon" style={{ width: '40px', height: '40px' , marginBottom: '10px'}} /> Swipe left on confusion, Cupid Ai knows who you’ll love!</li>
            <li><img src={rainbowIcon} alt="Rainbow Icon" style={{ width: '40px', height: '40px' , marginBottom: '10px'}} /> Cupid doesn't differentiate between genders</li>
            <li><img src={coinIcon} alt="Coin Icon" style={{ width: '40px', height: '40px' , marginBottom: '10px'}} /> Enjoy Affordable Excellence with us</li>
        </ul>
      </div>
    </section>
  );
};

export default Features;