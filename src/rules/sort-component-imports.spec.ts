import { type Linter, RuleTester } from 'eslint';
import tseslint from 'typescript-eslint';

import { sortComponentImports } from './sort-component-imports.js';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser as unknown as Linter.Parser,
  },
});

ruleTester.run('sort-component-imports', sortComponentImports as any, {
  valid: [
    {
      code: `
          @Component({
            imports: [Alpha, Beta, Gamma]
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Component({
            imports: [Alpha]
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Component({
            imports: []
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Component({
            selector: 'app-test',
            template: '<div></div>',
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Directive({
            imports: [Gamma, Beta, Alpha]
          })
          class MyDirective {}
        `,
    },
  ],
  invalid: [
    {
      code: `
          @Component({
            imports: [Gamma, Alpha, Beta]
          })
          class MyComponent {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Component({
            imports: [Alpha, Beta, Gamma]
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Component({
            imports: [B, A]
          })
          class MyComponent {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Component({
            imports: [A, B]
          })
          class MyComponent {}
        `,
    },
    {
      code: `
          @Component({
            imports: [
              ZModule,
              AModule,
              MModule,
            ]
          })
          class MyComponent {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @Component({
            imports: [
              AModule,
              MModule,
              ZModule,
            ]
          })
          class MyComponent {}
        `,
    },
  ],
});
