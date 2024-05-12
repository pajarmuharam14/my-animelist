import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

const process = dotenv();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_API_KEY_BASE_URL": JSON.stringify(process.env.VITE_API_KEY_BASE_URL),
  },
});
