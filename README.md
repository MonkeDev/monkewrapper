# MonkeDev API Wrapper

### This wrapper was created to make the [MonkeDev API](https://monke.vip/api/docs) easier to use for you HTTPS noobs. 

### Need to write the code faster? Use our `vscode extension`!
**<ins>Steps:</ins>**
* Go to the `extensions` tab in `vscode` 
* Search `monkesnippets` and then install
* Go to any file and type `api.`
* There you will see [all the snippets](https://cdn.discordapp.com/attachments/715004705193066536/803078182483263528/unknown.png) that can be created into your project
* Lastly, just click (or tab) on the snippet and code shall be generated

**EXAMPLE**: `api.image.monkey` in the file, then click tab!

# Installation
```
npm i monkewrapper --save
```

# Example
```js
const monke = require('monkewrapper');

monke("/npm", { query: "monkewrapper" }) // Retrieves information about that npm package
.then(console.log)
.catch(console.error);
```

# Documentation
## Documentation Syntax
**<ins>Just a little notice:</ins>**\
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

(async () => {
  const monke = require('monkewrapper');
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
### Please indentify the `parameters` of the url in the `args object` for endpoints with required/optional parameters **Example:** `{ name: "monkewrapper" }` | https://monke.vip/api/npm?name=monkewrapper


## MonkeDev API Docs
### Please check out the actual [documentation](https://monke.vip/api/docs) for more information of each endpoint!
