# indented

Better indented multi line strings than regular template strings

## Why

Using multiline strings in a deeply nested block can be tedious even when using template strings in JavaScript because they keep the extra space added when indenting the code, making it hard to create properly indented blocks of strings that span over multiple lines. This library is here to fix this behavior.

This is particularily useful when creating blocks of code that needs to be indented inside of a template string for instance.

## How

This library will take every lines and compute the minimum whitespace length possible for a line (ignoring empty lines).

Once it got that, it will simply remove the right amount of space needed to output the string as if it were written with the correct amount of space, even if the indentation is huge like in the context of writing a template string inside of a nested block.

## Requirements

- Node
- NPM

## Installation

```bash
npm install indented
```

## Usage

```javascript
import { indented } from "indented"

const helloInFrench = "Salut"
const helloInEnglish = "Hello"

const codeElement = document.getElementById("javascript")

window.addEventListener("load", () => {
  if (codeElement instanceof HTMLElement) {
    codeElement.innerText = indented`
      <script>
        "use strict";
            
        if (window.navigator.language === "fr") {
          console.log("${helloInFrench}")
        } else {
          console.log("${helloInEnglish}")
        }
      </script>
    `
  }
})

```

Instead of this

```

      <script>
        "use strict";
            
        if (window.navigator.language === "fr") {
          console.log("${helloInFrench}")
        } else {
          console.log("${helloInEnglish}")
        }
      </script>
      
```

This library will output this

```
<script>
  "use strict";
      
  if (window.navigator.language === "fr") {
    console.log("${helloInFrench}")
  } else {
    console.log("${helloInEnglish}")
  }
</script>
```
