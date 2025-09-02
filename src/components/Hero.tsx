import qrCode from '../assets/images/final-logo-kute.png';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 min-h-screen flex items-center justify-center text-center relative px-8">
      <img 
        src={qrCode} 
        alt="QR Code" 
        className="fixed bottom-[5%] right-[5%] w-[13%] h-auto z-[1000] rounded-xl shadow-lg shadow-white/10 
                   lg:w-[15%] md:w-[20%] sm:w-[28%] md:invisible sm:invisible" 
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl lg:text-6xl md:text-5xl sm:text-4xl font-bold mb-4 tracking-wide hero-title">
          Find Real Connections.
        </h1>
        <p className="text-xl text-gray-300 mb-10 hero-subtitle">
          Modern dating, with a touch of class.
        </p>
        <div className="mt-10 text-6xl lg:text-7xl md:text-6xl sm:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent coming-soon-text">
          Coming Soon
        </div>
      </div>
    </section>
  );
};

export default Hero;
