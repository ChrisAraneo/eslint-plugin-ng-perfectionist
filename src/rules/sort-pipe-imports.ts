import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { checkAndReportIfUnsorted } from '../reporters/check-and-report-if-unsorted.js';
import { getImportsArray } from '../array-extractors/get-imports-array.js';
import { isPipeDecorator } from '../decorator-guards/is-pipe-decorator.js';

export const sortPipeImports = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/eslint-plugin-ng-perfectionist/blob/master/docs/rules/${name}.md`,
)<[], 'unsorted'>({
  name: 'sort-pipe-imports',
  meta: {
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @Pipe imports array.',
    },
    fixable: 'code',
    messages: {
      unsorted: 'Angular @Pipe imports should be sorted alphabetically.',
    },
    schema: [],
    type: 'suggestion',
  },
  create: (context) => ({
    Decorator: (node: TSESTree.Decorator) =>
      chain(node)
        .thru(isPipeDecorator)
        .thru(getImportsArray)
        .thru((array) => ({ context, array }))
        .thru(checkAndReportIfUnsorted)
        .value(),
  }),
  defaultOptions: [],
});
