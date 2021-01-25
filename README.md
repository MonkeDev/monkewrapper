# MonkeDev API Wrapper

### This wrapper was created to make the [MonkeDev API](https://monke.vip/api/docs) easier to use for you HTTPS noobs. This package will make it easier to make the `GET`, `POST`, etc. requests once more and more endpoints come out. This package also will contain `custom-snippets` 
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
## Documentation Syntax
<ins>Just a little notice:</ins>
**<>** - means required, EX: <endpoint> // `endpoint` is required\
**[]** - means optional **or** not needed in most use cases // `args` is optional or not used most of the time\
* Remember that these symbols don't have any actual contribution to the code meaning that they are meant to be removed / ignored
  
## Implementation
```js
// .then promise

const monke = require('monkewrapper');

monke(<endpoint>, [args])
.then(res => console.log(res))
.catch(console.error);

// async promise

const monke = require('monkewrapper');

(async () => {
  const res = await monke(<endpoint>, [args]);
  
  console.log(res);
})();
```

## Endpoints
`/images/pat`\
`/images/monkey`

`/facts/monkey`\
`/facts/cat`\
`/facts/dog`

`/npm`\
`/stats`

## Args Object
### The arguments object help indentify the parameters of the url, **Example:** `{ name: "monkewrapper" }` | https://monke.vip/api/npm?name=monkewrapper


## MonkeDev API Docs
### Please check out the actual [documentation](https://monke.vip/api/docs) for more information of each endpoint!
