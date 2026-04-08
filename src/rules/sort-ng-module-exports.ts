import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';
import { chain, isEqual } from 'lodash-es';

import { getElementTexts } from '../utils/get-element-texts.js';
import { getExportsArray } from '../utils/get-exports-array.js';
import { getNonNullElements } from '../utils/get-non-null-elements.js';
import { getSortedTexts } from '../utils/get-sorted-texts.js';
import { isNgModuleDecorator } from '../utils/is-ng-module-decorator.js';
import { reportUnsorted } from '../utils/report-unsorted.js';

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
    Decorator: (node: TSESTree.Decorator) => {
      if (!isNgModuleDecorator(node)) {
        return;
      }

      chain(node)
        .thru(getExportsArray)
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
