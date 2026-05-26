import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuBuilding2 as Building2,
  LuGlobe as Globe,
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
} from "react-icons/lu";

import { FiCheckCircle as CheckCircle2 } from "react-icons/fi";

import aboutUs from '../assets/aboutUs.webp';
import whyChoose from '../assets/whyChoose.webp';
import he from '../assets/he.webp';

const STATS = [
  { number: "500+", label: "Businesses Successfully Setup", icon: Briefcase },
  { number: "10+", label: "Years Of Industry Experience", icon: Calendar },
  { number: "100%", label: "Client-Focused Solutions", icon: Users },
  { number: "25+", label: "Industries Served Across UAE", icon: Globe },
];

const WHY_CHOOSE = [
  {
    icon: Award,
    title: "Experienced Business Consultants",
    description:
      "Expert guidance for mainland, free zone, and offshore business setup across the UAE.",
  },
  {
    icon: Clock,
    title: "Fast & Hassle-Free Process",
    description:
      "Efficient documentation and approval handling for quick company formation.",
  },
  {
    icon: Shield,
    title: "Transparent Business Solutions",
    description:
      "Clear pricing, honest consultation, and reliable support without hidden charges.",
  },
  {
    icon: TrendingUp,
    title: "Complete Corporate Support",
    description:
      "From licensing to banking, we provide complete business support under one roof.",
  },
];

const SERVICES = [
  { name: "Mainland Company Formation", icon: Building },
  { name: "Free Zone Company Setup", icon: Globe },
  { name: "Offshore Company Formation", icon: Building2 },
  { name: "Investor & Employment Visa Services", icon: Users },
  { name: "VAT Registration & Corporate Tax", icon: FileCheck },
  { name: "Business Banking Assistance", icon: HandShake },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation & Business Planning",
    description:
      "Discuss your goals and get expert guidance on the right business structure.",
  },
  {
    step: "02",
    title: "Choose Business Activity & Jurisdiction",
    description:
      "Select ideal activities and jurisdiction for your business model.",
  },
  {
    step: "03",
    title: "Documentation & Government Approvals",
    description: "We handle all paperwork and approvals for a smooth process.",
  },
  {
    step: "04",
    title: "License Issuance & Visa Processing",
    description: "Get your trade license and complete visa processing quickly.",
  },
  {
    step: "05",
    title: "Launch & Grow Your Business",
    description:
      "Start operations with complete banking and compliance support.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Al Mansouri",
    role: "Founder, TechStart UAE",
    text: "EzzyBiz made our Dubai business setup process simple and stress-free. Their consultants handled every stage professionally and efficiently.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Global Connect",
    text: "Excellent support and transparent guidance throughout the company formation process. Highly recommended for UAE business setup.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    text: "From documentation to banking assistance, the team managed everything smoothly and professionally.",
    rating: 5,
  },
];

function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

