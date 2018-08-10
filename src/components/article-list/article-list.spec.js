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
    expect(wrapper.find('[data-automation-id="open-comments"]').length).toBe(1)
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
})
