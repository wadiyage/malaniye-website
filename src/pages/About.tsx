import React, { useState } from 'react';
import { Target, Eye, Heart, Users, Award, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const founders = [
    {
      name: "Hon. Malani Fonseka",
      role: "Patron & Founding Inspiration",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "A legendary figure in Sri Lankan cinema and theatre, Hon. Malani Fonseka's dedication to the arts and welfare of artists inspired the creation of MALANIYE.",
    },
    {
      name: "Dr. Lakshman Perera",
      role: "President & Founder",
      image: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "A visionary leader with over 20 years in cultural administration, committed to preserving and promoting Sri Lankan artistic heritage.",
    },
    {
      name: "Priya Dissanayake",
      role: "Vice President",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Renowned actress and advocate for artist welfare, bringing decades of industry experience to the foundation's mission.",
    },
    {
      name: "Roshan Silva",
      role: "Secretary General",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former director with extensive experience in arts management and community development programs.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-600">MALANIYE</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to the dignity, welfare, and celebration of artistic excellence in Sri Lanka
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To uplift, protect, and celebrate the creative forces shaping our cultural landscape. 
                We provide comprehensive welfare support, insurance coverage, and recognition programs 
                that ensure no artist is left behind in their time of need.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A thriving artistic community where every performer, creator, and cultural contributor 
                enjoys dignity, security, and recognition throughout their career and beyond. 
                We envision a future where art and artists are cherished and protected.
              </p>
            </div>
          </div>

          {/* History & Inspiration */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">History and Inspiration behind MALANIYE</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  MALANIYE was born from a profound recognition that the artists who enrich our lives through 
                  their performances often face uncertainties in their personal lives. Inspired by the grace 
                  and dedication of Hon. Malani Fonseka and countless other artists who have shaped Sri Lankan 
                  culture, our foundation emerged as a beacon of hope and support.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded in 2008 during a gathering of veteran artists who shared stories of struggle and 
                  triumph, MALANIYE represents not just an organization, but a movement of compassion and 
                  solidarity within the artistic community.
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Read Full Story →
                </button>
              </div>
              <div className="lg:col-span-1">
                <img
                  src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Historical moment"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-600 mt-2 italic">
                  A moment from our founding ceremony, 2008
                </p>
              </div>
            </div>
          </div>

          {/* Founders & Key Members */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Founders, Patrons & Key Committee Members
              </h2>
              <p className="text-xl text-gray-600">
                Meet the visionary leaders dedicated to artist welfare
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {founders.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer"
                  onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className={`text-gray-600 text-sm leading-relaxed transition-all ${
                      expandedMember === index ? 'max-h-none' : 'max-h-16 overflow-hidden'
                    }`}>
                      {member.bio}
                    </p>
                    {expandedMember !== index && (
                      <button className="text-primary-600 text-sm font-medium mt-2 hover:text-primary-700">
                        Read More →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message from President */}
          <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-4 gap-8 items-center">
              <div className="lg:col-span-1">
                <img
                  src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                  alt="President"
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
                />
              </div>
              <div className="lg:col-span-3">
                <blockquote className="text-2xl text-gray-800 font-serif italic leading-relaxed mb-6">
                  "Every artist deserves to create without fear, perform without worry, and age with dignity. 
                  MALANIYE is our promise that no artist will face life's challenges alone."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">Dr. Lakshman Perera</p>
                    <p className="text-primary-600">President & Founder</p>
                  </div>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Read Full Message →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;