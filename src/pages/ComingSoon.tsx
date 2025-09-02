// ComingSoon.tsx

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#de822c] via-[#ff172e] to-[#de822c] flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-ping delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo/Brand section */}
        <div className="mb-12">
          <div className="inline-block p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-white to-white/80 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-[#de822c]">K</span>
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
            Something
          </span>
          <span className="block bg-gradient-to-r from-white/90 via-white to-white/80 bg-clip-text text-transparent">
            Extraordinary
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 font-light">
            is Coming...
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          No more endless swiping. No more fake connections. 
          <span className="block mt-2 font-semibold text-white">
            Just real, meaningful relationships.
          </span>
        </p>

        {/* Animated launching text */}
        <div className="mb-16">
          <div className="inline-block relative">
            <div className="text-3xl md:text-4xl font-bold text-white animate-bounce">
              🚀 Launching Soon
            </div>
            <div className="absolute -inset-2 bg-white/20 rounded-lg blur-xl opacity-50 animate-pulse"></div>
          </div>
        </div>

        {/* Features preview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-semibold text-white mb-2">Real Connections</h3>
            <p className="text-white/70">Authentic relationships built on genuine compatibility</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
            <p className="text-white/70">AI-powered compatibility that goes beyond surface level</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
            <p className="text-white/70">Your privacy and safety are our top priorities</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#de822c] font-bold py-4 px-8 rounded-full text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:scale-105 transform">
              Get Early Access
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-[#de822c] transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <p className="text-white/60 text-sm">
            Be among the first to experience the future of dating
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/60 mb-4">Join thousands already waiting</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 rounded-full border-2 border-white/50"></div>
              ))}
            </div>
            <span className="text-white/80 text-sm">+2,847 people waiting</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
