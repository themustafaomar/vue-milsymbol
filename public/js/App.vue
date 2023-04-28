<template>
  <header>
    <v-milsymbol
      ref="msymbol"
      :sidc="sidc"
      :options="options"
    >
    </v-milsymbol>
  </header>
</template>

<script>
export default {
  data: () => ({
    sidc: 'sfgpewrh--mt',
    options: { size: 50 }
  }),
  mounted() {
    console.log(this.$refs.msymbol.getInstance())
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: center;
  padding-top: 3rem
}
</style>