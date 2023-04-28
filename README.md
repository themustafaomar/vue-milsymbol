# vue-milsymbol

A Vue wrapper component for Milsymbol, for more information please visit [milsymbol](https://github.com/spatialillusions/milsymbol)

⚠️ Attention: This is pre-release alpha version Vue wrapper component for milsymbol, there will be lots of changes coming soon.

## Versions

| Vuejs version | Package version | Branch |
| :---          |:---------------:| ---:   | 
| 3.x           |       2.x       | `main` (in development) |
| 2.x           |       1.x       | [legacy](https://github.com/themustafaomar/vue-milsymbol/tree/legacy) |

## Installation

To install `vue-milsymbol` you need to install this package via npm.

```js
npm i vue-milsymbol
```

## Quick start

```js
import { createApp, h } from 'vue'
import VMilsymbol from 'vue-milsymbol'

const app = createApp({
  render: ...
})

app.use(VMilsymbol, {
  // Set default global options
  // See: https://www.spatialillusions.com/milsymbol/documentation.html
  size: 50
})

app.mount('#app')
```

In your component just declare `v-milsymbol` then add your options.

```html
<template>
  <v-milsymbol
    ref="msymbol"
    :sidc="sidc"
    :options="{ size: 50 }"
  >
  </v-milsymbol>
</template>

<script>
export default {
  data: () => ({
    sidc: 'sfgpewrh--mt'
  }),
  mounted() {
    console.log(this.$refs.msymbol.getInstance())

    // To change symbol automatically you just
    // need to change the sidc and it'll change Immediately
    setTimeout(() => this.sidc = '10031000000000000000', 1000)
  }
}
</script>
```

### Working with the package
```
npm run serve
```

### Compile for production
```
npm run build
```