import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkAndReportIfUnsorted } from '../reporters/check-and-report-if-unsorted.js';
import { getDeclarationsArray } from '../array-extractors/get-declarations-array.js';
import { isNgModuleDecorator } from '../decorator-guards/is-ng-module-decorator.js';

export const sortNgModuleDeclarations = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/docs/rules/${name}.md`,
)<[], 'unsorted'>({
  name: 'sort-ng-module-declarations',
  meta: {
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @NgModule declarations array.',
    },
    fixable: 'code',
    messages: {
      unsorted:
        'Angular @NgModule declarations should be sorted alphabetically.',
    },
    schema: [],
    type: 'suggestion',
  },
  create: (context) => ({
    Decorator: (node: TSESTree.Decorator) =>
      chain(node)
        .thru(isNgModuleDecorator)
        .thru(getDeclarationsArray)
        .thru((array) => ({ context, array }))
        .thru(checkAndReportIfUnsorted)
        .value(),
  }),
  defaultOptions: [],
});
