import React from 'react';
import { Play, ArrowRight, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
        <img
          src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Cultural Performance"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              MALANIYE
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gold-300 font-semibold mb-8 animate-slide-up">
            A Tribute to the Spirit of Performance
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            The Cine Star Foundation, through MALANIYE, proudly stands as a guardian of dignity and welfare 
            for all professional artists. Our mission is to uplift, protect, and celebrate the creative forces 
            shaping our cultural landscape. From life insurance to lifelong recognition, we ensure no artist is left behind.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <span>Learn More About MALANIYE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('membership')}
            className="group bg-transparent border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-white transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <Users className="w-5 h-5" />
            <span>Join the Foundation</span>
          </button>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">500+</div>
            <div className="text-white/80">Artists Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">15+</div>
            <div className="text-white/80">Years of Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">50+</div>
            <div className="text-white/80">Events Organized</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;