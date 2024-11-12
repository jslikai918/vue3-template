import { defineStore } from "pinia";

const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: state => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  },
  persist: {
    key: "home",
    storage: localStorage
  }
});

export default useHomeStore;
