import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // listen on all IPv4/IPv6 interfaces
    port: 8080,
    allowedHosts: [
      "cloudops.telemetrics.tech", // ✅ allow this external host
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: mode === "development",
  },
  preview: {
    port: 4173,
    allowedHosts: ["cloudops.telemetrics.tech"],
  },
}));