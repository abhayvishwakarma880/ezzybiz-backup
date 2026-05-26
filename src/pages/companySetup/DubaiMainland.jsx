import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBuilding2 as Building2,
  LuAward as Award,
  LuHandshake as HandShake,
  LuFileCheck as FileCheck,
  LuBuilding as Building,
  LuUsers as Users,
  LuCalendar as Calendar,
  LuStar as Star,
  LuChevronRight as ChevronRight,
  LuPhone as Phone,
  LuMessageCircle as MessageCircle,
  LuArrowRight as ArrowRight,
  LuBriefcase as Briefcase,
  LuShield as Shield,
  LuClock as Clock,
  LuTrendingUp as TrendingUp,
  LuDollarSign as DollarSign,
  LuRocket as Rocket,
  LuSettings as Settings,
  LuCreditCard as CreditCard,
  LuShoppingCart as ShoppingCart,
  LuLaptop as Laptop,
  LuCode as Code,
  LuTrendingUp as TrendingUpIcon,
  LuHardHat as HardHat,
  LuMegaphone as Megaphone,
  LuPlane as Plane,
  LuUtensils as Utensils,
  LuTruck as Truck,
  LuStethoscope as Stethoscope,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe, BiMapPin } from "react-icons/bi";

const BENEFITS = [
  {
    icon: BiMapPin,
    title: "Access To UAE Market",
    description: "Operate your business anywhere across the UAE without restrictions and work with both government and private sectors.",
    image: "/assets/images/img_35.webp",
  },
  {
    icon: BiGlobe,
    title: "100% Foreign Ownership",
    description: "Many mainland business activities now allow full foreign ownership, providing greater operational control for investors.",
    image: "/assets/images/corporate-internal-stock-team-.webp",
  },
  {
    icon: Settings,
    title: "Flexible Business Activities",
    description: "Choose from a wide range of commercial, professional, industrial, and consultancy activities based on your business goals.",
    image: "/assets/images/4f5a2a27a6db6238806ba41f88ffb9.webp",
  },
  {
    icon: DollarSign,
    title: "No Currency Restrictions",
    description: "Enjoy complete flexibility for international transactions and global business operations without currency limitations.",
    image: "/assets/images/oxvdlufc_400x400.webp",
  },
  {
    icon: TrendingUpIcon,
    title: "Unlimited Growth Opportunities",
    description: "Expand your operations freely across Dubai and the UAE with scalable business opportunities and market access.",
    image: "/assets/images/card34.webp",
  },
  {
    icon: Users,
    title: "Investor & Employee Visas",
    description: "Apply for investor, partner, and employee visas with complete immigration and visa processing support.",
    image: "/assets/images/667_5.webp",
  },
];

const BUSINESS_ACTIVITIES = [
  { name: "General Trading", icon: ShoppingCart },
  { name: "E-Commerce", icon: Laptop },
  { name: "IT & Technology", icon: Code },
  { name: "Consultancy Services", icon: TrendingUpIcon },
  { name: "Real Estate", icon: Home },
  { name: "Construction", icon: HardHat },
  { name: "Marketing Agencies", icon: Megaphone },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Restaurants & Cafes", icon: Utensils },
  { name: "Import & Export", icon: Truck },
  { name: "Professional Services", icon: Briefcase },
  { name: "Healthcare Services", icon: Stethoscope },
];

const PROCESS_STEPS = [
  { step: "01", title: "Business Consultation", description: "Discuss your business goals and select the right business activity and legal structure for your company." },
  { step: "02", title: "Trade Name Approval", description: "Reserve and approve your company trade name according to UAE regulations and licensing requirements." },
  { step: "03", title: "License Application", description: "Submit all required legal documents and complete the mainland license application process." },
  { step: "04", title: "Office & Documentation", description: "Complete tenancy agreements, office requirements, and supporting documentation for final approvals." },
  { step: "05", title: "License Issuance", description: "Receive your mainland trade license and begin business operations legally across the UAE." },
];

