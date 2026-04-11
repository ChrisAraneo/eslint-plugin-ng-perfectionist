import type { ESLint, Rule } from 'eslint';

import { sortComponentImports } from './rules/sort-component-imports.js';
import { sortComponentStyleUrls } from './rules/sort-component-style-urls.js';
import { sortNgModuleDeclarations } from './rules/sort-ng-module-declarations.js';
import { sortNgModuleExports } from './rules/sort-ng-module-exports.js';
import { sortNgModuleImports } from './rules/sort-ng-module-imports.js';

const rules: Record<string, Rule.RuleModule> = {
  'sort-component-imports': sortComponentImports as unknown as Rule.RuleModule,
  'sort-component-style-urls':
    sortComponentStyleUrls as unknown as Rule.RuleModule,
  'sort-ng-module-declarations':
    sortNgModuleDeclarations as unknown as Rule.RuleModule,
  'sort-ng-module-exports': sortNgModuleExports as unknown as Rule.RuleModule,
  'sort-ng-module-imports': sortNgModuleImports as unknown as Rule.RuleModule,
};

const plugin: ESLint.Plugin = {
  meta: {
    name: '@chris.araneo/eslint-plugin-ng-perfectionist',
    version: '0.1.0',
  },
  rules,
};

export default plugin;
