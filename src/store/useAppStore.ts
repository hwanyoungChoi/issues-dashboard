import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TContentViewType = "list" | "card";

interface AppStoreState {
  contentViewType: TContentViewType;
  setContentViewType: (type: TContentViewType) => void;
}

export const useAppStore = create<AppStoreState>()(
  persist(
    (set) => ({
      contentViewType: "list",
      setContentViewType: (type) => set({ contentViewType: type }),
    }),
    {
      name: "app-store",
    }
  )
);
