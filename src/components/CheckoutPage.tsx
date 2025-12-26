import React, { useEffect, useState } from 'react';
import { Shield, CreditCard, Clock, CheckCircle, Star, ArrowLeft, Loader, Play, Users, BookOpen, Calendar, MessageCircle, Zap, Award } from 'lucide-react';
import { WhopCheckoutEmbed } from "@whop/react/checkout";

interface CheckoutPageProps {
  // No props needed since this is now the main page
}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Product Info & Features */}
          <div className="space-y-10 order-1 lg:order-1">
            {/* Price Display */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-baseline space-x-2 mb-4">
                <span className="text-sm text-gray-600 font-medium">as low as</span>
                <span className="text-5xl font-bold text-gray-900">$119</span>
                <span className="text-xl font-semibold text-gray-700">/month</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <span className="text-xs text-green-700 font-semibold bg-green-100 px-3 py-1 rounded-full border border-green-200">
                  0% APR
                </span>
                <a 
                  href="https://www.passionproductformula.com/offers/SKp8SjBE/checkout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  Pay in full instead
                </a>
              </div>
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
              {/* Credit Card Requirements Notice - Mobile */}
              <div className="mb-6 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <CreditCard className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-yellow-900 mb-2">
                      Credit Card Required for SplitIt
                    </h3>
                    <p className="text-sm text-yellow-800 leading-relaxed mb-3">
                      In order for SplitIt to work, you <strong>must have a credit card</strong> with at least <strong>$1,000 in available credit limit</strong>. SplitIt places an authorization hold (not a charge) on your card to ensure funds are available, then deducts monthly payments from that hold.
                    </p>
                    <p className="text-sm text-yellow-800">
                      <strong>Don't have a credit card or sufficient credit?</strong>{' '}
                      <a 
                        href="https://www.passionproductformula.com/offers/SKp8SjBE/checkout" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-900 font-semibold underline hover:text-yellow-700"
                      >
                        Click here to pay in full instead
                      </a>
                      {' '}(you can still use Klarna or AfterPay to break up the payment)
                    </p>
                  </div>
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

              {/* SplitIt Disclaimer - Mobile */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-600 leading-relaxed">
                  By completing this purchase you are confirming you understand{' '}
                  <a href="#splitit-info" className="text-blue-600 hover:text-blue-800 underline">
                    how SplitIt works
                  </a>
                  . This is an installment, not a subscription, and after the 7 day refund period, you are committing for the full period.
                </p>
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
                <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="text-sm font-bold text-blue-900">7 Day Moneyback Guarantee</h4>
                  </div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Try the program risk-free. If you're not satisfied within 7 days, get a full refund.
                  </p>
                </div>
                
                <div className="bg-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <h4 className="text-sm font-bold text-orange-900">365 $1,000 Guarantee</h4>
                  </div>
                  <p className="text-xs text-orange-700 leading-relaxed">
                    If your product isn't profitable enough to pay for the program in the first year, we'll give you $1,000.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                What People Are Saying:
              </h3>
              
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "I'm currently doing $100,000 a month selling my Passion Product on Amazon and a big part of my success is thanks to Travis and this course. This course is the perfect starting program out there and will get you selling on Amazon in months if you take it seriously as I did."
                </blockquote>
                <cite className="text-sm font-semibold text-gray-900">- Mina</cite>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "I have been selling on Amazon for 6 months already and I can't recommend this course more. It taught me everything I have needed to create my product and sell it on Amazon. I love tennis so I decided to create a product around the sport and now I am making an extra $2,000 a month profit from selling something I'm passionate about!"
                </blockquote>
                <cite className="text-sm font-semibold text-gray-900">- Troy</cite>
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
            {/* Credit Card Requirements Notice - Desktop */}
            <div className="mb-6 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-yellow-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-yellow-900 mb-2">
                    Credit Card Required for SplitIt
                  </h3>
                  <p className="text-sm text-yellow-800 leading-relaxed mb-3">
                    In order for SplitIt to work, you <strong>must have a credit card</strong> with at least <strong>$1,000 in available credit limit</strong>. SplitIt places an authorization hold (not a charge) on your card to ensure funds are available, then deducts monthly payments from that hold.
                  </p>
                  <p className="text-sm text-yellow-800">
                    <strong>Don't have a credit card or sufficient credit?</strong>{' '}
                    <a 
                      href="https://www.passionproductformula.com/offers/SKp8SjBE/checkout" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-900 font-semibold underline hover:text-yellow-700"
                    >
                      Click here to pay in full instead
                    </a>
                    {' '}(you can still use Klarna or AfterPay to break up the payment)
                  </p>
                </div>
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

            {/* SplitIt Disclaimer - Desktop */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-600 leading-relaxed">
                By completing this purchase you are confirming you understand{' '}
                <a href="#splitit-info" className="text-blue-600 hover:text-blue-800 underline">
                  how SplitIt works
                </a>
                . This is an installment, not a subscription, and after the 7 day refund period, you are committing for the full period.
              </p>
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
              <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-sm font-bold text-blue-900">7 Day Moneyback Guarantee</h4>
                </div>
                <p className="text-xs text-blue-700 leading-relaxed">
                  Try the program risk-free. If you're not satisfied within 7 days, get a full refund.
                </p>
              </div>
              
              <div className="bg-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <h4 className="text-sm font-bold text-orange-900">365 $1,000 Guarantee</h4>
                </div>
                <p className="text-xs text-orange-700 leading-relaxed">
                  If your product isn't profitable enough to pay for the program in the first year, we'll give you $1,000.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SplitIt Information Section */}
      <div id="splitit-info" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How SplitIt Works
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              SplitIt is an installment payment plan that allows you to pay for your Passion Product Formula program over time, making it more affordable and accessible.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Installment vs. Subscription</h3>
                <p>
                  <strong>Important:</strong> SplitIt is an <strong>installment plan</strong>, not a subscription. This means you are committing to pay the full program price over a set number of monthly payments. Unlike a subscription, you cannot cancel after the 7-day refund period has ended.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">7-Day Refund Period</h3>
                <p>
                  You have a 7-day money-back guarantee period from the date of purchase. During this time, if you're not satisfied with the program, you can request a full refund and cancel your installment plan without any obligation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">After the Refund Period</h3>
                <p>
                  Once the 7-day refund period has passed, you are committed to completing all scheduled payments for the full program. The installment plan will continue automatically until the full amount is paid.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How SplitIt Payment Works</h3>
                <p className="mb-3">
                  <strong>Authorization Hold (Not a Charge):</strong> When you complete your purchase, SplitIt places an <strong>authorization hold</strong> on your credit card for the full program amount. This is <strong>not an actual charge</strong> - it's a temporary hold that reserves the funds to ensure you have sufficient credit available.
                </p>
                <p className="mb-3">
                  <strong>Monthly Deductions:</strong> Each month, SplitIt deducts your scheduled payment amount from the authorization hold. The hold ensures that funds are available for all future payments, but you're only actually charged as each monthly payment is processed.
                </p>
                <p>
                  <strong>Credit Card Requirements:</strong> To use SplitIt, you must have a credit card (not a debit card) with at least <strong>$1,000 in available credit limit</strong>. The authorization hold will reserve the full program amount, so you need sufficient credit available. You'll receive notifications before each monthly payment is processed.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
                <p className="text-blue-900 font-semibold">
                  By completing your purchase, you acknowledge that you understand SplitIt is an installment plan (not a subscription) and that after the 7-day refund period, you are committed to completing all payments for the full program.
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

export default CheckoutPage;
