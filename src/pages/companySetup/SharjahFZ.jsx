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
  LuShoppingCart as ShoppingCart,
  LuLaptop as Laptop,
  LuCode as Code,
  LuHardHat as HardHat,
  LuMegaphone as Megaphone,
  LuPlane as Plane,
  LuTruck as Truck,
  LuPackage as Package,
  LuFactory as Factory,
  LuFilm as Film,
} from "react-icons/lu";

import { FiHome as Home, FiCheckCircle as CheckCircle2, FiHelpCircle as HelpCircle } from "react-icons/fi";
import { BiGlobe as Globe, BiMapPin as MapPin } from "react-icons/bi";

const BENEFITS = [
  {
    icon: Globe,
    title: "100% Foreign Ownership",
    description: "Maintain full ownership of your business without the need for a local sponsor or UAE national partner.",
    image: "/assets/images/corporate-internal-stock-team-.webp",
  },
  {
    icon: DollarSign,
    title: "Affordable Business Setup",
    description: "Sharjah free zones provide cost-effective company formation packages suitable for startups and SMEs.",
    image: "/assets/images/oxvdlufc_400x400.webp",
  },
  {
    icon: Shield,
    title: "Tax-Friendly Environment",
    description: "Benefit from a business-friendly tax structure and simplified corporate regulations in the UAE.",
    image: "/assets/images/img_35.webp",
  },
  {
    icon: MapPin,
    title: "Strategic UAE Location",
    description: "Sharjah offers easy access to Dubai, UAE seaports, airports, and regional trading markets.",
    image: "/assets/images/card34.webp",
  },
  {
    icon: Building,
    title: "Flexible Office Solutions",
    description: "Choose from flexi desks, shared offices, warehouses, and commercial workspaces based on your business needs.",
    image: "/assets/images/4f5a2a27a6db6238806ba41f88ffb9.webp",
  },
  {
    icon: Users,
    title: "Investor Visa Eligibility",
    description: "Apply for investor and employee visas with professional immigration and visa processing support.",
    image: "/assets/images/667_5.webp",
  },
];

const BUSINESS_ACTIVITIES = [
  { name: "General Trading", icon: ShoppingCart },
  { name: "Import & Export", icon: Truck },
  { name: "E-Commerce", icon: Laptop },
  { name: "Consultancy Services", icon: TrendingUp },
  { name: "IT & Technology", icon: Code },
  { name: "Industrial Manufacturing", icon: Factory },
  { name: "Logistics & Warehousing", icon: Package },
  { name: "Media & Marketing", icon: Megaphone },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Professional Services", icon: Briefcase },
];

const PROCESS_STEPS = [
  { step: "01", title: "Business Consultation", description: "Discuss your business requirements and select the right free zone authority and business activity." },
  { step: "02", title: "Choose License Type", description: "Select the appropriate commercial, professional, industrial, or service license for your business." },
  { step: "03", title: "Documentation Submission", description: "Prepare and submit all required legal documents and company registration forms for approval." },
  { step: "04", title: "License Issuance", description: "Receive your Sharjah free zone trade license and complete company incorporation procedures." },
  { step: "05", title: "Visa & Banking Support", description: "Complete investor visa processing and business bank account setup with expert corporate guidance." },
];

const WHY_CHOOSE = [
  "Professional free zone setup consultants",
  "Affordable and transparent business solutions",
  "Fast company registration process",
  "Complete visa and PRO support",
  "Business banking assistance",
  "End-to-end corporate services across UAE",
];

