import React, { useEffect, useState } from 'react';
import { Shield, Clock, CheckCircle, Star, Loader, Users, BookOpen, Calendar, MessageCircle, Award, Zap, TrendingUp } from 'lucide-react';
import { WhopCheckoutEmbed } from "@whop/react/checkout";

interface MainCheckoutPageProps {
  // No props needed
}

const MainCheckoutPage: React.FC<MainCheckoutPageProps> = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [pricingOption, setPricingOption] = useState<'subscription' | 'lifetime'>('lifetime');
  const [spotsLeft, setSpotsLeft] = useState(3); // Starting with 3 spots left out of 10
  const TOTAL_SPOTS = 10;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Spots left countdown - decreases randomly to create urgency
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsLeft((prevSpots) => {
        // Randomly decrease spots (between 45-90 seconds)
        const shouldDecrease = Math.random() < 0.02; // 2% chance per interval
        if (shouldDecrease && prevSpots > 1) {
          return prevSpots - 1;
        }
        return prevSpots;
      });
    }, 2000); // Check every 2 seconds

    return () => clearInterval(spotsTimer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col">
      {/* Compact Spots Left Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2.5 shadow-md z-10 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-bold text-base">
              <span className="text-xl font-black">{spotsLeft}</span> of {TOTAL_SPOTS} spots left
            </span>
            <span className="hidden sm:inline text-xs opacity-90">• Act fast!</span>
          </div>
        </div>
      </div>

      {/* Split Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row lg:min-h-0 lg:overflow-hidden">
        {/* Left Half - Full Dark Background */}
        <div className="w-full lg:w-1/2 bg-gray-900 lg:overflow-y-auto lg:min-h-0">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="space-y-8">
            {/* Pricing Box - Similar to Checkout Box */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700">
              <div className="border-b border-gray-700 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      Passion Product Formula
                    </h2>
                    <p className="text-sm text-gray-400">
                      {pricingOption === 'lifetime' ? 'Lifetime Access' : 'Monthly Subscription'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-baseline space-x-1">
                      <span className="text-3xl font-bold text-white">
                        {pricingOption === 'subscription' ? '$299.99' : '$997'}
                      </span>
                      {pricingOption === 'subscription' && (
                        <span className="text-base font-semibold text-gray-300">/month</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {pricingOption === 'lifetime' ? 'One-time payment' : 'Cancel anytime • Monthly billing'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bonus Item for Lifetime */}
              {pricingOption === 'lifetime' && (
                <div className="p-4 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 border-t border-orange-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-orange-300">Bonus: 2 Free 1 on 1 Coaching Sessions</div>
                      <div className="text-xs text-orange-200">Personalized coaching with Travis or a certified coach</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Watch How This Program Works
              </h2>
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://fast.wistia.com/embed/medias/ftr8vyrhi4"
                  title="Passion Product Formula Video"
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Checkout Form - Mobile Only - Keep white for mobile */}
            <div className="lg:hidden bg-white rounded-3xl p-6 shadow-2xl border border-gray-200">
              {/* Spots Left Urgency - Mobile */}
              <div className="mb-4 bg-red-50 border-2 border-red-400 rounded-xl p-3 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-red-600" />
                    <div>
                      <div className="text-xs text-red-700 font-medium">Limited Spots</div>
                      <div className="text-xl font-black text-red-900">{spotsLeft} of {TOTAL_SPOTS} left</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-red-600 font-bold">ACT NOW</div>
                    <div className="text-base font-bold text-red-900">{Math.round((spotsLeft / TOTAL_SPOTS) * 100)}%</div>
                  </div>
                </div>
                <div className="bg-red-200 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-red-600 h-full transition-all duration-1000"
                    style={{ width: `${(spotsLeft / TOTAL_SPOTS) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200">
                {/* Checkout Header */}
                <div className="border-b border-gray-200 p-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Complete Your Purchase
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Secure your spot in the Passion Product Formula program today.
                  </p>
                </div>

                {/* Pricing Toggle - Mobile */}
                <div className="p-4 border-b border-gray-200">
                  <div className="flex bg-gray-100 rounded-lg p-1 relative">
                    <button
                      onClick={() => setPricingOption('subscription')}
                      className={`flex-1 py-2.5 px-3 rounded-md font-semibold text-sm transition-all duration-200 relative ${
                        pricingOption === 'subscription'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Subscribe
                      <span className="block text-xs font-normal mt-0.5">$299.99/mo</span>
                    </button>
                    <button
                      onClick={() => setPricingOption('lifetime')}
                      className={`flex-1 py-2.5 px-3 rounded-md font-semibold text-sm transition-all duration-200 relative ${
                        pricingOption === 'lifetime'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <span className="absolute -top-2 right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">POPULAR</span>
                      Lifetime Access
                      <span className="block text-xs font-normal mt-0.5">$997</span>
                    </button>
                  </div>
                </div>

                {/* Checkout Content */}
                <div className="p-8">
                  <div className="min-h-[500px]">
                    {/* Custom CSS to override Whop checkout pricing */}
                    <style>
                      {`
                        /* Override Whop checkout pricing display */
                        [data-whop-checkout] [class*="price"], 
                        [data-whop-checkout] [class*="total"],
                        [data-whop-checkout] [class*="amount"] {
                          display: none !important;
                        }
                      `}
                    </style>
                    
                    {/* Whop Checkout Integration */}
                    <WhopCheckoutEmbed 
                      planId="plan_H1mVQKjoy1rTi"
                      theme="light"
                      hidePrice={true}
                      skipRedirect={false}
                      onComplete={(planId, receiptId) => {
                        console.log('Checkout completed:', { planId, receiptId });
                      }}
                      fallback={
                        <div className="flex items-center justify-center h-96 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                          <div className="text-center">
                            <Loader className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-spin" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Checkout</h3>
                            <p className="text-gray-600">Preparing your secure payment form...</p>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Security Notice - Mobile */}
              <div className="mt-5 bg-green-50/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-green-900">Secure Payment</h3>
                </div>
                <p className="text-sm text-green-700 leading-relaxed">
                  Your payment is processed securely through Whop. All transactions are encrypted and protected.
                </p>
              </div>

              {/* Guarantees - Mobile */}
              <div className="mt-5 space-y-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-300 shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-700" />
                    <h4 className="text-sm font-black text-blue-900">7-Day Money-Back Guarantee</h4>
                  </div>
                  <p className="text-xs text-blue-900 leading-relaxed">
                    Try risk-free. Not satisfied? Get a full refund - no questions asked.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-300 shadow-md">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-orange-700" />
                    <h4 className="text-sm font-black text-orange-900">$1,000 Profit Guarantee</h4>
                  </div>
                  <p className="text-xs text-orange-900 leading-relaxed">
                    Not profitable enough in year 1? We'll give you $1,000.
                  </p>
                </div>
              </div>
            </div>

            {/* Program Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-5">
                What You Get:
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/20 p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">117 Step By Step Video Lessons</h4>
                      <p className="text-gray-300 leading-relaxed">Comprehensive videos guide you through every phase of starting an Amazon business.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <Calendar className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Continuous Weekly Q&A Calls</h4>
                      <p className="text-gray-300 leading-relaxed">Ongoing support through live weekly sessions to answer your questions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Private Facebook Mastermind Membership</h4>
                      <p className="text-gray-300 leading-relaxed">Access to an exclusive community for networking and support.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500/20 p-3 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">2 Free 1 on 1 Coaching Sessions</h4>
                      <p className="text-gray-300 leading-relaxed">Personalized coaching with Travis or a certified coach.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500/20 p-3 rounded-xl">
                      <MessageCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">2000+ Question Q&A Database</h4>
                      <p className="text-gray-300 leading-relaxed">Access a library of answered questions to troubleshoot your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-5">
              <div className="text-center lg:text-left mb-5">
                <h3 className="text-xl font-bold text-white mb-1">
                  Success Stories
                </h3>
                <p className="text-sm text-gray-400">Real results from our students</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-blue-500/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                    $100K/Month
                  </div>
                </div>
                <blockquote className="text-gray-200 mb-6 leading-relaxed text-lg font-medium">
                  "I'm currently doing <strong className="text-white">$100,000 a month</strong> selling my Passion Product on Amazon and a big part of my success is thanks to Travis and this course. This course is the perfect starting program out there and will get you selling on Amazon in months if you take it seriously as I did."
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-base font-bold text-white">- Mina</cite>
                  <span className="text-xs text-gray-400">Verified Student</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-green-500/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                    $2K/Month Profit
                  </div>
                </div>
                <blockquote className="text-gray-200 mb-6 leading-relaxed text-lg font-medium">
                  "I have been selling on Amazon for 6 months already and I can't recommend this course more. It taught me everything I have needed to create my product and sell it on Amazon. I love tennis so I decided to create a product around the sport and now I am making an extra <strong className="text-white">$2,000 a month profit</strong> from selling something I'm passionate about!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-base font-bold text-white">- Troy</cite>
                  <span className="text-xs text-gray-400">Verified Student</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-bold text-white mb-4">
                Why Choose Passion Product Formula?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Proven System</p>
                    <p className="text-sm text-gray-300">Travis's 8-year proven system that has helped hundreds of students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Live Support</p>
                    <p className="text-sm text-gray-300">Weekly Q&A calls and 1-on-1 coaching sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Risk-Free Guarantee</p>
                    <p className="text-sm text-gray-300">14-day money-back guarantee with no questions asked</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Right Half - Full White Background */}
        <div className="w-full lg:w-1/2 bg-white lg:overflow-y-auto lg:min-h-0">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Desktop Checkout Section */}
            <div className="hidden lg:block">
            {/* Spots Left Urgency - Desktop */}
            <div className="mb-4 bg-red-50 border-2 border-red-400 rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="text-xs text-red-700 font-medium">Limited Spots</div>
                    <div className="text-2xl font-black text-red-900">{spotsLeft} of {TOTAL_SPOTS} left</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-red-600 font-bold uppercase">Act Now</div>
                  <div className="text-xl font-bold text-red-900">{Math.round((spotsLeft / TOTAL_SPOTS) * 100)}%</div>
                </div>
              </div>
              <div className="bg-red-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-red-600 h-full transition-all duration-1000"
                  style={{ width: `${(spotsLeft / TOTAL_SPOTS) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200">
              {/* Checkout Header */}
              <div className="border-b border-gray-200 p-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Complete Your Purchase
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Secure your spot in the Passion Product Formula program today.
                </p>
              </div>

              {/* Pricing Toggle - Desktop */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex bg-gray-100 rounded-lg p-1 relative">
                  <button
                    onClick={() => setPricingOption('subscription')}
                    className={`flex-1 py-2.5 px-3 rounded-md font-semibold text-sm transition-all duration-200 ${
                      pricingOption === 'subscription'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Subscribe
                    <span className="block text-xs font-normal mt-0.5">$299.99/mo</span>
                  </button>
                  <button
                    onClick={() => setPricingOption('lifetime')}
                    className={`flex-1 py-2.5 px-3 rounded-md font-semibold text-sm transition-all duration-200 relative ${
                      pricingOption === 'lifetime'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="absolute -top-2 right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">POPULAR</span>
                    Lifetime Access
                    <span className="block text-xs font-normal mt-0.5">$997</span>
                  </button>
                </div>
              </div>

              {/* Checkout Content */}
              <div className="p-8">
                <div className="min-h-[500px]">
                  {/* Custom CSS to override Whop checkout pricing */}
                  <style>
                    {`
                      /* Override Whop checkout pricing display */
                      [data-whop-checkout] [class*="price"], 
                      [data-whop-checkout] [class*="total"],
                      [data-whop-checkout] [class*="amount"] {
                        display: none !important;
                      }
                    `}
                  </style>
                  
                  {/* Whop Checkout Integration */}
                  <WhopCheckoutEmbed 
                    planId="plan_H1mVQKjoy1rTi"
                    theme="light"
                    hidePrice={true}
                    skipRedirect={false}
                    onComplete={(planId, receiptId) => {
                      console.log('Checkout completed:', { planId, receiptId });
                    }}
                    fallback={
                      <div className="flex items-center justify-center h-96 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                        <div className="text-center">
                          <Loader className="w-12 h-12 text-gray-400 mx-auto mb-4 animate-spin" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Checkout</h3>
                          <p className="text-gray-600">Preparing your secure payment form...</p>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Info Below Checkout - Desktop */}
            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-center space-x-3 text-xs">
                <div className="flex items-center space-x-1.5 text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-semibold">Reserved: {formatTime(timeLeft)}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-gray-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                  <Shield className="w-3.5 h-3.5 text-green-600" />
                  <span className="font-semibold">Secure</span>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
                <Users className="w-4 h-4 text-blue-600" />
                <span>500+ students enrolled</span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-5 bg-green-50/80 backdrop-blur-sm rounded-xl p-4 border border-green-200 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-900">Secure Payment</h3>
              </div>
              <p className="text-sm text-green-700 leading-relaxed">
                Your payment is processed securely through Whop. All transactions are encrypted and protected.
              </p>
            </div>

            {/* Guarantees */}
            <div className="mt-5 space-y-3">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-300 shadow-md">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-blue-700" />
                  <h4 className="text-sm font-black text-blue-900">7-Day Money-Back Guarantee</h4>
                </div>
                <p className="text-xs text-blue-900 leading-relaxed">
                  Try risk-free. Not satisfied? Get a full refund - no questions asked.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-300 shadow-md">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-orange-700" />
                  <h4 className="text-sm font-black text-orange-900">$1,000 Profit Guarantee</h4>
                </div>
                <p className="text-xs text-orange-900 leading-relaxed">
                  Not profitable enough in year 1? We'll give you $1,000.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>© 2025 Passion Product Formula</span>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="w-4 h-4" />
              <span>Powered by Whop - Secure Payment Processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCheckoutPage;

