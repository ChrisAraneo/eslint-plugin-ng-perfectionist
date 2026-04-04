import type { ESLint, Rule } from 'eslint';

import { sortComponentImports } from './rules/sort-component-imports.js';

const rules: Record<string, Rule.RuleModule> = {
  'sort-component-imports':
    sortComponentImports as unknown as Rule.RuleModule,
};

const plugin: ESLint.Plugin = {
  meta: {
    name: '@chris.araneo/ng-perfectionist',
    version: '0.0.1',
  },
  rules,
};

export default plugin;
