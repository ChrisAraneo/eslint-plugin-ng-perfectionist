import { sortBy } from 'lodash-es';

export const getSortedTexts = (texts: string[]): string[] =>
  sortBy(texts, (text) => text.toLocaleLowerCase());
