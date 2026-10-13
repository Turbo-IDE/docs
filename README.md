# Turbo-IDE Docs

https://turboshare.org.uk/docs/

This repository contains documentation for Turbo-IDE.

## Writing content

If you found a typo or have a suggestion to improve the pages, the easiest way to get it resolved is to post about it on the Scratch profile https://scratch.mit.edu/users/M1stium/#comments or in GitHub issues https://github.com/Turbo-IDE/docs/issues/new. Minor fixes get resolved very quickly usually.

Alternatively, you can submit a pull request yourself containing a fix. The easiest way to edit a page is:

1. Open the website, https://turboshare.org.uk/docs/
2. Find the page you want to edit
3. Click "Edit this page" at the bottom
4. Sign in with a GitHub account
5. Fork the repository
6. Use the GitHub editor to modify the file. It uses [Markdown syntax](https://www.markdownguide.org/basic-syntax/).
7. Click "Propose Changes"

If you'd like to write a new page, we'd prefer that you ask us first before you spend much time writing.

## Translations

The docs are published in English and Vietnamese. The language shown in the editor's Help window, and on every docs link inside the editor, follows the editor's own language option (Settings, or the `?locale=` parameter on the editor URL); no extra choice is needed. On the standalone site, the language dropdown in the navbar switches language.

English pages live in `docs/`, Vietnamese pages in `i18n/vi/docusaurus-plugin-content-docs/current/`, mirroring the same paths and front matter (a translated page keeps the English page's slug and `sidebar_position`). A page that is not translated yet falls back to its English version at the same `/vi` URL, so the sidebar never breaks while a translation is pending.

To add a translation, copy the English page into the Vietnamese tree with the same relative path and translate the content. Then check the state of the locale:

```bash
npm run i18n:translate     # coverage report and consistency checks
npm run i18n:editor:check  # verifies the editor's docs links still resolve
```

## Local Development

This website is built with [Docusaurus](https://docusaurus.io/). Documentation is inside the `docs` folder, generally that is all you will have to touch. We accept pull requests.

```bash
npm install
# For development:
npm start
# For production:
npm run build
```
