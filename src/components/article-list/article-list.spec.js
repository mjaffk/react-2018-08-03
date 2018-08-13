import React from 'react'
import ArticleList from './'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('ArticleList', function() {
  it('should render all articles', function() {
    const wrapper = mount(<ArticleList articles={articles} />)

    expect(wrapper.find('.article').length).toBe(7)
  })

  it('should open comments', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    wrapper
      .find('.open-article')
      .at(0)
      .simulate('click')
    console.log('Some info')
    setTimeout(() => {
      try {
        expect(
          wrapper.find('[data-automation-id="open-comments"]').length
        ).toBe(1)
        done()
      } catch (e) {
        done.fail(e)
      }
    }, 100)
  })

  it('should close comments', function() {
    const wrapper = mount(<ArticleList articles={articles} />)
    wrapper
      .find('.open-article')
      .at(0)
      .simulate('click')

    setTimeout(() => {
      try {
        expect(
          wrapper.find('[data-automation-id="open-comments"]').length
        ).toBe(0)
        done()
      } catch (e) {
        done.fail(e)
      }
    }, 100)
  })

  it('should call fetchData', function(done) {
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
