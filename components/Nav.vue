<template>
    <div>
        <el-row class="tac">
          <el-col :span="24">
            <h5>Catalog</h5>
            <span class="home" :class="{'home-active': homeActive}" @mouseenter="homeActive = true;" @mouseleave="homeActive = false;">home to all</span>
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" router>
              <el-menu-item-group v-for="skills in catalogList.data" v-bind:title="skills.name" >
                <el-menu-item v-for="items in skills.items" v-bind:index="items.index">{{items.name}}</el-menu-item>
              </el-menu-item-group>
            </el-menu>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      homeActive: false
    }
  },
  computed: {
    ...mapState([
      'catalogList'
    ])
  }
}
</script>

<style scoped>
.home {
  display: block;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  cursor: pointer;
}
.home-active {
  background: rgba(64,158,255,.1);
  color: #409EFF;
}
</style>