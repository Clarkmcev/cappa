import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // build: {
  //   assetsDir: "static/media",
  // },
  // build: {
  //   outDir: "/var/www/",
  //   emptyOutDir: true, // also necessary
  // },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      lib: "/src/lib",
    },
  },
  server: {
    host: true,
    port: 3000,
    open: false,
  },
});
