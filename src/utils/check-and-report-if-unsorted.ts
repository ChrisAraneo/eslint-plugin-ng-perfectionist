import { type TSESTree } from '@typescript-eslint/utils';
import { isEqual } from 'lodash-es';

import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

import { getElementTexts } from './get-element-texts.js';
import { getSortedTexts } from './get-sorted-texts.js';
import { reportUnsorted } from './report-unsorted.js';
import { getNonNullElements } from './get-non-null-elements.js';

export const checkAndReportIfUnsorted = (
  input: {
    context: RuleContext<'unsorted', []>;
    array: TSESTree.ArrayExpression | undefined;
  },
): void => {
  const { context, array } = input;

  if (!array) {
    return;
  }

  const elements = getNonNullElements(array);

  if (!elements?.length) {
    return;
  }

  const texts = getElementTexts(elements, context.sourceCode);
  const sorted = getSortedTexts(texts);

  if (!isEqual(texts, sorted)) {
    reportUnsorted(context, array, elements, sorted);
  }
};
