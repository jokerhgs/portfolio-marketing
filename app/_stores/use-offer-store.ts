import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type LimitedOffer = {
  title: string;
  description: string;
  steps: string[];
};

interface OfferStore {
  offer: LimitedOffer | null;
  loading: boolean;
  isDismissed: boolean;
  setOffer: (offer: LimitedOffer | null) => void;
  setLoading: (loading: boolean) => void;
  setIsDismissed: (isDismissed: boolean) => void;
  fetchOffer: () => Promise<void>;
}

// SessionStorage storage implementation
const sessionStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === "undefined") return null;
    return window.sessionStorage.getItem(name);
  },
  setItem: (name: string, value: string): void => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(name, value);
  },
  removeItem: (name: string): void => {
    if (typeof window === "undefined") return;
    window.sessionStorage.removeItem(name);
  },
};

export const useOfferStore = create<OfferStore>()(
  persist(
    (set) => ({
      offer: null,
      loading: true,
      isDismissed: false,
      setOffer: (offer) => set({ offer }),
      setLoading: (loading) => set({ loading }),
      setIsDismissed: (isDismissed) => set({ isDismissed }),
      fetchOffer: async () => {
        set({ loading: true });
        try {
          const { axiosClient } = await import("../_lib/axios");
          const response = await axiosClient.get("/api/offers");
          if (response.data && response.data.offer) {
            set({ offer: response.data.offer, loading: false });
          } else {
            set({ offer: null, loading: false });
          }
        } catch {
          set({ offer: null, loading: false });
        }
      },
    }),
    {
      name: "offer-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        offer: state.offer,
        isDismissed: state.isDismissed,
      }),
      onRehydrateStorage: () => (state) => {
        // If we have persisted offer data, set loading to false
        if (state?.offer) {
          state.setLoading(false);
        }
      },
    }
  )
);
