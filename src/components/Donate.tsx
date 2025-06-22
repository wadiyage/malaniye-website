import React, { useState } from 'react';
import { Heart, CreditCard, Building, Users, Award, Handshake } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Donate: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const sponsorshipTiers = [
    {
      title: "Bronze Patron",
      amount: "LKR 50,000 - 100,000",
      benefits: ["Event program acknowledgment", "Website recognition", "Annual report mention"],
      color: "from-amber-400 to-amber-600"
    },
    {
      title: "Silver Guardian",
      amount: "LKR 100,000 - 250,000",
      benefits: ["All Bronze benefits", "Event banner placement", "Newsletter sponsorship", "Social media recognition"],
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "Gold Benefactor",
      amount: "LKR 250,000 - 500,000",
      benefits: ["All Silver benefits", "Stage naming opportunity", "VIP event invitations", "Quarterly impact reports"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Platinum Champion",
      amount: "LKR 500,000+",
      benefits: ["All Gold benefits", "Annual ceremony title sponsorship", "Board meeting invitations", "Custom recognition programs"],
      color: "from-purple-400 to-purple-600"
    }
  ];

  const partners = [
    { name: "Bank of Ceylon", logo: "Building" },
    { name: "Dialog Axiata", logo: "Building" },
    { name: "John Keells Holdings", logo: "Building" },
    { name: "Cargills Ceylon", logo: "Building" },
    { name: "Sri Lankan Airlines", logo: "Building" },
    { name: "Hemas Holdings", logo: "Building" },
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-800 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Emotional Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Support Our <span className="text-primary-600">Artists</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Your support helps us care for the artists who shaped our nation's culture. 
              Every contribution, big or small, ensures that they receive the dignity and care they deserve.
            </p>
            <div className="flex justify-center items-center space-x-8 text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">500+</div>
                <div className="text-sm">Artists Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">LKR 10M+</div>
                <div className="text-sm">Aid Distributed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-6 h-6 text-primary-600 mr-3" />
                  Make a Donation
                </h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <div className="flex space-x-4 mb-4">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        donationType === 'one-time'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        donationType === 'monthly'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Predefined Amounts */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (LKR)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                          donationAmount === amount.toString()
                            ? 'border-primary-600 bg-primary-50 text-primary-600'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Donate Now</span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Your Impact</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold">LKR 1,000</div>
                      <div className="text-sm text-gray-600">Provides a month's medication for a senior artist</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold">LKR 5,000</div>
                      <div className="text-sm text-gray-600">Supports a family during financial hardship</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold">LKR 25,000</div>
                      <div className="text-sm text-gray-600">Funds a complete health check-up program</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsorship Opportunities */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Become a Sponsor</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MALANIYE invites corporations and individuals to sponsor our welfare and recognition programs. 
                In return, your name will be featured in event materials, online promotions, and partner acknowledgments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
                  <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h4>
                    <p className="text-primary-600 font-semibold mb-4">{tier.amount}</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all transform hover:scale-105 shadow-lg">
                Contact us for Sponsorship Opportunities
              </button>
            </div>
          </div>

          {/* Partners & Sponsors */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Proud Supporters</h3>
              <p className="text-gray-600">Organizations that share our vision of supporting artists</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-50 transition-colors">
                    <Building className="w-8 h-8 text-gray-400 group-hover:text-primary-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{partner.name}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2 mx-auto">
                <Handshake className="w-5 h-5" />
                <span>Become a Partner</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;