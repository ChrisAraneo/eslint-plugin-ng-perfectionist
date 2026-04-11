import { chain, isEqual } from 'lodash-es';
import { type TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';

import { getElementTexts } from './get-element-texts.js';
import { getSortedTexts } from './get-sorted-texts.js';

export const getElementTextsAndSortedTexts = (
  context: RuleContext<'unsorted', []>,
  elements: (TSESTree.Expression | TSESTree.SpreadElement)[],
) =>
  chain(getElementTexts(elements, context.sourceCode))
    .thru((texts) => ({
      texts,
      sorted: getSortedTexts(texts),
    }))
    .thru(({ texts, sorted }) => ({
      texts,
      sorted,
      isEqual: isEqual(texts, sorted),
    }))
    .value();
