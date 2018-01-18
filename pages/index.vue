<template>
  <div id="app">
    <nuxt/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import { httpConfig } from '~/configs/http.config'

export default {
  layout: 'index',
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
      axios.post(`${httpConfig.localhost}/api/articleList`, {
        'column': '',
        'currentPage': 1
      }).then(res => {
        if (res.status === 200) {
          store.commit('ARTICLE_LIST', res.data)
        }
      }),
      axios.post(`${httpConfig.localhost}/api/catalogs`).then(res => {
        if (res.status === 200) {
          store.commit('CATALOG_LIST', res.data)
        }
      })
    ])
  }
}
</script>