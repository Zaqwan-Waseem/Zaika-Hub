import { create } from "zustand";

interface foodieType {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  workAddress: string;

  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (number: string) => void;
  setAddress: (address: string) => void;
  setWorkAddress: (workAddress: string) => void;
}

const useFoodieStore = create<foodieType>((set) => ({
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  workAddress: "",

  setName: (name) => set({ name: name }),
  setEmail: (email) => set({ email: email }),
  setPhoneNumber: (number) => set({ phoneNumber: number }),
  setAddress: (address) => set({ address: address }),
  setWorkAddress: (workAddress) => set({ workAddress: workAddress }),
}));
