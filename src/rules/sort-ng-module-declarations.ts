import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkAndReportIfUnsorted } from '../reporters/check-and-report-if-unsorted.js';
import { getDeclarationsArray } from '../array-extractors/get-declarations-array.js';
import { filterNgModuleDecorator } from '../filters/filter-ng-module-decorator.js';
import { withContext } from '../transforms/with-context.js';

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
        .thru(filterNgModuleDecorator)
        .thru(getDeclarationsArray)
        .thru(withContext(context))
        .thru(checkAndReportIfUnsorted)
        .value(),
  }),
  defaultOptions: [],
});
