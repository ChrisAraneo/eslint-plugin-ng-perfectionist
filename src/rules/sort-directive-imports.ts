import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain, isEqual } from 'lodash-es';

import { getElementTexts } from '../utils/get-element-texts.js';
import { getImportsArray } from '../utils/get-imports-array.js';
import { getNonNullElements } from '../utils/get-non-null-elements.js';
import { getSortedTexts } from '../utils/get-sorted-texts.js';
import { isDirectiveDecorator } from '../utils/is-directive-decorator.js';
import { reportUnsorted } from '../utils/report-unsorted.js';

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
    Decorator: (node: TSESTree.Decorator) => {
      if (!isDirectiveDecorator(node)) {
        return;
      }

      chain(node)
        .thru(getImportsArray)
        .thru((array) => ({
          array: array,
          elements: getNonNullElements(array),
        }))
        .thru(({ elements, array }) => {
          if (!elements?.length) {
            return;
          }

          if (!array) {
            return;
          }

          const texts = getElementTexts(elements, context.sourceCode);
          const sorted = getSortedTexts(texts);

          if (!isEqual(texts, sorted)) {
            reportUnsorted(context, array, elements, sorted);
          }
        })
        .value();
    },
  }),
  defaultOptions: [],
});
