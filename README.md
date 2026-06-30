<h1 align="center">@chris.araneo/eslint-plugin-ng-perfectionist</h1>

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/139426" alt="Official @angular GitHub user avatar" width="256px" height="256px"/>
  <br>
  <a href="https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/package.json"><img src="https://img.shields.io/badge/version-v0.0.3-blue" alt="version"></a>
  <a href="https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@chris.araneo/eslint-plugin-ng-perfectionist is released under the MIT license."></a>
  <a href="https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/actions/workflows/ci.yml"><img alt="GitHub CI Status" src="https://img.shields.io/github/actions/workflow/status/ChrisAraneo/eslint-plugin-ng-perfectionist/ci.yml?label=CI&logo=GitHub"></a>
  <br>
  <br>
  <em>ESLint plugin that enforces alphabetical sorting for Angular objects. Inspired by eslint-plugin-perfectionist.</em>
  <br>
</p>

## Installation

```bash
npm install --save-dev "@chris.araneo/eslint-plugin-ng-perfectionist"
```

## Usage

```js
import ngPerfectionist from '@chris.araneo/eslint-plugin-ng-perfectionist';
import angular from 'angular-eslint';

export default [
  {
    plugins: {
      '@chris.araneo/ng-perfectionist': ngPerfectionist,
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@chris.araneo/ng-perfectionist/sort-component-imports': 'error',
      '@chris.araneo/ng-perfectionist/sort-component-style-urls': 'error',
      '@chris.araneo/ng-perfectionist/sort-ng-module-declarations': 'error',
      '@chris.araneo/ng-perfectionist/sort-ng-module-exports': 'error',
      '@chris.araneo/ng-perfectionist/sort-ng-module-imports': 'error',
    },
  },
];
```

## ⚠️ Use with caution

Changing order of imports can affect the behavior of your application. Use this plugin with caution and make sure to test your application after applying the rules.

[https://stackoverflow.com/questions/42144970/why-does-the-order-of-ngmodule-imports-matter](https://stackoverflow.com/questions/42144970/why-does-the-order-of-ngmodule-imports-matter)

## Rules

🔧 - automatically fixable by the `--fix` CLI option.

| Name                          | Description                                                     | 🔧 |
| ----------------------------- | --------------------------------------------------------------- | - |
| `sort-component-imports`      | Enforce alphabetical sorting of `@Component` imports array.     | 🔧 |
| `sort-component-style-urls`   | Enforce alphabetical sorting of `@Component` styleUrls array.   | 🔧 |
| `sort-ng-module-declarations` | Enforce alphabetical sorting of `@NgModule` declarations array. | 🔧 |
| `sort-ng-module-exports`      | Enforce alphabetical sorting of `@NgModule` exports array.      | 🔧 |
| `sort-ng-module-imports`      | Enforce alphabetical sorting of `@NgModule` imports array.      | 🔧 |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Krzysztof Pająk (Chris Araneo) - chris.araneo@gmail.com