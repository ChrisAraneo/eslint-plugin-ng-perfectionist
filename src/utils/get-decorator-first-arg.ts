import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { match, P } from 'ts-pattern';
import { get } from 'lodash-es';

export const getDecoratorFirstArg = (
  node: TSESTree.Decorator | undefined,
): TSESTree.ObjectExpression | undefined =>
  match(node?.expression)
    .with(
      {
        type: AST_NODE_TYPES.CallExpression,
        arguments: [{ type: AST_NODE_TYPES.ObjectExpression }, ...P.array()],
      },
      (expression) =>
        get(expression, 'arguments[0]') as TSESTree.ObjectExpression,
    )
    .otherwise(() => undefined);
