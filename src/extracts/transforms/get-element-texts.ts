import { type TSESTree } from '@typescript-eslint/utils';

import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

export const getElementTexts = (
  elements: (TSESTree.Expression | TSESTree.SpreadElement)[],
  sourceCode: RuleContext<string, []>['sourceCode'],
): string[] => elements.map((el) => sourceCode.getText(el));
