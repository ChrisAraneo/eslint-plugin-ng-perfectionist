<br>

# `@chris.araneo/ng-perfectionist/sort-ng-module-declarations`

Enforce alphabetical sorting of Angular @NgModule declarations array.

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
    "@chris.araneo/ng-perfectionist/sort-ng-module-declarations": ["error"]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  declarations: [Cherry, Apple, Banana],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  declarations: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  declarations: [B, A],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  declarations: [A, B],
})
class MyModule {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@NgModule({
  declarations: [ZComponent, AComponent, MComponent],
})
class MyModule {}
```

#### ✅ Fixed Output

```ts
@NgModule({
  declarations: [AComponent, MComponent, ZComponent],
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
    "@chris.araneo/ng-perfectionist/sort-ng-module-declarations": ["error"]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@NgModule({
  declarations: [Apple, Banana, Cherry],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  declarations: [Apple],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  declarations: [],
})
class MyModule {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@NgModule({
  imports: [MyModule],
})
class MyModule {}
```

<br>

</details>

<br>
