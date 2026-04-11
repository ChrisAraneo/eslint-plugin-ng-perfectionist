import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { type TSESTree } from '@typescript-eslint/utils';

export const withContext =
  (context: RuleContext<'unsorted', []>) =>
  (array: TSESTree.ArrayExpression | undefined) => ({ array, context });
