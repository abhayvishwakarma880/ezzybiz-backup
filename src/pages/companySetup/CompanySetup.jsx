import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LuChevronRight as ChevronRight,
  LuArrowRight as ArrowRight,
  LuCheck as Check,
  LuCompass as Compass,
  LuPhone as Phone,
} from "react-icons/lu";

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

const JURISDICTIONS = [
  {
    title: "Dubai Mainland",
    href: "/dubaimainland",
    type: "Local Jurisdiction",
    description: "Establish your business in Dubai's mainland to operate locally and internationally without any geographic restrictions.",
    features: [
      "100% Foreign Ownership",
      "No Currency Restrictions",
      "Operate Anywhere in UAE",
      "Unlimited Visa Allocation"
    ],
    bgImage: "/assets/images/free-zone-vs.webp",
  },
  {
    title: "Dubai Free Zone",
    href: "/dubaifreezone",
    type: "Tax-Free Haven",
    description: "Benefit from tax exemptions, 100% foreign ownership, and zero customs duty inside Dubai's world-class free zones.",
    features: [
      "100% Corporate Tax Exemption",
      "100% Capital Repatriation",
      "Fast Track Visa & Setup",
      "First-Class Logistics"
    ],
    bgImage: "/assets/images/business-set-up-in-dafza.webp",
  },
  {
    title: "Sharjah Free Zone",
    href: "/sharjahfreezone",
    type: "Cost-Effective Trade",
    description: "Setup your business in Sharjah's dynamic and cost-effective free zones offering excellent industrial and trade hub benefits.",
    features: [
      "Highly Cost-Effective Setup",
      "Dual Licensing Options",
      "24/7 Licensing Procedures",
      "Quick Corporate Banking"
    ],
    bgImage: "/assets/images/photo-1578894381163-e72c17f2d4.webp",
  },
  {
    title: "Ajman Free Zone",
    href: "/ajmanfreezone",
    type: "Fast & Flexible",
    description: "A fast-growing free zone option providing extremely affordable packages, modern amenities, and smooth setup processes.",
    features: [
      "Zero Capital Requirement",
      "Flexible Installment Packages",
      "100% Foreign Ownership",
      "Excellent Startup Hub"
    ],
    bgImage: "/assets/images/ajman-media-city-free-zone-3.webp",
  },
  {
    title: "Ras Al Khaimah Free Zone",
    href: "/rakfreezone",
    type: "Industrial Hub",
    description: "Establish your company in RAK, one of the most cost-competitive investment zones for global trading and industries.",
    features: [
      "Highly Competitive Costs",
      "Zero Personal Tax Rates",
      "Customized Office Spaces",
      "Global Trade Access"
    ],
    bgImage: "/assets/images/photo-1541963463532-d68292c34b.webp",
  },
];

export default function CompanySetup() {
  const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="bg-[#f9fafb] font-sans">
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-6 pb-16 md:pt-8 md:pb-14 overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/images/photo-1512453979798-5ea266f888_3.webp"
          alt="Dubai business skyscrapers skyline"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={heroRef}
            className={`text-center max-w-3xl mx-auto transition-all duration-600 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#d7193f]/10 backdrop-blur-sm border border-[#d7193f]/20 rounded-full px-4 py-1.5 mb-5">
              <Compass size={12} className="text-[#d7193f] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[#d7193f]">
                JURISDICTIONS OVERVIEW
              </span>
            </div>

            <h1 className="font-sans text-[clamp(32px,5vw,52px)] font-bold text-white leading-[1.2] mb-4">
              Company Setup In UAE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">
                Choose Your Ideal Jurisdiction
              </span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/75 max-w-2xl mx-auto mb-6">
              Establish your business in the most strategic regions of the UAE. EzzyBiz simplifies company formation 
              across Dubai Mainland and premium Free Zones with comprehensive licensing, visa processing, 
              and banking assistance.
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
            <span className="text-[#d7193f] font-medium">Company Setup</span>
          </div>
        </div>
      </section>

      {/* ========== JURISDICTIONS SECTION ========== */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#f9fafb]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-3 justify-center">
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-[#d7193f]">OUR JURISDICTIONS</span>
                <div className="w-8 h-[2px] bg-[#d7193f]/40" />
              </div>
              <h2 className="font-sans text-[clamp(28px,3.5vw,38px)] font-bold text-[#0f0f1a] mb-4">
                Explore Business Setup Hubs
              </h2>
              <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Compare business setup locations in the UAE. Select the best jurisdiction that fits your ownership 
                requirements, tax planning, and target market.
              </p>
            </div>

            {/* 3 + 2 Centered Card Layout */}
            <div className="space-y-8">
              {/* Row 1: 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {JURISDICTIONS.slice(0, 3).map((jur, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#d7193f]/5 hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Card Image Block */}
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <img
                        src={jur.bgImage}
                        alt={jur.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#d7193f] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                        {jur.type}
                      </span> */}
                    </div>

                    {/* Card Content Body */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="font-sans text-xl font-bold text-gray-900 group-hover:text-[#d7193f] transition-colors duration-200">
                          {jur.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-2.5 mb-6">
                          {jur.description}
                        </p>

                        {/* Jurisdictions Key Advantages */}
                        {/* <div className="space-y-2.5 mb-8">
                          {jur.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-[#d7193f]/5 flex items-center justify-center shrink-0">
                                <Check size={10} className="text-[#d7193f] stroke-[3]" />
                              </div>
                              <span className="text-gray-600 text-xs md:text-[13px] font-medium leading-none">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div> */}
                      </div>

                      {/* Explore Jurisdiction Action Button */}
                      <Link
                        to={jur.href}
                        className="group/btn flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-sm no-underline"
                      >
                        Explore Setup
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 cards centered */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
  {/* <div className="hidden md:block" />  */}

  {JURISDICTIONS.slice(3).map((jur, idx) => (
    <div
      key={idx + 3}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#d7193f]/5 hover:-translate-y-1.5 overflow-hidden"
    >
      {/* Card Image Block */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={jur.bgImage}
          alt={jur.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#d7193f] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
          {jur.type}
        </span> */}
      </div>

      {/* Card Content */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="font-sans text-xl font-bold text-gray-900 group-hover:text-[#d7193f] transition-colors duration-200">
            {jur.title}
          </h3>

          <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-2.5 mb-6">
            {jur.description}
          </p>
        </div>

        <Link
          to={jur.href}
          className="group/btn flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 py-3 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:border-[#d7193f] hover:text-[#d7193f] hover:shadow-sm no-underline"
        >
          Explore Setup
          <ArrowRight
            size={13}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
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
                Start Your UAE Business Setup Journey Today
              </h2>
              <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">
                Partner with EzzyBiz for hassle-free company formation, professional licensing, and complete corporate solutions across the UAE.
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
