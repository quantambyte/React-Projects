import createStore from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let store = (set) => ({
  people: ['Uzii', 'RGB'],
  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, person],
    })),
  dark: false,
  toggleDarkMode: () =>
    set((state) => ({ dark: !state.dark })),
});

store = devtools(store);
store = persist(store, { name: 'user_settings' });

const useStore = createStore(store);

export default useStore;
