"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Users, Utensils, Dumbbell, CreditCard, Layers, LayoutTemplate, Menu, X, MessageSquare, Zap, BarChart2, TrendingUp, Star, BookOpen, ChevronDown, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { blogData } from "./lib/blog-data";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

const XSocialIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const faqData = [
  {
    q: "What payment methods are supported in Morocco?",
    a: "CoachFlow supports cash payment tracking, bank transfers, and CIH/Barid Bank online payments. You can log any payment method manually or automate reminders for online payments."
  },
  {
    q: "Does the nutrition engine include Moroccan foods?",
    a: "Yes! Our database includes 500+ local Moroccan foods — from harira and tagine to msemen, kefta, and rfissa — with accurate macro and calorie data so you can build culturally relevant meal plans."
  },
  {
    q: "Can my clients access their plans without downloading an app?",
    a: "Absolutely. Each client gets a personalized web portal accessible from any browser — no app download required. They can view their meal plans, workout programs, and progress history instantly."
  },
  {
    q: "Is the platform fully white-labeled?",
    a: "Yes. On the Pro and Elite plans, your clients will never see the CoachFlow brand. Your logo, your colors, your domain. It looks 100% like your own custom software."
  },
  {
    q: "How long does it take to set up?",
    a: "Most coaches are up and running within 24 hours. Our onboarding wizard guides you through adding clients, building your first nutrition plan, and setting up payment tracking step by step."
  },
  {
    q: "Can I manage multiple coaches or a team?",
    a: "Yes, the Elite plan supports team management — you can add sub-coaches, assign clients to them, and view consolidated revenue and performance data across your entire organization."
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-0 border border-slate-200">
      {faqData.map((item, i) => (
        <motion.div
          key={i}
          initial={false}
          className={`border-b border-slate-200 last:border-b-0 ${openIndex === i ? 'bg-white' : 'bg-transparent'} transition-colors`}
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-slate-900 text-sm md:text-base">{item.q}</span>
            <span className={`shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center transition-transform ${openIndex === i ? 'bg-blue-600 border-blue-600 rotate-45' : 'bg-white'}`}>
              <Plus className={`w-3 h-3 ${openIndex === i ? 'text-white' : 'text-slate-500'}`} />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Parallax setup
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityGrid = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter uppercase text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            COACHFLOW
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <Link href="/#chaos" className="hover:text-blue-600 transition-colors">The Problem</Link>
            <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4">

            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors rounded-none">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X key="close-icon" className="w-6 h-6" /> : <Menu key="menu-icon" className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - outside nav to escape backdrop-filter stacking context */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-blue-600 z-[10000] flex flex-col overflow-hidden"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between px-6 py-6">
              <div className="font-bold text-xl tracking-tighter uppercase text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-white" />
                COACHFLOW
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-white text-blue-600 p-2 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              <Link href="/#chaos" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-medium hover:text-blue-200 transition-colors">The Problem</Link>
              <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-medium hover:text-blue-200 transition-colors">Features</Link>
              <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-medium hover:text-blue-200 transition-colors">Pricing</Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-medium hover:text-blue-200 transition-colors">Blog</Link>
              <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-medium hover:text-blue-200 transition-colors">FAQ</Link>
            </div>

            {/* Bottom Section */}
            <div className="px-6 pb-8 pt-4">
              <div className="border-t border-white/20 pt-8 flex flex-col items-center gap-8 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <XSocialIcon className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <button className="w-full bg-white text-blue-600 font-semibold py-4 rounded-full text-lg hover:bg-blue-50 transition-colors relative z-10">
                  Get Started Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 md:pt-0 md:px-13 overflow-hidden bg-white">
        {/* Background Grid Pattern (Light) with Parallax */}
        <motion.div 
          style={{ y: y1, opacity: opacityGrid }} 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] origin-top pointer-events-none"
        ></motion.div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center min-h-[600px]">
            
            {/* Left side: Heading & CTA */}
            <div className="lg:col-span-4 order-1 pt-10 lg:pt-0">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8"
              >
                Start Managing<br />
                Your Coaching<br />
                <span className="text-slate-500 font-medium relative inline-block mt-2">
                  With Our System
                  <span className="absolute top-1/2 -left-12 w-8 h-[2px] bg-slate-300 hidden xl:block"></span>
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-4 bg-blue-50 rounded-full pl-6 md:pl-8 pr-2 py-2 hover:bg-blue-100 transition-colors group cursor-pointer border border-blue-100">
                  <span className="text-blue-600 font-semibold text-base md:text-lg whitespace-nowrap">Get Started Free</span>
                  <div className="bg-blue-600 text-white rounded-full p-2 md:p-3 group-hover:bg-blue-700 transition-colors">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center: Mockups */}
            <div className="lg:col-span-4 order-2 flex justify-center items-center relative h-[400px] md:h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center w-full h-full"
              >
                {/* Mac Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] max-w-lg aspect-[16/10] bg-slate-800 rounded-t-2xl rounded-b-md border-[6px] md:border-[8px] border-slate-800 shadow-2xl overflow-hidden z-10 -ml-2 md:-ml-8 mt-4 md:mt-8">
                  {/* Inner Screen */}
                  <div className="w-full h-full bg-slate-50 relative flex flex-col">
                    <div className="h-4 md:h-6 border-b border-slate-200 bg-white flex items-center px-3 gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                       <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                       <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="flex-1 p-2 md:p-4 grid grid-cols-4 gap-2 md:gap-4 bg-slate-50">
                       <div className="col-span-1 hidden md:flex flex-col gap-2">
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                          <div className="h-4 bg-white rounded shadow-sm border border-slate-100 w-full"></div>
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                       </div>
                       <div className="col-span-4 md:col-span-3 flex flex-col gap-2 md:gap-4">
                          <div className="flex gap-2">
                             <div className="h-10 md:h-16 bg-white rounded-lg shadow-sm border border-slate-100 flex-1"></div>
                             <div className="h-10 md:h-16 bg-blue-500 rounded-lg shadow-sm flex-1"></div>
                             <div className="h-10 md:h-16 bg-white rounded-lg shadow-sm border border-slate-100 flex-1"></div>
                          </div>
                          <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-100"></div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Phone Mockup Overlapping with Parallax */}
                <motion.div 
                  style={{ y: y2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-16 md:ml-28 mt-16 md:mt-24 w-32 md:w-48 aspect-[1/2.16] bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border-[4px] md:border-[6px] border-slate-900 shadow-2xl overflow-hidden z-20 transform -rotate-6"
                >
                  <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 rounded-b-xl w-1/2 mx-auto z-40"></div>
                  <div className="w-full h-full bg-slate-50 flex flex-col relative">
                     <div className="h-10 md:h-16 bg-blue-600 rounded-b-xl md:rounded-b-2xl"></div>
                     <div className="flex-1 p-2 flex flex-col gap-2 -mt-4 md:-mt-8">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                           <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-200"></div>
                           <div className="flex-1">
                              <div className="h-2 w-10 md:w-16 bg-slate-200 rounded mb-1"></div>
                              <div className="h-1 w-6 md:w-10 bg-slate-100 rounded"></div>
                           </div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-100 p-2">
                           <div className="h-2 w-12 md:w-16 bg-slate-200 rounded mb-2"></div>
                           <div className="space-y-2">
                             <div className="h-6 md:h-8 bg-slate-50 rounded-md border border-slate-100"></div>
                             <div className="h-6 md:h-8 bg-slate-50 rounded-md border border-slate-100"></div>
                             <div className="h-6 md:h-8 bg-slate-50 rounded-md border border-slate-100"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side: Description & Stats */}
            <div className="lg:col-span-4 order-3 flex flex-col justify-center h-full pt-10 lg:pt-0 lg:pl-10">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12 relative"
              >
                <div className="absolute -top-12 -left-4 text-blue-300 pointer-events-none hidden lg:block">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Simplify your coaching business. Our intuitive platform makes managing clients, nutrition, and training effortless.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-slate-200 z-${40-i*10} flex items-center justify-center text-xs font-medium text-slate-500 overflow-hidden shadow-sm`}>
                      <Users className="w-5 h-5 opacity-40" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">50K+</div>
                  <div className="text-sm text-slate-500 font-medium">Trusted by millions of users<br/>over 140 countries</div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 03. The Mess — Chaos vs Order */}
      <section id="chaos" className="py-24 px-6 border-b border-slate-200 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-500/30 text-xs font-semibold uppercase tracking-wider text-red-400 mb-6 bg-red-500/10">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">Your Business Deserves<br/>Better Than WhatsApp Chaos</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Managing 30+ clients through scattered chats, voice notes, and spreadsheets is not a system. It's a liability.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chaos Side */}
            <motion.div variants={fadeIn} className="relative border border-red-500/20 bg-red-950/20 p-8 rounded-sm">
              <div className="absolute -top-3 left-6 bg-red-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">❌ Before CoachFlow</div>
              <div className="space-y-3 mt-4">
                {[
                  { time: "09:14", msg: "Coach can you send my plan again?", from: "client" },
                  { time: "09:21", msg: "Achraf bro I lost my macros 😭", from: "client" },
                  { time: "09:35", msg: "Did you receive my payment?", from: "client" },
                  { time: "10:02", msg: "I can't find yesterday's workout", from: "client" },
                  { time: "10:17", msg: "Can I change my meal plan?", from: "client" },
                ].map((m, i) => (
                  <div key={i} className={`flex gap-3 ${m.from === 'client' ? 'justify-start' : 'justify-end'}`}>
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
                      <p className="text-slate-300 text-sm">{m.msg}</p>
                      <span className="text-slate-600 text-xs">{m.time}</span>
                    </div>
                  </div>
                ))}
                <div className="text-center py-2">
                  <span className="text-red-400 text-xs font-medium">+ 47 more unread messages...</span>
                </div>
              </div>
            </motion.div>

            {/* Order Side */}
            <motion.div variants={fadeIn} className="relative border border-blue-500/20 bg-blue-950/20 p-8 rounded-sm">
              <div className="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">✓ After CoachFlow</div>
              <div className="space-y-4 mt-4">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-sm p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold text-sm">Client Dashboard</span>
                    <span className="text-emerald-400 text-xs bg-emerald-400/10 px-2 py-0.5 rounded">● Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[{label:"Clients",val:"34"},{label:"Plans Active",val:"34"},{label:"Revenue",val:"12k MAD"}].map((s,i)=>(
                      <div key={i} className="bg-slate-900/80 p-3 rounded">
                        <div className="text-blue-400 font-bold text-lg">{s.val}</div>
                        <div className="text-slate-500 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/50 border border-slate-700/50 p-3 rounded-sm">
                    <Utensils className="w-4 h-4 text-blue-400 mb-2" />
                    <div className="text-white text-sm font-medium">Macro Plans</div>
                    <div className="text-slate-500 text-xs">Auto-assigned</div>
                  </div>
                  <div className="bg-slate-800/50 border border-slate-700/50 p-3 rounded-sm">
                    <CreditCard className="w-4 h-4 text-emerald-400 mb-2" />
                    <div className="text-white text-sm font-medium">Payments</div>
                    <div className="text-slate-500 text-xs">Auto-collected</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* White Label Section */}
      <section id="whitelabel" className="py-24 px-6 border-b border-slate-200 bg-slate-50 relative overflow-hidden">
        {/* Parallax Background Element */}
        <motion.div style={{ y: y1 }} className="absolute -left-20 bottom-20 w-80 h-80 bg-blue-50 border border-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></motion.div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-6 bg-blue-50">
                <Layers className="w-3 h-3" /> Exclusively Yours
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold tracking-tighter mb-6 text-slate-900">100% White-Labeled Experience</motion.h2>
              <motion.p variants={fadeIn} className="text-slate-500 text-lg mb-8 leading-relaxed">
                Your clients shouldn't see our brand. They should see yours. We provide you with a fully custom landing page and a dashboard that matches your brand identity.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {["Custom Domain Integration", "Your Logo & Color Palette", "Personalized Client Portal", "Branded Email Communications"].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button variants={fadeIn} className="border border-slate-200 bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-100 transition-colors rounded-none flex items-center justify-center gap-2 hover:-translate-y-1">
                <LayoutTemplate className="w-4 h-4 text-blue-600" /> Preview Themes
              </motion.button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square md:aspect-[4/3] w-full border border-slate-200 bg-white overflow-hidden flex items-center justify-center group"
            >
              {/* Subtle internal parallax on hover */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-[60%] border border-slate-200 bg-white flex flex-col mt-6 shadow-2xl relative"
              >
                <div className="absolute inset-x-0 -top-18 h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                </div>
                <div className="h-8 border-b border-slate-200 flex items-center px-3 justify-between bg-slate-50">
                   <div className="h-2 w-16 bg-slate-300"></div>
                   <div className="flex gap-2">
                     <div className="h-2 w-8 bg-blue-600"></div>
                     <div className="h-2 w-8 bg-slate-300"></div>
                   </div>
                </div>
                <div className="flex-1 p-4 flex gap-4">
                  <div className="w-1/4 space-y-3">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-2 w-full bg-slate-200"></div>)}
                  </div>
                  <div className="w-3/4 flex flex-col gap-4">
                    <div className="h-24 bg-blue-50 border border-blue-100"></div>
                    <div className="flex-1 flex gap-4">
                      <div className="w-1/2 bg-slate-50 border border-slate-200"></div>
                      <div className="w-1/2 bg-slate-50 border border-slate-200"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-24 px-6 border-b border-slate-200 bg-white relative overflow-hidden">
        {/* Parallax Background Element */}
        <motion.div style={{ y: y2 }} className="absolute -right-20 top-20 w-64 h-64 bg-slate-50 border border-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none"></motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-slate-900">The Ultimate Coaching Engine</h2>
            <p className="text-slate-500 max-w-xl">Everything you need to scale your fitness business, packaged in a beautifully designed platform.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Users className="w-6 h-6 text-blue-600" />, title: "Client Management", desc: "Track progress, check-ins, and communications in one dashboard." },
              { icon: <Utensils className="w-6 h-6 text-blue-600" />, title: "Nutrition Engine", desc: "Build precision macro plans and meal assignments tailored to each client." },
              { icon: <Dumbbell className="w-6 h-6 text-blue-600" />, title: "Training Protocols", desc: "Design and assign complex workout regimes with exercise libraries." },
              { icon: <CreditCard className="w-6 h-6 text-blue-600" />, title: "Automated Payments", desc: "Seamless subscriptions and invoicing handled completely automatically." },
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="border border-slate-200 bg-slate-50 p-8 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 rounded-none group"
              >
                <div className="mb-6 p-3 bg-white inline-block border border-slate-200 rounded-none">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 05. Core Engine — 3-column */}
      <section id="core" className="py-24 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-200 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-6 bg-blue-50">
              <Zap className="w-3 h-3" /> Core Engine
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-slate-900">Three Pillars.<br/>One Unified System.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Everything automated. Everything connected. Everything yours.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            {[
              {
                icon: <Utensils className="w-8 h-8 text-blue-600" />,
                num: "01",
                title: "Automated Nutrition",
                desc: "Build precise macro & calorie plans tailored to each client's goals, weight, and activity. Assign meals with one click. Includes a local Moroccan food database.",
                features: ["Macro & calorie calculator", "Meal plan builder", "Moroccan food database", "Auto client portal sync"]
              },
              {
                icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
                num: "02",
                title: "Workout Progress Tracking",
                desc: "Assign programs, track weekly check-ins, monitor PRs, and visualize client transformation data over time. Never lose track of a client's journey.",
                features: ["Custom program builder", "Weekly check-in system", "Progress photo uploads", "Performance analytics"]
              },
              {
                icon: <CreditCard className="w-8 h-8 text-blue-600" />,
                num: "03",
                title: "Payment Automation",
                desc: "Set subscription cycles, send automatic invoices, and get notified on renewals. Accept cash and online payments — all tracked in one ledger.",
                features: ["Subscription management", "Auto invoice generation", "Multi-payment support", "Revenue dashboard"]
              },
            ].map((pillar, i) => (
              <motion.div key={i} variants={fadeIn} className={`p-10 flex flex-col border-b md:border-b-0 ${i < 2 ? 'md:border-r' : ''} border-slate-200 hover:bg-slate-50 transition-colors group`}>
                <div className="text-slate-200 font-bold text-6xl leading-none mb-6 select-none group-hover:text-blue-100 transition-colors">{pillar.num}</div>
                <div className="mb-4 p-3 bg-blue-50 inline-block border border-blue-100">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 06. Social Proof */}
      <section id="social-proof" className="py-24 px-6 border-b border-slate-200 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-yellow-500/30 text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-6 bg-yellow-500/10">
              <Star className="w-3 h-3" /> Social Proof
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">Coaches Who Scaled With Us</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real results. Real coaches. Real revenue growth.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Coach Achraf",
                role: "Fitness & Nutrition Coach, Casablanca",
                quote: "Before CoachFlow, I was spending 3 hours a day just answering the same questions on WhatsApp. Now my clients have everything they need in their portal. I went from 20 to 60 clients in 4 months.",
                metrics: [{label:"Clients",val:"60+"},{label:"Revenue Growth",val:"+200%"},{label:"Hours Saved/Week",val:"15h"}]
              },
              {
                name: "Coach Nadia",
                role: "Body Recomposition Specialist, Rabat",
                quote: "The nutrition engine is a game-changer. I can build a full meal plan for a client in 5 minutes with local Moroccan foods. My clients love the personalization.",
                metrics: [{label:"Plans Created",val:"200+"},{label:"Client Retention",val:"94%"},{label:"Avg Rating",val:"4.9★"}]
              },
              {
                name: "Coach Youssef",
                role: "Strength & Performance Coach, Marrakech",
                quote: "The payment automation alone paid for the subscription 10x over. No more chasing clients for payments. Professional invoices sent automatically every month.",
                metrics: [{label:"Late Payments",val:"0"},{label:"Monthly Revenue",val:"18k MAD"},{label:"Time on Admin",val:"-80%"}]
              },
            ].map((coach, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white/5 border border-white/10 p-8 flex flex-col hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-1 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-8 flex-1 italic">&ldquo;{coach.quote}&rdquo;</blockquote>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-semibold text-white mb-1">{coach.name}</div>
                  <div className="text-slate-500 text-xs mb-4">{coach.role}</div>
                  <div className="grid grid-cols-3 gap-3">
                    {coach.metrics.map((m, j) => (
                      <div key={j} className="text-center">
                        <div className="text-blue-400 font-bold text-base">{m.val}</div>
                        <div className="text-slate-600 text-xs leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07. Blog / Insights */}
      <section id="blog" className="py-24 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
                <BookOpen className="w-3 h-3" /> Knowledge
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-slate-900">Insights for<br/>Serious Coaches</h2>
            </div>
            <Link href="/blog" className="text-blue-600 text-sm font-semibold hover:underline whitespace-nowrap">View all articles →</Link>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            {blogData.slice(0, 3).map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i} className={`p-8 flex flex-col border-b md:border-b-0 ${i < 2 ? 'md:border-r' : ''} border-slate-200 hover:bg-slate-50 transition-colors group block`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 inline-block mb-6 w-fit">{post.tag}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{post.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-slate-900">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Choose the tier that fits your coaching business. No hidden fees.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200"
          >
            {/* Basic */}
            <motion.div variants={fadeIn} className="p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-white flex flex-col hover:bg-slate-50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Basic</h3>
              <div className="text-slate-500 text-sm mb-6 h-10">Essential tools for starting coaches.</div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">$49</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Up to 15 Clients", "Basic Program Builder", "Payment Processing", "Email Support"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border border-slate-200 bg-slate-50 text-slate-900 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors rounded-none hover:-translate-y-0.5">
                Start Basic
              </button>
            </motion.div>
            
            {/* Pro */}
            <motion.div variants={fadeIn} className="p-8 border-b md:border-b-0 md:border-r border-slate-200 bg-blue-50 relative flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 z-10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">Pro</h3>
              <div className="text-blue-700/80 text-sm mb-6 h-10">Advanced features for scaling businesses.</div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-blue-900">$99</span>
                <span className="text-blue-700/80">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Up to 50 Clients", "White-Label Dashboard", "Nutrition Engine", "Automated Workflows", "Priority Support"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-blue-900 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 text-sm font-semibold hover:bg-blue-700 transition-colors rounded-none shadow-md shadow-blue-600/20 hover:-translate-y-0.5">
                Start Pro
              </button>
            </motion.div>
            
            {/* Elite */}
            <motion.div variants={fadeIn} className="p-8 bg-white flex flex-col hover:bg-slate-50 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-slate-900">Elite</h3>
              <div className="text-slate-500 text-sm mb-6 h-10">Unlimited capacity for coaching teams.</div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">$199</span>
                <span className="text-slate-500">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {["Unlimited Clients", "Custom Domain", "API Access", "Team Management", "Dedicated Success Manager"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border border-slate-200 bg-slate-50 text-slate-900 py-3 text-sm font-semibold hover:bg-slate-100 transition-colors rounded-none hover:-translate-y-0.5">
                Start Elite
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 09. FAQ */}
      <section id="faq" className="py-24 px-6 border-b border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500">Addressing what matters most to coaches in Morocco and beyond.</p>
          </motion.div>
          <FAQAccordion />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-32 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 text-xs font-semibold uppercase tracking-wider text-white/80 mb-8 bg-white/10">
            <Zap className="w-3 h-3" /> Ready to Scale?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">Ready to Go Digital?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">Join 500+ coaches who replaced chaos with a system. Start your free 14-day trial — no credit card required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 font-bold text-lg hover:bg-blue-50 transition-colors">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 font-medium text-lg hover:bg-white/10 transition-colors">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
          <p className="text-blue-200/70 text-sm mt-8">14-day free trial · No credit card · Cancel anytime</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold tracking-tighter uppercase text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            COACHFLOW
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CoachFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
