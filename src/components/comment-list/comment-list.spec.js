import React from 'react'
import CommentList from './'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'
import ArticleList from './'

Enzyme.configure({ adapter: new Adapter() })

describe('CommentList', function() {
  it('should render all comments', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    wrapper.find('.open-article-0').simulate('click')
    wrapper.find('[data-automation-id="open-comments"]').simulate('click')
    expect(wrapper.find('.comment').length).toBe(5)
  })
})
