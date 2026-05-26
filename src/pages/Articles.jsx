import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LuChevronRight as ChevronRight } from "react-icons/lu";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── SVG Icons ──
const IconBusinessSetup = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);
const IconCompanyFormation = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);
const IconCompliance = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);
const IconInvestorVisa = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 9h4" />
    <path d="M14 12h4" />
    <path d="M14 15h2" />
  </svg>
);
const IconEntrepreneurship = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconBanking = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <path d="M2 12h20" />
  </svg>
);
const IconVAT = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconTrademark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8h8" />
    <path d="M12 8v8" />
  </svg>
);

const articles = [
  {
    id: 1,
    category: "Business Setup",
    gradient: "from-blue-500 to-cyan-500",
    title: "How to Start a Business in Dubai as a Foreign Investor",
    desc: "A step-by-step guide on company formation, licensing, and investor visas for foreign entrepreneurs in Dubai.",
    image:
      "/assets/images/photo-1512453979798-5ea266f888.webp",
    Icon: IconBusinessSetup,
  },
  {
    id: 2,
    category: "Company Formation",
    gradient: "from-purple-500 to-pink-500",
    title: "Mainland vs Free Zone Company Setup — Which is Right for You?",
    desc: "Compare mainland and free zone structures across ownership rights, setup costs, and operational flexibility.",
    image:
      "/assets/images/photo-1486325212027-8081e48525.webp",
    Icon: IconCompanyFormation,
  },
  {
    id: 3,
    category: "UAE Compliance",
    gradient: "from-emerald-500 to-teal-500",
    title: "Understanding VAT Registration Requirements in the UAE",
    desc: "Understand VAT thresholds, required documents, and how to keep your UAE business fully tax compliant.",
    image:
      "/assets/images/photo-1554224155-6726b3ff858f.webp",
    Icon: IconCompliance,
  },
  {
    id: 4,
    category: "Investor Visa",
    gradient: "from-orange-500 to-red-500",
    title: "Everything You Need to Know About UAE Investor Visas",
    desc: "Explore eligibility criteria, processing steps, and key documents needed to secure your UAE investor visa.",
    image:
      "/assets/images/photo-1436491865332-7a61a109cc.webp",
    Icon: IconInvestorVisa,
  },
  {
    id: 5,
    category: "Entrepreneurship",
    gradient: "from-indigo-500 to-purple-500",
    title: "Top Business Opportunities in Dubai for 2026",
    desc: "Discover the most profitable and fast-growing business sectors for entrepreneurs entering the UAE market in 2026.",
    image:
      "/assets/images/photo-1507679799987-c73779587c.webp",
    Icon: IconEntrepreneurship,
  },
  {
    id: 6,
    category: "Business Banking",
    gradient: "from-rose-500 to-red-500",
    title: "How to Open a Corporate Bank Account in Dubai",
    desc: "A practical guide to required documents, bank selection, and common challenges in opening a UAE corporate account.",
    image:
      "/assets/images/photo-1541354329998-f4d9a9f929.webp",
    Icon: IconBanking,
  },
  {
    id: 7,
    category: "UAE Compliance",
    gradient: "from-teal-500 to-green-500",
    title: "Corporate Tax in UAE: What Every Business Owner Must Know",
    desc: "A complete overview of UAE corporate tax rates, exemptions, and filing requirements for businesses in 2024.",
    image:
      "/assets/images/photo-1450101499163-c8848c66ca_1.webp",
    Icon: IconVAT,
  },
  {
    id: 8,
    category: "Business Setup",
    gradient: "from-sky-500 to-blue-500",
    title: "How to Choose the Right Business Activity for Your UAE License",
    desc: "Understanding business activity categories and how the right selection impacts your license, visa quota, and operations.",
    image:
      "/assets/images/photo-1497366216548-3752607029_1.webp",
    Icon: IconBusinessSetup,
  },
  {
    id: 9,
    category: "Company Formation",
    gradient: "from-violet-500 to-purple-500",
    title: "Top 5 Free Zones in Dubai for Business Setup in 2026",
    desc: "A comparison of the most popular UAE free zones based on cost, benefits, visa quotas, and business activities.",
    image:
      "/assets/images/photo-1486325212027-8081e48525.webp",
    Icon: IconCompanyFormation,
  },
  {
    id: 10,
    category: "Investor Visa",
    gradient: "from-amber-500 to-orange-500",
    title: "UAE Golden Visa: Eligibility, Benefits & How to Apply",
    desc: "Everything you need to know about the UAE Golden Visa — who qualifies, what benefits it offers, and the application process.",
    image:
      "/assets/images/photo-1436491865332-7a61a109cc.webp",
    Icon: IconInvestorVisa,
  },
  {
    id: 11,
    category: "Business Banking",
    gradient: "from-pink-500 to-rose-500",
    title: "Best Banks for Business Accounts in Dubai 2026",
    desc: "A detailed comparison of top UAE banks for corporate accounts, including fees, requirements, and digital banking features.",
    image:
      "/assets/images/photo-1541354329998-f4d9a9f929.webp",
    Icon: IconBanking,
  },
  {
    id: 12,
    category: "Business Setup",
    gradient: "from-cyan-500 to-teal-500",
    title: "PRO Services in Dubai: What They Are and Why You Need Them",
    desc: "Learn how PRO services simplify government paperwork, visa processing, and document attestation for businesses in the UAE.",
    image:
      "/assets/images/photo-1512453979798-5ea266f888.webp",
    Icon: IconBusinessSetup,
  },
  {
    id: 13,
    category: "Entrepreneurship",
    gradient: "from-lime-500 to-green-500",
    title: "How to Scale Your Business in Dubai After Initial Setup",
    desc: "Practical strategies for growing your UAE business — from hiring and expansion to new licenses and market entry.",
    image:
      "/assets/images/photo-1507679799987-c73779587c.webp",
    Icon: IconEntrepreneurship,
  },
  {
    id: 14,
    category: "UAE Compliance",
    gradient: "from-red-500 to-rose-500",
    title: "Ejari Registration in Dubai: A Complete Guide for Businesses",
    desc: "What is Ejari, why it is mandatory, and how to register your tenancy contract for business premises in Dubai.",
    image:
      "/assets/images/photo-1554224155-6726b3ff858f.webp",
    Icon: IconCompliance,
  },
  {
    id: 15,
    category: "Company Formation",
    gradient: "from-fuchsia-500 to-pink-500",
    title: "Offshore Company Formation in UAE: Benefits and Process",
    desc: "How offshore companies work in the UAE, their key advantages for international investors, and the registration process.",
    image:
      "/assets/images/photo-1486325212027-8081e48525.webp",
    Icon: IconCompanyFormation,
  },
  {
    id: 16,
    category: "Business Setup",
    gradient: "from-blue-600 to-indigo-500",
    title: "Trademark Registration in UAE: Protect Your Brand Identity",
    desc: "Step-by-step process for registering your trademark in the UAE, including costs, timelines, and legal protection benefits.",
    image:
      "/assets/images/photo-1497366216548-3752607029_1.webp",
    Icon: IconTrademark,
  },
];

