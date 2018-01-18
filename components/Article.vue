<template>
  <div class="article">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h2 class="article-title">{{article.title}}</h2>
          <p class="article-time">Posted on {{article.time}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-tag type="success">{{article.column}}</el-tag> <el-tag type="gray" v-for="tag in article.tag" :key="">{{tag}}</el-tag>
        </div>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="24">
        <div v-html="articleContent"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import marked from '~/plugins/marked'

export default {
  data () {
    return {}
  },
  computed: {
    article () {
      return this.$store.state.article
    },
    articleContent () {
      return marked(this.article.content, false, true)
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-tag{
    margin-right: 5px;
}
.article{
  margin-bottom: 50px;
}
.article-title{
  margin-bottom: 0;
  font-weight: normal;
}
.article-time{
  margin-top: 0;
}
input{
    width: 100px !important;
}
.content{
  margin: 10px 0;
}
.reviewarea{
  color: #ffffff;
  line-height: 36px;
  min-height: 36px;
  background: #20a0ff;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
}
.review-list{
  background: #ece8e8;
  padding-bottom: 5px;
  margin-bottom: 15px;
}
.review-question{
  padding: 5px 0;
  border-bottom: 2px solid #f8f8f8;
}
.review-ask{
  padding: 5px 0;
}
.review-name{
  padding-left: 20px;
}
</style>
