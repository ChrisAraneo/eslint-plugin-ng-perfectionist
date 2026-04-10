import { type TSESTree } from '@typescript-eslint/utils';

export const withContext =
  <TContext>(context: TContext) =>
  (array: TSESTree.ArrayExpression) => ({ context, array });
