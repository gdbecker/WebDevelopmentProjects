## 25 - EJS

### Band Generator Project

### [Demo: Band Name Generator](https://band-generator-gdbecker.replit.app/)

Practicing EJS, partials, templating to make a random band/company name generator.

#### Main Page

!["MainPage"](./MainPage.png)

#### Generated Band Name

!["GeneratedPage"](./GeneratedPage.png)

---

### EJS Tags Syntax

| Tag                          | What it Does            |
| ---------------------------- | ----------------------- |
| <%= variable %>              | JS Output               |
| <% console.log("hello") %>   | JS Execute              |
| <%- <h1>Hello</h1> %>        | Render HTML             |
| <%% %%>                      | Show <% or %>           |
| <%# This is a comment %>     | Stop Execution          |
| <%- include("header.ejs") %> | Insert another EJS file |
