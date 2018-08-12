import React from 'react'
import ArticleList from './'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  it('should render all articles', function() {
    const wrapper = mount(<ArticleList articles={articles} />)

    expect(wrapper.find('.article').length).toBe(7)
  })

  it('should open a comments', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    wrapper.find('.open-article-0').simulate('click')
    expect(wrapper.find('.open-comments').length).toBe(1)
  })

  it('should open a comments', function(done) {
    const wrapper = mount(
      <ArticleList
        articles={articles}
        fetchData={() => {
          done()
        }}
      />
    )
  })

  it('should open/close all article', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    let result = true
    wrapper.find('.article').reduce((result, article, index) => {
      wrapper.find(`.open-article-${index}`).simulate('click')
      result = wrapper.find(`.text-${index}`).length === 1 && result
      wrapper.find(`.open-article-${index}`).simulate('click')
      result = wrapper.find(`.text-${index}`).length === 1 && result
      return result
    }, true)
    expect(result).toBe(true)
  })
})
