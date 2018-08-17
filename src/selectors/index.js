import { createSelector } from 'reselect'
const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters

export const filteredArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('selector filteredArticlesSelector')
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
