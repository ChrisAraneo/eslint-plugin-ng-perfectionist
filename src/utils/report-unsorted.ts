import { type TSESTree } from '@typescript-eslint/utils';

import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

export const reportUnsorted = (
  context: RuleContext<'unsorted', []>,
  array: TSESTree.ArrayExpression,
  elements: (TSESTree.Expression | TSESTree.SpreadElement)[],
  sortedTexts: string[],
): void => {
  context.report({
    fix: (fixer) =>
      elements.map((el, i) => fixer.replaceText(el, sortedTexts[i]!)),
    messageId: 'unsorted',
    node: array,
  });
};
