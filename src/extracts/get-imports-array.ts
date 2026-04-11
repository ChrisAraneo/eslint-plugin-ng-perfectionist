import { type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { getDecoratorFirstArg } from './transforms/get-decorator-first-arg.js';
import { toArrayExpression } from './transforms/to-array-expression.js';
import { findImportsProperty } from './finds/find-imports-property.js';

export const getImportsArray = (
  node: TSESTree.Decorator | undefined,
): TSESTree.ArrayExpression | undefined =>
  chain(node)
    .thru(getDecoratorFirstArg)
    .thru(findImportsProperty)
    .thru(toArrayExpression)
    .value();
