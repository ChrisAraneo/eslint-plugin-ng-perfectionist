import { configBuilder } from '@chris.araneo/eslint-config';

export default configBuilder().addTypeScriptConfig({
  sources: ["^(?!.*\.spec\.ts$).*\.ts$"],
  tsconfigRootDir: import.meta.dirname,
}).addJsonConfig({
  jsons: ["**/*.json"],
}).addTypeScriptTestsConfig({
  sources: ["src/**/*.spec.ts"],
  tsconfigRootDir: import.meta.dirname,
}).addIgnored({
  ignored: ["package.json", "package-lock.json"],
}).build();
