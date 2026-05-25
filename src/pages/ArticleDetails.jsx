import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  LuChevronRight as ChevronRight,
  LuClock as Clock,
  LuCalendar as Calendar,
  LuUser as User,
  LuPhone as Phone,
  LuMail as Mail,
  LuArrowRight as ArrowRight,
  LuChevronDown as ChevronDown,
  LuChevronUp as ChevronUp,
  LuMessageCircle as MessageCircle,
} from "react-icons/lu";
import { articleDetails } from "../data/articleDetailsData";

// Define the matching SVG Icons locally for standalone functionality and clean rendering
const IconBusinessSetup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);
const IconCompanyFormation = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);
const IconCompliance = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);
const IconInvestorVisa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 9h4" />
    <path d="M14 12h4" />
    <path d="M14 15h2" />
  </svg>
);
const IconEntrepreneurship = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconBanking = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="2" y="8" width="20" height="12" rx="2" />
    <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
    <path d="M2 12h20" />
  </svg>
);
const IconVAT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconTrademark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8h8" />
    <path d="M12 8v8" />
  </svg>
);

const iconMap = {
  "Business Setup": IconBusinessSetup,
  "Company Formation": IconCompanyFormation,
  "UAE Compliance": IconCompliance,
  "Investor Visa": IconInvestorVisa,
  "Entrepreneurship": IconEntrepreneurship,
  "Business Banking": IconBanking,
  "Trademark": IconTrademark,
};

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const articleId = parseInt(id, 10);
  const article = articleDetails[articleId];

  // Handle case where article is not found
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center font-sans">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The article you are looking for does not exist or may have been relocated.
        </p>
        <Link
          to="/articles"
          className="bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-sm no-underline"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  // Find related articles (same category or neighboring IDs, excluding current)
  const relatedArticles = Object.values(articleDetails)
    .filter((a) => a.id !== articleId)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === article.category && b.category !== article.category) return -1;
      if (a.category !== article.category && b.category === article.category) return 1;
      return Math.random() - 0.5; // Randomize remainder
    })
    .slice(0, 3);

  // Select matching category icon
  const CategoryIcon = iconMap[article.category] || IconBusinessSetup;

  return (
    <article className="bg-[#f9fafb] font-sans text-[#1a1a2e] min-h-screen">
      {/* ── BREADCRUMBS & HERO SECTION ── */}
      <section className="relative pt-6 pb-20 md:pt-8 md:pb-24 overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-center filter brightness-[0.25]"
          />
          {/* Accent light source */}
          <div className={`absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr ${article.gradient} rounded-full blur-3xl opacity-20`} />
        </div>

        {/* Hero content container */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          {/* Title block */}
          <div className="max-w-4xl">
            {/* Category tag */}
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/20 backdrop-blur-md mb-6`}
            >
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${article.gradient}`} />
              {article.category}
            </span>

            <h1 className="text-[clamp(28px,4.5vw,46px)] font-bold text-white leading-tight md:leading-[1.15] mb-6">
              {article.title}
            </h1>

            {/* Author and metadata */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-white/80 text-xs border-t border-white/10 pt-6">
              {/* <div className="flex items-center gap-2">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="font-semibold text-white leading-none">{article.author.name}</p>
                  <p className="text-[10px] text-white/60 mt-0.5">{article.author.role}</p>
                </div>
              </div> */}
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-white/40" />
                <span>{article.publishDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-white/40" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BREADCRUMBS ========== */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
          <nav className="text-sm text-white/60 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors no-underline text-white/60">
              Home
            </Link>
            <ChevronRight size={13} className="text-white/40" />
            <Link to="/articles" className="hover:text-white transition-colors no-underline text-white/60">
              Articles
            </Link>
            <ChevronRight size={13} className="text-white/40" />
            <span className="text-[#e8718a] font-medium max-w-[200px] sm:max-w-xs md:max-w-md truncate">
              {article.title}
            </span>
          </nav>
        </div>
      </section>

      {/* ── MAIN CONTENT LAYOUT ── */}
      <section className="py-12 md:py-16 max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          {/* LEFT COLUMN: Main body content (70%) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
            {/* Introduction paragraph */}
            <p className="text-[16px] md:text-[18px] leading-relaxed text-gray-700 font-medium mb-8 border-l-4 border-[#d7193f] pl-4 italic bg-gray-50/50 py-3 rounded-r-xl">
              {article.intro}
            </p>

            {/* In-depth content sections */}
            <div className="space-y-8 text-gray-600 text-sm md:text-base leading-relaxed">
              {article.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-gray-600">
                      {p}
                    </p>
                  ))}

                  {/* Render optional section table */}
                  {section.table && (
                    <div className="overflow-x-auto my-6 border border-gray-100 rounded-xl shadow-sm">
                      <table className="w-full text-left text-xs md:text-sm">
                        <thead className="bg-gray-50 border-b border-gray-100 text-gray-800 font-semibold">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 font-semibold text-gray-900">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-gray-50/30 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 font-medium text-gray-600">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── COLLAPSIBLE FAQ ACCORDION ── */}
            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 pt-10 border-t border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded bg-[#d7193f]" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {article.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                          isOpen ? "border-[#d7193f]/25 bg-red-50/5" : "border-gray-100 bg-white"
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 hover:text-[#d7193f] transition-colors focus:outline-none"
                        >
                          <span className="text-sm md:text-[15px]">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp size={16} className="text-[#d7193f] shrink-0 ml-4" />
                          ) : (
                            <ChevronDown size={16} className="text-gray-400 shrink-0 ml-4" />
                          )}
                        </button>
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            isOpen ? "max-h-[250px] opacity-100 border-t border-gray-50 p-4 bg-gray-50/30" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar CTAs and Trending (30%) */}
          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
            {/* Consultation Form/Card */}
            <div className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
              {/* Decorative glows */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d7193f]/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />

              <div className="relative z-10 text-center lg:text-left">
                <span className="inline-block text-[10px] font-bold tracking-[1px] uppercase text-[#d7193f] bg-[#d7193f]/10 px-3 py-1 rounded-full mb-4">
                  Free Consultation
                </span>
                <h4 className="text-lg font-bold mb-3 font-sans leading-tight">
                  Need Professional Business Setup Advice?
                </h4>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Talk to Abhay and our expert team at EzzyBiz for absolute clarity on license setup, visas, and VAT compliances in Dubai.
                </p>

                {/* Instant Action CTA */}
                <div className="space-y-3">
                  <a
                    href="mailto:info@ezzy.biz"
                    className="flex items-center justify-center gap-2 bg-[#d7193f] hover:bg-[#b81236] text-white px-4 py-3 rounded-xl text-xs font-semibold transition-all hover:scale-[1.02] no-underline hover:shadow-lg hover:shadow-[#d7193f]/20"
                  >
                    <Mail size={14} />
                    <span>Email Us Directly</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 hover:border-white/40 text-white px-4 py-3 rounded-xl text-xs font-semibold transition-all no-underline"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Trending / Same Category Articles */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <span className="w-1 h-4 rounded bg-[#d7193f]" />
                Other Dynamic Insights
              </h4>
              <div className="space-y-4">
                {Object.values(articleDetails)
                  .filter((a) => a.id !== articleId)
                  .slice(0, 4)
                  .map((art) => (
                    <Link
                      key={art.id}
                      to={`/articles/${art.id}`}
                      className="group flex gap-3 no-underline block hover:bg-gray-50/50 p-1 rounded-xl transition-all"
                    >
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-12 h-12 rounded-lg object-cover shrink-0"
                      />
                      <div className="overflow-hidden">
                        <span className="text-[9px] font-bold text-[#d7193f] uppercase block tracking-wider leading-none mb-1">
                          {art.category}
                        </span>
                        <h5 className="text-[12px] font-semibold text-gray-800 group-hover:text-[#d7193f] transition-colors leading-tight line-clamp-2">
                          {art.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── RELATED ARTICLES BOTTOM GRID ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[10px] font-bold text-[#d7193f] uppercase tracking-[1.5px] block mb-1">
                More For You
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-sans">
                Related Articles &amp; Advice
              </h3>
            </div>
            <Link
              to="/articles"
              className="text-[#d7193f] font-semibold text-xs md:text-sm hover:underline flex items-center gap-1 group no-underline"
            >
              View All Articles{" "}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <Link
                key={art.id}
                to={`/articles/${art.id}`}
                className="group flex flex-col bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all no-underline h-full"
              >
                <div className="relative h-44 overflow-hidden shrink-0">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-r ${art.gradient} flex items-center justify-center text-white shadow-md`}>
                    <CategoryIcon />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[9px] font-bold text-[#d7193f] uppercase tracking-wider block mb-1.5">
                    {art.category}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#d7193f] transition-colors leading-snug mb-2 line-clamp-2">
                    {art.title}
                  </h4>
                  <p className="text-[11.5px] text-gray-500 leading-relaxed mb-4 line-clamp-3">
                    {art.desc}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span>{art.publishDate}</span>
                    <span className="text-[#d7193f] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                      Read Article <ArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
