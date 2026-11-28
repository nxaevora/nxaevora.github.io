# website

The source of the NXAevora website, published at <https://nxaevora.github.io/website/>.

NXAevora runs Pokémon Legends: Arceus natively on the PC. The project itself lives in
[nxaevora/nxaevora-main](https://github.com/nxaevora/nxaevora-main). This repository holds only the website.

> [!NOTE]
> The website is under construction.

## Stack

- [Astro](https://astro.build/) with TypeScript, built as a static site
- [Material Design 3](https://m3.material.io/) with the [Material Web](https://github.com/material-components/material-web) components
- GitHub Pages, deployed by GitHub Actions

## Folder structure

```
website/
  src/
    pages/          one file for each page of the site
    layouts/        page layouts shared by the pages
    components/     reusable UI components
    content/blog/   blog posts in Markdown
    styles/         theme tokens and global styles
    scripts/        client scripts (Material Web components)
    data/           site data, such as the feature list
  public/           files served as they are
    images/         logos and icons
  mockups/          design mockups, kept for reference
  .github/workflows/  build and deploy workflow
```

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Contributing

Found a mistake on the site? Open an [issue](https://github.com/nxaevora/website/issues) or send a pull
request. Issues about NXAevora itself belong in the
[main repository](https://github.com/nxaevora/nxaevora-main/issues).

## Legal

NXAevora is an independent project. It is not affiliated with or endorsed by Nintendo, The Pokémon Company or Game
Freak. Pokémon and Pokémon Legends: Arceus are trademarks of their owners.

This website contains no game files and does not link to them.
