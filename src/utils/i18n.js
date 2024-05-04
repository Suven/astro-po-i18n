import { readFile } from "fs/promises";
import { existsSync } from "fs";
import Gettext from "node-gettext";
import { po } from "gettext-parser";

const mainLocale = "en";
const locales = ["en", "de", "es"];

const gt = new Gettext();
const locale = process.env.locale || mainLocale;

for await (const locale of locales) {
  const path = `./locales/${locale}.po`;
  if (!existsSync(path)) {
    continue;
  }
  const file = await readFile(path, "utf-8");
  const parsed = po.parse(file);
  gt.addTranslations(locale, "messages", parsed);
}

gt.on(
  "error",
  (error) =>
    locale !== mainLocale &&
    console.log(
      `\x1b[1m\x1b[38;5;208m${new Date().toLocaleTimeString("it-IT")} \x1b[0m\x1b[38;5;208m[i18n]\x1b[0m ${error}`,
    ),
);

gt.setLocale(locale);

const url = (path, lang, fqdn) => {
  if (!lang) {
    lang = locale;
  }

  const domain = fqdn ? import.meta.env.SITE : "";
  const base = import.meta.env.BASE_URL ? `${import.meta.env.BASE_URL}/` : "";
  const langPart =
    lang === mainLocale ||
    (import.meta.env.MODE === "development" && lang === locale)
      ? ""
      : `${lang}/`;
  const safePath = path.replace(/^\//, "");

  return `${domain}${base}${langPart}${safePath}`;
};

export default gt;
export { locale, locales, mainLocale, url };
