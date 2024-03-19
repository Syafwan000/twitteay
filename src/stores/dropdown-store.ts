import { create } from "zustand";

type Store = {
  show: boolean,
  setShow: () => void
};

const useDropdownStore = create<Store>((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show }))
}));

export default useDropdownStore;