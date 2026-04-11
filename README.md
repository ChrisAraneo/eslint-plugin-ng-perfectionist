# @chris.araneo/eslint-plugin-ng-perfectionist

## Installation

```bash
npm install --save-dev @chris.araneo/eslint-plugin-ng-perfectionist
```

## Usage

```js
import ngPerfectionist from '@chris.araneo/eslint-plugin-ng-perfectionist';

export default [
  {
    plugins: {
      '@chris.araneo/ng-perfectionist': ngPerfectionist,
    },
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

## Rules

| Rule                          | Description                                                     |
| ----------------------------- | --------------------------------------------------------------- |
| `sort-component-imports`      | Enforce alphabetical sorting of `@Component` imports array.     |
| `sort-component-style-urls`   | Enforce alphabetical sorting of `@Component` styleUrls array.   |
| `sort-ng-module-declarations` | Enforce alphabetical sorting of `@NgModule` declarations array. |
| `sort-ng-module-exports`      | Enforce alphabetical sorting of `@NgModule` exports array.      |
| `sort-ng-module-imports`      | Enforce alphabetical sorting of `@NgModule` imports array.      |

All rules are auto-fixable.
