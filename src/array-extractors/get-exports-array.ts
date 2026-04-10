import { type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';

import { getDecoratorFirstArg } from '../transforms/get-decorator-first-arg.js';
import { toArrayExpression } from './transforms/to-array-expression.js';
import { findExportsProperty } from './finders/find-exports-property.js';

export const getExportsArray = (
  node: TSESTree.Decorator | undefined,
): TSESTree.ArrayExpression | undefined =>
  chain(node)
    .thru(getDecoratorFirstArg)
    .thru(findExportsProperty)
    .thru(toArrayExpression)
    .value();
