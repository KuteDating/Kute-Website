import '../components/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">Who We Are</h2>
        <p className="about-description">
          At <span className="brand-highlight">Kute</span>, we’re rewriting the rules of digital romance. No more swiping in vain — we’re building heartfelt connections, one match at a time. Our mission is to create a soulful, authentic space for individuals who are tired of shallow interactions and ready to build real relationships.
        </p>
        <div className="about-highlights">
          <div className="highlight-box">
            <h3>Intentional Matching</h3>
            <p>We connect people based on interests, values, and energy — not just photos.</p>
          </div>
          <div className="highlight-box">
            <h3>Safe & Respectful</h3>
            <p>Your emotional well-being is our top priority. Built-in safety features ensure a respectful space.</p>
          </div>
          <div className="highlight-box">
            <h3>Designed With Heart</h3>
            <p>Elegant design meets meaningful interaction, so you can focus on what truly matters: people.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
