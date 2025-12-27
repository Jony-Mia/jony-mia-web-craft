import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
  plugins: [react(), mode === "development"].filter(Boolean),
>>>>>>> 2885f632fd8de9fbd7e0409bef73fcfc2b54fc27
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
