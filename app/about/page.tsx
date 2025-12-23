"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuickEnquiry from "../components/QuickEnquiry";

import heroImg from "../assets/hero/aboutpage.jpg"; // replace with your image
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src={heroImg}
          alt="About Us"
          fill
          priority
          className="object-cover"
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center ">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              About
            </h1>

            {/* BREADCRUMB */}
            <p className="text-sm tracking-widest text-white/80 uppercase">
              <span className="hover:text-white cursor-pointer">
                <Link href="/">Home</Link>
              </span>
              <span className="mx-2">›</span>
              <span className="text-white">About</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT INTRO SECTION ================= */}

      <section className="relative py-16  overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          {/* ===== MOBILE / TABLET SIMPLE LAYOUT ===== */}
          <div className="block lg:hidden space-y-8">
            <p className="uppercase tracking-widest text-sm text-[var(--primary-color)] font-heading">
              Who we are
            </p>

            <h2 className="font-heading text-3xl leading-snug font-bold text-[var(--primary-bg)]">
              Creating thoughtfully designed spaces that elevate everyday living
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We are a forward-thinking real estate development company
              committed to shaping modern living environments that balance
              architectural excellence with functionality and comfort.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With a strong focus on quality, transparency, and long-term value,
              we strive to deliver spaces that go beyond construction — creating
              homes and communities people are proud to belong to.
            </p>
          </div>

          {/* ===== DESKTOP OFFSET PANEL LAYOUT ===== */}
          <div className="hidden lg:block relative">
            {/* BIG RIGHT PANEL */}
            <div className="relative ml-auto w-[65%] bg-[#f6f2ec] py-20 px-16">
              <div className="max-w-xl ml-auto space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We are a forward-thinking real estate development company
                  committed to shaping modern living environments that balance
                  architectural excellence with functionality and comfort. Our
                  projects are designed to respond to the evolving needs of
                  today’s urban lifestyle.
                </p>

                <p>
                  With a strong focus on quality, transparency, and long-term
                  value, we strive to deliver spaces that go beyond construction
                  — creating homes and communities people are proud to belong
                  to.
                </p>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    "Design-driven approach",
                    "Transparent processes",
                    "Sustainable planning",
                    "Customer-centric mindset",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 bg-[var(--primary-color)] rounded-full" />
                      <p className="text-sm text-[var(--primary-bg)] font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SMALL LEFT PANEL (VERTICALLY CENTERED) */}
            <div
              className="
          absolute 
          top-1/2 
          -translate-y-1/2 
          left-0 
          w-[45%]
          bg-[#e7e0d4]
          px-14 
          py-12
          shadow-sm
        "
            >
              <p className="uppercase tracking-widest text-sm text-[var(--primary-color)] mb-4 font-heading">
                Who we are
              </p>

              <h2 className="font-heading text-4xl leading-snug font-bold text-[var(--primary-bg)]">
                Creating thoughtfully designed spaces that elevate everyday
                living
              </h2>
            </div>
          </div>
        </div>
      </section>

      <QuickEnquiry />
      <Footer />
    </div>
  );
}
