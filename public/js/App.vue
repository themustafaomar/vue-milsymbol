<template>
  <header>
    <v-milsymbol
      ref="msymbol"
      sidc="sfgpewrh--mt"
      :options="{ size: 50 }"
    >
    </v-milsymbol>
  </header>
</template>

<script>
export default {
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