<template>
  <div id="app">
    <Header/>
    <ListContainer class="container-padding"/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import ListContainer from '~/components/ListContainer.vue'

export default {
  components: {
    Header,
    ListContainer
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
}

#app {
  font-family: "-apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif";
  min-width: 1160px;
  overflow: hidden;
}
.clear{
  zoom:1;
 }
.clear:after{
  content: "";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}
.container-padding {
  padding: 0 50px;
}
</style>
