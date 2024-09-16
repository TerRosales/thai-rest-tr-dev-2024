import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Base URL for the app
  build: {
    outDir: "dist", // Output directory for the build files
  },
});
