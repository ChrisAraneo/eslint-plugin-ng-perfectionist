import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

export const isNgModuleDecorator = (node: TSESTree.Decorator): boolean =>
  node.expression.type === AST_NODE_TYPES.CallExpression &&
  node.expression.callee.type === AST_NODE_TYPES.Identifier &&
  node.expression.callee.name === 'NgModule';
