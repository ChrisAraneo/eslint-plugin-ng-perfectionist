<br>

# `@chris.araneo/ng-perfectionist/sort-ng-module-imports`

Enforce alphabetical sorting of Angular @NgModule imports array.

- Type: suggestion
- 🔧 Supports autofix (`--fix`)

<br>

> [!CAUTION]
> The order of modules in the `imports` array can affect Angular's dependency resolution. When multiple imported modules declare the same directive, pipe, or provide the same token, Angular uses the **last** one in the array. Applying this rule's autofix may change which module's version is used when such conflicts exist.

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
    "@chris.araneo/ng-perfectionist/sort-ng-module-imports": ["error"]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  imports: [Cherry, Apple, Banana],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  imports: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  imports: [B, A],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  imports: [A, B],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  imports: [ZModule, AModule, MModule],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  imports: [AModule, MModule, ZModule],
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
    "@chris.araneo/ng-perfectionist/sort-ng-module-imports": ["error"]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@NgModule({
  imports: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  imports: [Apple],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  imports: [],
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
