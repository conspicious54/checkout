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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="https://passionproduct.com/wp-content/uploads/2024/10/Passion-Product-only-logo-1-768x432.png"
                alt="Passion Product Formula"
                className="h-12 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Your Spot Will Be Reserved For: {formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700 bg-green-50 border border-green-200 px-4 py-2 rounded-full shadow-sm">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-semibold">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Spots Left Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-lg">
              <span className="text-2xl font-black">{spotsLeft}</span> of {TOTAL_SPOTS} spots remaining
            </span>
            <span className="hidden sm:inline text-sm opacity-90">• Act fast before we're full</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Product Info & Features */}
          <div className="space-y-10 order-1 lg:order-1">
            {/* Social Proof Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-900">
                  Join 500+ students already building profitable Amazon businesses
                </span>
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>

            {/* Price Display with Value Proposition */}
            <div className="text-center lg:text-left mb-6">
              <div className="inline-flex items-baseline space-x-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">
                  {pricingOption === 'subscription' ? '$299.99' : '$997'}
                </span>
                {pricingOption === 'subscription' && (
                  <span className="text-xl font-semibold text-gray-700">/month</span>
                )}
              </div>
              {pricingOption === 'lifetime' && (
                <div className="flex flex-col items-center lg:items-start space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-lg text-green-600 font-semibold">One-time payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Lifetime access • No recurring fees</span>
                  </div>
                </div>
              )}
              {pricingOption === 'subscription' && (
                <div className="flex flex-col items-center lg:items-start space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-lg text-blue-600 font-semibold">Cancel anytime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Monthly billing • No long-term commitment</span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
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

            {/* Checkout Form - Mobile Only */}
            <div className="lg:hidden">
              {/* Spots Left Urgency - Mobile */}
              <div className="mb-6 bg-red-50 border-2 border-red-400 rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm text-red-700 font-medium">Limited Spots Available</div>
                      <div className="text-2xl font-black text-red-900">{spotsLeft} of {TOTAL_SPOTS} spots left</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-red-600 font-semibold">ACT NOW</div>
                    <div className="text-lg font-bold text-red-900">{Math.round((spotsLeft / TOTAL_SPOTS) * 100)}%</div>
                  </div>
                </div>
                <div className="mt-3 bg-red-200 rounded-full h-2 overflow-hidden">
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
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setPricingOption('subscription')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                        pricingOption === 'subscription'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Subscribe
                      <span className="block text-xs font-normal mt-1">$299.99/mo</span>
                    </button>
                    <button
                      onClick={() => setPricingOption('lifetime')}
                      className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                        pricingOption === 'lifetime'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Lifetime Access
                      <span className="block text-xs font-normal mt-1">$997</span>
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
              <div className="mt-8 bg-green-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
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
              <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-200 p-2 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-blue-900">100% Risk-Free Guarantee</h4>
                      <p className="text-xs text-blue-800 font-semibold">7-Day Money-Back Guarantee</p>
                    </div>
                  </div>
                  <p className="text-sm text-blue-900 leading-relaxed font-medium">
                    Try the program completely risk-free. If you're not satisfied within 7 days, get a full refund - no questions asked.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-200 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-orange-700" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-orange-900">$1,000 Profit Guarantee</h4>
                      <p className="text-xs text-orange-800 font-semibold">365-Day Promise</p>
                    </div>
                  </div>
                  <p className="text-sm text-orange-900 leading-relaxed font-medium">
                    If your product isn't profitable enough to pay for the program in the first year, we'll give you $1,000. That's how confident we are in this system.
                  </p>
                </div>
              </div>
            </div>

            {/* Program Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What This Program Includes:
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">117 Step By Step Video Lessons</h4>
                      <p className="text-gray-600 leading-relaxed">Comprehensive videos guide you through every phase of starting an Amazon business.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Continuous Weekly Q&A Calls</h4>
                      <p className="text-gray-600 leading-relaxed">Ongoing support through live weekly sessions to answer your questions.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Private Facebook Mastermind Membership</h4>
                      <p className="text-gray-600 leading-relaxed">Access to an exclusive community for networking and support.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2 Free 1 on 1 Coaching Sessions</h4>
                      <p className="text-gray-600 leading-relaxed">Personalized coaching with Travis or a certified coach.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-xl">
                      <MessageCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">2000+ Question Q&A Database</h4>
                      <p className="text-gray-600 leading-relaxed">Access a library of answered questions to troubleshoot your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join Hundreds of Successful Students
                </h3>
                <p className="text-gray-600">See what our community is saying about their results</p>
              </div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                    $100K/Month
                  </div>
                </div>
                <blockquote className="text-gray-800 mb-6 leading-relaxed text-lg font-medium">
                  "I'm currently doing <strong>$100,000 a month</strong> selling my Passion Product on Amazon and a big part of my success is thanks to Travis and this course. This course is the perfect starting program out there and will get you selling on Amazon in months if you take it seriously as I did."
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-base font-bold text-gray-900">- Mina</cite>
                  <span className="text-xs text-gray-500">Verified Student</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    $2K/Month Profit
                  </div>
                </div>
                <blockquote className="text-gray-800 mb-6 leading-relaxed text-lg font-medium">
                  "I have been selling on Amazon for 6 months already and I can't recommend this course more. It taught me everything I have needed to create my product and sell it on Amazon. I love tennis so I decided to create a product around the sport and now I am making an extra <strong>$2,000 a month profit</strong> from selling something I'm passionate about!"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-base font-bold text-gray-900">- Troy</cite>
                  <span className="text-xs text-gray-500">Verified Student</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Why Choose Passion Product Formula?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Proven System</p>
                    <p className="text-sm text-blue-700">Travis's 8-year proven system that has helped hundreds of students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Live Support</p>
                    <p className="text-sm text-blue-700">Weekly Q&A calls and 1-on-1 coaching sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Risk-Free Guarantee</p>
                    <p className="text-sm text-blue-700">14-day money-back guarantee with no questions asked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Checkout (Desktop Only) */}
          <div className="lg:col-span-1 order-2 lg:order-2 hidden lg:block">
            {/* Spots Left Urgency - Desktop */}
            <div className="mb-6 bg-red-50 border-2 border-red-400 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="text-sm text-red-700 font-medium">Limited Spots Available</div>
                    <div className="text-3xl font-black text-red-900">{spotsLeft} of {TOTAL_SPOTS} spots left</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-red-600 font-semibold uppercase tracking-wide">Act Now</div>
                  <div className="text-2xl font-bold text-red-900">{Math.round((spotsLeft / TOTAL_SPOTS) * 100)}%</div>
                  <div className="text-xs text-red-600">remaining</div>
                </div>
              </div>
              <div className="bg-red-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-red-600 h-full transition-all duration-1000"
                  style={{ width: `${(spotsLeft / TOTAL_SPOTS) * 100}%` }}
                ></div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-red-700 font-semibold">⚡ Don't miss out - spots are filling fast!</span>
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

              {/* Pricing Toggle - Desktop */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setPricingOption('subscription')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                      pricingOption === 'subscription'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Subscribe
                    <span className="block text-xs font-normal mt-1">$299.99/mo</span>
                  </button>
                  <button
                    onClick={() => setPricingOption('lifetime')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold text-sm transition-all duration-200 ${
                      pricingOption === 'lifetime'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Lifetime Access
                    <span className="block text-xs font-normal mt-1">$997</span>
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

            {/* Security Notice */}
            <div className="mt-8 bg-green-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200 shadow-lg">
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
            <div className="mt-8 space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-200 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-blue-900">100% Risk-Free Guarantee</h4>
                    <p className="text-xs text-blue-800 font-semibold">7-Day Money-Back Guarantee</p>
                  </div>
                </div>
                <p className="text-sm text-blue-900 leading-relaxed font-medium">
                  Try the program completely risk-free. If you're not satisfied within 7 days, get a full refund - no questions asked.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-300 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-orange-200 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-orange-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-orange-900">$1,000 Profit Guarantee</h4>
                    <p className="text-xs text-orange-800 font-semibold">365-Day Promise</p>
                  </div>
                </div>
                <p className="text-sm text-orange-900 leading-relaxed font-medium">
                  If your product isn't profitable enough to pay for the program in the first year, we'll give you $1,000. That's how confident we are in this system.
                </p>
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

