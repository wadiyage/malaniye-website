import React from 'react';
import { Heart, Shield, Calendar, Award, Users, Stethoscope, GraduationCap, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const OurWork: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initiatives = [
    {
      icon: Heart,
      title: "Welfare Activities",
      description: "Financial assistance, emergency support, and ongoing care for members in need.",
      details: [
        "Emergency financial aid within 48 hours",
        "Monthly stipends for senior artists",
        "Housing assistance programs",
        "Family support during crisis"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Medical & Life Insurance",
      description: "Providing critical health coverage and life insurance support for every registered member.",
      details: [
        "Comprehensive health insurance coverage",
        "Life insurance up to LKR 1,000,000",
        "Specialized treatment support",
        "Annual health check-ups"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Events & Workshops",
      description: "Hosting training sessions, creative workshops, and annual cultural gatherings.",
      details: [
        "Monthly skill development workshops",
        "Annual cultural festival",
        "Professional development seminars",
        "Networking events and reunions"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Artist Recognition & Awards",
      description: "Celebrating excellence through lifetime achievement honors and community accolades.",
      details: [
        "Annual Excellence Awards ceremony",
        "Lifetime achievement recognition",
        "Young talent scholarships",
        "Cultural contribution certificates"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { icon: Users, number: "1,200+", label: "Active Members" },
    { icon: Stethoscope, number: "500+", label: "Medical Claims Processed" },
    { icon: GraduationCap, number: "150+", label: "Workshops Conducted" },
    { icon: Trophy, number: "75+", label: "Awards Presented" }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Work & <span className="text-primary-600">Initiatives</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At MALANIYE, we proudly support the artistic community through comprehensive programs 
              and compassionate outreach. Here's how we empower artists every day.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Initiative Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${initiative.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform`}>
                      <initiative.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{initiative.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {initiative.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:translate-x-2 transform duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're an artist seeking support or someone who believes in our cause, 
              there's a place for you in the MALANIYE family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Become a Member
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105">
                Support Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;