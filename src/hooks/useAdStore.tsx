import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdStoreInterface {
  ads: {
    id: number;
    title: string;
    text: string;
  }[];
}

const initialAdStore = {
  ads: [
    { id: 1, title: 'Add One', text: 'Add One text' },
    { id: 2, title: 'Add Two', text: 'Add Two text' },
    { id: 3, title: 'Add Three', text: 'Add Three text' },
  ],
};

const getAdStore = () => {
  const adStore = localStorage.getItem('ad-store');
  return adStore ? JSON.parse(adStore) : initialAdStore;
};

type AdStoreType = {
  store: AdStoreInterface;
  update: (store: AdStoreType['store']) => void;
};

export const useAdStore = create(
  persist<AdStoreType>(
    (set) => ({
      store: getAdStore(),
      update: (newAdStore: AdStoreType['store']) =>
        set(() => ({ store: newAdStore })),
    }),
    {
      name: 'ad-store',
    }
  )
);
