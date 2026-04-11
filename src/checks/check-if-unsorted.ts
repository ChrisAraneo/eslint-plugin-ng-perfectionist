import { type TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import { match } from 'ts-pattern';

import { getElementTextsAndSortedTexts } from '../extracts/transforms/get-element-texts-and-sorted-texts.js';
import { getNonNullElements } from '../extracts/transforms/get-non-null-elements.js';

type Input = {
  array: TSESTree.ArrayExpression | undefined;
  context: RuleContext<'unsorted', []>;
};

type UnsortedResult = {
  array: TSESTree.ArrayExpression;
  context: RuleContext<'unsorted', []>;
  elements: (TSESTree.Expression | TSESTree.SpreadElement)[];
  texts: string[];
  sorted: string[];
};

export const checkIfUnsorted = ({
  array,
  context,
}: Input): UnsortedResult | undefined =>
  match(array)
    .with(undefined, () => undefined)
    .otherwise((array) =>
      match(getNonNullElements(array))
        .with(undefined, () => undefined)
        .otherwise((elements) =>
          match(getElementTextsAndSortedTexts(context, elements))
            .with({ isEqual: true }, () => undefined)
            .otherwise(({ sorted, texts }) => ({
              array,
              context,
              elements,
              texts,
              sorted,
            })),
        ),
    );
