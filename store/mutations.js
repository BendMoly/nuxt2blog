import {
  ARTICLE_LIST,
  CATALOG_LIST,
  ARTICLE
} from './type'

export default {
  [ARTICLE_LIST] (state, value) {
    state.articleList = value
  },
  [CATALOG_LIST] (state, value) {
    state.catalogList = value
  },
  [ARTICLE] (state, value) {
    state.article = value
  }
}
