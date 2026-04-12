<br>

# `@chris.araneo/ng-perfectionist/sort-component-imports`

Enforce alphabetical sorting of Angular @Component imports array.

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
    "@chris.araneo/ng-perfectionist/sort-component-imports": ["error"]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component({
  imports: [Cherry, Apple, Banana],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  imports: [Apple, Banana, Cherry],
})
class MyComponent {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@Component({
  imports: [B, A],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  imports: [A, B],
})
class MyComponent {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@Component({
  imports: [ZModule, AModule, MModule],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  imports: [AModule, MModule, ZModule],
})
class MyComponent {}
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
    "@chris.araneo/ng-perfectionist/sort-component-imports": ["error"]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component({
  imports: [Apple, Banana, Cherry],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  imports: [Apple],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  imports: [],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  selector: 'app-test',
  template: '<div></div>',
})
class MyComponent {}
```

<br>

</details>

<br>
