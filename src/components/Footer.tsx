import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="newsletter">
        <h3>JOIN OUR NEWSLETTER</h3>
        <p>
          Stay updated with the latest Kute features, updates, and relationship
          tips.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="example@gmail.com" />
          <button>Sign Up</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>PRODUCT</h4>
          <a href="#features">App Features</a>
          <a href="/ComingSoon">Matchmaking</a>
          <a href="/ComingSoon">Privacy Focus</a>
          <a href="/ComingSoon">Real Profiles</a>
        </div>

        <div className="footer-column">
          <h4>COMMUNITY</h4>
          <a href="/ComingSoon">Events</a>
          <a href="/ComingSoon">Blog</a>
          <a href="/ComingSoon">Support</a>
          <a href="/ComingSoon">Ambassadors</a>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <a href="#about">About Us</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/refund">Refund Policy</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-column">
          <h4>USE CASES</h4>
          <p>Dating</p>
          <p>Friendship</p>
          <p>Networking</p>
          <p>Relationship Tips</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">KUTE</div>
        <p>© 2025 Kute Inc. All rights reserved.</p>
        <p>
          All trademarks, logos, and brand names are the property of their
          respective owners.
        </p>
        <div className="social-icons">
          <a href="https://x.com/kutedating"
           target="_blank"
           rel="noopener noreferrer"
           >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/kutedating/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61573548343555"
          target="_blank"
          rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