const FAQS = [
  {
    question: "What are the benefits of setting up in a Sharjah Free Zone?",
    answer: "Sharjah free zones (like SPC, SHAMS, and SAIF Zone) offer highly cost-effective setup costs, fast processing, and excellent access to sea and airports."
  },
  {
    question: "How fast can a company be formed in SPC Free Zone?",
    answer: "Sharjah Publishing City (SPC) Free Zone is one of the fastest in the UAE, often issuing business licenses in less than 45 minutes."
  },
  {
    question: "Do Sharjah Free Zones allow 100% capital repatriation?",
    answer: "Yes, like all UAE free zones, you enjoy 100% foreign ownership, 100% import/export tax exemptions, and full capital repatriation rights."
  },
  {
    question: "Can a Sharjah Free Zone company apply for Dubai residency visas?",
    answer: "Visas are issued under the Sharjah immigration authority, but they grant you full residency rights to live and work anywhere in the UAE (including Dubai)."
  },
  {
    question: "Do I need to physically visit Sharjah to complete my setup?",
    answer: "No, the entire Sharjah company setup, document signing, and license issuance can be managed completely online."
  },
  {
    question: "Can a Sharjah company hold multiple business activities?",
    answer: "Yes, zones like SHAMS and SPC allow combining multiple commercial, service, and e-commerce activities under a single license."
  },
  {
    question: "Are physical offices required in Sharjah Free Zones?",
    answer: "No, they offer flexible shared desks, dedicated desks, and virtual office packages designed specifically for cost savings."
  },
  {
    question: "What is the visa validity for investors in Sharjah free zones?",
    answer: "Investor and employee residency visas in Sharjah free zones are typically issued for 2 years and are fully renewable."
  }
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
      <img
        src={benefit.image}
        alt={benefit.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
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
      className={`group flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-700 transition-all duration-300 hover:bg-slate-800 hover:border-[#d7193f]/30 hover:shadow-lg hover:shadow-[#d7193f]/10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="w-7 h-7 rounded-md bg-[#d7193f]/10 flex items-center justify-center group-hover:bg-[#d7193f]/20 transition-colors">
        <Icon size={13} className="text-[#d7193f]" />
      </div>
      <span className="text-sm text-slate-100 group-hover:text-white transition-colors">{activity.name}</span>
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

export default function SharjahFZ() {
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
          src="/assets/images/business-set-up-in-dafza.webp"
          alt="Sharjah Free Zone"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-[#d7193f]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] bg-[#e8718a]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>



        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >

            <h1 className="font-sans text-[clamp(34px,5vw,54px)] font-bold text-white leading-[1.2] mb-4">
              Sharjah Free Zone
              <br />
              <span className="text-white bg-clip-text">Company Formation Services</span>
            </h1>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-200 mb-8">
              Establish your business in Sharjah Free Zone with affordable setup solutions, investor-friendly regulations, 
              and complete corporate support. EzzyBiz helps entrepreneurs and international investors launch and grow 
              their businesses smoothly across the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
                Start Your Company <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { service: "Sharjah Free Zone Company Setup" } }))} className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 px-7 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-md no-underline">
                <MessageCircle size={14} /> Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-[#d7193f] transition-colors no-underline text-gray-500"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#d7193f] font-medium">Sharjah Free Zone</span>
          </div>
        </div>
      </section>

      {/* ========== INTRODUCTION SECTION ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={introRef}
            className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-600 ${
              introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">SHARJAH FREE ZONE</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-5 text-left">
                What Is Sharjah Free Zone Company Formation?
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  Sharjah Free Zone company formation allows entrepreneurs and international investors to establish businesses 
                  in one of the UAE's most cost-effective and business-friendly jurisdictions. Sharjah free zones offer modern 
                  infrastructure, simplified regulations, tax advantages, and flexible company setup solutions for various industries.
                </p>
                <p>
                  Sharjah has become an important commercial hub in the UAE due to its strategic location, strong logistics network, 
                  and growing industrial and trading sectors. Free zone companies in Sharjah benefit from efficient registration 
                  procedures and investor-focused business policies.
                </p>
              </div>
            </div>

            {/* Right — Image */}
            <div className={`rounded-2xl overflow-hidden shadow-xl h-[320px] transition-all duration-600 ${introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <img
                src="/assets/images/orig.webp"
                alt="Sharjah Free Zone"
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
                Benefits Of Sharjah Free Zone Company Formation
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
      <section className="py-16 md:py-20 bg-[#0f172a] text-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={activitiesRef}
            className={`transition-all duration-600 ${
              activitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">BUSINESS ACTIVITIES</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-white">
                Popular Business Activities In Sharjah Free Zone
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
                Why Choose EzzyBiz For Sharjah Free Zone Setup
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
                Launch Your Sharjah Free Zone Business Today
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for smooth company formation, expert consultation, and reliable corporate 
                solutions for your Sharjah free zone business setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { service: "Sharjah Free Zone Company Setup" } }))} className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline">
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