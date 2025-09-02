"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ACTIONS } from "../data";

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
      const el = document.getElementById("typewriter");
      if (el) {
        const text = el.getAttribute("data-text") || "";
        const speed = 45;
        el.textContent = "";
        let i = 0;
        const type = () => {
          if (i < text.length) {
            el.textContent += text.charAt(i);
            i += 1;
            setTimeout(type, speed);
          }
        };
        type();
      }
    }
  }, []);

  return (
    <>
      {/* Header */}
      <header className="text-white">
        <div className="bg-[#05508d] w-full px-3 sm:px-4 py-2">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <img src="/deped-rov-header-1.png" alt="Left logo placeholder" className="h-12 sm:h-16 md:h-20 w-auto" />
                <div className="leading-tight" />
              </div>
              <img src="/ICT CamNorte Logo v2.png" alt="Right logo placeholder" className="hidden sm:block h-[60px] w-[60px]" />
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative mx-auto max-w-6xl px-3 sm:px-4 py-10 sm:py-14 pb-24 sm:pb-28">
        <h1 className="text-center font-serif-hero text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wide" data-aos="fade-up">
          <span id="typewriter" data-text="How we can help you Ma’am / Sir?"></span>
          <span className="animate-blink">|</span>
        </h1>

        <div className="mx-auto mt-8 sm:mt-10 w-full max-w-2xl rounded-2xl border border-white/40 bg-white/60 p-4 sm:p-6 shadow-xl backdrop-blur" data-aos="fade-up" data-aos-delay="150">
          <div className="grid gap-3 sm:gap-4">
            {ACTIONS.map((item,idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="group inline-flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-[#1f5fa8] to-[#0e7ad6] px-4 sm:px-5 py-3.5 sm:py-4 text-white text-base sm:text-lg shadow hover:from-[#1c589c] hover:to-[#0d6ebe] active:from-[#184f8d] active:to-[#0c66b1] transition-all" data-aos="fade-up" data-aos-delay={item.delay || 0}>
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
                  </span>
                  <span className="font-medium">{item.title}</span>
                </span>
                <span className="opacity-80 transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white">
        <div className="bg-[#05508d] w-full px-3 sm:px-4 py-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="text-sm">© 2025 Department of Education Region V. All rights reserved.</div>
              <div className="flex items-center gap-2 sm:gap-3">
                <img src="/deped-rov-header-1.png" alt="Left logo placeholder" className="h-10 w-auto" />
                <img src="/ICT CamNorte Logo v2.png" alt="Right logo placeholder" className="hidden sm:block h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


