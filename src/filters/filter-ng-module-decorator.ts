import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

export const filterNgModuleDecorator = (
  node: TSESTree.Decorator,
): TSESTree.Decorator | undefined =>
  node.expression.type === AST_NODE_TYPES.CallExpression &&
  node.expression.callee.type === AST_NODE_TYPES.Identifier &&
  node.expression.callee.name === 'NgModule'
    ? node
    : undefined;
