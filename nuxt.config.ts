export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400],
      },
    },
  },
});