function StatCard({ stat, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`text-center p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#d7193f]/5 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#d7193f]/10 to-[#d7193f]/5 flex items-center justify-center">
        <Icon size={22} className="text-[#d7193f]" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-[#0f0f1a] font-sans">
        {stat.number}
      </div>
      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
    </div>
  );
}

function WhyChooseCard({ item, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`group flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-400 hover:shadow-lg hover:border-[#d7193f]/20 hover:-translate-y-1 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d7193f]/10 to-[#d7193f]/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d7193f]/15">
        <Icon size={18} className="text-[#d7193f]" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1 text-base">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const [ref, visible] = useIntersectionObserver();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-4 p-4 rounded-xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent transition-all duration-300 hover:border-[#d7193f]/40 hover:from-[#d7193f]/10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="w-9 h-9 rounded-lg bg-[#d7193f]/10 border border-[#d7193f]/20 flex items-center justify-center shrink-0 group-hover:bg-[#d7193f]/20 transition-colors">
        <Icon size={15} className="text-[#d7193f]" />
      </div>
      <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">
        {service.name}
      </span>
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
        <h4 className="font-semibold text-gray-900 text-sm mb-1">
          {step.title}
        </h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [ref, visible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm transition-all duration-400 hover:shadow-xl hover:-translate-y-1 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#d7193f] text-[#d7193f]" />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d7193f]/20 to-[#d7193f]/10 flex items-center justify-center">
          <Users size={14} className="text-[#d7193f]" />
        </div>
        <div>
          <div className="font-semibold text-gray-800 text-xs">
            {testimonial.name}
          </div>
          <div className="text-gray-400 text-[10px]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [visionRef, visionVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [servicesRef, servicesVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [processRef, processVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="bg-white font-sans">
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-6 pb-16 md:pt-8 md:pb-5 overflow-hidden">
        {/* Background Image */}
        <img
          src={aboutUs}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        

        <div className="max-w-7xl  mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#d7193f]/5 backdrop-blur-sm border border-[#d7193f]/10 rounded-full px-4 py-1.5 mb-5">
              <CheckCircle2 size={12} className="text-[#d7193f]" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">
                ABOUT EZZYBIZ
              </span>
            </div>

            <h1 className="font-sans text-[clamp(32px,5vw,52px)] font-bold text-white leading-[1.2] mb-4">
              Trusted Business Setup
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">
                Consultant In Dubai, UAE
              </span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/75 mb-8">
              EzzyBiz is a leading corporate service provider in Dubai, helping
              entrepreneurs, startups, and international investors establish and
              grow their businesses across the UAE. We simplify company
              formation, licensing, visa processing, banking assistance, and
              corporate compliance with professional guidance and reliable
              support.
            </p>
          </div>
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-white transition-colors no-underline text-white/60"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-red-500 font-medium">About</span>
          </div>
        </div>
      </section>

      {/* ========== COMPANY INTRO + STATS ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div
            ref={introRef}
            className={`grid md:grid-cols-2 gap-10 md:gap-14 items-start transition-all duration-600 ${
              introVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <div className="inline-flex items-center gap-2">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] leading-[1.2] mb-4">
                Professional Corporate Services Provider In Dubai
              </h2>
              <div className="space-y-3 text-gray-600 text-[14px] leading-relaxed">
                <p>
                  EzzyBiz Corporate Services is a Dubai-based business
                  consultancy firm providing complete business setup and
                  corporate solutions across the UAE. Our team assists
                  entrepreneurs and global investors in establishing mainland,
                  free zone, and offshore companies with smooth and efficient
                  processes.
                </p>
                <p>
                  We understand the complexities involved in company formation,
                  government approvals, banking procedures, and compliance
                  requirements in the UAE market. Our consultants provide
                  personalized guidance to ensure every client receives the
                  right business structure and operational support based on
                  their goals.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl md:mt-3">
              <img
                src="/assets/images/creating-an-institution-fit-fo.webp"
                alt="EzzyBiz Corporate Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section className="py-16 bg-[#0a0a0a]">
        {/* dot grid */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
          <div
            ref={visionRef}
            className={`grid md:grid-cols-2 gap-8 relative z-10 transition-all duration-600 ${
              visionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#d7193f]/40 hover:from-[#d7193f]/12 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#d7193f]/10 border border-[#d7193f]/20 flex items-center justify-center mb-4">
                <Globe size={22} className="text-[#d7193f]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">Our Vision</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                To become a trusted corporate partner for entrepreneurs and
                international businesses by delivering seamless business setup
                and professional corporate solutions across the UAE.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#d7193f]/40 hover:from-[#d7193f]/12 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#d7193f]/10 border border-[#d7193f]/20 flex items-center justify-center mb-4">
                <Award size={22} className="text-[#d7193f]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">Our Mission</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Our mission is to simplify company formation and business
                operations in Dubai through expert consultation, transparent
                processes, and reliable end-to-end support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">
                WHY CHOOSE US
              </span>
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
            </div>
            <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-3">
              Why Businesses Trust EzzyBiz
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              We help entrepreneurs establish their businesses in Dubai with
              professional guidance, fast approvals, and customized corporate
              solutions designed for long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left — Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src='/assets/images/638502684896596537.webp'
                alt="Why Choose EzzyBiz"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right — Cards */}
            <div>
              <div className="grid gap-4">
                {WHY_CHOOSE.map((item, idx) => (
                  <WhyChooseCard key={idx} item={item} index={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="py-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#d7193f]/60" />
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">OUR SERVICES</span>
              <div className="w-8 h-[2px] bg-[#d7193f]/60" />
            </div>
            <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-white">
              What We Do For Your Business
            </h2>
          </div>

          <div
            ref={servicesRef}
            className={`grid md:grid-cols-2 gap-10 md:gap-14 items-center transition-all duration-600 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Left — Service Cards */}
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map((service, idx) => (
                <ServiceCard key={idx} service={service} index={idx} />
              ))}
            </div>

            {/* Right — Image */}
            <div className="relative rounded-2xl overflow-hidden md:h-[240px]">
              <img
                src={he}
                alt="EzzyBiz Business Setup Services Dubai"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== BUSINESS PROCESS ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8">
          <div
            ref={processRef}
            className={`transition-all duration-600 ${
              processVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">
                  OUR PROCESS
                </span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
                Simple Business Setup Process In UAE
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

      {/* ========== CLIENT TESTIMONIALS ========== */}
      <section className="py-16 bg-gradient-to-br from-[#fef8f9] to-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">
                CLIENT TESTIMONIALS
              </span>
              <div className="w-8 h-[2px] bg-[#d7193f]/40" />
            </div>
            <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                testimonial={testimonial}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
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
                Ready To Start Your Business In Dubai?
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for professional business setup, corporate
                services, and reliable company formation solutions across the
                UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.dispatchEvent(new Event("open-lead-modal"))}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-105 no-underline"
                >
                  Get Free Consultation{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 no-underline"
                >
                  <Phone size={14} /> Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
