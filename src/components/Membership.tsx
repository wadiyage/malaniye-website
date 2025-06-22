import React, { useState } from 'react';
import { 
  CheckCircle, 
  Users, 
  FileText, 
  Clock, 
  Heart, 
  Shield, 
  Calendar, 
  Award, 
  MessageCircle, 
  Vote,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Membership: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    message: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const steps = [
    {
      icon: CheckCircle,
      title: "Check Eligibility",
      description: "Review the basic requirements such as profession, years of experience, and active status."
    },
    {
      icon: FileText,
      title: "Submit Application",
      description: "Fill out the online form or download and send the PDF application via email or post."
    },
    {
      icon: Clock,
      title: "Verification & Approval",
      description: "The committee will review and contact you within 10 working days."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Access to Welfare Support",
      description: "Emergency and regular financial aid programs."
    },
    {
      icon: Shield,
      title: "Medical & Life Insurance",
      description: "Enjoy peace of mind with active health coverage."
    },
    {
      icon: Calendar,
      title: "Invitations to Events",
      description: "Workshops, gatherings, and cultural programs."
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Eligible for annual recognitions and lifetime honors."
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Join a network of respected fellow artists."
    },
    {
      icon: Vote,
      title: "Voting Rights",
      description: "Participate in foundation decisions and committee elections."
    }
  ];

  const faqs = [
    {
      question: "Who is eligible to apply?",
      answer: "Any professional artist working in film, television, theatre, or music with a minimum of 2 years experience in the industry and active involvement in cultural activities."
    },
    {
      question: "Is there a membership fee?",
      answer: "Yes, there is a one-time registration fee of LKR 2,500 and an annual membership fee of LKR 1,200, which helps us maintain our programs and services."
    },
    {
      question: "How long does approval take?",
      answer: "Typically 7–10 working days. You'll be notified by email or phone once your application has been reviewed by our committee."
    },
    {
      question: "What documents do I need to submit?",
      answer: "You'll need a completed application form, copy of NIC, two passport-size photographs, proof of artistic profession, and references from two current members or industry professionals."
    },
    {
      question: "Can I apply if I'm currently unemployed?",
      answer: "Yes, as long as you have the required experience and can demonstrate your commitment to the artistic profession. We understand that artistic careers can have periods of transition."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Hero Banner */}
          <div className="text-center mb-16 bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Become a <span className="text-primary-600">Member</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Join MALANIYE and be part of a compassionate movement to support, uplift, 
              and honor every artist in Sri Lanka.
            </p>
          </div>

          {/* Steps to Become a Member */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Steps to Become a Member
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Membership Benefits */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Membership Benefits
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all transform hover:scale-105">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Join Now</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                  >
                    <option value="">Select your profession</option>
                    <option value="actor">Actor/Actress</option>
                    <option value="director">Director</option>
                    <option value="musician">Musician</option>
                    <option value="dancer">Dancer</option>
                    <option value="singer">Singer</option>
                    <option value="theatre">Theatre Artist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your artistic journey..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary-600" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;