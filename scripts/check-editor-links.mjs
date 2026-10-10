// Cross-check the editor's help entries against the docs they link to.
//
// The editor's Help window (scratch-gui/src/lib/help/index.js) deep-links into
// docs pages by path, so a renamed or deleted page has to be caught here rather
// than as a broken iframe inside the editor. Also verifies every locale the docs
// declare has an i18n folder to live in.

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const editorHelp = path.join(docsRoot, '..', 'scratch-gui', 'src', 'lib', 'help', 'index.js');
const sourceDir = path.join(docsRoot, 'docs');

const problems = [];

const config = fs.readFileSync(path.join(docsRoot, 'docusaurus.config.js'), 'utf8');
const localesLine = /locales:\s*\[([^\]]+)\]/.exec(config);
if (!localesLine) {
    console.error('docusaurus.config.js: cannot read the i18n locales list');
    process.exit(1);
}
const declaredLocales = [...localesLine[1].matchAll(/'([^']+)'/g)].map(match => match[1]);
// The default locale lives in docs/docs directly, so it has no i18n folder.
const defaultLocale = /defaultLocale:\s*'([^']+)'/.exec(config)?.[1];
for (const locale of declaredLocales.filter(locale => locale !== defaultLocale)) {
    if (!fs.existsSync(path.join(docsRoot, 'i18n', locale))) {
        problems.push(`docusaurus.config.js: locale "${locale}" has no i18n/${locale} folder`);
    }
}

if (!fs.existsSync(editorHelp)) {
    console.error(`Cannot find the editor help registry at ${editorHelp}`);
    process.exit(1);
}

const pages = fs.readdirSync(sourceDir, {withFileTypes: true, recursive: true})
    .filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(entry => path.relative(sourceDir, path.join(entry.parentPath ?? entry.path, entry.name))
        .split(path.sep).join('/').replace(/\.md$/, ''));

const help = fs.readFileSync(editorHelp, 'utf8');
const docsPaths = [...help.matchAll(/docsPath:\s*'([^']+)'/g)].map(match => match[1]);

if (docsPaths.length === 0) problems.push('editor help registry: no docsPath entries found');
for (const docsPath of docsPaths) {
    const page = docsPath.replace(/^\//, '');
    if (!pages.includes(page)) problems.push(`editor help registry: docsPath "${docsPath}" has no docs page`);
}

// The docs locales the editor can ask for, from the editor's own mapping.
const helpIndex = fs.readFileSync(editorHelp, 'utf8');
const editorDocsLocales = [...helpIndex.matchAll(/const DOCS_LOCALES = \[([^\]]+)\]/g)]
    .flatMap(match => [...match[1].matchAll(/'([^']+)'/g)].map(locale => locale[1]));
for (const locale of editorDocsLocales) {
    if (!declaredLocales.includes(locale)) {
        problems.push(`editor help registry: language "${locale}" is not a docs locale`);
    }
}

if (problems.length > 0) {
    console.error(`${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
    process.exit(1);
}
console.log(`Editor help links and locales are in sync (${docsPaths.length} docs links, locales: ${declaredLocales.join(', ')}).`);
