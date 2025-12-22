"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "../../assets/image4-h2.jpg"; // replace with your image
const testimonials = [
  {
    id: 1,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempora voluptatum rerum omnis reprehenderit accusamus illum officia fugit sit fugiat perspiciatis, id, eum numquam incidunt cumque beatae quibusdam, vitae iste!
`,
    name: "Mark Leon",
    location: "New York, USA",
    image: t1,
  },
  {
    id: 2,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos magnam provident, aut porro saepe vitae nobis! Quam quis quod magni ullam dolorem voluptate placeat!`,
    name: "Mark Leon",
    location: "New York, USA",
    image: t1,
  },
  {
    id: 3,
    text: `The Group was very helpful and flexible towards my needs and schedule.
They have coordinated and cooperated with me whenever I required their assistance
especially to get the housing loan. Without their active help, I would not have
been able to process my home loan smoothly.`,
    name: "Mark Leon",
    location: "New York, USA",
    image: t1,
  },
  // add more if needed
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* HEADER */}
      <div className="w-11/12 md:w-5/6 mx-auto mb-8 lg:mb-24 ">
        <p className="uppercase tracking-widest text-sm text-[var(--primary-color)] mb-4 font-heading">
          Testimonials
        </p>

        <h2 className="font-heading text-3xl md:text-4xl leading-snug font-bold text-[var(--primary-bg)]">
          Our biggest award is develop thriving communities
        </h2>
      </div>

      {/* BACKGROUND PANEL */}
      <div className="hidden lg:block absolute w-4/5 right-0 top-[200px] h-[520px] bg-[#f6f2ec] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="relative h-[320px] md:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="relative max-w-xl">
            {/* QUOTE ICON */}
            <div className="absolute -top-12 right-0 text-[80px] leading-none text-[var(--primary-color)] opacity-70">
              “”
            </div>

            <p className="text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
              {current.text}
            </p>

            {/* AUTHOR */}
            <div className="mb-10">
              <div className="w-16 h-[1px] bg-[var(--primary-color)] mb-4" />
              <p className="font-heading text-lg text-[var(--primary-bg)]">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">{current.location}</p>
            </div>

            {/* CONTROLS */}
            <div className="flex gap-4">
              <button
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition"
                onClick={() =>
                  setActive((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
              >
                <ChevronLeft />
              </button>

              <button
                className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white transition"
                onClick={() =>
                  setActive((prev) => (prev + 1) % testimonials.length)
                }
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
