import React, { useEffect, useState } from 'react';
import { CheckCircle, Circle, Mail, FileText, Users, Search, UserCheck, ArrowRight, ExternalLink, Shield, Award, PlayCircle, BookOpen, MessageCircle, Factory, Palette, Sparkles } from 'lucide-react';

interface CompletedPurchasePageProps {
  // No props needed
}

// The course and community live in Mighty Networks now
const MIGHTY_NETWORKS_URL = 'https://passion-product-formula.mn.co/sign_up?auto_join=true&from=https%3A%2F%2Fpassion-product-formula.mn.co%2F%3Fautojoin%3D1&space_id=20448995';
const MODULE_0_URL = 'https://passionproductcommunity.com/posts/the-passion-product-formula-course-introduction';
const RESEARCH_CHALLENGE_URL = 'https://passionproductcommunity.com/spaces/23069463/content';
const CHECKLIST_URL = 'https://drive.google.com/file/d/12_rxxIPbm_AGCsLGr6Xww8iuo3kPTohg/view';
const QUESTIONNAIRE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfI6bvYn2_zcliC1zD__He5ZSJXasEfBCicBSVeNl-QNT7AsA/viewform?usp=sf_link&urp=gmail_link';

const PROGRESS_KEY = 'ppf-onboarding-progress';

const unlocked = [
  { icon: BookOpen, title: '117 step-by-step video lessons', body: 'The full roadmap from idea to launch, so you always know the next move.' },
  { icon: MessageCircle, title: '2,000+ question Q&A database', body: 'Almost any question you hit has already been asked and answered.' },
  { icon: Users, title: 'The Passion Product Community', body: 'Students and coaches who give real feedback on your ideas, logos, and listings.' },
  { icon: Factory, title: 'Our supplier and expert database', body: 'Hundreds of vetted manufacturers, designers, product sourcers, and more.' },
  { icon: UserCheck, title: 'An accountability buddy', body: 'Someone on the same journey who keeps you moving when life gets busy.' },
  { icon: Search, title: 'Bonus: Product Research Challenge', body: 'A guided sprint to find real product ideas in your first week.' },
  { icon: Palette, title: 'Bonus: 40% off design services', body: 'From FBACreatives, for your logo, packaging, and listing images (lifetime members).' },
];

const studentStories = [
  { name: 'Darryl', caption: 'His honest first six months on Amazon', videoId: 'qnfz99q85n' },
  { name: 'Troy', caption: 'Built his business while in college', videoId: 'frer1czlo4' },
  { name: 'Jeremy', caption: 'Funded his launch with Kickstarter', videoId: 'zzus1p2wdz' },
];

const loadProgress = (): Record<string, boolean> => {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  } catch {
    return {};
  }
};

interface StepProps {
  id: string;
  number: number;
  icon: React.ReactNode;
  title: string;
  time: string;
  done: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ id, number, icon, title, time, done, onToggle, children, isLast }) => (
  <div className="relative flex space-x-4 sm:space-x-6">
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center shadow-md flex-shrink-0 transition-colors ${
        done ? 'bg-green-600 text-white' : 'bg-white text-green-700 border-2 border-green-600'
      }`}>
        {done ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      {!isLast && <div className="w-0.5 flex-1 bg-green-200 my-2" />}
    </div>
    <div className={`flex-1 bg-white rounded-2xl shadow-lg border p-6 transition-colors ${
      done ? 'border-green-300' : 'border-gray-200'
    } ${isLast ? '' : 'mb-6'}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-100 p-2 rounded-lg flex-shrink-0">{icon}</div>
          <h3 className={`text-xl font-bold ${done ? 'text-gray-500' : 'text-gray-900'}`}>{title}</h3>
        </div>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">{time}</span>
      </div>
      {children}
      <button
        onClick={() => onToggle(id)}
        className={`mt-5 inline-flex items-center space-x-2 text-sm font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
          done
            ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
            : 'bg-white border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-700'
        }`}
      >
        {done ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
        <span>{done ? 'Done' : 'Mark as done'}</span>
      </button>
    </div>
  </div>
);

const LinkButton: React.FC<{ href: string; children: React.ReactNode; primary?: boolean }> = ({ href, children, primary }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      primary
        ? 'inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors shadow-md'
        : 'inline-flex items-center space-x-2 text-sm text-green-700 hover:text-green-900 font-semibold underline'
    }
  >
    <span>{children}</span>
    <ExternalLink className="w-4 h-4" />
  </a>
);

