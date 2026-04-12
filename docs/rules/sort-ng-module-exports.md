<br>

# `@chris.araneo/ng-perfectionist/sort-ng-module-exports`

Enforce alphabetical sorting of Angular @NgModule exports array.

- Type: suggestion
- 🔧 Supports autofix (`--fix`)

<br>

## Rule Options

No options available. This rule always enforces alphabetical sorting.

<br>

## Usage Examples

<br>

<details>
<summary>❌ - Toggle examples of <strong>incorrect</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@chris.araneo/ng-perfectionist/sort-ng-module-exports": ["error"]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  exports: [Cherry, Apple, Banana],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  exports: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  exports: [B, A],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  exports: [A, B],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  exports: [ZModule, AModule, MModule],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  exports: [AModule, MModule, ZModule],
})
class MyModule {}
```

</details>

<br>

---

<br>

<details>
<summary>✅ - Toggle examples of <strong>correct</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@chris.araneo/ng-perfectionist/sort-ng-module-exports": ["error"]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@NgModule({
  exports: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  exports: [Apple],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  exports: [],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  declarations: [MyComponent],
})
class MyModule {}
```

<br>

</details>

<br>
