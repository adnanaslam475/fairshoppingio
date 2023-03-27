// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
    url: 'https://qfgusybkqqvjhrotseuz.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmZ3VzeWJrcXF2amhyb3RzZXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MTQ4NjQsImV4cCI6MTk5MjM5MDg2NH0.Go3YVWTVKvsvV2wkXNICDA7aZ7T6Yrji_W6i15oF6F4',
  },
  ssr: false
});
