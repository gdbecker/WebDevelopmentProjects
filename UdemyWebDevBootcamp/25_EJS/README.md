## 25 - EJS

### EJS Tags Syntax

| Tag                          | What it Does            |
| ---------------------------- | ----------------------- |
| <%= variable %>              | JS Output               |
| <% console.log("hello") %>   | JS Execute              |
| <%- <h1>Hello</h1> %>        | Render HTML             |
| <%% %%>                      | Show <% or %>           |
| <%# This is a comment %>     | Stop Execution          |
| <%- include("header.ejs") %> | Insert another EJS file |

---

### Band Generator Project

### [Demo: Band Name Generator](https://bandgenerator.gdbecker.repl.co/)

#### Main Page

!["MainPage"](./MainPage.png)

#### Generated Band Name

!["GeneratedPage"](./GeneratedPage.png)

Practicing EJS, partials, templating to make a random band/company name generator.
