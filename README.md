# MonkeDev API Wrapper

### This wrapper was created to make the MonkeDev API easier to use. This package will make it easier to make the `GET`, `POST`, etc. requests once more and more endpoints come out. This package also will contain `custom-snippets` 
**EXAMPLE**: `api.image.monkey` in the file, then click tab!

# Installation
```
npm i monkewrapper --save
```

# Example
```js
const monke = require('monkewrapper');

monke("/npm", { name: "monkewrapper" }) // Retrieves information about that npm package
.then(console.log)
.catch(console.error);
```

# Documentation
## Endpoints
`/images/pat`\
`/images/monkey`

`/facts/monkey`\
`/facts/cat`\
`/facts/dog`

`/npm`\
`/stats`

## Args Object
### The arguments object are the parameters of the url, **Example:** `{ name: "monkewrapper" }` | https://monke.vip/api/npm?name=monkewrapper

## Implementation
```js
const monke = require('monkewrapper');

monke(<endpoint>, args)
.then(res => console.log(data))
.then(console.error);
```

## MonkeDev API Docs
### Please check out the real [documentation](https://monke.vip/api/docs) for more information of each endpoint!
