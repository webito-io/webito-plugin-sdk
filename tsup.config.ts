import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Only include index.ts for building
  format: ["cjs", "esm"], // Build for CommonJS and ES modules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist', // Optional: specify output directory
});