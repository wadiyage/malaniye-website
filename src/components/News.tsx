import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const News: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'obituaries', name: 'Obituaries' },
    { id: 'media', name: 'In the Media' },
  ];

  const newsItems = [
    {
      id: 1,
      category: 'events',
      title: 'Annual Tribute Night – 2025',
      excerpt: 'Held at the BMICH to honor senior artists. Over 500 members attended.',
      date: '2024-12-15',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      category: 'obituaries',
      title: 'Remembering Nanda Wickramage',
      excerpt: 'A tribute to the late veteran actor, whose work in theatre inspired a generation.',
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 3,
      category: 'media',
      title: 'MALANIYE featured in Daily Mirror',
      excerpt: 'A behind-the-scenes article highlighting our medical aid programs.',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      category: 'events',
      title: 'Lifetime Award Ceremony 2024',
      excerpt: 'We celebrated the unwavering dedication of 10 legendary artists with standing ovations and heartfelt stories.',
      date: '2024-11-28',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 5,
      category: 'announcements',
      title: 'New Welfare Program Launch',
      excerpt: 'Introducing enhanced medical coverage and emergency support services.',
      date: '2024-11-20',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      category: 'events',
      title: 'Monthly Artist Gathering',
      excerpt: 'A successful community meeting with 200+ artists sharing experiences and support.',
      date: '2024-11-15',
      image: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: false
    }
  ];

  const filteredNews = selectedFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const featuredArticle = newsItems.find(item => item.featured);

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              News, Events & <span className="text-primary-600">Announcements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest from MALANIYE – from welfare milestones to heartfelt tributes
            </p>
          </div>

          {/* Featured Story */}
          {featuredArticle && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Story
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(featuredArticle.date)}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt} It was more than an event — it was history.
                  </p>
                  <button className="self-start bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2">
                    <span>Read the Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 shadow-md'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredNews.map((item, index) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg">
              View All News & Events
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event updates, and stories from the MALANIYE community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;