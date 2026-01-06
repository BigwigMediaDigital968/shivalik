"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QuickEnquiry from "../components/QuickEnquiry";

import heroImg from "../assets/hero/aboutpage.jpg";

import { propertyData } from "../data/propertyData";

// Icons
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Home,
  IndianRupee,
} from "lucide-react";

export default function BuyProperty() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  /* ------------------ FILTER LOGIC ------------------ */
  const filteredProperties = propertyData
    // ✅ ONLY BUY PROPERTIES
    .filter((property) => property.purpose === "lease")
    // ✅ THEN APPLY UI FILTERS
    .filter((property) => {
      const matchLocation = location
        ? property.location.city === location ||
          property.location.area === location
        : true;

      const matchType = type ? property.type === type : true;

      const matchBudget = budget
        ? budget === "below-2cr"
          ? property.price < 20000000
          : budget === "2cr-5cr"
          ? property.price >= 20000000 && property.price <= 50000000
          : property.price > 50000000
        : true;

      return matchLocation && matchType && matchBudget;
    });

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={heroImg}
          alt="Buy Property"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Lease Property
            </h1>
            <p className="text-sm tracking-widest text-white/80 uppercase">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white">Lease Property</span>
            </p>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-10 bg-gray-50">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="border rounded-xl px-4 py-3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Location</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Golf Course Road">Golf Course Road</option>
            <option value="Sector 65">Sector 65</option>
          </select>

          <select
            className="border rounded-xl px-4 py-3"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="builder-floor">Builder Floor</option>
            <option value="plot">Plot</option>
          </select>

          <select
            className="border rounded-xl px-4 py-3"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Budget</option>
            <option value="below-2cr">Below ₹2 Cr</option>
            <option value="2cr-5cr">₹2 Cr – ₹5 Cr</option>
            <option value="above-5cr">Above ₹5 Cr</option>
          </select>

          <button
            onClick={() => {
              setLocation("");
              setType("");
              setBudget("");
            }}
            className="bg-black text-white rounded-xl px-4 py-3 hover:bg-gray-800"
          >
            Reset Filters
          </button>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group rounded-3xl overflow-hidden border bg-white shadow hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-64">
                <Image
                  src={property.coverImage}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* PURPOSE BADGE */}
                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full uppercase">
                  {property.purpose}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{property.title}</h3>

                <p className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <MapPin size={16} />
                  {property.location.area}, {property.location.city}
                </p>

                {/* META INFO */}
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} /> {property.bedrooms} Beds
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath size={16} /> {property.bathrooms} Baths
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Ruler size={16} /> {property.areaSqft} Sqft
                  </div>
                </div>

                {/* PRICE */}
                <p className="flex items-center gap-1 text-lg font-bold mb-5">
                  <IndianRupee size={18} />
                  {property.priceLabel}
                </p>

                {/* ACTION */}
                <Link
                  href={`/buy-property/${property.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-[var(--primary-color)] text-white py-3 rounded-xl hover:opacity-90"
                >
                  <Home size={18} />
                  View Details
                </Link>
              </div>
            </div>
          ))}

          {filteredProperties.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No properties found matching your criteria.
            </p>
          )}
        </div>
      </section>

      <QuickEnquiry />
      <Footer />
    </div>
  );
}
