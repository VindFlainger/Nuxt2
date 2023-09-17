<template>
  <div>
    <Tutorial/>
    {{ dataGet }}
    {{ dataPost }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      dataGet: null,
      dataPost: null
    }
  },
  async created() {
    this.dataGet = await this.$api.GET_TODOS({ body: {} })
    this.dataPost = await this.$api.SET_TODOS({ body: { test: 1 } })
  }
}
</script>
