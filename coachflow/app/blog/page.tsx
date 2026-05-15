"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, ArrowLeft } from "lucide-react";
import { blogData } from "../lib/blog-data";

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

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-600 selection:text-white bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tighter uppercase text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            COACHFLOW
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <Link href="/#features" className="hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/#pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Process</Link>
            <Link href="/#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors rounded-none">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 mb-6">
              The CoachFlow Blog
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Insights, strategies, and resources to help you scale your coaching business and deliver a premium experience to your clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, i) => (
              <Link href={`/blog/${post.slug}`} key={i}>
                <motion.div variants={fadeIn} className="h-full bg-white border border-slate-200 p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 inline-block mb-6 w-fit">{post.tag}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed flex-1 mb-8">{post.desc}</p>
                  <div className="flex items-center justify-between text-sm text-slate-400 border-t border-slate-100 pt-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
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