const WHY_CHOOSE = [
  "Professional business setup consultants",
  "Fast and transparent registration process",
  "Complete licensing and documentation support",
  "Reliable visa and PRO services",
  "Business banking assistance",
  "End-to-end corporate solutions",
];

const FAQS = [
  {
    question: "What is a Dubai Mainland company setup?",
    answer: "A mainland company is registered under the Dubai Department of Economy and Tourism (DET), allowing you to trade freely anywhere in the UAE and internationally.",
  },
  {
    question: "Is 100% foreign ownership allowed for mainland companies?",
    answer: "Yes, under recent commercial law amendments, foreign investors can own 100% of their mainland UAE companies for most commercial and industrial activities.",
  },
  {
    question: "Do I need a local UAE sponsor to start a mainland company?",
    answer: "No, for most standard commercial and professional activities, a local sponsor is no longer required. You can maintain 100% ownership.",
  },
  {
    question: "What is the minimum office space requirement for a mainland company?",
    answer: "A physical office space or Ejari is mandatory for mainland licenses, but smart desk and virtual office options are available for start-ups.",
  },
  {
    question: "How long does DET mainland licensing take?",
    answer: "A mainland business license in Dubai can be issued within 2 to 3 working days once all documentation is approved.",
  },
  {
    question: "What are the main advantages of a mainland company over a free zone?",
    answer: "Mainland companies have no geographical limits on trading inside the UAE, can bid for government contracts, and can open physical shops easily.",
  },
  {
    question: "Can a Dubai Mainland company hire unlimited staff?",
    answer: "Yes, the visa quota is based on the size of your physical office space (typically 80-100 sq ft per visa), allowing unlimited hiring scope.",
  },
  {
    question: "Are mainland companies subject to corporate tax in the UAE?",
    answer: "Yes, UAE mainland companies are subject to the standard 9% corporate tax on taxable profits exceeding AED 375,000.",
  },
];

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

function BenefitCard({ benefit, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl overflow-hidden h-[220px] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Background Image */}
      <img
        src={benefit.image}
        alt={benefit.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="w-9 h-9 rounded-lg bg-[#d7193f]/80 flex items-center justify-center mb-3">
          <Icon size={16} className="text-white" />
        </div>
        <h3 className="font-semibold text-white text-base mb-1">{benefit.title}</h3>
        <p className="text-white/70 text-xs leading-relaxed">{benefit.description}</p>
      </div>
    </div>
  );
}

