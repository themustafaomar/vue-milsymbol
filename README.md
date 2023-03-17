# vue-milsymbol

A Vue wrapper component for Milsymbol, for more information please visit [milsymbol](https://github.com/spatialillusions/milsymbol)

⚠️ Attention: This is pre-release alpha version Vue wrapper component for milsymbol, there will be lots of changes coming soon.

## Installation

To install `vue-milsymbol` you need to install this package via npm.

```js
npm i vue-milsymbol
```

## Quick start

```js
import Vue from 'vue'
import VMilsymbol from 'vue-milsymbol'

Vue.use(VMilsymbol)

new Vue({
  render: ...
}).$mount('#app')
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