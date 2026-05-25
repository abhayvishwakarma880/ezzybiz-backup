import { useState, useEffect, useRef } from "react";
import {
  LuPhone as Phone,
  LuSend as Send,
  LuUser as User,
  LuAtSign as AtSign,
  LuChevronDown as ChevronDown,
} from "react-icons/lu";
import { FiCheckCircle as CheckCircle2 } from "react-icons/fi";

const WEB3FORMS_ACCESS_KEY = "6321f359-02b0-4e8d-be16-c120b165a4bc";

const SERVICE_OPTIONS = [
  "Dubai Mainland Company Setup",
  "Dubai Free Zone Company Setup",
  "Sharjah Free Zone Company Setup",
  "Ajman Free Zone Company Setup",
  "Ras Al Khaimah Free Zone Company Setup",
  "Apply for Visa",
  "All Visa",
  "UAE Residence Visa Services",
  "Apply For Golden Visa",
  "UAE Golden Visa Services",
  "Ejari Registration Services",
  "VAT & Tax Services",
  "Corporate Banking Services",
];

export default function LeadForm({ initialService = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync initialService prop to state dynamically (e.g. from CTA button click details)
  useEffect(() => {
    setFormData(prev => ({ ...prev, service: initialService }));
  }, [initialService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setSubmitSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert(result.message || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      alert("Something went wrong while sending the form. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm max-w-xl mx-auto">
      {/* Form Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-950 tracking-tight">
          Start Your Business in Dubai
        </h3>
        <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
          Get a <span className="text-[#d7193f] font-semibold">Free Expert Consultation</span> today. Fill out the form below and our team will get in touch with you shortly.
        </p>
      </div>

      {submitSuccess && (
        <div className="mb-5 bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">
              Thank you! Our team will contact you shortly.
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name & Phone Number Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors text-sm"
                placeholder="John Smith"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <div className="relative">
              <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors text-sm"
                placeholder="+971 XX XXX XXXX"
              />
            </div>
          </div>
        </div>

        {/* Email Address & Select Service Dropdown Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <div className="relative">
              <AtSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors text-sm"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors bg-white appearance-none cursor-pointer text-gray-700 text-sm"
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Business Requirements Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tell Us About Your Business Requirements
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d7193f] focus:ring-1 focus:ring-[#d7193f] transition-colors resize-none text-sm"
            placeholder="Please describe your business requirements and goals..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d7193f] to-[#b81236] text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d7193f]/30 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>Submit Inquiry <Send size={14} /></>
          )}
        </button>
      </form>
    </div>
  );
}
