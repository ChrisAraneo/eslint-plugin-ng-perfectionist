import { type TSESTree } from '@typescript-eslint/utils';
import { compact, isUndefined } from 'lodash-es';

export const getNonNullElements = (
  array: TSESTree.ArrayExpression | undefined,
): (TSESTree.Expression | TSESTree.SpreadElement)[] | undefined =>
  isUndefined(array?.elements)
    ? undefined
    : (compact(array.elements) as (
        | TSESTree.Expression
        | TSESTree.SpreadElement
      )[]);
