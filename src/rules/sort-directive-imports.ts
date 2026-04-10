import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkAndReportIfUnsorted } from '../reporters/check-and-report-if-unsorted.js';
import { getImportsArray } from '../array-extractors/get-imports-array.js';
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
        .thru(checkAndReportIfUnsorted)
        .value(),
  }),
  defaultOptions: [],
});
