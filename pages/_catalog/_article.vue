<template>
  <div id="app">
    <nuxt/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import { httpConfig } from '~/configs/http.config'

export default {
  layout: 'article',
  // asyncData () {
  //   return axios.post('http://localhost:8081/api/articleList', {
  //     'column': '',
  //     'currentPage': 1
  //   }).then(res => {
  //     return {
  //       data: res.data.data
  //     }
  //   })
  // },
  fetch ({store, params}) {
    return Promise.all([
      axios.post(`${httpConfig.localhost}/api/article`, {
        'column': params.catalog,
        'idx': params.article
      }).then(res => {
        if (res.status === 200) {
          store.commit('ARTICLE', res.data.data)
        }
      })
    ])
  }
}
</script>