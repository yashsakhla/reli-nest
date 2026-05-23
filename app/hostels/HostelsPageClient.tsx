"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const hostelProperties = [
  {
    name: "Reli Nest - The Horizon",
    category: "Only Students",
    location: "Kharghar, Navi Mumbai",
    rooms: 10,
    beds: 26,
  },
  {
    name: "Reli Nest - The Origin",
    category: "For Working Professionals",
    location: "Kharghar, Navi Mumbai",
    rooms: 4,
    beds: 12,
  },
  {
    name: "Reli Nest - The Bloom",
    category: "Only Students",
    location: "Kharghar, Navi Mumbai",
    rooms: 8,
    beds: 24,
  },
];

const roomCards = [
  {
    title: "Triple Sharing Room",
    hostelName: "Reli Nest - The Horizon",
    category: "Only Students",
    rooms: 3,
    beds: 9,
    image: "/images/horizon/WhatsApp Image 2026-01-08 at 8.33.26 PM (1).jpeg",
  },
  {
    title: "Double Sharing Room",
    hostelName: "Reli Nest - The Horizon",
    category: "Only Students",
    rooms: 4,
    beds: 10,
    image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM (1).jpeg",
  },
  {
    title: "Single Sharing Room",
    hostelName: "Reli Nest - The Horizon",
    category: "Only Students",
    rooms: 3,
    beds: 7,
    image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM (2).jpeg",
  },
  {
    title: "Double Sharing Room",
    hostelName: "Reli Nest - The Origin",
    category: "For Working Professionals",
    rooms: 2,
    beds: 6,
    image: "/images/origin/WhatsApp Image 2026-01-08 at 8.33.26 PM (1).jpeg",
  },
  {
    title: "Single Sharing Room",
    hostelName: "Reli Nest - The Origin",
    category: "For Working Professionals",
    rooms: 2,
    beds: 6,
    image: "/images/origin/WhatsApp Image 2026-02-19 at 11.56.48 PM (1).jpeg",
  },
  {
    title: "Triple Sharing Room",
    hostelName: "Reli Nest - The Bloom",
    category: "Only Students",
    rooms: 3,
    beds: 9,
    image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.02 AM (2) (1).jpeg",
  },
  {
    title: "Double Sharing Room",
    hostelName: "Reli Nest - The Bloom",
    category: "Only Students",
    rooms: 3,
    beds: 8,
    image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.02 AM.jpeg",
  },
  {
    title: "Single Sharing Room",
    hostelName: "Reli Nest - The Bloom",
    category: "Only Students",
    rooms: 2,
    beds: 7,
    image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.03 AM.jpeg",
  },
  {
    title: "Double Sharing Premium Room",
    hostelName: "Reli Nest - The Horizon",
    category: "Only Students",
    rooms: 2,
    beds: 6,
    image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM.jpeg",
  },
  {
    title: "Single Sharing Premium Room",
    hostelName: "Reli Nest - The Bloom",
    category: "Only Students",
    rooms: 2,
    beds: 6,
    image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.09 AM (1) (1).jpeg",
  },
];

