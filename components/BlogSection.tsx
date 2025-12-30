
import React from 'react';

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "Mastering the Map: Tips for IELTS Listening Section 2",
      date: "NOV 01, 2025",
      category: "Listening",
      img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80",
      accent: "#2563EB"
    },
    {
      title: "Common Punctuation Mistakes That Lower Your Band",
      date: "OCT 25, 2025",
      category: "Grammar",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
      accent: "#E11D48"
    },
    {
      title: "How to Answer 'Problem/Solution' Essays Effortlessly",
      date: "SEP 12, 2025",
      category: "Writing",
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=80",
      accent: "#059669"
    }
  ];

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto border-t border-black/10 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="font-black text-sm uppercase tracking-[0.3em] text-[#E11D48]">IELTS STUDY BLOG</span>
          <h2 className="text-5xl font-black mt-2 tracking-tighter">Latest Insights.</h2>
        </div>
        <a href="#" className="font-black text-xl hover:underline underline-offset-8 decoration-[6px] decoration-[#FACC15]">
          → VIEW ALL ARTICLES
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <div key={i} className="brutalist-card bg-white p-4 rounded-3xl group cursor-pointer hover:bg-[#FEFCE8]">
            <div className="mb-6 overflow-hidden rounded-2xl border-[3px] border-black">
              <img 
                src={post.img} 
                alt={post.title} 
                className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="px-2">
              <div className="text-[10px] font-black text-white bg-black w-fit px-4 py-1 rounded-full mb-4 uppercase tracking-[0.2em]">
                {post.category}
              </div>
              <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-[#E11D48] transition-colors">
                {post.title}
              </h3>
              <div className="text-[11px] font-black text-gray-400 uppercase border-t border-black/10 pt-4 mt-auto">
                {post.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
