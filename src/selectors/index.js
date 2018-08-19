import { createSelector } from 'reselect'

const articlesSelector = (state) => state.articles
const filtersSelector = (state) => state.filters
const commentsSelector = (state) => state.comments
const idSelector = (_, props) => props.id

export const filteredArticlesSelector = createSelector(
  articlesSelector,
  filtersSelector,
  (articles, filters) => {
    console.log('selector filteredArticlesSelector')
    const {
      selected,
      dateRange: { from, to }
    } = filters

    let filtratedArticles = {}

    for (let articleId in articles) {
      const published = Date.parse(articles[articleId].date)

      if (
        (!selected.length ||
          selected.find((selected) => selected.value === articleId)) &&
        (!from || !to || (published > from && published < to))
      ) {
        filtratedArticles = {
          ...filtratedArticles,
          [articleId]: articles[articleId]
        }
      }
    }

    return {
      articles: filtratedArticles
    }
  }
)

export const createCommentSelector = () => {
  console.log('--- connect Comment')

  return createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('--- connect Comment')

    return {
      commentProp: comments[id]
    }
  })
}
