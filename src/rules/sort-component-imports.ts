import { ESLintUtils, type TSESTree } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/ChrisAraneo/ng-perfectionist/blob/main/docs/rules/${name}.md`,
);

type MessageIds = 'unsorted';

export const sortComponentImports = createRule<[], MessageIds>({
  name: 'sort-component-imports',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Enforce alphabetical sorting of Angular @Component imports array.',
    },
    fixable: 'code',
    schema: [],
    messages: {
      unsorted:
        'Angular @Component imports should be sorted alphabetically.',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      Decorator(node: TSESTree.Decorator) {
        if (
          node.expression.type !== 'CallExpression' ||
          node.expression.callee.type !== 'Identifier' ||
          node.expression.callee.name !== 'Component'
        ) {
          return;
        }

        const arg = node.expression.arguments[0];
        if (!arg || arg.type !== 'ObjectExpression') {
          return;
        }

        const importsProp = arg.properties.find(
          (p): p is TSESTree.Property =>
            p.type === 'Property' &&
            p.key.type === 'Identifier' &&
            p.key.name === 'imports',
        );

        if (!importsProp || importsProp.value.type !== 'ArrayExpression') {
          return;
        }

        const elements = importsProp.value.elements;
        const sourceCode = context.sourceCode;
        const nonNullElements = elements.filter(
          (el): el is TSESTree.Expression | TSESTree.SpreadElement =>
            el !== null,
        );

        if (nonNullElements.length <= 1) {
          return;
        }

        const elementTexts = nonNullElements.map((el) =>
          sourceCode.getText(el),
        );
        const sortedTexts = [...elementTexts].sort((a, b) =>
          a.localeCompare(b),
        );

        const isSorted = elementTexts.every(
          (text, i) => text === sortedTexts[i],
        );

        if (!isSorted) {
          context.report({
            node: importsProp.value,
            messageId: 'unsorted',
            fix(fixer) {
              return nonNullElements.map((el, i) =>
                fixer.replaceText(el, sortedTexts[i]!),
              );
            },
          });
        }
      },
    };
  },
});
