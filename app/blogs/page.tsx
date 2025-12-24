"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuickEnquiry from "../components/QuickEnquiry";

import heroImg from "../assets/hero/aboutpage.jpg"; // replace with your image
import Link from "next/link";
import blog1 from "../assets/hero/hero1.jpg";
import blog2 from "../assets/hero/hero2.jpg";
import blog3 from "../assets/hero/hero3.jpg";

const blogs = [
  {
    id: 1,
    title: "How smart planning shapes modern living spaces",
    category: "Real Estate",
    date: "March 18, 2025",
    image: blog1,
  },
  {
    id: 2,
    title: "Top features homebuyers look for in 2025",
    category: "Insights",
    date: "March 10, 2025",
    image: blog2,
  },
  {
    id: 3,
    title: "Why location still matters the most in real estate",
    category: "Market Trends",
    date: "February 28, 2025",
    image: blog3,
  },
  {
    id: 4,
    title: "Sustainable homes: the future of urban housing",
    category: "Sustainability",
    date: "February 15, 2025",
    image: heroImg,
  },
  {
    id: 5,
    title: "What makes a community truly livable",
    category: "Lifestyle",
    date: "January 30, 2025",
    image: blog1,
  },
];

export default function Blogs() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src={heroImg}
          alt="blogs"
          fill
          priority
          className="object-cover"
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center ">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Blogs
            </h1>

            {/* BREADCRUMB */}
            <p className="text-sm tracking-widest text-white/80 uppercase">
              <span className="hover:text-white cursor-pointer">
                <Link href="/">Home</Link>
              </span>
              <span className="mx-2">›</span>
              <span className="text-white">Blogs</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= BLOGS SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          {/* SECTION HEADER */}
          <div className="mb-16 max-w-2xl">
            <p className="uppercase tracking-widest text-sm text-[var(--primary-color)] mb-4 font-heading">
              Our Blog
            </p>

            <h2 className="font-heading text-3xl md:text-4xl leading-snug font-bold text-[var(--primary-bg)]">
              Latest insights & updates
            </h2>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-6">
                  <p className="text-xs tracking-widest text-[var(--primary-color)] mb-2">
                    {blog.category} • {blog.date}
                  </p>

                  <h3 className="font-heading text-xl text-[var(--primary-bg)] leading-snug group-hover:underline">
                    {blog.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuickEnquiry />
      <Footer />
    </div>
  );
}
