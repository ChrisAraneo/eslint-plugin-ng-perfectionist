<br>

# `@chris.araneo/ng-perfectionist/sort-component-style-urls`

Enforce alphabetical sorting of Angular @Component styleUrls array.

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
    "@chris.araneo/ng-perfectionist/sort-component-style-urls": ["error"]
  }
}
```

<br>

#### ❌ Invalid Code

```ts
@Component({
  styleUrls: ['./c.component.scss', './a.component.scss', './b.component.scss'],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  styleUrls: ['./a.component.scss', './b.component.scss', './c.component.scss'],
})
class MyComponent {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@Component({
  styleUrls: ['./b.component.scss', './a.component.scss'],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  styleUrls: ['./a.component.scss', './b.component.scss'],
})
class MyComponent {}
```

<br>

---

<br>

#### ❌ Invalid Code

```ts
@Component({
  styleUrls: ['./z.component.scss', './a.component.scss', './m.component.scss'],
})
class MyComponent {}
```

#### ✅ Fixed Output

```ts
@Component({
  styleUrls: ['./a.component.scss', './m.component.scss', './z.component.scss'],
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
    "@chris.araneo/ng-perfectionist/sort-component-style-urls": ["error"]
  }
}
```

<br>

#### ✅ Valid Code

```ts
@Component({
  styleUrls: ['./a.component.scss', './b.component.scss', './c.component.scss'],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  styleUrls: ['./a.component.scss'],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  styleUrls: [],
})
class MyComponent {}
```

<br>

---

<br>

#### ✅ Valid Code

```ts
@Component({
  template: '<div></div>',
})
class MyComponent {}
```

<br>

</details>

<br>
