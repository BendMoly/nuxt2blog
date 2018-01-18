<template>
    <div>
        
        <div class="article-container" v-for="item in $store.state.articleList.data" :key="item.uuid">
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <h2>{{item.title}}</h2>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    Posted on {{item.time}}
                </div>
              </el-col>
               <el-col :span="24">
                <div class="grid-content bg-purple-dark tag">
                    <el-tag type="success">{{item.column}}</el-tag> <el-tag type="gray" v-for="tag in item.tag" :key="tag.id">{{tag}}</el-tag>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark article">
                    {{item.summary}}...
                </div>
              </el-col>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <nuxt-link :to="'/'+item.column+'/'+item.uuid">
                        <el-button>Read More ></el-button>
                    </nuxt-link>
                </div>
              </el-col>
            </el-row>
        </div>
        <div class="block articlelist-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="$store.state.articleList.currentPage"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="$store.state.articleList.totalPage">
            </el-pagination>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      currentPage: 1,
      totalPage: 10
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>

<style scoped>
.el-tag{
    margin-right: 5px;
}
.article-container{
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
    margin-right: 60px;
}
h2{
    margin-bottom: 0;
    font-weight: normal;
    color: #333;
}
.tag{
    margin-top: 10px;
    margin-bottom: 20px;
}
.article{
    margin-bottom: 20px;
    font-size: 14px;
}
.articlelist-pagination{
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: center;
}
</style>
