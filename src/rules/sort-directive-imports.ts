import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkIfUnsorted } from '../checks/check-if-unsorted.js';
import { reportUnsorted } from '../reports/report-unsorted.js';
import { getImportsArray } from '../extracts/get-imports-array.js';
import { filterDirectiveDecorator } from '../filters/filter-directive-decorator.js';
import { withContext } from '../transforms/with-context.js';

export const sortDirectiveImports = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/docs/rules/${name}.md`,
)<[], 'unsorted'>({
  name: 'sort-directive-imports',
  meta: {
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @Directive imports array.',
    },
    fixable: 'code',
    messages: {
      unsorted: 'Angular @Directive imports should be sorted alphabetically.',
    },
    schema: [],
    type: 'suggestion',
  },
  create: (context) => ({
    Decorator: (node: TSESTree.Decorator) =>
      chain(node)
        .thru(filterDirectiveDecorator)
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