function ActivityCard({ activity, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = activity.icon;

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-3 p-3 rounded-lg border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-300 hover:border-[#d7193f]/40 hover:from-[#d7193f]/10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="w-7 h-7 rounded-md bg-[#d7193f]/10 border border-[#d7193f]/20 flex items-center justify-center shrink-0 group-hover:bg-[#d7193f]/20 transition-colors">
        <Icon size={13} className="text-[#d7193f]" />
      </div>
      <span className="text-sm text-white/70 group-hover:text-white transition-colors">{activity.name}</span>
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
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-[#d7193f]/20 bg-gradient-to-br from-white to-[#fef8f9]/20 shadow-lg shadow-[#d7193f]/5"
          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md hover:shadow-gray-100/50"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left group gap-4 cursor-pointer"
      >
        <span className={`font-semibold text-sm md:text-base transition-colors duration-250 ${
          isOpen ? "text-[#d7193f]" : "text-gray-800 group-hover:text-[#d7193f]"
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
          isOpen ? "bg-[#d7193f] text-white rotate-90 shadow-md shadow-[#d7193f]/20" : "bg-gray-50 text-gray-500 group-hover:bg-[#d7193f]/10 group-hover:text-[#d7193f]"
        }`}>
          <ChevronRight size={16} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100 pb-5 px-5 pt-1" : "max-h-0 opacity-0 px-5"
        }`}
      >
        <div className="pt-3 border-t border-gray-100 text-gray-500 text-sm leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function DubaiMainland() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activitiesRef, activitiesVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [processRef, processVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [whyRef, whyVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [faqRef, faqVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-white font-sans">
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-6 pb-8 md:pt-8 md:pb-10 overflow-hidden">
        <img
          src="/assets/images/79752811-0-image-m-31_17047303.webp"
          alt="Dubai Mainland"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >

            <h1 className="font-sans text-[clamp(34px,5vw,54px)] font-bold text-white leading-[1.2] mb-4">
              Dubai Mainland
              <br />
              <span className="text-white bg-clip-text">Company Setup Services</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-white/80 mb-8">
              Establish your mainland company in Dubai with expert guidance and complete business setup support. 
              EzzyBiz helps entrepreneurs, startups, and international investors launch and grow their businesses 
              across the UAE with smooth registration, licensing, and compliance solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { service: "Dubai Mainland Company Setup" } }))}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline cursor-pointer border-none"
              >
                Start Your Business <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { service: "Dubai Mainland Company Setup" } }))}
                className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md cursor-pointer border-solid"
              >
                <MessageCircle size={14} /> Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors no-underline text-white">Home</Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-[#ff0033] font-medium">Dubai Mainland</span>
          </div>
        </div>
        
      </section>

      {/* ========== INTRODUCTION SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={introRef}
            className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center transition-all duration-600 ${
              introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">DUBAI MAINLAND SETUP</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(26px,3.5vw,36px)] font-bold text-[#0f0f1a] mb-4">
                What Is Dubai Mainland Company Formation?
              </h2>
              <div className="space-y-3 text-gray-600 text-[14px] leading-relaxed">
                <p>
                  A mainland company in Dubai is licensed by the Department of Economy and Tourism (DET), allowing businesses to operate freely across the UAE — with both government and private sector clients.
                </p>
                <p>
                  With recent reforms allowing 100% foreign ownership in many activities, mainland setup has become the most preferred option for global entrepreneurs and investors.
                </p>
                <p>
                  EzzyBiz handles everything — from business activity selection and trade name approval to licensing, visa processing, and corporate compliance.
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[380px]">
              <img
                src="/assets/images/start-a-business-in-the-mainla.webp"
                alt="Dubai Mainland Company Formation"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={benefitsRef}
            className={`transition-all duration-600 ${
              benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">KEY BENEFITS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Benefits Of Mainland Company Formation In Dubai
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <BenefitCard key={idx} benefit={benefit} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BUSINESS ACTIVITIES SECTION ========== */}
      <section className="py-16 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={activitiesRef}
            className={`transition-all duration-600 ${
              activitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/60" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">BUSINESS ACTIVITIES</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/60" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-white">
                Popular Mainland Business Activities In Dubai
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {BUSINESS_ACTIVITIES.map((activity, idx) => (
                <ActivityCard key={idx} activity={activity} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE EZZYBIZ ========== */}
      <section className="py-16 md:py-20 bg-white">
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
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Why Choose EzzyBiz For Mainland Company Setup
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHY_CHOOSE.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-4 rounded-lg bg-gray-50/50 border border-gray-100 transition-all duration-300 hover:bg-white hover:border-[#d7193f]/20 hover:shadow-sm ${
                    whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <CheckCircle2 size={16} className="text-[#d7193f] shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Column 1 */}
              <div className="space-y-4">
                {FAQS.slice(0, 4).map((faq, idx) => (
                  <FAQItem key={idx} faq={faq} index={idx} />
                ))}
              </div>
              {/* Column 2 */}
              <div className="space-y-4">
                {FAQS.slice(4, 8).map((faq, idx) => (
                  <FAQItem key={idx + 4} faq={faq} index={idx + 4} />
                ))}
              </div>
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
                Start Your Mainland Business In Dubai Today
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for smooth mainland company formation, professional consultation, 
                and reliable corporate support services across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { service: "Dubai Mainland Company Setup" } }))}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline cursor-pointer border-none"
                >
                  Get Free Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
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