export default function HostelsPageClient() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [visitHostel, setVisitHostel] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [visitPhone, setVisitPhone] = useState("");
  const [minVisitDate, setMinVisitDate] = useState("");

  const hostelScheduleOptions = hostelProperties.map((h) => ({
    value: h.name,
    label: `${h.name} — ${h.location}`,
  }));

  const closeMenu = () => setMenuOpen(false);
  const openScheduleModal = () => {
    setMenuOpen(false);
    setScheduleOpen(true);
  };
  const closeScheduleModal = () => setScheduleOpen(false);
  const resetScheduleForm = () => {
    setVisitHostel("");
    setVisitDate("");
    setVisitTime("");
    setVisitPhone("");
  };

  useEffect(() => {
    setMinVisitDate(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (menuOpen || scheduleOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, scheduleOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (scheduleOpen) {
        setScheduleOpen(false);
        return;
      }
      setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [scheduleOpen]);

  return (
    <main className="bg-[#efefef] text-black">
      <section className="relative h-[290px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1900&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/25" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-4 pt-5 sm:px-8 lg:px-14">
          <header className="flex items-center justify-between">
            <button type="button" onClick={() => router.push("/")}>
              <Image
                src="/images/logo.png"
                alt="Reli Nest logo"
                width={220}
                height={80}
                className="h-12 w-auto object-contain sm:h-14"
                priority
              />
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openScheduleModal}
                className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold tracking-wide uppercase"
              >
                Schedule a Visit
              </button>
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white"
              >
                {menuOpen ? (
                  <span className="text-xl leading-none">×</span>
                ) : (
                  <span className="h-[2px] w-4 bg-current shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]" />
                )}
              </button>
            </div>
          </header>

          <div className="my-auto text-center text-white">
            <h1 className="text-3xl font-light tracking-[0.08em] uppercase sm:text-4xl">
              Luxury Student Residences in India
            </h1>
            <p className="mx-auto mt-3 max-w-3xl text-sm text-white/85">
              Experience Reli Nest premium student living with modern amenities,
              safety, and a vibrant community near top universities.
            </p>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-sm flex-col bg-white text-black shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <span className="text-xs font-semibold tracking-[0.35em]">MENU</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-xl"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4">
          <button
            type="button"
            onClick={() => {
              closeMenu();
              router.push("/");
            }}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase hover:bg-black/5"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              closeMenu();
              document
                .getElementById("hostels-list")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase hover:bg-black/5"
          >
            Hostels
          </button>
          <button
            type="button"
            onClick={openScheduleModal}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase hover:bg-black/5"
          >
            Schedule a Visit
          </button>
          <button
            type="button"
            onClick={() => {
              closeMenu();
              router.push("/#contact");
            }}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase hover:bg-black/5"
          >
            Contact Us
          </button>
          <a
            href="https://wa.me/917666879392"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase text-[#25D366] hover:bg-black/5"
          >
            DM on Whatsapp
          </a>
        </nav>
      </aside>

      <div
        className={`fixed inset-0 z-[80] bg-black/60 transition-opacity duration-300 ${
          scheduleOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!scheduleOpen}
        onClick={() => {
          closeScheduleModal();
          resetScheduleForm();
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hostels-schedule-title"
        className={`fixed top-1/2 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white p-6 shadow-2xl transition-all duration-300 ${
          scheduleOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="hostels-schedule-title"
            className="text-xl font-semibold tracking-wide uppercase"
          >
            Schedule a Visit
          </h2>
          <button
            type="button"
            onClick={() => {
              closeScheduleModal();
              resetScheduleForm();
            }}
            className="rounded-full border border-black/15 px-2.5 py-1 text-lg leading-none text-black/70 hover:bg-black/5"
          >
            ×
          </button>
        </div>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const message = `Hello Reli Nest! I'd like to schedule a visit.\n\nHostel: ${visitHostel}\nDate: ${visitDate}\nTime: ${visitTime}\nContact: ${visitPhone}`;
            window.open(`https://wa.me/917666879392?text=${encodeURIComponent(message)}`, "_blank");
            closeScheduleModal();
            resetScheduleForm();
          }}
        >
          <div>
            <label
              htmlFor="hostels-visit-hostel"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
            >
              Hostel
            </label>
            <select
              id="hostels-visit-hostel"
              required
              value={visitHostel}
              onChange={(e) => setVisitHostel(e.target.value)}
              className="w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-black/40"
            >
              <option value="">Select a hostel</option>
              {hostelScheduleOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="hostels-visit-date"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
              >
                Date of visit
              </label>
              <input
                id="hostels-visit-date"
                type="date"
                required
                value={visitDate}
                min={minVisitDate || undefined}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-black/40"
              />
            </div>
            <div>
              <label
                htmlFor="hostels-visit-time"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
              >
                Time of visit
              </label>
              <input
                id="hostels-visit-time"
                type="time"
                required
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-black/40"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="hostels-visit-phone"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
            >
              Contact number
            </label>
            <input
              id="hostels-visit-phone"
              type="tel"
              required
              placeholder="+91 76668 79392"
              value={visitPhone}
              onChange={(e) => setVisitPhone(e.target.value)}
              className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-black/40"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[#bc913c] px-6 py-2.5 text-xs font-semibold tracking-wide text-white uppercase"
          >
            Submit request
          </button>
        </form>
      </div>

      <section id="hostels-list" className="relative px-4 py-12 md:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 right-0 h-36 w-32 bg-cover bg-center opacity-75 sm:h-48 sm:w-44"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=500&q=80)",
          }}
        />

        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {["Locality", "Gender", "Sharing Type", "Reset"].map((item) => (
              <button
                key={item}
                className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs text-black/70 transition hover:border-[#bc913c] hover:text-[#bc913c]"
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-4xl font-light tracking-[0.08em] uppercase sm:text-6xl">
            Our Hostels in Navi Mumbai
          </h2>
          <p className="mt-3 text-sm text-black/65">
            Explore rooms across Reli Nest - The Horizon, The Origin, and The
            Bloom in Kharghar, Navi Mumbai.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {roomCards.map((room) => (
              <article
                key={`${room.hostelName}-${room.title}`}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
              >
                <div className="grid gap-4 p-4 sm:grid-cols-[220px_1fr] sm:p-5">
                  <div
                    className="h-44 rounded-xl bg-cover bg-center sm:h-full sm:min-h-[220px]"
                    style={{ backgroundImage: `url("${room.image}")` }}
                  />

                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-xl text-2xl font-medium leading-8">
                        {room.hostelName}
                      </h3>
                      <span className="rounded-full bg-[#e7f3e3] px-3 py-1 text-[11px] font-semibold text-[#46773e]">
                        {room.category}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-black/55">
                      Kharghar, Navi Mumbai
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/65">
                        {room.title}
                      </span>
                      <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/65">
                        Rooms: {room.rooms}
                      </span>
                      <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/65">
                        Beds: {room.beds}
                      </span>
                    </div>

                    <div className="mt-5 text-xs uppercase text-black/45">
                      Pricing
                    </div>
                    <div className="text-2xl font-semibold leading-none text-[#bc913c]">
                      Call for Price
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      <button
                        type="button"
                        onClick={openScheduleModal}
                        className="rounded-lg bg-[#bc913c] px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase"
                      >
                        Schedule a Visit
                      </button>
                      <button className="rounded-lg border border-black/25 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase">
                        Request a Callback
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
            <div className="xl:col-span-1">
              <div className="inline-block">
                <Image
                  src="/images/logo.png"
                  alt="Reli Nest logo"
                  width={250}
                  height={90}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-6 max-w-xs text-sm leading-6 text-white/75">
                Introducing Reli Nest, where student living reaches new heights
                of excellence in India. Experience modernity fused with community
                and convenience. Our spaces prioritize your comfort, safety, and
                connectivity—with study nooks and vibrant common areas.
              </p>
            </div>

            <nav aria-label="Company" className="text-sm">
              <ul className="space-y-3 text-white/85">
                <li>
                  <a href="#" className="transition hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Life @ Reli Nest
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Hostels
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Locations and policies" className="text-sm">
              <ul className="space-y-3 text-white/85">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-white">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </nav>

            <div className="text-sm">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <a href="tel:+917666879392" className="text-white/90 hover:underline">
                  +91 76668 79392
                </a>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a href="mailto:relinest02@gmail.com" className="break-all text-white/90 hover:underline">
                  relinest02@gmail.com
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/75">
                Reli Nest - The Bloom, G - 22, Shivaji Chowk,
                Sector 12, Kharghar- 410210.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="https://wa.me/917666879392" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path fill="currentColor" d="M19.11 4.89A9.94 9.94 0 0 0 12.03 2C6.5 2 2.01 6.48 2 12c0 1.77.46 3.5 1.34 5.02L2 22l5.13-1.35A10 10 0 0 0 12.03 22h.01c5.52 0 9.99-4.49 9.99-10 0-2.67-1.04-5.18-2.92-7.11Zm-7.08 15.42a8.29 8.29 0 0 1-4.22-1.15l-.3-.18-3.05.8.82-2.97-.2-.31a8.28 8.28 0 0 1-1.27-4.43c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.72 8.29-8.29 8.29Zm4.54-6.2c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.16.25-.65.82-.79.99-.14.16-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.22-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.9 2.4 1.03 2.56c.12.16 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                </a>
                <a href="tel:+917666879392" aria-label="Phone" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-zinc-900 py-4 text-center text-xs text-white/70 sm:text-sm">
          © Copyright {new Date().getFullYear()} by Reli Nest.
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+917666879392"
          aria-label="Call Reli Nest"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2db742] text-white shadow-lg ring-2 ring-white/70 transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
        <a
          href="https://wa.me/917666879392"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 transition hover:scale-105"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
            <path d="M19.11 4.89A9.94 9.94 0 0 0 12.03 2C6.5 2 2.01 6.48 2 12c0 1.77.46 3.5 1.34 5.02L2 22l5.13-1.35A10 10 0 0 0 12.03 22h.01c5.52 0 9.99-4.49 9.99-10 0-2.67-1.04-5.18-2.92-7.11Zm-7.08 15.42a8.29 8.29 0 0 1-4.22-1.15l-.3-.18-3.05.8.82-2.97-.2-.31a8.28 8.28 0 0 1-1.27-4.43c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.72 8.29-8.29 8.29Zm4.54-6.2c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.16.25-.65.82-.79.99-.14.16-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.22-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.9 2.4 1.03 2.56c.12.16 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29Z" />
          </svg>
        </a>
      </div>
    </main>
  );
}
