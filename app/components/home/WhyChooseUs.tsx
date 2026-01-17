"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Building2,
  Home,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Network,
  Users,
  FileCheck,
} from "lucide-react";
import img7 from "../../assets/15years.png";
import img2 from "../../assets/h8_pic5.jpg";
import img3 from "../../assets/h8_bg2.jpg";
import img4 from "../../assets/Centric-Approach.png";
import img5 from "../../assets/End-to-End.png";
import img6 from "../../assets/cl1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "15+ Years of Industry Experience",
    desc: "Over 15 years of proven real estate expertise in Gurugram, backed by deep local market knowledge and long-term client trust.",
    icon: Building2,
    image: img7,
  },
  {
    title: "Complete Property Solutions",
    desc: "Specialised advisory for fresh bookings, resale, and renting across both residential and commercial real estate markets.",
    icon: Home,
    image: img2,
  },
  {
    title: "Strong Industry Network",
    desc: "Well-established relationships with leading developers, property owners, and corporate clients for better opportunities.",
    icon: Network,
    image: img3,
  },
  {
    title: "Transparent & Ethical Practices",
    desc: "Clear communication, honest advice, and professional service at every stage of the property transaction.",
    icon: ShieldCheck,
    image: img4,
  },
  {
    title: "Client-Centric Approach",
    desc: "Tailor-made solutions designed around individual needs, investment goals, and long-term value creation.",
    icon: Users,
    image: img6,
  },
  {
    title: "End-to-End Dedicated Support",
    desc: "Comprehensive assistance from property search and negotiations to documentation and successful closure.",
    icon: FileCheck,
    image: img5,
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const current = features[active];
  const Icon = current.icon;

  const prev = () => setActive((p) => (p === 0 ? features.length - 1 : p - 1));
  const next = () => setActive((p) => (p === features.length - 1 ? 0 : p + 1));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* HEADER */}
      <div className="w-11/12 md:w-5/6 mx-auto mb-8" data-aos="fade-up">
        <p className="uppercase tracking-widest text-sm text-[var(--primary-color)] mb-4 font-heading">
          Why choose us
        </p>
        <h2 className="font-heading text-3xl md:text-4xl leading-snug font-bold text-[var(--primary-bg)]">
          Making living spaces affordable
        </h2>
      </div>

      {/* LAYOUT */}
      <div className="relative w-full lg:w-[92%]">
        {/* RIGHT COLOR PANEL */}
        <div
          className="hidden lg:block absolute right-0 top-0 w-[55%] h-[640px] bg-[#faf9f7]"
          data-aos="fade-up"
          data-aos-delay="150"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:h-[640px] items-center">
          {/* IMAGE */}
          <div
            className="relative z-10 h-[300px] md:h-[420px] lg:h-[520px]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-0 flex items-center">
            <div
              className="px-8 md:px-14 py-20 max-w-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="mb-6 text-[var(--primary-color)]"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <Icon size={40} strokeWidth={1.5} />
              </div>

              <h3 className="font-heading text-2xl text-[var(--primary-bg)] mb-4">
                {current.title}
              </h3>

              <p className="text-gray-600 mb-10 leading-relaxed">
                {current.desc}
              </p>

              {/* CONTROLS */}
              <div
                className="flex gap-4"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <button
                  onClick={prev}
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
