# 🚀 Authoi_lang

**Authoi_lang** is a powerful, human-readable programming language built on top of **JavaScript**, designed for **simplicity, readability, Easy handed Programming with custom keywords, and data operations**.  

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![JavaScript](https://img.shields.io/badge/JS-ES6-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## ✨ Created By

### **MD. Jawad Jabbar Khan Authoi**  

 **Base Name:** Authoi_Script

---

## 💡 Key Features

- ✅ Supports **any file extension**  
- ✅ Compatible with **JS code** directly  
- ✅ Super powerful **Amath utility** for math operations:
  - Factorial, square, square root, π
  - Type-aware sums for integers, strings, objects, arrays
- ✅ Advanced **List Data Type** (custom + array features)
- ✅ Readable **`bhai bol`** print statements
- ✅ Flexible **`bhai agar`** conditional syntax
- ✅ Supports **line-by-line execution**
- ✅ Fully importable in **plain JS** (`authoi_script.js`)
- ✅ Easy-to-use **run() loops**:
  - Forward loops (default)
  - Backward loops (`backwards: true`)
- ✅ Low-level fast printing: `std:write >> ... >> std:end`
- ✅ Fully type-aware operations
- ✅ Functions and return values with `authoi:returner`  

---

## 🏆 List Data Type Highlights

| Feature | Description | Example |
|---------|-------------|---------|
| **Add** | Add items to the list | `list.add(5)` |
| **Remove** | Remove specific items | `list.remove(3)` |
| **Print** | Display list | `list.print()` |
| **Includes** | Check if item exists | `list.includes(4)` |
| **Size** | Get number of items | `list.size` |
| **Multiply** | Multiply all items by a value | `list.multiply(2)` |
| **MultiplyLength** | Repeat list `n` times | `list.multiplyLength(2)` |
| **Uniqify** | Remove duplicates like a set | `list.uniqify()` |
| **Clear** | Empty the list | `list.clear()` |
| **Direct Items Assignment** | Set items directly | `list.items = [1,2,3]` |
| **Array Methods** | Map, filter, reduce, find, etc. | `list.items.filter(x => x>2)` |

💡 **Note:** Using **List** instead of raw arrays is recommended for all advanced operations.

---

## 💥 Conventions & Standards

### 📌 File & Script Standards
- Start scripts with `<authoi?>`  
- Recommended file extension: `.authoi`  
- Human-readable prints: `bhai bol`  
- Standard JS-style prints: `print()`  
- Low-level, fast prints: `std:write >> ... >> std:end` (recommended for loops or large output)

### 🧮 Math & Computation Standards
- Use **Amath** for math operations:
  ```authoi
  Amath     // factorial -> 120
  Amath      // square -> 25
  Amath     // sqrt -> 4
  Amath["π"]        // 3.14159...
  Amath["∑"]({type:"integer"}, 1,2,3,4,5) // 15

### 🧮 Sum Operations

- Use `sum({...}, ...)` for flexible sum operations:
  - Supports integers, objects, strings, arrays
  - String join, Integer addition, array addition and object join:
    ```authoi
    sum({type: "integer"},2,3,6) // 11
    sum({ type: "object" }, { c: 1, d: 4 }, { b: 2 }, { a: 3 }); // { a: 3, b: 2, c:1, d: 4 }
    sum({ type: "string", join: " , " /* join is optional */ }, "Hello", "Andy", "Js" ); // "Hello , Andy , Js"
    sum({ type: "array" }, 1, 2, 3, {x: 3}, [4]); // [1, 2, 3, {x: 3}, [4]]
    ```
## 🔀 Conditionals & Functions

- Conditional syntax (`agar`) is recommended for readability:
    ```authoi
    bhai agar y < 5 -> (
        bhai bol y
        bhai bol "is smaller than 5"
    )
    ```
- Functions use `work` keyword:
    ```authoi
    work myFunc(x) -> (
        bhai bol x*x
    )
    ```
- Use `authoi:returner` for returning values:
    ```authoi
    authoi:returner >> x+1 >> :end
    ```

### 🌀 Loops

- Use `range(...)` for iteration:
  - Forward loop (default):
    ```javascript
    run(range(0,5), x => print(x))
    ```
  - Backward loop:
    ```javascript
    run(range(0,5), x => print(x), true)
    ```
- Parameters:  
  1. Iterator  
  2. Function to execute per iteration  
  3. Optional `backwards: true/false` (default `false`)
markdown
Copy code
### 🕶 Other Standards

- Variables: `const`, `int`, dynamic typing allowed  
- Access variable value & type via `.value` and `.type`  
- Use **`std:write >> ... >> std:end`** for low-level, fast output  
- Keep functions and constants consistent: `sum`, `Amath`, `π`, `List`, `run`, `range`
### 💻 How to Start Coding

1. Create a new `.authoi` file [Any Extension is Supported . .js and .authoi are recommended]:
    ```authoi
    <authoi?>
    bhai bol "Hello, Authoi_lang!"
    ```

2. Run it directly via JS import (Not RECOMMENDED):
    ```javascript
    import * as authoi_script from './authoi_script.js';
    authoi_script.programultra("example.authoi");
    ```

3. Or compile via a **compiler file** (`fileCompiler.js`):
    ```javascript
    // fileCompiler.js
    import * as authoi_script from './authoi_script.js';
    authoi_script.programultra("file.js");
    ```
- Now write Authoi_lang code in `file.js` (or `.authoi`) and run `fileCompiler.js` to execute.

Copy code
### 🖥️ Example Authoi_lang Code

```authoi
<authoi?>

work greet(name) -> (
    bhai bol "Hello, " + name + "!"
)

greet("Alice")
greet("Bob")

const list = new List([1,2,3])
list.add(4)
list.multiply(2)
list.uniqify()
list.print() // [2,4,6,8]

bhai agar list.size > 3 -> (
    bhai bol "List is big!"
)

// Low-level print
std:write >> "This prints faster!\n" >> std:end

// Loops
run(range(0,5), x => bhai bol x)          // forward
run(range(0,5), x => bhai bol x, true)    // backward
