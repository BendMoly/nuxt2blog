<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="19">
                <div>
                    <h5>Articles</h5>
                    <List/>
                </div>
            </el-col>
            <el-col :span="5">
                <div>
                    <Nav/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import List from '~/components/List.vue'
import Nav from '~/components/Nav.vue'
export default {
  components: {
    List,
    Nav
  }
}
</script>