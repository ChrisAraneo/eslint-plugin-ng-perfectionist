import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkIfUnsorted } from '../checks/check-if-unsorted.js';
import { reportUnsorted } from '../reports/report-unsorted.js';
import { getImportsArray } from '../extracts/get-imports-array.js';
import { filterComponentDecorator } from '../filters/filter-component-decorator.js';
import { withContext } from '../transforms/with-context.js';

export const sortComponentImports = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/docs/rules/${name}.md`,
)<[], 'unsorted'>({
  name: 'sort-component-imports',
  meta: {
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @Component imports array.',
    },
    fixable: 'code',
    messages: {
      unsorted: 'Angular @Component imports should be sorted alphabetically.',
    },
    schema: [],
    type: 'suggestion',
  },
  create: (context) => ({
    Decorator: (node: TSESTree.Decorator) =>
      chain(node)
        .thru(filterComponentDecorator)
        .thru(getImportsArray)
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
