import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

export const filterPipeDecorator = (
  node: TSESTree.Decorator,
): TSESTree.Decorator | undefined =>
  node.expression.type === AST_NODE_TYPES.CallExpression &&
  node.expression.callee.type === AST_NODE_TYPES.Identifier &&
  node.expression.callee.name === 'Pipe'
    ? node
    : undefined;
