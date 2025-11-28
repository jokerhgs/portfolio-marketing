"use client";

import { useEffect } from "react";
import { FaArrowDown, FaEnvelope } from "react-icons/fa";

/**
 * This client component enables smooth scrolling for anchor links within the page to fix hydration errors.
 */
const useSmoothScroll = () => {
  useEffect(() => {
    // Handler for smooth scrolling
    function smoothScroll(e: Event) {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          // Update the URL hash without jumping
          history.pushState(null, "", href);
        }
      }
    }

    // Attach handlers
    const anchors = Array.from(
      document.querySelectorAll('a[href^="#"]')
    ) as HTMLAnchorElement[];
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
};

export const HomeSection = () => {
  useSmoothScroll();

  return (
    <section
      id="home"
      className="scroll-mt-24 relative w-full min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <div className="relative flex flex-col items-center gap-6 md:gap-8 text-center w-full px-4 sm:px-6 max-w-4xl mx-auto py-[15vh]">
        {/* Greeting */}
        <div className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold">
          Hi! I’m <span className="text-primary">Joker</span>
        </div>

        {/* Professions */}
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-secondary-foreground flex flex-col items-center gap-1">
          <span>
            Software Engineer <span className="text-primary">|</span> AI &amp;
            Automation Enthusiast
          </span>
        </div>

        {/* Animated Divider */}
        <div className="w-full max-w-md my-4 h-px bg-linear-to-r from-transparent via-primary to-transparent transition-all" />

        {/* Value Proposition */}
        <div className="text-sm sm:text-base md:text-lg text-secondary-foreground max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed">
          I help small and medium businesses turn{" "}
          <span className="text-[--primary] font-medium">
            repetitive marketing tasks
          </span>{" "}
          into{" "}
          <span className="text-[--primary] font-medium">
            automated, profitable systems
          </span>
          —so you can focus on growing your business, not managing the
          day-to-day.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white bg-primary font-medium text-sm sm:text-base w-full sm:w-auto transition-all"
          >
            <FaEnvelope size={18} className="shrink-0" color="white" />
            Get in Touch
          </a>

          <a
            href="#marketing-ai"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-border font-medium text-sm sm:text-base w-full sm:w-auto transition-all hover:border-[--primary]"
          >
            See How Marketing Can Run Automatically
            <FaArrowDown size={18} className="shrink-0" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center cursor-pointer select-none group"
      >
        <div className="p-2 rounded-full bg-[--primary]/10 transition-transform duration-200 group-hover:scale-110">
          <FaArrowDown className="text-[--text-secondary] w-5 h-5" />
        </div>
        <div className="text-xs text-[--text-secondary] mt-2">Scroll Down</div>
      </a>
    </section>
  );
};
