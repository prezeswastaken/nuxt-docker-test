// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //components: ["~/components"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
