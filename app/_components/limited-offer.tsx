"use client";

import { useEffect, useRef, useState } from "react";
import { FaGift } from "react-icons/fa";
import { useOfferStore } from "../_stores/use-offer-store";

export const LimitedOfferBanner = () => {
  const { offer, loading, isDismissed, fetchOffer, setIsDismissed } =
    useOfferStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showTitlePrompt, setShowTitlePrompt] = useState(true);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch the offer right away (on mount) if not already loaded
  useEffect(() => {
    if (!offer && loading) {
      fetchOffer();
    }
  }, [offer, loading, fetchOffer]);

  const openModal = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsModalVisible(true);
    requestAnimationFrame(() => setIsModalOpen(true));
    setShowTitlePrompt(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    closeTimerRef.current = setTimeout(() => {
      setIsModalVisible(false);
    }, 300);
  };

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    },
    []
  );

  const dismissOffer = () => {
    closeModal();
    setIsDismissed(true);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    closeModal();
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Do not show anything until we know if offer exists (after loading)
  if (isDismissed || loading || !offer) return null;

  return (
    <>
      <div className="fixed bottom-24 right-4 z-40">
        <div className="relative pointer-events-none w-[280px] max-w-[80vw] sm:w-auto sm:max-w-[90vw]">
          <div className="flex items-center justify-end gap-3 pointer-events-none">
            {showTitlePrompt && (
              <div className="relative w-full rounded-md border border-primary/30 bg-white px-4 py-3 text-sm font-semibold text-primary shadow-lg pointer-events-auto">
                <p>{offer.title}</p>
                <button
                  type="button"
                  aria-label="Hide offer title prompt"
                  className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-white text-primary text-xs font-bold shadow hover:bg-primary hover:text-white transition"
                  onClick={() => setShowTitlePrompt(false)}
                >
                  ×
                </button>
              </div>
            )}
            <button
              className={`flex items-center justify-center rounded-full shadow-lg bg-primary text-white w-16 h-16 flex-shrink-0 ${
                isModalOpen ? "" : "animate-pulse"
              } cursor-pointer pointer-events-auto transition`}
              title="View Limited Offer"
              aria-label="View Limited Offer"
              type="button"
              onClick={openModal}
              tabIndex={0}
            >
              <FaGift className="w-7 h-7" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Dismiss limited offer"
            className="pointer-events-auto absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-white text-primary text-xs font-bold shadow-md hover:bg-primary hover:text-white transition"
            onClick={dismissOffer}
          >
            ×
          </button>
        </div>
      </div>
      {isModalVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative w-full max-w-lg rounded-md bg-gray-50 p-6 text-primary shadow-2xl transition-all duration-300 ${
              isModalOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-95 opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Close limited offer modal"
              className="absolute top-4 right-4 text-xl font-bold text-primary/70 hover:text-primary transition"
              onClick={closeModal}
            >
              ×
            </button>
            <p className="text-base font-bold mb-2">{offer.title}</p>
            <p className="text-sm font-semibold text-primary/80 mb-4">
              {offer.description}
            </p>
            <ol className="space-y-3 text-sm font-semibold text-primary/90 list-decimal list-inside">
              {offer.steps.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 rounded-md bg-primary text-white px-6 py-3 font-semibold shadow-lg hover:bg-primary/90 transition"
                onClick={scrollToContact}
              >
                Book the discovery call
              </button>
              <button
                type="button"
                className="flex-1 rounded-md border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/5 transition"
                onClick={closeModal}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
