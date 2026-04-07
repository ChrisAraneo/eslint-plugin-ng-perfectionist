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
      '@chris.araneo/ng-perfectionist/sort-directive-imports': 'error',
      '@chris.araneo/ng-perfectionist/sort-ng-module-imports': 'error',
    },
  },
];
```

## Rules

| Rule                     | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `sort-component-imports` | Enforce alphabetical sorting of `@Component` imports array.  |
| `sort-directive-imports` | Enforce alphabetical sorting of `@Directive` imports array.  |
| `sort-ng-module-imports` | Enforce alphabetical sorting of `@NgModule` imports array.   |

All rules are auto-fixable.
