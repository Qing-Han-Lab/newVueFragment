<template>
  <div class="home">
    <Titlebar />
    <button @click="toPage('index',{from : 'home'})">去index</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.$http('GET','www.baidu.com',{
    //   name : 123,
    //   age : 25
    // })
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f7f7f7;
  overflow: hidden;
  button{
    background: yellow;
  }
}
</style>