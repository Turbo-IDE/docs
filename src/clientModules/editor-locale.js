// These pages render inside the editor's Help window and are opened from editor
// links, so the docs follow the editor's language option (Settings > Editor >
// Language, or the editor's ?locale= URL parameter) instead of asking again.
// Both apps share an origin, so the selection is read from, in order: the docs
// URL itself, the parent frame while embedded, and the editor's localStorage
// key. Without any of those signals the current language is kept, which leaves
// the standalone language dropdown in charge.

const DOCS_BASE = '/docs';

// Mirrors the locales in docusaurus.config.js. Only these can be selected here.
const SUPPORTED_LOCALES = ['en', 'vi'];

// Same key the editor writes when its language changes (tw:language).
const EDITOR_LANGUAGE_KEY = 'tw:language';

const normalizeLocale = value => {
    if (typeof value !== 'string') return null;
    const base = value.trim().toLowerCase().replace(/_/g, '-').split('-')[0];
    return SUPPORTED_LOCALES.indexOf(base) === -1 ? null : base;
};

const queryLocale = () => {
    try {
        const query = new URLSearchParams(window.location.search);
        for (const value of [...query.getAll('locale'), ...query.getAll('lang')]) {
            const match = normalizeLocale(value);
            if (match) return match;
        }
    } catch (e) {
        // URLSearchParams needs a full URL; ignore and fall through
    }
    return null;
};

const storedLocale = () => {
    try {
        return normalizeLocale(window.localStorage.getItem(EDITOR_LANGUAGE_KEY));
    } catch (e) {
        return null; // storage can be unavailable; the other sources still work
    }
};

// The editor mirrors its current language onto <html lang>, live.
const parentLocale = () => {
    if (window.parent === window) return null;
    try {
        return normalizeLocale(window.parent.document.documentElement.lang);
    } catch (e) {
        return null; // cross-origin parent: nothing to read
    }
};

const browserLocale = () => {
    const languages = window.navigator.languages || [window.navigator.language];
    for (const language of languages) {
        const match = normalizeLocale(language);
        if (match) return match;
    }
    return 'en';
};

// The language the pages should render in, or null to leave the current one
// alone. The browser language is only used while embedded: on the standalone
// site it would fight the navbar's language dropdown.
const editorLocale = () => {
    if (window.parent !== window) {
        // Embedded in the editor: the editor's current language wins over the
        // hint in the docs URL, which can be stale after a language change.
        return parentLocale() || storedLocale() || browserLocale();
    }
    return queryLocale() || storedLocale();
};

// The default locale has no prefix; the others sit at <base>/<locale>/.
const currentLocale = () => {
    const path = window.location.pathname;
    return path.indexOf(`${DOCS_BASE}/vi/`) === 0 ||
        path === `${DOCS_BASE}/vi` ? 'vi' : 'en';
};

const localePath = (path, locale) => {
    const withoutLocale = path.replace(
        new RegExp(`^${DOCS_BASE}/vi(?=/|$)`),
        DOCS_BASE
    );
    if (locale === 'en') return withoutLocale;
    return withoutLocale.replace(
        new RegExp(`^${DOCS_BASE}(?=/|$)`),
        `${DOCS_BASE}/vi`
    );
};

const syncEditorLocale = () => {
    if (typeof window === 'undefined') return false;
    const locale = editorLocale();
    if (!locale || locale === currentLocale()) return false;
    try {
        const url = new URL(window.location.href);
        url.pathname = localePath(url.pathname, locale);
        window.location.replace(url.toString());
        return true;
    } catch (e) {
        return false;
    }
};

if (typeof window !== 'undefined') {
    // The navbar (with its language dropdown) is only for the standalone site;
    // the Help window gets its language from the editor.
    if (window.parent !== window) {
        document.documentElement.classList.add('mw-embedded');
    }
    if (!syncEditorLocale()) {
        // The editor can change language while the Help window is open; it
        // writes the same localStorage key, which fires a storage event here.
        window.addEventListener('storage', event => {
            if (event.key === EDITOR_LANGUAGE_KEY) syncEditorLocale();
        });
    }
}
