"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [visitHostel, setVisitHostel] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [visitPhone, setVisitPhone] = useState("");
  const [minVisitDate, setMinVisitDate] = useState("");

  const openScheduleModal = () => {
    closeMenu();
    setScheduleOpen(true);
  };

  const closeScheduleModal = () => {
    setScheduleOpen(false);
  };

  const resetScheduleForm = () => {
    setVisitHostel("");
    setVisitDate("");
    setVisitTime("");
    setVisitPhone("");
  };
  const bannerImages = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1900&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1900&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1900&q=80",
  ];
  const cityCards = [
    {
      city: "Navi Mumbai",
      hosts: "3 Hostels",
      image: "/images/city/navi-mumbai.jpg",
      comingSoon: false,
    },
    {
      city: "Mumbai",
      hosts: "",
      image: "/images/city/mumbai.jpg",
      comingSoon: true,
    },
    {
      city: "Pune",
      hosts: "",
      image: "/images/city/pune.jpg",
      comingSoon: true,
    },
    {
      city: "Bangalore",
      hosts: "",
      image: "/images/city/banglore.jpg",
      comingSoon: true,
    },
  ];
  const movingCityCards = [...cityCards, ...cityCards];
  const availablePgCards = [
    {
      name: "Reli Nest - The Horizon",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Triple Sharing Room",
      rooms: 3,
      beds: 9,
      image: "/images/horizon/WhatsApp Image 2026-01-08 at 8.33.26 PM (1).jpeg",
    },
    {
      name: "Reli Nest - The Horizon",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Double Sharing Room",
      rooms: 4,
      beds: 10,
      image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM (1).jpeg",
    },
    {
      name: "Reli Nest - The Horizon",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Single Sharing Room",
      rooms: 3,
      beds: 7,
      image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM (2).jpeg",
    },
    {
      name: "Reli Nest - The Origin",
      location: "Kharghar, Navi Mumbai",
      category: "For Working Professionals",
      roomType: "Double Sharing Room",
      rooms: 2,
      beds: 6,
      image: "/images/origin/WhatsApp Image 2026-01-08 at 8.33.26 PM (1).jpeg",
    },
    {
      name: "Reli Nest - The Origin",
      location: "Kharghar, Navi Mumbai",
      category: "For Working Professionals",
      roomType: "Single Sharing Room",
      rooms: 2,
      beds: 6,
      image: "/images/origin/WhatsApp Image 2026-02-19 at 11.56.48 PM (1).jpeg",
    },
    {
      name: "Reli Nest - The Bloom",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Triple Sharing Room",
      rooms: 3,
      beds: 9,
      image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.02 AM (2) (1).jpeg",
    },
    {
      name: "Reli Nest - The Bloom",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Double Sharing Room",
      rooms: 3,
      beds: 8,
      image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.02 AM.jpeg",
    },
    {
      name: "Reli Nest - The Bloom",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Single Sharing Room",
      rooms: 2,
      beds: 7,
      image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.03 AM.jpeg",
    },
    {
      name: "Reli Nest - The Horizon",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Double Sharing Premium Room",
      rooms: 2,
      beds: 6,
      image: "/images/horizon/WhatsApp Image 2026-02-19 at 11.56.48 PM.jpeg",
    },
    {
      name: "Reli Nest - The Bloom",
      location: "Kharghar, Navi Mumbai",
      category: "Only Students",
      roomType: "Single Sharing Premium Room",
      rooms: 2,
      beds: 6,
      image: "/images/bloom/WhatsApp Image 2025-06-11 at 9.48.09 AM (1) (1).jpeg",
    },
  ];
  const movingAvailablePgCards = [...availablePgCards, ...availablePgCards];
  const hostelScheduleOptions = Array.from(
    new Map(
      availablePgCards.map((p) => [
        p.name,
        { value: p.name, label: `${p.name} — ${p.location}` },
      ]),
    ).values(),
  );
  const perks = [
    "Weekly Movie Nights",
    "Expert Guidance Fitness",
    "A Serene Oasis",
    "Bedding Essentials Included",
    "Mindful Movement",
    "Elevating Dining Experience",
  ];
  const reviewImages = [
    "/images/hostels/WhatsApp Image 2026-04-14 at 4.51.10 PM.jpeg",
    "/images/perks/IMG-20250203-WA0003.jpg",
    "/images/perks/IMG-20241217-WA0009.jpg",
    "/images/perks/IMG-20250103-WA0018.jpg",
    "/images/perks/IMG_20241219_114359.jpg",
    "/images/hostels/relinest2 (1).jpeg",
  ];
  const movingReviewImages = [...reviewImages, ...reviewImages];

  useEffect(() => {
    setMinVisitDate(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <main className="bg-[#efefef] text-white">
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/10 bg-[#efefef]/95 text-black shadow-sm backdrop-blur"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-14">
          <div className="px-1 py-1">
            <Image
              src="/images/logo.png"
              alt="Reli Nest logo"
              width={220}
              height={80}
              className="h-12 w-auto object-contain sm:h-14"
              priority
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openScheduleModal}
              className="rounded-full bg-[#bc913c] px-4 py-2 text-[10px] font-semibold tracking-wide text-white uppercase sm:text-xs"
            >
              Schedule a Visit
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border ${
                scrolled ? "border-black/70" : "border-white/70"
              }`}
            >
              {menuOpen ? (
                <span
                  className={`text-lg leading-none ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  ×
                </span>
              ) : (
                <span
                  className={`h-[2px] w-4 ${
                    scrolled ? "bg-black" : "bg-white"
                  } shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]`}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <aside
        id="site-sidenav"
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-sm flex-col bg-white text-black shadow-2xl transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <span className="text-xs font-semibold tracking-[0.35em]">MENU</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3 py-4" aria-label="Primary">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase transition hover:bg-black/5"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("life-at-reli-nest")}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase transition hover:bg-black/5"
          >
            Life at Reli nest
          </button>
          <button
            type="button"
            onClick={() => {
              closeMenu();
              router.push("/hostels");
            }}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase transition hover:bg-black/5"
          >
            Hostels
          </button>
          <button
            type="button"
            onClick={openScheduleModal}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase transition hover:bg-black/5"
          >
            Schedule a Visit
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase transition hover:bg-black/5"
          >
            Contact Us
          </button>
          <a
            href="https://wa.me/917666879392"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide uppercase text-[#25D366] transition hover:bg-black/5"
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
        aria-labelledby="schedule-visit-title"
        className={`fixed top-1/2 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-black/10 bg-white p-6 text-black shadow-2xl transition-all duration-300 ${
          scheduleOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="schedule-visit-title"
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
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <p className="mt-2 text-sm text-black/60">
          Choose a hostel and your preferred visit slot. We&apos;ll confirm shortly.
        </p>

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
              htmlFor="visit-hostel"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
            >
              Hostel
            </label>
            <select
              id="visit-hostel"
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
                htmlFor="visit-date"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
              >
                Date of visit
              </label>
              <input
                id="visit-date"
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
                htmlFor="visit-time"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
              >
                Time of visit
              </label>
              <input
                id="visit-time"
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
              htmlFor="visit-phone"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-black/70"
            >
              Contact number
            </label>
            <input
              id="visit-phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="+91 76668 79392"
              value={visitPhone}
              onChange={(e) => setVisitPhone(e.target.value)}
              className="w-full rounded-lg border border-black/15 px-3 py-2.5 text-sm outline-none focus:border-black/40"
            />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="submit"
              className="rounded-lg bg-[#bc913c] px-6 py-2.5 text-xs font-semibold tracking-wide text-white uppercase"
            >
              Submit request
            </button>
            <button
              type="button"
              onClick={() => {
                closeScheduleModal();
                resetScheduleForm();
              }}
              className="rounded-lg border border-black/25 px-6 py-2.5 text-xs font-semibold uppercase"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <section id="home" className="relative min-h-screen scroll-mt-0 overflow-hidden">
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={image}
              className="banner-slide absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col px-4 pt-28 pb-6 sm:px-8 lg:px-14">
          <section className="my-auto flex flex-col items-center text-center">
            <p className="mb-4 text-xs tracking-[0.7em] text-white/80 uppercase">
              Luxury PG Solutions
            </p>
            <h1 className="mb-8 text-6xl font-light tracking-[0.18em] uppercase sm:text-7xl lg:text-8xl">
              Reli Nest
            </h1>
            <p className="max-w-3xl text-sm tracking-[0.5em] text-white/90 uppercase sm:text-lg">
              Crafted for students, elevated by luxury
            </p>
          </section>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-6xl bg-[#e9e9e9] p-4 text-black shadow-sm sm:p-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="h-[420px] overflow-hidden bg-white sm:h-[600px]">
              <div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/Hostel-3/main.jpeg)",
                }}
              />
            </div>

            <div className="flex flex-col justify-center p-2 sm:p-4">
              <p
                className="mb-4 text-5xl"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                Hello!
              </p>
              <h2 className="mb-6 text-4xl font-light tracking-[0.1em] uppercase">
                Why Reli Nest!
              </h2>
              <p className="mb-4 max-w-xl text-base leading-7 text-black/70">
                At Reli Nest, we offer more than just a place to live. Our modern
                spaces are designed for comfort, safety, and community. With 24/7
                security, high-speed Wi-Fi, cozy study areas, and vibrant common
                spaces, you&apos;ll feel right at home.
              </p>
              <p className="mb-8 max-w-xl text-base leading-7 text-black/70">
                Experience hassle-free luxury living where convenience meets
                comfort, crafted especially for students and young professionals.
              </p>
              <button className="w-fit bg-[#bc913c] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-[#a88033]">
                More About Us
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-2 border-t border-black/10 pt-8 sm:grid-cols-4">
                {[
                  { value: "100+", label: "Beds" },
                  { value: "3+", label: "Hostels" },
                  { value: "100+", label: "Students" },
                  { value: "50+", label: "Working Professionals" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-4xl font-extrabold tracking-wide text-transparent [-webkit-text-stroke:1.2px_#595959] sm:text-5xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
        </div>



      </section>

      <section id="hostels" className="scroll-mt-24 pb-16 text-black lg:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-4xl font-light tracking-[0.08em] uppercase sm:text-6xl">
            Luxury &amp; Fully Furnished
            <br />
            PG/Hostels
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-center text-sm text-black/70 sm:text-base">
            Discover luxury living with Reli Nest in premier cities across India.
            Our properties offer unmatched elegance, modern amenities, and
            thoughtfully designed spaces, providing you with a unique blend of
            comfort and sophistication.
          </p>

          <div className="city-carousel relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
            <div className="city-track flex w-max gap-6 px-2 md:px-4">
              {movingCityCards.map((card, index) => (
                <article key={`${card.city}-${index}`} className="w-[82vw] sm:w-[42vw] lg:w-[22vw]">
                  <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-300">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${card.image}")` }}
                    />
                    {card.hosts ? (
                      <span className="absolute top-2 right-2 rounded-sm bg-yellow-300 px-2 py-1 text-[10px] font-semibold uppercase">
                        {card.hosts}
                      </span>
                    ) : null}
                    {card.comingSoon ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/55">
                        <p className="text-3xl font-light tracking-wide text-white">
                          COMING SOON
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-3 text-lg">{card.city}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#efefef] px-4 pb-24 text-black md:px-8">
        <div className="mx-auto w-full max-w-[1280px]">
          <h2 className="text-center text-4xl font-light tracking-[0.08em] uppercase sm:text-6xl">
            Stay Smart, Live Better At Reli Nest
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-center text-sm text-black/65 sm:text-base">
            At Reli Nest, we provide fully furnished rooms, delicious meals,
            Wi-Fi, laundry, a game zone and more - all at budget friendly prices.
          </p>

          <div className="available-carousel relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
            <div className="available-track flex w-max gap-4 px-2 md:px-4">
              {movingAvailablePgCards.map((card, index) => (
                <article
                  key={`${card.name}-${index}`}
                  className="flex h-[500px] w-[84vw] flex-col rounded-xl border border-black/10 bg-white p-4 shadow-md sm:w-[46vw] lg:w-[23vw]"
                >
                  <div
                    className="h-48 rounded-xl bg-cover bg-center"
                    style={{ backgroundImage: `url("${card.image}")` }}
                  />
                  <div className="mt-3 flex items-center justify-between text-[11px]">
                    <span
                      className={`rounded-full px-2 py-1 font-semibold ${
                        card.category === "Only Students"
                          ? "bg-[#e7f3e3] text-[#46773e]"
                          : "bg-[#edf0f3] text-[#3f556f]"
                      }`}
                    >
                      {card.category}
                    </span>
                    <div className="flex gap-1 text-black/55">
                      <span className="rounded-full bg-black/5 px-2 py-1">
                        Rooms: {card.rooms}
                      </span>
                      <span className="rounded-full bg-black/5 px-2 py-1">
                        Beds: {card.beds}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-3 min-h-14 text-base leading-6 font-medium">{card.name}</h3>
                  <p className="text-xs text-black/55">{card.location}</p>
                  <p className="mt-3 text-xs text-black/55">{card.roomType}</p>
                  <p className="mt-6 text-[11px] text-black/55 uppercase">Pricing</p>
                  <p className="mt-1 text-2xl font-semibold leading-none tracking-tight text-[#bc913c]">
                    Call for Price
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                    <button className="rounded-lg bg-[#bc913c] py-2.5 text-[11px] font-semibold text-white uppercase">
                      Book Now
                    </button>
                    <button className="rounded-lg border border-black/30 py-2.5 text-[11px] font-semibold uppercase">
                      Request a Callback
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-4 pb-24 text-black md:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-[0.06em] uppercase sm:text-6xl">
              Perks Of Living At
              <br />
              Reli Nest
            </h2>
            <p className="mt-4 max-w-xl text-sm text-black/65">
              Discover everything you need with us - essentials, luxuries, and
              more. From convenience to comfort, our curated offerings ensure your
              every desire is met with no compromises, just unmatched experiences.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {perks.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-5 w-5 fill-none stroke-current"
                    >
                      <path
                        d="M4 12h16M12 4v16"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-medium uppercase tracking-wide">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-black px-8 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase">
              View More
            </button>
          </div>

          <div className="relative min-h-[520px]">
            <div
              className="absolute top-0 right-0 h-40 w-[72%] rounded-sm bg-cover bg-center shadow-md"
              style={{
                backgroundImage:
                  "url(/images/perks/IMG-20250103-WA0018.jpg)",
              }}
            />
            <div
              className="absolute top-28 right-14 h-[290px] w-[68%] rounded-sm bg-cover bg-center shadow-md"
              style={{
                backgroundImage:
                  "url(/images/perks/IMG_20241219_114359.jpg)",
              }}
            />
            <div
              className="absolute right-0 bottom-0 h-32 w-[46%] rounded-sm bg-cover bg-center shadow-md"
              style={{
                backgroundImage:
                  "url(/images/perks/IMG-20241217-WA0009.jpg)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#efefef] px-4 pb-28 text-black md:px-8">
        <div className="mx-auto w-full max-w-6xl pb-24">
          <h2 className="text-center text-4xl font-light tracking-[0.08em] uppercase sm:text-6xl">
            Not Just A Place To Stay
          </h2>
          <p className="mt-3 text-center text-sm text-black/65">
            but an experience to cherish. Come over and feel the difference.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="row-span-2 h-[420px] rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(images/hostels/event.jpeg)",
                }}
              />
              <div
                className="h-[202px] rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(images/hostels/relinest2 (7).jpeg)",
                }}
              />
              <div
                className="h-[202px] rounded-xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(images/hostels/IMG-20241208-WA0031.jpg)",
                }}
              />
            </div>

            <div
              id="life-at-reli-nest"
              className="flex scroll-mt-28 flex-col justify-center"
            >
              <p
                className="text-6xl"
                style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
              >
                Life at
              </p>
              <h3 className="mt-3 text-5xl font-light tracking-[0.06em] uppercase">
                Reli Nest
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/70">
                At Reli Nest, we know studying and living away from home can be
                challenging. That&apos;s why we prioritize your safety, simplify daily
                tasks, and provide home-cooked meals, creating a space where you
                can thrive.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/70">
                We also offer academic support to ensure a harmonious balance in
                your experience. Join us at Reli Nest, where worry-free living
                meets exceptional hospitality.
              </p>
              <button className="mt-8 w-fit bg-[#bc913c] px-8 py-3 text-xs font-semibold tracking-[0.12em] text-white uppercase">
                View More
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-light leading-tight tracking-[0.06em] uppercase sm:text-6xl">
              Voice Of
              <br />
              Reli Nest
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-black/70">
              Discover the real experiences that make Reli Nest more than just a
              place to stay. From cozy comforts to a strong sense of community,
              hear firsthand from those who call us home. Our residents share
              stories of connection, support, and all the reasons Reli Nest is the
              perfect blend of comfort and convenience for a fulfilling journey
              away from home.
            </p>
          </div>

          <div className="review-carousel overflow-hidden">
            <div className="review-track flex w-max gap-4">
              {movingReviewImages.map((image, index) => (
                <article
                  key={`${image}-${index}`}
                  className="w-[74vw] rounded-xl border border-black/10 bg-white p-2 shadow-sm sm:w-[30vw] lg:w-[14vw]"
                >
                  <div
                    className="h-[260px] rounded-lg bg-cover bg-top"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-3 bottom-2 h-24 w-24 bg-cover bg-center opacity-70 sm:h-32 sm:w-32"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=400&q=80)",
          }}
        />
      </section>

      <section id="contact" className="scroll-mt-24 text-black">
        <div className="bg-[#bc913c] px-4 py-10 text-center sm:py-12">
          <p className="mx-auto max-w-4xl text-xl font-light tracking-[0.06em] text-white uppercase sm:text-2xl md:text-3xl">
            Every Story Deserves A Chapter Called Reli Nest!
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-14 md:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div>
              <h2 className="text-4xl font-light tracking-[0.08em] uppercase sm:text-5xl">
                Contact Us
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-black/60">
                Ready to dive into unparalleled experiences? Contact us now for
                all your needs—whether questions, feedback, or to explore our
                curated offerings. Reach out via phone or email; let&apos;s make
                your desires a reality.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <a
                      href="tel:+917666879392"
                      className="mt-1 block text-sm text-black/70 hover:underline"
                    >
                      +91 76668 79392
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <a
                      href="mailto:relinest02@gmail.com"
                      className="mt-1 block text-sm text-black/70 hover:underline"
                    >
                      relinest02@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 sm:col-span-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="mt-1 max-w-sm text-sm text-black/70">
                      Reli Nest - The Bloom, G - 22, Shivaji Chowk,
                      Sector 12, Kharghar- 410210
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-black text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Working Time</p>
                    <p className="mt-1 text-sm text-black/70">
                      Every Day 10 am - 7 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-[320px] overflow-hidden rounded-lg border border-black/10 shadow-sm lg:min-h-[420px]">
              <iframe
                title="Reli Nest location map"
                className="h-[320px] w-full border-0 lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Vile+Parle+West+Mumbai+400056&output=embed&z=15"
              />
            </div>
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
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <a href="tel:+917666879392" className="text-white/90 hover:underline">
                  +91 76668 79392
                </a>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a
                  href="mailto:relinest02@gmail.com"
                  className="break-all text-white/90 hover:underline"
                >
                  relinest02@gmail.com
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/75">
                Reli Nest - The Bloom, G - 22, Shivaji Chowk,
                Sector 12, Kharghar- 410210.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/917666879392"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path fill="currentColor" d="M19.11 4.89A9.94 9.94 0 0 0 12.03 2C6.5 2 2.01 6.48 2 12c0 1.77.46 3.5 1.34 5.02L2 22l5.13-1.35A10 10 0 0 0 12.03 22h.01c5.52 0 9.99-4.49 9.99-10 0-2.67-1.04-5.18-2.92-7.11Zm-7.08 15.42a8.29 8.29 0 0 1-4.22-1.15l-.3-.18-3.05.8.82-2.97-.2-.31a8.28 8.28 0 0 1-1.27-4.43c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.72 8.29-8.29 8.29Zm4.54-6.2c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.16.25-.65.82-.79.99-.14.16-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.22-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.9 2.4 1.03 2.56c.12.16 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                </a>
                <a
                  href="tel:+917666879392"
                  aria-label="Phone"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90"
                >
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
          Studios
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
        <a
          href="tel:+917666879392"
          aria-label="Call Reli Nest"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2db742] text-white shadow-lg ring-2 ring-white/70 transition hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7 fill-current"
          >
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
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7 fill-current"
          >
            <path d="M19.11 4.89A9.94 9.94 0 0 0 12.03 2C6.5 2 2.01 6.48 2 12c0 1.77.46 3.5 1.34 5.02L2 22l5.13-1.35A10 10 0 0 0 12.03 22h.01c5.52 0 9.99-4.49 9.99-10 0-2.67-1.04-5.18-2.92-7.11Zm-7.08 15.42a8.29 8.29 0 0 1-4.22-1.15l-.3-.18-3.05.8.82-2.97-.2-.31a8.28 8.28 0 0 1-1.27-4.43c0-4.57 3.72-8.29 8.29-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.57-3.72 8.29-8.29 8.29Zm4.54-6.2c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.12-.16.25-.65.82-.79.99-.14.16-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.22-.74-.66-1.25-1.47-1.4-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.9 2.4 1.03 2.56c.12.16 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.54.61.19 1.16.16 1.59.1.48-.07 1.49-.61 1.7-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29Z" />
          </svg>
        </a>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-zinc-900 text-white shadow-md transition hover:bg-zinc-800"
          >
            <span className="text-lg leading-none">↑</span>
          </button>
          <button
            type="button"
            aria-label="Open chat"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-violet-600 shadow-md transition hover:bg-white/90"
          >
            <span className="text-xs font-bold">?</span>
          </button>
        </div>
      </div>

      
    </main>
  );
}
