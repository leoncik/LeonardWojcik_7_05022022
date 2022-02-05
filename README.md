# Les petits plats

Project carried out as part of the Front-End Web Development Career Path of OpenClassrooms.

## Table of content

- [Description](#description)
- [Live demo](#live-demo)
- [File structure](#file-structure)
- [List of dependencies](#list-of-dependencies)
- [Installation](#installation)
- [How to use](#how-to-use)
  - [JavaScript](#javascript)
  - [Styling](#styling)

## Description

- WIP

## Live demo

Use this link to try the project : https://leoncik.github.io/LeonardWojcik_7_05022022/

## File structure

- WIP

## List of dependencies

-   [Babel](https://babel.dev/) — A JavaScript transpiler.
-   [Eslint](https://eslint.org/) — A JavaScript linter.
-   [Husky](https://typicode.github.io/husky) — Git hooks manager.
-   [lint-staged](https://www.npmjs.com/package/lint-staged) — Run linters against staged git files.
-   [Prettier](https://prettier.io/) — A code formatter.
-   [Webpack](https://webpack.js.org/) — A JavaScript bundler.

## Installation

- WIP.
- Note : make sure that [Node.js](https://nodejs.org/en/) is installed on your machine and that you have a package manager (like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)).

## How to use

### JavaScript

If you want to work on the JavaScript part of this project, first make sure that you are in "Development mode" by uncommenting the "Production scripts" in index.html :

```html
<!-- JavaScript (development) -->
<script src="/polyfill.bundle.js" defer></script>
<script src="/app.bundle.js" defer></script>
<!-- JavaScript (production) -->
<!-- <script src="dist/polyfill.bundle.js" defer></script>
<script src="dist/app.bundle.js" defer></script> -->
```

Then, you can use webpack-dev-server with the command :

```sh
yarn start
```

After editing you scripts, you can build the project with :

```sh
yarn build
```

### Styling

If you want to work on the styling part of this project, make sure that you are in "Production mode" by uncommenting the "Development scripts" in index.html :

```html
<!-- JavaScript (development) -->
<!-- <script src="/polyfill.bundle.js" defer></script>
<script src="/app.bundle.js" defer></script> -->
<!-- JavaScript (production) -->
<script src="dist/polyfill.bundle.js" defer></script>
<script src="dist/app.bundle.js" defer></script>
```

[⬆ Back to top](#Les petits plats)