---
title: Deploying
sidebar_position: 6
---

# Deploying

Turbo-IDE's editor and community site are a static site plus a few Cloudflare Pages Functions. This page covers how turboshare.org.uk is deployed and how to host a build yourself.

You do not need this to contribute changes.

## How turboshare.org.uk deploys

turboshare.org.uk is a [Cloudflare Pages](https://developers.cloudflare.com/pages/) project connected to the Turbo-IDE/scratch-gui repository. There is no deploy script and no `gh-pages` branch.

- Every push to `develop` builds and deploys production.
- Every other branch, including pull request branches, gets a preview deployment at `https://<branch>.scratch-gui.pages.dev`. The Cloudflare Pages check on the pull request links to it.

The build runs `pnpm run build` with `MW_COMMUNITY=true` and publishes `build/`. When `scripts/build.mjs` sees Cloudflare's `CF_PAGES` variable, it also:

- moves every engine fork to the latest commit on its `develop` branch and reinstalls, so a deploy ships the newest scratch-vm, scratch-blocks, and so on. Set `MW_PINNED_FORKS=1` to keep the commits pinned in `package.json` instead.
- clones and builds this docs site (Turbo-IDE/docs `master`) and copies it to `/docs`.

Merging into a fork or into the docs repo does not redeploy by itself. The change goes live with the next scratch-gui deploy, or when a Cloudflare build is retried.

Each build writes `version.json` with the scratch-gui commit, the fork commits it used, and the build time. [turboshare.org.uk/version.json](https://turboshare.org.uk/version.json) shows what is live.

## Build output

```bash
MW_COMMUNITY=true pnpm run build
```

This writes the whole site to `build/`: the community site at `/`, the editor at `/editor`, the player, the embed page, and the static assets. Set `MW_BUILD_DOCS=1` to add the docs site, or keep a built docs checkout at `../docs/build`, which the build copies in when it exists. See [Building and Running](/contributing/building-running) for the other build scripts.

## Hosting a build yourself

### Cloudflare Pages

1. Create a Pages project connected to your fork of scratch-gui.
2. Set the build command to `pnpm run build` and the output directory to `build`.
3. Add the environment variable `MW_COMMUNITY=true`, plus `NODE_OPTIONS=--max-old-space-size=7168` if the build runs out of memory.

Cloudflare picks up the `functions/` directory at the repository root as [Pages Functions](https://developers.cloudflare.com/pages/functions/). `functions/_middleware.js` adds link preview tags (title, description, image) to community pages. `static/_headers`, copied to `build/_headers`, sets cache headers for the hashed assets.

### Other static hosts

Any host that can serve a directory works. You lose the link preview tags from `functions/`, and you must reproduce two routing rules that Cloudflare Pages applies on its own:

- A path without an extension serves the HTML file of the same name, so `/editor` serves `editor.html`, and likewise for `/player`, `/fullscreen`, `/addons`, and `/credits`.
- Any other path with no matching file, such as `/explore` or `/p/<slug>`, serves `index.html`, the community app.

Without these rewrites, client routes return 404 when the page is reloaded. The pages are ES modules, so they must be served over HTTP.

## The community backend

The static build is only the frontend. The community backend, Turbo-IDE-api, is a separate OSL service that is deployed on its own, and the frontend always talks to `https://api.turboshare.org.uk/v1`. You do not need it to host just the editor. See [Project Structure](/contributing/project-structure) for what it is.

## See also

- [Building and Running](/contributing/building-running)
- [Project Structure](/contributing/project-structure)
- [Contributing](/contributing/guidelines)
