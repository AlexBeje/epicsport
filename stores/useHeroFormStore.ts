export const useHeroFormStore = defineStore("counter", {
  state: () => ({ isHeroFormOpened: false }),
  actions: {
    toggleHeroForm() {
      this.isHeroFormOpened = !this.isHeroFormOpened;
    },
  },
});
