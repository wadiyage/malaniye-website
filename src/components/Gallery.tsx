import React, { useState } from 'react';
import { Calendar, Play, Users, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Users },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'awards', name: 'Awards', icon: Award },
    { id: 'tributes', name: 'Tributes', icon: Play },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'events',
      title: 'Annual Cultural Festival 2024',
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2024',
      description: 'Over 500 artists gathered for our biggest cultural celebration'
    },
    {
      id: 2,
      category: 'awards',
      title: 'Lifetime Achievement Awards',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2024',
      description: 'Honoring 10 legendary artists for their outstanding contributions'
    },
    {
      id: 3,
      category: 'tributes',
      title: 'Tribute to Late Artists',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2024',
      description: 'A heartfelt remembrance of artists who shaped our culture'
    },
    {
      id: 4,
      category: 'events',
      title: 'Artists Welfare Workshop',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2023',
      description: 'Educational session on health and financial planning'
    },
    {
      id: 5,
      category: 'events',
      title: 'Cultural Heritage Exhibition',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2023',
      description: 'Showcasing traditional arts and contemporary performances'
    },
    {
      id: 6,
      category: 'awards',
      title: 'Young Talent Recognition',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      year: '2023',
      description: 'Celebrating emerging artists and their promising futures'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Gallery & <span className="text-primary-600">Memories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of celebration, recognition, and tribute from our journey together
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 shadow-md'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.year}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg">
              View Complete Gallery
            </button>
          </div>

          {/* Featured Video Section */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Featured: Tribute to Our Artists
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Watch our special documentary highlighting the journey of MALANIYE and the 
                  incredible artists we've had the honor to support over the years.
                </p>
                <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2 transform hover:scale-105">
                  <Play className="w-5 h-5" />
                  <span>Watch Documentary</span>
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Featured Video"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;