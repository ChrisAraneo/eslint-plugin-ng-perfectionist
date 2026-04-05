import { TSESTree } from "@typescript-eslint/utils";

export const isComponentDecorator = (node: TSESTree.Decorator): boolean =>
  node.expression.type === 'CallExpression' &&
  node.expression.callee.type === 'Identifier' &&
  node.expression.callee.name === 'Component';
