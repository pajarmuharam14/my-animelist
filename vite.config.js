import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const process = dotenv();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
