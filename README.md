# vue-milsymbol

A Vue wrapper component for Milsymbol, for more information please visit [milsymbol](https://github.com/spatialillusions/milsymbol)

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

```js
<template>
  <v-milsymbol
    ref="msymbol"
    sidc="sfgpewrh--mt"
    :options="{ size: 50 }"
  >
  </v-milsymbol>
</template>

<script>
export default {
  mounted() {
    console.log(this.$refs.msymbol.getInstance())
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