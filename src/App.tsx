/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  ChevronDown, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Linkedin, 
  Cpu, 
  ChevronRight,
  Info,
  Layers,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  X
} from "lucide-react";
import { useState, useMemo } from "react";
import { FAQ_DATA, FAQItem } from "./constants";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(FAQ_DATA.map(item => item.category)))];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (Array.isArray(item.answer) ? item.answer.join(" ") : item.answer).toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#0a9343] selection:text-white">
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="NMT Logo" 
              className="w-10 h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div>
              <h1 className="font-bold text-xl tracking-tight text-[#333]">NUMIDIA MIND TECHNOLOGIES</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0a9343] font-semibold leading-none mt-1">Sovereign Intelligence</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="https://www.numidiatec.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#0a9343] transition-colors">Website</a>
            <a href="#contact" className="px-4 py-2 bg-[#0a9343] text-white rounded-full text-sm font-semibold hover:bg-[#087a37] transition-all shadow-md hover:shadow-lg active:scale-95">Contact Us</a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              ICT Africa Summit 2026 | Algiers, Algeria | April 21–23, 2026
              <br />
              <span className="italic font-medium text-[#0a9343]">"Unfold Artificial Intelligence, Empower Your Business."</span>
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="mt-12 space-y-6">
            <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#0a9343] transition-colors" />
              <input
                type="text"
                placeholder="Search topics, services, or questions..."
                className="w-full bg-white border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#0a9343] focus:ring-4 focus:ring-[#0a9343]/10 transition-all text-lg shadow-sm"
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.currentTarget.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-[#0a9343] text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                    expandedId === faq.id ? "ring-2 ring-[#0a9343]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full px-6 py-5 flex items-start gap-4 text-left group"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#0a9343] font-bold text-sm group-hover:bg-[#0a9343] group-hover:text-white transition-colors">
                      {faq.id}
                    </span>
                    <div className="flex-grow pt-2">
                      <p className="text-[10px] uppercase tracking-widest text-[#0a9343] font-bold mb-1 opacity-70">
                        {faq.category}
                      </p>
                      <h3 className="text-xl font-bold leading-tight pr-8">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`mt-2 p-1 rounded-full transition-transform duration-300 ${expandedId === faq.id ? "rotate-180 bg-[#0a9343] text-white" : "text-gray-400"}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20 pr-12 text-gray-600 leading-relaxed space-y-4 border-t border-gray-50 pt-4 bg-gray-50/50">
                          {Array.isArray(faq.answer) ? (
                            faq.answer.map((para, i) => (
                              <p key={i} className="flex gap-3">
                                {para.includes("- ") || para.includes("– ") ? (
                                  <>
                                    <ChevronRight className="w-4 h-4 mt-1 text-[#0a9343] flex-shrink-0" />
                                    <span>{para.replace(/^- |^– /, "")}</span>
                                  </>
                                ) : (
                                  para
                                )}
                              </p>
                            ))
                          ) : (
                            <p>{faq.answer}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500">No matching questions found</h3>
                <p className="text-gray-400 mt-2">Try adjusting your keywords or filters</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action Grid */}
        <section className="mt-24 grid md:grid-cols-2 gap-6">
          <div className="bg-[#0a9343] rounded-3xl p-8 text-white flex flex-col justify-between overflow-hidden relative shadow-xl">
            <Cpu className="absolute -right-12 -top-12 w-64 h-64 opacity-10 rotate-12" />
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 leading-tight">Visit us at the Summit</h3>
              
            </div>
            <div className="relative z-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-4">
              <MapPin className="w-10 h-10 text-white p-2 bg-white/20 rounded-xl" />
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-white/60">Location</p>
                <p className="font-bold">ICT Africa Summit | SAFEX, Algiers</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-3xl font-black mb-4 leading-tight">Partner with Us</h3>
              <p className="text-gray-500 text-lg mb-8">
                Ready to transform your organization with ethical, scalable, and sovereign AI?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:contact@numidiatec.com" className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-[#0a9343] hover:text-white transition-all group">
                <Mail className="w-5 h-5 text-[#0a9343] group-hover:text-white transition-colors" />
                <span className="font-bold text-sm">Email Us</span>
              </a>
              <a href="https://www.linkedin.com/company/numidia-mind-technologies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-[#0a9343] hover:text-white transition-all group">
                <Linkedin className="w-5 h-5 text-[#0a9343] group-hover:text-white transition-colors" />
                <span className="font-bold text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-20 mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.png" 
                  alt="NMT Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-2xl font-bold tracking-tight">NUMIDIA MIND TECHNOLOGIES</h2>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-8">
                Numidia Mind Technologies (NMT) operates at the intersection of artificial intelligence, 
                digital transformation, and organizational performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[#0a9343]" />
                  <span className="text-gray-400">Cité Garidi 01, Bureau N°15, Bâtiment N°F08, Kouba, Algiers</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#0a9343]" />
                  <span className="text-gray-400">contact@numidiatec.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#0a9343]" />
                  <span className="text-gray-400">+213 (0) 770 878 227</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="text-sm uppercase tracking-widest font-bold text-[#0a9343]">Quick Links</h4>
              <nav className="flex flex-col gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="https://www.numidiatec.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4" /> Official Website
                </a>
                <a href="https://www.linkedin.com/company/numidia-mind-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn Profile
                </a>
              </nav>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Numidia Mind Technologies. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
