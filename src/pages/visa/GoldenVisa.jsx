import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBuilding2 as Building2,
  // LuGlobe as Globe,
  LuAward as Award,
  LuHandshake as HandShake,
  LuFileCheck as FileCheck,
  LuBuilding as Building,
  LuUsers as Users,
  LuChevronRight as ChevronRight,
  LuPhone as Phone,
  LuMessageCircle as MessageCircle,
  LuArrowRight as ArrowRight,
  // LuCheckCircle2 as CheckCircle2,
  LuBriefcase as Briefcase,
  LuShield as Shield,
  LuClock as Clock,
  LuTrendingUp as TrendingUp,
  // LuMapPin as MapPin,
  LuDollarSign as DollarSign,
  LuZap as Zap,
  LuHeart as Heart,
  LuPlane as Plane,
  LuStar as Star,
  // LuPassport as Passport,
  LuIdCard as IdCard,
  LuCalendar as Calendar,
  // LuHome as Home,
  LuCrown as Crown,
  LuGraduationCap as GraduationCap,
  LuCode as Code,
  LuMicroscope as Microscope,
  LuPalette as Palette,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";
import { FaPassport } from "react-icons/fa";
const ELIGIBILITY_CATEGORIES = [
  {
    icon: Crown,
    title: "Investors",
    description: "Real estate investors and business investors meeting UAE investment requirements may qualify for long-term Golden Visa residency.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs",
    description: "Startup founders, business owners, and innovative entrepreneurs with successful projects may be eligible for the Golden Visa program.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description: "Highly qualified professionals in healthcare, engineering, technology, education, finance, and other specialized sectors can apply under eligible categories.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Microscope,
    title: "Scientists & Researchers",
    description: "Researchers and scientists contributing to innovation and advanced sectors may qualify for UAE Golden Visa residency.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: GraduationCap,
    title: "Outstanding Students",
    description: "High-achieving students and graduates from recognized institutions may qualify under academic excellence categories.",
    image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Palette,
    title: "Creative Talent & Specialists",
    description: "Creative professionals, innovators, digital creators, and individuals with exceptional talents may be eligible for long-term residency.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

const BENEFITS = [
  {
    icon: Calendar,
    title: "Long-Term Residency",
    description: "Enjoy extended UAE residency options designed for investors, professionals, and entrepreneurs.",
  },
  {
    icon: TrendingUp,
    title: "Business & Investment Opportunities",
    description: "Access one of the world's leading business hubs with strong investment and global networking opportunities.",
  },
  {
    icon: Users,
    title: "Family Sponsorship",
    description: "Golden Visa holders can sponsor eligible family members under UAE immigration regulations.",
  },
  {
    icon: Star,
    title: "Premium Lifestyle",
    description: "Experience world-class infrastructure, healthcare, education, and luxury living standards in the UAE.",
  },
  {
    icon: Shield,
    title: "Professional Stability",
    description: "Build long-term business and professional opportunities with greater residency stability in the UAE.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    description: "Operate from a globally connected business hub with strong international travel and commercial access.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Eligibility Assessment", description: "Review your profile, profession, investments, or qualifications to determine Golden Visa eligibility." },
  { step: "02", title: "Documentation Preparation", description: "Prepare and organize all required legal documents, certificates, investment records, and supporting paperwork." },
  { step: "03", title: "Application Submission", description: "Complete Golden Visa application procedures and government processing with professional support." },
  { step: "04", title: "Medical & Emirates ID", description: "Coordinate medical testing, biometrics, and Emirates ID registration as part of the residency process." },
  { step: "05", title: "Golden Visa Approval", description: "Receive your UAE Golden Visa approval and complete all final immigration formalities successfully." },
];

const WHY_CHOOSE = [
  "Professional immigration consultants",
  "Reliable Golden Visa assistance",
  "Complete documentation support",
  "Transparent and professional guidance",
  "Investor and entrepreneur visa expertise",
  "End-to-end UAE immigration support",
];

const FAQS = [
  {
    question: "What is the UAE Golden Visa?",
    answer: "The UAE Golden Visa is a long-term residency program for eligible investors, entrepreneurs, professionals, students, and talented individuals.",
  },
  {
    question: "Can Golden Visa holders sponsor family members?",
    answer: "Yes, eligible Golden Visa holders can sponsor spouses, children, and dependent family members under UAE immigration regulations.",
  },
  {
    question: "Who is eligible for the UAE Golden Visa?",
    answer: "Eligibility depends on investment value, professional qualifications, business ownership, academic achievements, or specialized talent categories.",
  },
  {
    question: "Does EzzyBiz assist with the full Golden Visa process?",
    answer: "Yes, we provide complete Golden Visa support including consultation, documentation, application processing, Emirates ID coordination, and immigration assistance.",
  },
];

const ELIGIBILITY_BG = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1OAtMl.img?w=1200&h=900&m=4&q=65";

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

function EligibilityCard({ category, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = category.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-white/15 shadow-xl shadow-slate-950/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d7193f]/15 hover:shadow-[0_18px_40px_rgba(215,25,63,0.16)] hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        backgroundImage: `url(${category.image || ELIGIBILITY_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-colors duration-300 group-hover:from-black/20 group-hover:via-black/10 group-hover:to-transparent" />
      <div className="relative z-10 p-6 min-h-[340px] flex flex-col justify-between">
        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg mb-2">{category.title}</h3>
          <p className="text-slate-200 text-sm leading-relaxed">{category.description}</p>
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`group p-5 rounded-xl bg-gradient-to-br from-[#0b1220] to-[#0f1724] border border-white/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[0_18px_40px_rgba(215,25,63,0.18)] hover:border-white/20 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d7193f] to-[#b81236] flex items-center justify-center mb-3 shadow-md">
        <Icon size={18} className="text-white" />
      </div>
      <h3 className="font-semibold text-white text-sm mb-1">{benefit.title}</h3>
      <p className="text-slate-300 text-xs leading-relaxed">{benefit.description}</p>
    </div>
  );
}

function ProcessStep({ step, index }) {
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start group transition-all duration-400 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d7193f] to-[#b81236] flex items-center justify-center shadow-lg shadow-[#d7193f]/20">
          <span className="text-white text-sm font-bold">{step.step}</span>
        </div>
        {index < PROCESS_STEPS.length - 1 && (
          <div className="absolute top-10 left-5 w-px h-12 bg-gradient-to-b from-[#d7193f]/40 to-transparent hidden md:block" />
        )}
      </div>
      <div className="flex-1 pb-6">
        <h4 className="font-semibold text-gray-900 text-base mb-1">{step.title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`border-b border-gray-100 transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.question}</span>
        <ChevronRight
          size={18}
          className={`text-[#d7193f] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export default function GoldenVisa() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [eligibilityRef, eligibilityVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [processRef, processVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [whyRef, whyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqRef, faqVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-white font-sans">
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-6 pb-20 md:pt-8 md:pb-28 overflow-hidden">
        <img
          src="https://www.satgurutravel.ae/wp-content/uploads/2023/11/rgJkzKRk-dubai-uae-636x426.jpg"
          alt="Dubai UAE Golden Visa background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="relative z-20 max-w-[1280px] mx-auto px-5 md:px-8 mb-6 -mt-5">
          <div className="text-sm text-white flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-[#fca5a5] transition-colors no-underline text-white"
            >
              Home
            </Link>

            <ChevronRight size={14} className="text-white/70" />

            <span className="text-[#fca5a5] font-medium">Golden Visa</span>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >

            <h1 className="font-sans text-[clamp(34px,5vw,54px)] font-bold text-white leading-[1.2] mb-4">
              UAE Golden Visa
              <br />
              <span className="text-white bg-clip-text">Services In Dubai</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-300 mb-8">
              Secure long-term residency in the UAE with professional Golden Visa assistance from EzzyBiz. 
              We help investors, entrepreneurs, skilled professionals, business owners, and talented individuals 
              navigate the UAE Golden Visa process with complete documentation and immigration support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                Apply For Golden Visa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md no-underline">
                <MessageCircle size={14} /> Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRODUCTION SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={introRef}
            className={`grid items-center gap-10 md:grid-cols-2 transition-all duration-600 ${
              introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">GOLDEN VISA UAE</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-5">
                What Is The UAE Golden Visa?
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  The UAE Golden Visa is a long-term residency program introduced to attract investors, entrepreneurs, 
                  skilled professionals, scientists, innovators, and talented individuals from around the world. The 
                  program provides eligible applicants with extended residency options in the UAE while supporting 
                  business growth and economic development.
                </p>
                <p>
                  Golden Visa holders can live, work, study, and invest in the UAE while enjoying long-term residency 
                  benefits, business opportunities, and family sponsorship options. The visa is designed to support 
                  individuals who contribute to the UAE's innovation, investment, and professional sectors.
                </p>
                <p>
                  EzzyBiz provides complete Golden Visa assistance including eligibility assessment, documentation 
                  preparation, application processing, immigration coordination, Emirates ID support, and professional 
                  consultation throughout the process.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1OAtMl.img?w=1200&h=900&m=4&q=65"
                alt="Golden Visa UAE introduction"
                className="w-full h-full min-h-[280px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== ELIGIBILITY SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={eligibilityRef}
            className={`transition-all duration-600 ${
              eligibilityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">ELIGIBILITY CRITERIA</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Who Can Apply For UAE Golden Visa?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ELIGIBILITY_CATEGORIES.map((category, idx) => (
                <EligibilityCard key={idx} category={category} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-16 md:py-20 bg-[#071029]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={benefitsRef}
            className={`transition-all duration-600 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">KEY BENEFITS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-white">
                Benefits Of UAE Golden Visa
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENEFITS.map((benefit, idx) => (
                <BenefitCard key={idx} benefit={benefit} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== APPLICATION PROCESS SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <div
            ref={processRef}
            className={`transition-all duration-600 ${
              processVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">APPLICATION PROCESS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                UAE Golden Visa Application Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
              {PROCESS_STEPS.map((step, idx) => (
                <ProcessStep key={idx} step={step} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE EZZYBIZ ========== */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={whyRef}
            className={`transition-all duration-600 ${
              whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">WHY EZZYBIZ</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-white">
                Why Choose EzzyBiz For Golden Visa Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHY_CHOOSE.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-4 rounded-lg bg-black/80 border border-white/10 transition-all duration-300 hover:bg-black hover:border-[#d7193f]/20 hover:shadow-[0_12px_30px_rgba(215,25,63,0.16)] ${
                    whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-[#d7193f] shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <div
            ref={faqRef}
            className={`transition-all duration-600 ${
              faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">FAQ</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              {FAQS.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={ctaRef}
            className={`bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-600 ${
              ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d7193f]/10 to-transparent" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d7193f]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e8718a]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <h2 className="font-sans text-[clamp(24px,4vw,34px)] font-bold text-white mb-3">
                Secure Your UAE Golden Visa With Confidence
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for professional Golden Visa services, expert immigration support, and reliable 
                long-term residency solutions in the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                  Get Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://wa.me/971523177073" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 no-underline cursor-pointer">
                  <Phone size={14} /> Talk To Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}