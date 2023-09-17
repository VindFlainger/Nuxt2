<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    this.$api.GET_TODOS({body: {}})
  }
}
</script>
