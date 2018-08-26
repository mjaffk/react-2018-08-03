import { createSelector } from 'reselect'

const filtersSelector = (state) => state.filters
export const articlesMapSelector = (state) => state.articles.entities
export const articleListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)
export const filtersSelectionSelector = createSelector(
  filtersSelector,
  (filters) => filters.selected
)

export const filteredArticlesSelector = createSelector(
  articleListSelector,
  filtersSelector,
  (articles, filters) => {
    const {
      selected,
      dateRange: { from, to }
    } = filters

    const filtratedArticles = articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })

    return {
      articles: filtratedArticles
    }
  }
)

export const loadingArticleSelector = (state) => state.articles.loading
