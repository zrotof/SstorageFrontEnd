<template>
  <div class="home">
    <AddProduct />
  </div>
</template>

<script>
// @ is an alias to /src
import AddProduct from '@/components/AddProduct.vue'

export default {
  name: 'add',
  components: {
    AddProduct
  }
}
</script>

<style scoped lang="scss">
body{height:100%;}
</style>
