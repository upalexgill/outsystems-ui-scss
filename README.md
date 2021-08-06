# FORKED
## Original version [mediaweb-pt](https://github.com/mediaweb-pt/outsystems-ui-scss)

![version](https://img.shields.io/badge/version-1.1.0-blue)

### New Features

- Index file updated to display OutSystems local development in iframe. This combined with Requestly Chrome Extension allows us to develop front end of application outside of OutSystems platform
- Support JavaScript (@todo split snippets into seperate files or don't minify to suit OutSystems development)
  - Babel Transpiler (ES6 to ES5) - OutSystems currently doesnt support ES6 plus browser support varies
  - Minify (probably redundant for OutSystems)
  - Eslint (stand config)

#### Usage

- To get task manager up and running, please [See below](https://github.com/mediaweb-pt/outsystems-ui-scss#how-to-install)
- Install Chrome Extension [Requestly](https://chrome.google.com/webstore/detail/requestly-redirect-url-mo/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en)
  - Create a new rule
    - If request: URL: Contains "https://<username>.outsystemscloud.com"
    - Code Type: CSS
    - Code Source: URL
  - Source: http://localhost:3000/dist/outsystems-ui.css

---

# OutSystems UI SCSS

Outsystems UI Reactive version converted to scss

Use this project to create customizations of OutSystems UI using SCSS.
This will increase your development speed and reduce the maintenance costs overtime.

## How to install

Clone or download the project and run:

- npm install

## How to Run

- gulp

## 7-1 Architecture

Our SCSS folder follows the 7-1 Architecture pattern.

    scss/
    |
    |-1-abstracts/
    |
    |-2-base/
    |
    |-3-patterns/
    |
    |-4-layout/
    |
    |-5-pages/
    |
    |-6-themes/
    |
    |-7-vendors
    |
    `-main.sccs

## How to install via NPM

You can also install using the following npm command:

```sh
$ npm i outsystems-ui-scss
```

_(Find more in: https://www.npmjs.com/package/outsystems-ui-scss )_

# More About the project

https://mediaweb.pt/news/read/outsystems-ui-scss
