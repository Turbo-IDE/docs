// Vietnamese translation helper for the docs.
//
//   node scripts/translate-vi.mjs           report coverage and check consistency
//   node scripts/translate-vi.mjs --write   scaffold the missing Vietnamese pages
//
// Pages left unscaffolded keep their English version: Docusaurus serves the
// English content at the same /vi URL, so the sidebar never breaks while a page
// waits for a translation. The checks below keep that fallback honest: the brand
// must never come back, and a translated page must keep the English page's slug
// and sidebar position so both trees stay navigable side by side.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(docsRoot, 'docs');
const translationDir = path.join(docsRoot, 'i18n', 'vi', 'docusaurus-plugin-content-docs', 'current');

const LOCALE = 'vi';
const OLD_BRAND = [/MistWarp/g, /mistwarp/g];
const SUPPORTED_EXTENSIONS = ['.md', '.mdx'];

const walk = (dir, base = dir) => {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return walk(full, base);
        if (!SUPPORTED_EXTENSIONS.includes(path.extname(entry.name))) return [];
        return [path.relative(base, full).split(path.sep).join('/')];
    });
};

const frontMatter = text => {
    const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    if (!match) return null;
    return match[1];
};

const field = (frontMatterText, name) => {
    const match = new RegExp(`^${name}:\\s*(.+)$`, 'm').exec(frontMatterText || '');
    return match ? match[1].trim() : null;
};

const sourcePages = walk(sourceDir);
const translatedPages = walk(translationDir);

const missing = sourcePages.filter(page => !translatedPages.includes(page));
const stale = translatedPages.filter(page => !sourcePages.includes(page));

const readIfExists = file => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null);

const problems = [];

for (const page of translatedPages) {
    const text = readIfExists(path.join(translationDir, page));
    const old = OLD_BRAND.some(pattern => pattern.test(text));
    if (old) problems.push(`i18n/${LOCALE}/${page}: still mentions the old brand`);
    const sourceText = readIfExists(path.join(sourceDir, page));
    const sourceFront = frontMatter(sourceText || '');
    const translatedFront = frontMatter(text);
    const slug = field(translatedFront, 'slug');
    const sourceSlug = field(sourceFront, 'slug');
    if (slug !== sourceSlug) problems.push(`i18n/${LOCALE}/${page}: slug "${slug}" does not match "${sourceSlug}"`);
    const position = field(translatedFront, 'sidebar_position');
    const sourcePosition = field(sourceFront, 'sidebar_position');
    if (position !== sourcePosition) {
        problems.push(`i18n/${LOCALE}/${page}: sidebar_position "${position}" does not match "${sourcePosition}"`);
    }
}

// Internal links in a translated page may point at an English page; Docusaurus
// falls back to the default locale for those. Pointing at nothing is a problem.
const linkedPages = text => {
    const links = [];
    // Markdown links: [text](./page), [text](/page), [text](../dir/page)
    for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
        const raw = match[1];
        const target = raw.replace(/[?#].*$/, '').replace(/\/+$/, '');
        if (/^(?:[a-z]+:|\/\/|#)/i.test(target)) continue;
        // Absolute paths are resolved from the docs root, everything else
        // relative to the page that holds the link.
        const resolved = target.startsWith('/') ?
            path.posix.normalize(target.replace(/^\//, '')) :
            path.posix.normalize(path.posix.join(path.posix.dirname(page), target));
        links.push(resolved);
    }
    return links;
};

for (const page of translatedPages) {
    const text = readIfExists(path.join(translationDir, page));
    for (const link of linkedPages(text)) {
        const asPage = `${link}.md`;
        const asIndex = path.posix.join(link, 'index.md');
        if (!sourcePages.includes(asPage) && !sourcePages.includes(asIndex)) {
            problems.push(`i18n/${LOCALE}/${page}: link "${link}" has no page to fall back to`);
        }
    }
}

if (process.argv.includes('--write')) {
    let scaffolded = 0;
    for (const page of missing) {
        const target = path.join(translationDir, page);
        fs.mkdirSync(path.dirname(target), {recursive: true});
        const sourceText = readIfExists(path.join(sourceDir, page));
        fs.writeFileSync(target, sourceText, 'utf8');
        scaffolded += 1;
    }
    console.log(`Scaffolded ${scaffolded} Vietnamese page(s); they still show English content until translated.`);
}

console.log(`Vietnamese docs: ${translatedPages.length}/${sourcePages.length} pages translated`);
if (missing.length > 0) {
    console.log(`\nUntranslated pages (English fallback):\n  ${missing.join('\n  ')}`);
}
if (stale.length > 0) {
    problems.push(`i18n/${LOCALE}: pages that no longer exist in English: ${stale.join(', ')}`);
}
if (problems.length > 0) {
    console.error(`\n${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
    process.exit(1);
}
console.log('All checks passed.');
