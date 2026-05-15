import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Layers, Calendar, Clock, Tag } from "lucide-react";
import { blogData } from "../../lib/blog-data";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  // Await the params before using them as per Next.js 15+ requirements
  const { slug } = await params;
  
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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

      {/* Article Header */}
      <section className="pt-24 pb-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-6">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-slate-700">{post.tag}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-6 text-lg text-slate-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.trim().startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              
              // Handle bold text (very basic markdown support)
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              
              return (
                <p key={index}>
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200 mt-auto">
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
