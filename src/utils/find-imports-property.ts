import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';

export const findImportsProperty = (
  object: TSESTree.ObjectExpression,
): TSESTree.Property | undefined =>
  object.properties.find(
    (property): property is TSESTree.Property =>
      property.type === AST_NODE_TYPES.Property &&
      property.key.type === AST_NODE_TYPES.Identifier &&
      property.key.name === 'imports',
  );
