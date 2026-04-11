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
      elements.map((element, index) =>
        fixer.replaceText(element, sortedTexts[index]!),
      ),
    messageId: 'unsorted',
    node: array,
  });
};
