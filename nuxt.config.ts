export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      forwardEmailApiKey: process.env.FORWARD_EMAIL_API_KEY,
    },
  },
  css: ["~/layouts/global.css"],
});
