<template>
  <div id="app">
    <Header/>
    <ArticleContainer class="container-padding"/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import ArticleContainer from '~/components/ArticleContainer.vue'

export default {
  components: {
    Header,
    ArticleContainer
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
.article>.content pre {
    display: block;
    position: relative;
    overflow: hidden;
    margin-bottom: 1em;
    padding-left: 2.5em;
    background-color: rgba(0,0,0,.8);
}
.article>.content pre>.code-lines {
    position: absolute;
    left: 0;
    top: 2.8em;
    margin: 0;
    padding: 1em 0;
    width: 2.5em;
    height: calc(100% - 2.8em);
    text-align: center;
    background-color: rgba(0,0,0,.2);
}
.article>.content pre>.code-lines>.code-line-number {
    padding: 0;
    position: relative;
    list-style-type: none;
    line-height: 1.6em;
    -webkit-transition: background-color .05s;
    transition: background-color .05s;
}
.article>.content pre>code {
    margin: 0;
    padding: 1em;
    float: left;
    width: 100%;
    height: 100%;
    display: block;
    line-height: 1.6em;
    color: hsla(0,0%,100%,.87);
    background-color: transparent;
}
.article .content p{
  font-size: 14px !important;
  /* color: #999; */
  text-indent: 2em;
}
.article .content h1,
.article .content h2,
.article .content h3,
.article .content h4{
  font-size: 20px;
  font-weight: normal;
  padding-left: 5px;
  border-left: 2px solid #37ac68;
  margin-bottom: 10px;
}
.article .content li{
  font-size: 14px;
}
.article .content a{
  display: inline-block;
  font-size: 14px;
  text-indent: 2em;
  color: #37ac68;
}
</style>
