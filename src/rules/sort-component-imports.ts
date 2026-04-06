import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain, isEqual } from 'lodash-es';

import { isComponentDecorator } from '../utils/is-component-decorator.js';
import { getImportsArray } from '../utils/get-imports-array.js';
import { getNonNullElements } from '../utils/get-non-null-elements.js';
import { getElementTexts } from '../utils/get-element-texts.js';
import { getSortedTexts } from '../utils/get-sorted-texts.js';
import { reportUnsorted } from '../utils/report-unsorted.js';

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
    Decorator: (node: TSESTree.Decorator) => {
      if (!isComponentDecorator(node)) {
        return;
      }

      chain(node)
        .thru(getImportsArray)
        .thru((array) => ({
          elements: getNonNullElements(array),
          array: array,
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
