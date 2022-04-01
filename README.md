[![Netlify Status](https://api.netlify.com/api/v1/badges/d7b462be-34f5-4d1c-ad2c-ad9a87971b60/deploy-status)](https://app.netlify.com/sites/leonard-wojcik-p7/deploys)

# Les petits plats

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of content

-   [Description](#description)
-   [Live demo](#live-demo)
-   [File structure](#file-structure)
-   [List of dependencies](#list-of-dependencies)
-   [Installation](#installation)
-   [How to use](#how-to-use)

## Description

The mission of this project was to develop a search algorithm to filter and display dynamically a list of recipes with two components : the main search bar and the filter options. To understand how It works, I made a detailed document about It's structure and the choices made during it's development : ([EN](https://github.com/leoncik/LeonardWojcik_7_05022022/files/8399336/Fiche.investigation.algorithme.-.EN.pdf) / [FR](https://github.com/leoncik/LeonardWojcik_7_05022022/files/8399341/Fiche.investigation.algorithme.-.FR.pdf)).

## Live demo

Use this link to try the project : https://leonard-wojcik-p7.netlify.app/

## File structure

`assets/` : contains the favicons and the images used in the project.

`src/` :

-   `benchmarking/` : contains the scripts used for the benchmarking tests.
-   `data/` contains the original file with all recipes and a second one that have been improved (typos).
-   `scripts/` contains all JavaScript files.
    -   `classes/` contains the classes used to create the elements of the page.
    -   `components/` contains the script to handle dropdowns.
    -   `utils/` contains the search algorithm and some generic functions.
-   `scss/` contains all SCSS files. Their organisation follow the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

## List of dependencies

-   [Autoprefixer](https://github.com/postcss/autoprefixer) — [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/).
-   [Eslint](https://eslint.org/) — A JavaScript linter.
-   [Husky](https://typicode.github.io/husky) — Git hooks manager.
-   [lint-staged](https://www.npmjs.com/package/lint-staged) — Run linters against staged git files.
-   [Prettier](https://prettier.io/) — A code formatter.
-   [Sass](https://sass-lang.com/) — A CSS preprocessor.
-   [Vite](https://vitejs.dev/) — Next Generation Frontend Tooling.

## Installation

1. Clone this repository or fork It.

```sh
git clone https://github.com/leoncik/LeonardWojcik_6_24112021
```

2. Make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)). Then install the dependencies.

```sh
yarn install
```

3. You are ready to do !

## How to use

Simply run `yarn dev` to launch a dev server and work on the project.

To build the production version of this project, run `yarn build` to build the project and then `yarn preview` to check if your build is successful (I am sure It will !).

[⬆ Back to top](#les-petits-plats)
