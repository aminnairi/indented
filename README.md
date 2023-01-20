# indented

Better indented multi line strings than regular template strings

```html
<!DOCTYPE html>
<html lang="en-US">
  <body>
    <code>
      <pre id="code"></pre>
    </code>
    <script type="module">
      import { indented } from "https://unpkg.com/indented?module"

      const codeElement = document.getElementById("code")

      if (!(codeElement instanceof HTMLElement)) {
        throw new Error("Code element not found")
      }

      const code = indented`
        window.addEventListener("load", () => {
          const greet = (name) => {
            if (name === undefined) {
              return "Hello stranger"
            } 

            return "Hello " + name
          }

          if (Math.random() > 0.5) {
            greet("John")
          } else {
            greet("Jane")
          }
        })
      `
      
      codeElement.innerText = code
    </script>
  </body>
</html>
```

```
window.addEventListener("load", () => {
  const greet = (name) => {
    if (name === undefined) {
      return "Hello stranger"
    } 

    return "Hello " + name
  }

  if (Math.random() > 0.5) {
    greet("John")
  } else {
    greet("Jane")
  }
})
```

## Why

Using multiline strings in a deeply nested block can be tedious even when using template strings in JavaScript because they keep the extra space added when indenting the code, making it hard to create properly indented blocks of strings that span over multiple lines. This library is here to fix this behavior.

This is particularily useful when creating blocks of code that needs to be indented inside of a template string for instance because it prevents writing this kind of code to have something properly indented visually for the user.


```html
<!DOCTYPE html>
<html lang="en-US">
  <body>
    <code>
      <pre id="code"></pre>
    </code>
    <script type="module">
      const codeElement = document.getElementById("code")

      if (!(codeElement instanceof HTMLElement)) {
        throw new Error("Code element not found")
      }

      // Without this library, not really appealing visually, can cause
      // slowdown in reading the code, not very convenient to have in the
      // source-code
      const code = `
window.addEventListener("load", () => {
  const greet = (name) => {
    if (name === undefined) {
      return "Hello stranger"
    } 

    return "Hello " + name
  }

  if (Math.random() > 0.5) {
    greet("John")
  } else {
    greet("Jane")
  }
})
      `
      
      codeElement.innerText = code
    </script>
  </body>
</html>
```

## How

This library will take every lines and compute the minimum whitespace length possible for a line (ignoring empty lines).

Once it got that, it will simply remove the right amount of space needed to output the string as if it were written with the correct amount of space, even if the indentation is huge like in the context of writing a template string inside of a nested block.

## Requirements

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com)

## Installation

```bash
npm install indented
```

## Usage

### Browser

#### Module

```html
<script type="module">
  import { indented } from "https://unpkg.com/indented?module"
  
  console.log(indented`
    <h1>Hello</h1>
  `)
</script>
```

#### Script

```html
<script src="https://unpkg.com/indented"></script>
<script>
  const { indented } = window.indented

  console.log(indented`
    <h1>Hello</h1>
  `)
</script>
```

### Node

#### Module

```javascript
import { indented } from "indented"

console.log(indented`
  <h1>Hello</h1>
`)
```

#### CommonJS

```javascript
const { indented } = require("indented")

console.log(indented`
  <h1>Hello</h1>
`)
```

## Code of conduct

See [`CODE_OF_CONDUCT`](./CODE_OF_CONDUCT.md).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

See [`LICENSE`](./LICENSE).

## Security

See [`SECURITY.md`](./SECURITY.md).