function ArticleCard({ art, i, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={`/articles/${art.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer h-[320px] block no-underline"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`,
      }}
    >
      {/* Background Image */}
      <img
        src={art.image}
        alt={art.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Static gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Black overlay — bottom to top on hover */}
      <div
        className="absolute inset-x-0 bottom-0 bg-black/55 transition-all duration-500 ease-out"
        style={{ height: hovered ? "100%" : "0%" }}
      />

      {/* Icon — top left */}
      <div
        className={`absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-r ${art.gradient} flex items-center justify-center shadow-lg z-10 transition-transform duration-300 group-hover:scale-110`}
      >
        <art.Icon />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5">
        <span
          className={`inline-block text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${art.gradient} mb-1`}
        >
          {art.category}
        </span>
        <h3 className="text-white font-bold text-[15px] leading-snug">
          {art.title}
        </h3>
        <p
          className="text-white/70 text-[12.5px] leading-relaxed overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: hovered ? "80px" : "0px",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "8px" : "0px",
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {art.desc}
        </p>
      </div>
    </Link>
  );
}

export default function ArticlesPage() {
  const [gridRef, gridInView] = useInView();

  return (
    <section className="bg-white font-sans">
      {/* ── HERO ── */}
      <section className="relative pt-6 pb-16 md:pt-8 md:pb-14 overflow-hidden">
        <img
          src="/assets/images/photo-1512453979798-5ea266f888_2.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Breadcrumb */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 mb-6 -mt-5 relative z-10">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link
              to="/"
              className="hover:text-white transition-colors no-underline text-white/60"
            >
              Home
            </Link>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-[#d7193f] font-medium">Articles</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#d7193f]/10 backdrop-blur-sm border border-[#d7193f]/20 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d7193f] animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[1px] uppercase text-[#d7193f]">
                Business Insights
              </span>
            </div>

            <h1 className="font-sans text-[clamp(32px,5vw,52px)] font-bold text-white leading-[1.2] mb-4">
              Business Setup &amp; Corporate
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d7193f] to-[#e8718a]">
                Insights From Dubai Experts
              </span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-relaxed text-white/75 max-w-2xl mx-auto">
              Stay informed with expert guidance, business setup updates,
              licensing information, and practical insights for entrepreneurs
              planning to establish and grow in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="py-16 md:py-20 bg-[#f9fafb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,25,63,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,25,63,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div
          ref={gridRef}
          className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {articles.map((art, i) => (
              <ArticleCard key={art.id} art={art} i={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
