import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	/**
	 * Descomentar línea 11 su usas GH-PAGES
	 * y borras línea 12
	 */
	// base: "/PachambaKids-React-App/",
	base: "/",
});
