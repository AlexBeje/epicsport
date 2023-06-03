export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400],
      },
    },
  },
  runtimeConfig: {
    public: {
      forwardEmailApiKey: process.env.FORWARD_EMAIL_API_KEY,
    },
  },
});
