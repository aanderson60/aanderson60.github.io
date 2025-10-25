# Copilot instructions for aanderson60.github.io

This is a small, static personal website (HTML/CSS + a few client scripts). Keep changes minimal, predictable, and consistent with the existing structure.

Summary (big picture)
- Single-page-like static site: top-level HTML pages (`index.html`, `projects.html`, `resume.html`, `contact.html`) and a `projects/` folder with individual project pages.
- Global styles are in `style.css` at the repo root. Images and small assets live in `src/` (e.g., `src/github.png`, `src/linkedin.png`, `src/favicon.ico`).
- Lightweight client scripting (ES modules / plain scripts) is in `src/scripts/` (e.g., `class.js`, `counter.js`). There is no build system or server-side code.

What to assume
- No Node, Python packaging, or build files detected (no `package.json`, `pyproject.toml`, etc.). Treat this as a purely static site.
- Local preview is done by opening files in a browser or serving the folder over a simple static server.

Key conventions & patterns (use these when editing)
- Files: update the HTML page you intend to change (e.g., `index.html`) and the shared CSS in `style.css` for visual changes.
- Assets: images and icons are under `src/`. Use relative paths exactly as existing pages do (e.g., `<img src="src/github.png">`).
- Scripts: small client-side scripts live in `src/scripts/`. If you add behavior, keep to vanilla JS and include them with relative `<script>` tags.
- Links: the repo uses some shorthand links (for example `href="projects"` on `index.html`) — be consistent with surrounding pages. When adding links prefer explicit filenames when appropriate (e.g., `projects.html` or `projects/yourpage.html`) to avoid ambiguity.

Integration points and things to watch
- Relative linking: pages assume same-root-relative links. Verify link targets exist (some anchors point to `projects` while there is also `projects.html` — pick one consistent style when changing multiple pages).
- Footer/header navigation: present in multiple pages; update all pages that share navigation when changing labels/URLs.
- No server routing: server-side rewrites are not available. Links to directories rely on hosting behavior (GitHub Pages will serve `projects/` directory contents but local file previews may differ).

Developer workflows (how to preview and debug)
- Quick local preview (power shell / any shell): run a simple static server from the repo root:

  python -m http.server 8000

  Then open http://localhost:8000 in your browser. (Or use your editor's Live Server extension.)
- Debugging front-end issues: open DevTools in the browser. Check Network for 404s (missing images/scripts), and Console for JS errors.

Examples from this repo
- Homepage: `index.html` — header links use `href="projects"` and `href="resume"` while footer explicitly references `index`, `projects`, `resume`. If you change the nav labels or hrefs, update `index.html`, `projects.html`, `resume.html`, and `contact.html` consistently.
- Global styles: `style.css` defines header animation, project entry styles (`.project_entry_i_wrapper`), and layout rules. Prefer modifying existing selectors rather than adding many new top-level rules.
- Scripts: small modules like `src/scripts/counter.js` are present but not built. If you add new scripts, include them by path in the page that needs them.

What NOT to do
- Do not introduce a build system or change repository layout without explicit request. This repo is intentionally simple.
- Avoid large refactors across many pages in a single PR — prefer small, reviewable changes (update header/footer across pages in one PR if you must change navigation).

If you're unsure
- Ask for clarification when a requested change implies a site-wide restructure (routing, build, or language change).

Thanks — please point out anything missing or unclear and I will iterate on this guidance.
