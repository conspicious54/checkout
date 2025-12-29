import React from 'react';
import { CheckCircle, Mail, FileText, Calendar, Users, MessageCircle, UserCheck, Video, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface CompletedPurchasePageProps {
  // No props needed
}

const CompletedPurchasePage: React.FC<CompletedPurchasePageProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-6 shadow-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Welcome to Passion Product Formula!</h1>
          </div>
          <p className="text-center mt-2 text-green-100">
            Your purchase was successful. Here's everything you need to know to get started.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Email */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Check Your Email</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Look out for an email with the subject line <strong>"Welcome to the Course!"</strong> as well as an invitation to create your account.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Important:</strong> You need to find this email because that's where you will make your login for the course to access the video modules. This email contains your account setup instructions and login information.
              </p>
              <p className="text-gray-600 text-sm">
                If you don't see the email, please check your spam/junk folder.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Initial Questionnaire */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Fill Out the Initial Questionnaire</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                The first thing to do is fill out the initial questionnaire. This will be used so we can get to know you better, make sure we make every aspect of the course perfect for you, and it will be used down the line to help assign you an accountability partner.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-purple-900 font-semibold mb-2">Get Your Checklist</p>
                <p className="text-sm text-purple-800 mb-3">
                  We created a step-by-step checklist. We recommend using this and going through step by step, finishing each task before you move on to the next. You'll need to make a copy of it to be able to edit it and properly use it.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1tEcrLMmWbPzXf3AtC5_y0r3idd2EfIWI/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-purple-700 hover:text-purple-900 font-semibold underline"
                >
                  <span>Get Your Checklist</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfI6bvYn2_zcliC1zD__He5ZSJXasEfBCicBSVeNl-QNT7AsA/viewform?usp=sf_link&urp=gmail_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  <span>Fill Out Initial Questionnaire</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Weekly Q&A Calls */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Weekly Q&A Calls</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You now have access to <strong>lifetime access to Q&A calls</strong> (as long as Travis is running them). This means you can join weekly calls where you can ask questions and get them answered live!
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-900 font-semibold mb-2">Important Notes:</p>
                <ul className="text-sm text-green-800 space-y-1 list-disc list-inside mb-3">
                  <li>The date and time for the calls may change every few months</li>
                  <li>The calls will be recorded so you can watch at your convenience</li>
                  <li>You can ask questions via Google form if you can't make it live</li>
                  <li>Please check the Help Section in the course first to make sure your question hasn't already been answered</li>
                </ul>
                <div className="space-y-2">
                  <a 
                    href="https://www.passionproductformula.com/products/passion-product-formula/categories/3386051/posts/11305780?cid=fc9c24f2-6439-4403-83e9-36034fd1cb45" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-green-700 hover:text-green-900 font-semibold underline"
                  >
                    <span>How to Join the Weekly Q&A Call</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <br />
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScE9wFRzNqfphpEbg81J6-55--SMfAXXd2WQ3XPZ8kEtsUdag/viewform?usp=send_form&urp=gmail_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-green-700 hover:text-green-900 font-semibold underline"
                  >
                    <span>Ask a Q&A Question</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <br />
                  <a 
                    href="https://www.passionproductformula.com/products/passion-product-formula/categories/3386051/posts/11305780?cid=fc9c24f2-6439-4403-83e9-36034fd1cb45" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-green-700 hover:text-green-900 font-semibold underline"
                  >
                    <span>Q&A Call Rules</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Join Communities */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Join The Private Facebook Group & Community</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Make sure to join the <strong>Private Mastermind Facebook Group</strong> and <strong>The Passion Product Community</strong>. This is a powerful resource where you can ask questions, share your progress, and get feedback from fellow learners.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-orange-900 font-semibold mb-2">Why This Matters:</p>
                <ul className="text-sm text-orange-800 space-y-1 list-disc list-inside mb-3">
                  <li>Share your ideas, logos, websites, and get feedback</li>
                  <li>Connect with students who specialize in areas like Kickstarter, Google Ads, Facebook</li>
                  <li>Post updates at least once a month to maximize your results</li>
                  <li>The more you put into the group, the more you'll get out of it</li>
                </ul>
                <div className="space-y-2">
                  <a 
                    href="https://www.facebook.com/groups/885710388131937/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-orange-700 hover:text-orange-900 font-semibold underline"
                  >
                    <span>Join Private Facebook Group</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <br />
                  <a 
                    href="https://passion-product-formula.mn.co/sign_up?auto_join=true&from=https%3A%2F%2Fpassion-product-formula.mn.co%2F%3Fautojoin%3D1&space_id=20448995" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm text-orange-700 hover:text-orange-900 font-semibold underline"
                  >
                    <span>Join The Passion Product Community</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-3 italic">
                Note: Travis gets a lot of messages, so the Facebook group and community are the best ways to reach him. For private questions, email <a href="mailto:travis@passionproduct.com" className="text-blue-600 hover:text-blue-800 underline">travis@passionproduct.com</a>, but please understand emails are usually checked once a week.
              </p>
            </div>
          </div>
        </div>

        {/* Step 5: Accountability Partners */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
              <UserCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Complete Module 0 for Your Accountability Buddy</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We can assign another learner to help you achieve your goals and vice versa. It's good to have someone who is on the same journey as you. You can keep each other accountable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Recommended:</strong> Go through Module 0 and at least complete your Outcome Purpose Action plan before your first weekly Q+A call. After you do that, you'll fill out a form and we can assign you an accountability buddy!
              </p>
              <div className="mt-4">
                <a 
                  href="https://www.passionproductformula.com/products/passion-product-formula/categories/2958391/posts/9880760?cid=fc9c24f2-6439-4403-83e9-36034fd1cb45" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-indigo-700 hover:text-indigo-900 font-semibold underline"
                >
                  <span>Learn About Outcome Purpose Action</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step 6: Mastermind Groups */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-pink-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 6: Mastermind Groups</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You'll be assigned to become a part of a group of 4 to 5 learners. We recommend you meet once a week or every other week on a consistent basis so you can talk, ask questions, and share your journey with your fellow learners.
              </p>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-pink-900 font-semibold mb-2">Important Information:</p>
                <ul className="text-sm text-pink-800 space-y-1 list-disc list-inside">
                  <li>You can join Q+A calls starting ASAP</li>
                  <li>You'll be eligible to join the mastermind 15 days after your start date</li>
                  <li>Mastermind calls are organized based on what time works best for you and your group</li>
                  <li>Think of it as a study group for accountability and support</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3 mb-4">
                <strong>The people who had much success are those who took advantage of these communities, so we strongly recommend this!</strong>
              </p>
              <a 
                href="https://www.passionproductformula.com/products/passion-product-formula/categories/3120106/posts/10472189?cid=fc9c24f2-6439-4403-83e9-36034fd1cb45" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-pink-700 hover:text-pink-900 font-semibold underline"
              >
                <span>Find Out How to Join a Mastermind Group</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Step 7: 1 on 1 Calls */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
              <Video className="w-6 h-6 text-teal-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 7: Getting Your 1 on 1 Call</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You get <strong>2 free 30-minute 1 on 1 calls</strong> with Travis or a Passion Product Coach!
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-teal-900 font-semibold mb-2">Requirements:</p>
                <ul className="text-sm text-teal-800 space-y-1 list-disc list-inside">
                  <li><strong>First call:</strong> Complete the first 4 modules and all associated action items</li>
                  <li><strong>Second call:</strong> Complete the first 6 modules and all associated action items</li>
                </ul>
                <p className="text-sm text-teal-800 mt-2">
                  This ensures you make the most out of your consultation call!
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-900 font-semibold mb-2">Bonus: Free Strategy Call</p>
                <p className="text-sm text-blue-800">
                  As a bonus, you also get access to a free strategy call with one of our coaches. They'll let you know about our Accelerator Program, our most intensive offering, but even if you don't decide to join, you can take advantage of a 30-minute session to help plan out and strategize your business!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 8: Getting In Touch */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 8: Getting In Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Travis dedicates every Thursday to working on this course and answering questions. Here are the best ways to get in contact:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Best Way: Join the Weekly Q+A Call</p>
                    <p className="text-sm text-gray-600">Info on that above in Step 3</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Second Best: Post in the Facebook Group</p>
                    <p className="text-sm text-gray-600">Get feedback from everyone in the course, not just Travis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Third Option: Email <a href="mailto:travis@passionproduct.com" className="text-blue-600 hover:text-blue-800 underline">travis@passionproduct.com</a></p>
                    <p className="text-sm text-gray-600">Please note: Emails are usually checked once a week on Thursdays</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                Please avoid sending Facebook messages or Instagram DMs as Travis is not as active on those and your message may get lost.
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-2 border-blue-200 p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">You're All Set!</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember, this course is a work in progress. If something is unclear, doesn't work, or you come across any issues, please email Travis or post about it in the group and it will be fixed!
            </p>
            <p className="text-gray-600 text-sm">
              We really want this to be the best course it can be and help you succeed. Thank you and we're excited to get started with you!
            </p>
            <p className="text-gray-900 font-semibold mt-4">— Travis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPurchasePage;

