# Astro Starter Kit: PO based i18n SSG

This demo repository, which could function as your starting point or
inspiration on how to set up a seo-friendly multilanguage website, that
can be translated using well established gettext and po translation files.

To learn more about this and how a workflow could look like, head over to the demo.

## Differences to Astros i18n

First things first: Astro itself comes with a recommendation about how to do proper
internalization. You can read about this at https://docs.astro.build/en/recipes/i18n/.

In comparison, this one is more opiniated.

| astro i18n | this starter | better then astro? |
| ---------- | ------------ | ------------------ |
| allows you to configure i18n to have no path for the default language | just does it | 🤔 |
| has two variants for translating, you can either create seperate content-collections for each language (for example a `en/about.md` and `es/about.md`), or you can create yourself json-structures where you can translate keys. It also allows you to mix both. Either way, you create them by hand | follows the very old and established gettext-flow. You just use translation-keys in your astro-files and a translator-software like https://poedit.net/ will grab all keys from your source-code and make them translatable automaticly. Gettext also supports placeholders, proper pluralization and other stuff | 👍 |
| way, in which you are working with `md` and custom `tson`/`json` is not something every non-dev could handle. There is also no third party ecosystem for this approach | is using `.po`-files which are well established and known to all professional translators. In addition to that, Poedit allows you to **speed up translating with AI**. There are also platforms like https://crowdin.com/ where you can let others submit translations for your page. Companys like Discord, Microsoft, Valve and Github use that service for translating their apps | 👍 |
| has first class citizen build support to create / preview all translations at once. It also brings support for SSR | only enables you to preview one language at a time. You can build all languages at once cleanly into dist, but it will take longer then in astros variant, since we are building one language at a time | 👎 |
