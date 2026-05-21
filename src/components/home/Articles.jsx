import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// SVG icon components
const IconBusinessSetup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const IconCompanyFormation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);

const IconCompliance = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

const IconInvestorVisa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 9h4" />
    <path d="M14 12h4" />
    <path d="M14 15h2" />
  </svg>
);

const IconEntrepreneurship = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconBanking = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <path d="M2 12h20" />
  </svg>
);

const articles = [
  {
    id: 1,
    category: 'Business Setup',
    gradient: 'from-blue-500 to-cyan-500',
    title: 'How to Start a Business in Dubai as a Foreign Investor',
    desc: 'A step-by-step guide on company formation, licensing, and investor visas for foreign entrepreneurs in Dubai.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    Icon: IconBusinessSetup,
  },
  {
    id: 2,
    category: 'Company Formation',
    gradient: 'from-purple-500 to-pink-500',
    title: 'Mainland vs Free Zone Company Setup — Which is Right for You?',
    desc: 'Compare mainland and free zone structures across ownership rights, setup costs, and operational flexibility.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    Icon: IconCompanyFormation,
  },
  {
    id: 3,
    category: 'UAE Compliance',
    gradient: 'from-emerald-500 to-teal-500',
    title: 'Understanding VAT Registration Requirements in the UAE',
    desc: 'Understand VAT thresholds, required documents, and how to keep your UAE business fully tax compliant.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    Icon: IconCompliance,
  },
  {
    id: 4,
    category: 'Investor Visa',
    gradient: 'from-orange-500 to-red-500',
    title: 'Everything You Need to Know About UAE Investor Visas',
    desc: 'Explore eligibility criteria, processing steps, and key documents needed to secure your UAE investor visa.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    Icon: IconInvestorVisa,
  },
  {
    id: 5,
    category: 'Entrepreneurship',
    gradient: 'from-indigo-500 to-purple-500',
    title: 'Top Business Opportunities in Dubai for 2026',
    desc: 'Discover the most profitable and fast-growing business sectors for entrepreneurs entering the UAE market in 2026.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    Icon: IconEntrepreneurship,
  },
  {
    id: 6,
    category: 'Business Banking',
    gradient: 'from-rose-500 to-red-500',
    title: 'How to Open a Corporate Bank Account in Dubai',
    desc: 'A practical guide to required documents, bank selection, and common challenges in opening a UAE corporate account.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80',
    Icon: IconBanking,
  },
];

export default function Articles() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate()

  return (
    <section ref={ref} className="py-20 bg-[#f9fafb] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Soft blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-3">
            Business Setup &amp; Corporate Insights
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]"> from Dubai Experts</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Stay informed with expert guidance, business setup updates, licensing information, and practical insights for entrepreneurs planning to establish and grow in the UAE.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {articles.map((art, i) => (
            <div
              key={art.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[320px]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              {/* Background Image */}
              <img
                src={art.image}
                alt={art.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Static dark gradient — always visible at bottom for title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Black overlay — animates from bottom to top on hover */}
              <div
                className="absolute inset-x-0 bottom-0 bg-black/55 transition-all duration-500 ease-out"
                style={{ height: hovered === i ? '100%' : '0%' }}
              />

              {/* Icon — top left, always visible */}
              <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-r ${art.gradient} flex items-center justify-center shadow-lg z-10 transition-transform duration-300 group-hover:scale-110`}>
                <art.Icon />
              </div>

              {/* Content — bottom, slides up on hover */}
              <div
                className="absolute inset-x-0 bottom-0 z-10 p-5 transition-all duration-500 ease-out"
                style={{
                  transform: hovered === i ? 'translateY(0)' : 'translateY(0)',
                }}
              >
                {/* Category — always visible above title */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${art.gradient} mb-1`}>
                  {art.category}
                </span>

                {/* Title — always visible */}
                <h3 className="text-white font-bold text-[15px] leading-snug">
                  {art.title}
                </h3>

                {/* Desc — only on hover, slides up */}
                <p
                  className="text-white/70 text-[12.5px] leading-relaxed overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    maxHeight: hovered === i ? '80px' : '0px',
                    opacity: hovered === i ? 1 : 0,
                    marginTop: hovered === i ? '8px' : '0px',
                    transform: hovered === i ? 'translateY(0)' : 'translateY(10px)',
                  }}
                >
                  {art.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {/* Red accent top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#d7193f] to-[#e8718a]" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div className="max-w-lg text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f0f1a] mb-2">
                Need Expert Guidance for Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">
                  Dubai Business Setup?
                </span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Speak with our experienced consultants for professional assistance with company formation, licensing, visas, and corporate services in the UAE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button onClick={()=>navigate('/contact')} className="bg-gradient-to-r from-[#d7193f] to-[#e8718a] text-white text-sm font-semibold px-7 py-3 rounded-xl shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap">
                Book a Consultation
              </button>
              <button className="bg-white border border-gray-200 text-[#0f0f1a] text-sm font-semibold px-7 py-3 rounded-xl hover:border-[rgba(215,25,63,0.4)] hover:shadow-md transition-all duration-200 whitespace-nowrap">
                View All Articles
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}