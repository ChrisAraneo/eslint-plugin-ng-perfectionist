import { AST_NODE_TYPES, type TSESTree } from '@typescript-eslint/utils';
import { chain } from 'lodash-es';
import { match } from 'ts-pattern';

import { findImportsProperty } from '../utils/find-imports-property.js';
import { getDecoratorFirstArg } from '../utils/get-decorator-first-arg.js';

export const getImportsArray = (
  node: TSESTree.Decorator | undefined,
): TSESTree.ArrayExpression | undefined =>
  chain(node)
    .thru(getDecoratorFirstArg)
    .thru(findImportsProperty)
    .thru((property) =>
      match(property?.value)
        .with(
          { type: AST_NODE_TYPES.ArrayExpression },
          (value) => value as TSESTree.ArrayExpression,
        )
        .otherwise(() => undefined),
    )
    .value();