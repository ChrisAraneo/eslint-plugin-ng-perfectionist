import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkAndReportIfUnsorted } from '../reporters/check-and-report-if-unsorted.js';
import { getExportsArray } from '../array-extractors/get-exports-array.js';
import { filterNgModuleDecorator } from '../filters/filter-ng-module-decorator.js';
import { withContext } from '../transforms/with-context.js';

export const sortNgModuleExports = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/docs/rules/${name}.md`,
)<[], 'unsorted'>({
  name: 'sort-ng-module-exports',
  meta: {
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @NgModule exports array.',
    },
    fixable: 'code',
    messages: {
      unsorted: 'Angular @NgModule exports should be sorted alphabetically.',
    },
    schema: [],
    type: 'suggestion',
  },
  create: (context) => ({
    Decorator: (node: TSESTree.Decorator) =>
      chain(node)
        .thru(filterNgModuleDecorator)
        .thru(getExportsArray)
        .thru(withContext(context))
        .thru(checkAndReportIfUnsorted)
        .value(),
  }),
  defaultOptions: [],
});
