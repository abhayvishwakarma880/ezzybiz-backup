import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetails = lazy(() => import("./pages/ArticleDetails"));
const Banking = lazy(() => import("./pages/Banking"));
const AjmanFZ = lazy(() => import("./pages/companySetup/AjmanFZ"));
const DubaiFZ = lazy(() => import("./pages/companySetup/DubaiFZ"));
const DubaiMainland = lazy(() => import("./pages/companySetup/DubaiMainland"));
const RAKFZ = lazy(() => import("./pages/companySetup/RAKfz"));
const SharjahFZ = lazy(() => import("./pages/companySetup/SharjahFZ"));
const CompanySetup = lazy(() => import("./pages/companySetup/CompanySetup"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const VAT = lazy(() => import("./pages/VAT"));
const AllVisa = lazy(() => import("./pages/visa/AllVisa"));
const Ejari = lazy(() => import("./pages/visa/Ejari"));
const GoldenVisa = lazy(() => import("./pages/visa/GoldenVisa"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const appRoute = [
  { path: "/", element: Home },
  { path: "/articles", element: Articles },
  { path: "/articles/:id", element: ArticleDetails },
  { path: "/about", element: About },
  { path: "/dubaimainland", element: DubaiMainland },
  { path: "/sharjahfreezone", element: SharjahFZ },
  { path: "/dubaifreezone", element: DubaiFZ },
  { path: "/ajmanfreezone", element: AjmanFZ },
  { path: "/rakfreezone", element: RAKFZ },
  { path: "/companysetup", element: CompanySetup },
  { path: "/allvisa", element: AllVisa },
  { path: "/goldenvisa", element: GoldenVisa },
  { path: "/ejari", element: Ejari },
  { path: "/vat", element: VAT },
  { path: "/banking", element: Banking },
  { path: "/contact", element: Contact },
  { path: "/privacy-policy", element: PrivacyPolicy },
  { path: "/terms-conditions", element: TermsConditions },
  { path: "/cookie-policy", element: CookiePolicy },
];

export default appRoute;