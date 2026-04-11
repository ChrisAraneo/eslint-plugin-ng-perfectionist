import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkIfUnsorted } from '../checks/check-if-unsorted.js';
import { reportUnsorted } from '../reports/report-unsorted.js';
import { getDeclarationsArray } from '../extracts/get-declarations-array.js';
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
        .thru(checkIfUnsorted)
        .thru(
          (result) =>
            result &&
            reportUnsorted(
              result.context,
              result.array,
              result.elements,
              result.sorted,
            ),
        )
        .value(),
  }),
  defaultOptions: [],
});
