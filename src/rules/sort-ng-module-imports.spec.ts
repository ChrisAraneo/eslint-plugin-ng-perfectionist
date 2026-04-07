import { type Linter, RuleTester } from 'eslint';
import tseslint from 'typescript-eslint';

import { sortNgModuleImports } from './sort-ng-module-imports.js';

const ruleTester = new RuleTester({
  languageOptions: {
    parser: tseslint.parser as unknown as Linter.Parser,
  },
});

ruleTester.run('sort-ng-module-imports', sortNgModuleImports as any, {
  valid: [
    {
      code: `
          @NgModule({
            imports: [Apple, Banana, Cherry]
          })
          class MyModule {}
        `,
    },
    {
      code: `
          @NgModule({
            imports: [Apple]
          })
          class MyModule {}
        `,
    },
    {
      code: `
          @NgModule({
            imports: []
          })
          class MyModule {}
        `,
    },
    {
      code: `
          @NgModule({
            declarations: [MyComponent],
          })
          class MyModule {}
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
          @NgModule({
            imports: [Cherry, Apple, Banana]
          })
          class MyModule {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @NgModule({
            imports: [Apple, Banana, Cherry]
          })
          class MyModule {}
        `,
    },
    {
      code: `
          @NgModule({
            imports: [B, A]
          })
          class MyModule {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @NgModule({
            imports: [A, B]
          })
          class MyModule {}
        `,
    },
    {
      code: `
          @NgModule({
            imports: [
              ZModule,
              AModule,
              MModule,
            ]
          })
          class MyModule {}
        `,
      errors: [{ messageId: 'unsorted' }],
      output: `
          @NgModule({
            imports: [
              AModule,
              MModule,
              ZModule,
            ]
          })
          class MyModule {}
        `,
    },
  ],
});
