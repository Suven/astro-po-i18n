import { defineConfig } from "astro/config";
import { locale, mainLocale } from "./src/utils/i18n";

const langDir = locale === mainLocale ? "" : `${locale}/`;

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  output: "static",
  outDir: `dist/${langDir}`,
});
