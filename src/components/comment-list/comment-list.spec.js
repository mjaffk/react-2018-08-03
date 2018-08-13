import React from 'react'
import CommentList from './comment-list'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

const { comments } = articles[0]

describe('CommentList', function() {
  it('should open a comments', function(done) {
    const wrapper = mount(<CommentList comments={comments} />)
    wrapper.find('[data-automation-id="open-comments"]').simulate('click')

    setTimeout(() => {
      try {
        expect(wrapper.find('.comment-container').length).toBe(5)
        done()
      } catch (e) {
        done.fail(e)
      }
    }, 100)
  })
})
