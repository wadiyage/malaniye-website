import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Users, Heart, Shield, Calendar, Award } from 'lucide-react';

const Home: React.FC = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Welfare Support",
      description: "Emergency financial aid and ongoing care for artists in need",
      link: "/our-work"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive medical and life insurance for all members",
      link: "/our-work"
    },
    {
      icon: Calendar,
      title: "Cultural Events",
      description: "Regular workshops, gatherings, and celebration programs",
      link: "/gallery"
    },
    {
      icon: Award,
      title: "Recognition Awards",
      description: "Honoring excellence and lifetime achievements in arts",
      link: "/our-work"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <Link
              to="/about"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Learn More About MALANIYE</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/membership"
              className="group bg-transparent border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-white transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join the Foundation</span>
            </Link>
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

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              How We <span className="text-primary-600">Support Artists</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through comprehensive programs and compassionate outreach, we empower the artistic community every day
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.link}
                className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <highlight.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission to Support Artists
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Whether you're an artist seeking support or someone who believes in our cause, 
            there's a place for you in the MALANIYE family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/membership"
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;