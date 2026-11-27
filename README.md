# nxaevora.github.io

The source of the NXAevora website, published at <https://nxaevora.github.io/>.

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
nxaevora.github.io/
  src/
    pages/          one file for each page of the site
    layouts/        page layouts shared by the pages
    components/     reusable UI components
    content/news/   news posts in Markdown
    styles/         theme tokens and global styles
  public/           files served as they are
    images/         logos, banner, icons
    fonts/          web fonts
  mockups/          design mockups, kept for reference
  .github/workflows/  build and deploy workflow
```

## Development

The site is not set up yet. The commands to install, run and build it will be added here.

## Contributing

Found a mistake on the site? Open an [issue](https://github.com/nxaevora/nxaevora.github.io/issues) or send a pull
request. Issues about NXAevora itself belong in the
[main repository](https://github.com/nxaevora/nxaevora-main/issues).

## Legal

NXAevora is an independent project. It is not affiliated with or endorsed by Nintendo, The Pokémon Company or Game
Freak. Pokémon and Pokémon Legends: Arceus are trademarks of their owners.

This website contains no game files and does not link to them.
