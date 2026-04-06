import { type Linter, RuleTester } from 'eslint';
import tseslint from 'typescript-eslint';

import { sortDirectiveImports } from './sort-directive-imports.js';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser as unknown as Linter.Parser,
  },
});

ruleTester.run('sort-directive-imports', sortDirectiveImports as any, {
  valid: [
    {
      code: `
          @Directive({
            imports: [Apple, Banana, Cherry]
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Directive({
            imports: [Apple]
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Directive({
            imports: []
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Directive({
            selector: '[appTest]',
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Component({
            imports: [Cherry, Banana, Apple]
          })
          class MyComponent {}
        `,
    },
  ],
  invalid: [
    {
      code: `
          @Directive({
            imports: [Cherry, Apple, Banana]
          })
          class MyDirective {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Directive({
            imports: [Apple, Banana, Cherry]
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Directive({
            imports: [B, A]
          })
          class MyDirective {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Directive({
            imports: [A, B]
          })
          class MyDirective {}
        `,
    },
    {
      code: `
          @Directive({
            imports: [
              ZModule,
              AModule,
              MModule,
            ]
          })
          class MyDirective {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Directive({
            imports: [
              AModule,
              MModule,
              ZModule,
            ]
          })
          class MyDirective {}
        `,
    },
  ],
});