const STEP_IDS = ['email', 'community', 'module0', 'questionnaire', 'challenge'];

const CompletedPurchasePage: React.FC<CompletedPurchasePageProps> = () => {
  const [progress, setProgress] = useState<Record<string, boolean>>(loadProgress);

  useEffect(() => {
    document.title = "You're in! | Passion Product Formula";
  }, []);

  const toggle = (id: string) => {
    setProgress((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      } catch {
        // Progress just won't persist in private browsing
      }
      return next;
    });
  };

  const doneCount = STEP_IDS.filter((id) => progress[id]).length;
  const stepProps = (id: string) => ({ id, done: !!progress[id], onToggle: toggle });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white/20 ring-8 ring-white/10 mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <div className="inline-flex items-center space-x-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
            <Sparkles className="w-4 h-4" />
            <span>Payment confirmed</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">You're in. Welcome to the Passion Product Formula!</h1>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed max-w-2xl mx-auto">
            Most people think about building a product business for years. You just did something about it.
            Your spot is locked in and your receipt is on its way to your inbox.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16 space-y-14">
        {/* Start Here */}
        <div className="relative bg-white rounded-2xl shadow-xl border-2 border-green-500 p-6 sm:p-8">
          <div className="flex items-center space-x-2 text-green-700 font-bold uppercase text-sm tracking-wide mb-3">
            <Mail className="w-5 h-5" />
            <span>Do this first</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Check your email and create your login</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Look for an email with the subject line <strong>"Welcome to the Course!"</strong> along with an invitation to create your account. That's where you set up the login you'll use to watch every module.
          </p>
          <p className="text-gray-600 text-sm">
            Don't see it within a few minutes? Check your spam or promotions folder, then search your inbox for "Passion Product".
          </p>
          <button
            onClick={() => toggle('email')}
            className={`mt-5 inline-flex items-center space-x-2 text-sm font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
              progress.email
                ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-100'
                : 'bg-white border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-700'
            }`}
          >
            {progress.email ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            <span>{progress.email ? 'Login created' : "I've created my login"}</span>
          </button>
        </div>

        {/* What You Unlocked */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Everything you just unlocked</h2>
          <p className="text-gray-600 mb-6">This is all yours now. Here's what's waiting for you inside.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {unlocked.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className={`${i === unlocked.length - 1 && unlocked.length % 2 ? 'sm:col-span-2 ' : ''}flex items-start space-x-3 bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md hover:border-green-300 transition-all`}>
                <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                  <Icon className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your first week, step by step</h2>
            <span className="text-sm font-semibold text-green-700">{doneCount} of {STEP_IDS.length} done</span>
          </div>
          <div className="bg-green-100 rounded-full h-2 overflow-hidden mb-3">
            <div className="bg-green-600 h-full transition-all duration-500" style={{ width: `${(doneCount / STEP_IDS.length) * 100}%` }} />
          </div>
          <p className="text-gray-600 mb-8">Follow these in order and tick them off as you go. Each one takes less time than you'd think.</p>

          <Step {...stepProps('community')} number={1} icon={<Users className="w-5 h-5 text-orange-600" />} title="Join The Passion Product Community" time="2 min">
            <p className="text-gray-700 leading-relaxed mb-3">
              The course and the community both live on Mighty Networks. This is where you'll watch the lessons, ask questions, share your progress, and get feedback from students who are a few steps ahead of you.
            </p>
            <ul className="text-sm text-gray-700 space-y-1.5 mb-4">
              <li className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Share your ideas, logos, and websites and get real feedback</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Connect with students who specialize in Kickstarter, Google Ads, Facebook ads, and more</span></li>
              <li className="flex items-start space-x-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" /><span>The students who post at least once a month get the most out of the program</span></li>
            </ul>
            <LinkButton href={MIGHTY_NETWORKS_URL} primary>Join The Community</LinkButton>
          </Step>

          <Step {...stepProps('module0')} number={2} icon={<UserCheck className="w-5 h-5 text-indigo-600" />} title="Watch Module 0" time="30 min">
            <p className="text-gray-700 leading-relaxed mb-3">
              Module 0 walks you through how the program works and has you build your Outcome Purpose Action plan. It's the foundation for everything that comes after, so don't skip it.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once your plan is done, fill out the form at the end and we'll pair you with an accountability buddy who is on the same journey as you.
            </p>
            <LinkButton href={MODULE_0_URL} primary>Go to Module 0</LinkButton>
          </Step>

          <Step {...stepProps('questionnaire')} number={3} icon={<FileText className="w-5 h-5 text-purple-600" />} title="Fill out the questionnaire and grab your checklist" time="10 min">
            <p className="text-gray-700 leading-relaxed mb-3">
              The questionnaire helps us get to know you and shape the program around your goals. The checklist is your step-by-step map: finish each task before moving to the next one.
            </p>
            <p className="text-gray-600 text-sm mb-4">Make a copy of the checklist so you can edit it.</p>
            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href={QUESTIONNAIRE_URL} primary>Fill Out The Questionnaire</LinkButton>
              <LinkButton href={CHECKLIST_URL}>Get Your Checklist</LinkButton>
            </div>
          </Step>

          <Step {...stepProps('challenge')} number={4} icon={<Search className="w-5 h-5 text-pink-600" />} title="Start the Product Research Challenge" time="Bonus" isLast>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your bonus Product Research Challenge is waiting inside the community. Work through it alongside the course and you'll start finding real product ideas in your first week.
            </p>
            <LinkButton href={RESEARCH_CHALLENGE_URL} primary>Start the Challenge</LinkButton>
          </Step>
        </div>

        {/* Guarantees */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">You're fully protected</h2>
          <p className="text-gray-600 mb-6">Both guarantees apply to your purchase starting today.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-2 border-blue-300 shadow-md">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-blue-700" />
                <h3 className="text-base font-black text-blue-900">7-Day Money-Back Guarantee</h3>
              </div>
              <p className="text-sm text-blue-900 leading-relaxed">
                Dig in and try it risk-free. If it's not for you, get a full refund. No questions asked.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border-2 border-orange-300 shadow-md">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-orange-700" />
                <h3 className="text-base font-black text-orange-900">$1,000 Profit Guarantee</h3>
              </div>
              <p className="text-sm text-orange-900 leading-relaxed">
                Follow all of the steps in the program and if you don't make at least $1,000 selling on Amazon in your first year, we will pay you $1,000.
              </p>
            </div>
          </div>
        </div>

        {/* Student Stories */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Students who started right where you are</h2>
          <p className="text-gray-600 mb-6">Every one of them was on this exact page once.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {studentStories.map((story, i) => (
              <div key={story.videoId} className={`${i === 0 ? 'sm:col-span-2 ' : ''}bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden`}>
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://fast.wistia.com/embed/medias/${story.videoId}`}
                    title={`${story.name}'s story`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex items-center space-x-2 p-4">
                  <PlayCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-gray-900"><strong>{story.name}:</strong> {story.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Getting In Touch */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Questions? You're not on your own</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Travis dedicates every Thursday to working on this course and answering questions. Here's how to reach the team:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                <ArrowRight className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Best way: Post in the community</p>
                <p className="text-sm text-gray-600">You get answers from everyone in the program, not just Travis, and usually much faster</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Private questions: Email <a href="mailto:travis@passionproduct.com" className="text-blue-600 hover:text-blue-800 underline">travis@passionproduct.com</a></p>
                <p className="text-sm text-gray-600">Emails are checked once a week on Thursdays</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-4 italic">
            Please avoid Facebook messages or Instagram DMs. Travis isn't as active there and your message may get lost.
          </p>
        </div>

        {/* Note From Travis */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-lg border-2 border-green-200 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">A quick note from Travis</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            I built this program around the exact process I used to build my own products, and I keep improving it based on what students tell me. If anything is unclear or doesn't work, post about it in the community or email me and we'll fix it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The students who succeed aren't the ones with the most money or experience. They're the ones who show up, take the next step, and lean on the community. You've already taken the hardest step. I'm excited to see what you build.
          </p>
          <p className="text-gray-900 font-semibold mt-4">Travis</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedPurchasePage;
