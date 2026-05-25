import {
  FiBriefcase as BriefcaseBusiness,
  FiGlobe as Globe,
  FiFileText as FileCheck,
  FiShield as ShieldCheck,
  FiDollarSign as BadgeDollarSign,
  FiFile as ReceiptText,
} from "react-icons/fi";
import {
  MdBusiness as Building2,
  MdAccountBalance as Landmark,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: Building2,
    title: "Mainland Company Formation",
    description: "Trade licenses, approvals, and government registration for your Dubai mainland business.",
    url: "/dubaimainland"
  },
  {
    icon: BriefcaseBusiness,
    title: "Free Zone Company Setup",
    description: "100% foreign ownership, tax-efficient solutions, and streamlined free zone registration.",
    url: ""
  },
  {
    icon: Globe,
    title: "Offshore Company Formation",
    description: "Secure offshore structures for international operations, asset protection, and global expansion.",
    url: ""
  },
  {
    icon: FileCheck,
    title: "Business License Services",
    description: "Expert help for obtaining, renewing, and modifying UAE business licenses across all jurisdictions.",
    url: ""
  },
  {
    icon: ShieldCheck,
    title: "RAK Free Zone",
    description: "Document clearing, Emirates ID, labor cards, and immigration processing handled professionally.",
    url: "/rakfreezone"
  },
  {
    icon: Landmark,
    title: "Visa Services",
    description: "Complete visa processing for investors, employees, and family sponsorship in the UAE.",
    url: "/allvisa"
  },
  {
    icon: BadgeDollarSign,
    title: "VAT Registration & Corporate Tax",
    description: "VAT registration, tax filing, corporate tax advisory, and financial reporting services.",
    url: "/vat"
  },
  {
    icon: ReceiptText,
    title: "Ejari Services",
    description: "Protect your brand with complete UAE trademark registration and IP documentation support.",
    url: "/ejari"
  },
];

function ServiceCard({ icon: Icon, title, description, index, url }) {
  return (
    <Link to={url}
      className="group relative bg-white rounded-[18px] p-6 border border-[#ebebeb] transition-all duration-300 ease-out hover:-translate-y-[6px] hover:border-transparent hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Black circle overlay expanding from bottom */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#0a0a0a]/90 rounded-full scale-0 group-hover:scale-[15] transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] z-0" />

      {/* Bottom accent line - ALWAYS visible, matches the business setup accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#b81236] to-[#d7193f] transition-all duration-300 group-hover:h-[8px] z-10" />

      {/* Content wrapper to sit above the black overlay */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-[48px] h-[48px] rounded-xl bg-[#fff5f6] flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#d7193f] group-hover:shadow-[0_8px_24px_rgba(215,25,63,0.4)]">
          <Icon
            size={22}
            className="text-[#d7193f] transition-colors duration-500 group-hover:text-white"
            strokeWidth={1.6}
          />
        </div>

        {/* Title */}
        <h3 className="text-[#0f0f1a] font-bold text-[16px] leading-[1.3] mb-2.5 transition-colors duration-500 group-hover:text-white font-serif">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6b7280] text-[13px] leading-[1.7] mb-4 font-sans transition-colors duration-500 group-hover:text-white/70">
          {description}
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/971523177073"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[12px] font-semibold transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] hover:shadow-[0_4px_16px_rgba(37,211,102,0.35)]"
        >
          <FaWhatsapp size={14} />
          WhatsApp Us
        </a>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <>
      <section
        className="py-[15px] relative overflow-hidden font-sans"
        style={{
          background: "linear-gradient(to bottom, #fdfdfd, #f4f4f7)",
        }}
      >
        {/* Cinematic Deep Crimson Glow / Sun Source Effect radiating from Top-Center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#b81236]/20 via-[#d7193f]/8 to-transparent rounded-full blur-[110px] pointer-events-none -translate-y-1/2 z-0"
        />

        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d7193f 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Decorative red blob */}
        <div
          className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #d7193f, transparent 70%)",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
          {/* ── SECTION HEADER ── */}
          <div className="text-center mb-[72px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#d7193f]" />
              <span className="text-[#d7193f] text-[12px] font-bold tracking-[3.5px] uppercase">
                Our Services
              </span>
              <span className="h-px w-8 bg-[#d7193f]" />
            </div>

            {/* Heading */}
            <h2
              className="text-[#0f0f1a] font-bold leading-[1.15] mb-6 mx-auto font-serif"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                maxWidth: "680px",
              }}
            >
              Business Setup &amp; Corporate
              <span className="italic text-[#d7193f]"> Services </span>
              In Dubai
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-[2px] w-12 bg-[#d7193f] rounded-full" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#d7193f]" />
              <span className="h-[2px] w-12 bg-[#d7193f] rounded-full" />
            </div>

            {/* Description */}
            <p
              className="text-[#6b7280] text-[16px] leading-[1.9] mx-auto"
              style={{ maxWidth: "720px" }}
            >
              EzzyBiz provides complete business setup and corporate solutions
              in Dubai and across the UAE. From company formation and trade
              licenses to VAT registration and PRO services, we help
              entrepreneurs, startups, and international investors establish and
              grow their businesses with confidence.
            </p>
          </div>

          {/* ── SERVICES GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {SERVICES.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
