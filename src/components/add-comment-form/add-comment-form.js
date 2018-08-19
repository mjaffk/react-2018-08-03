import React, { Component } from 'react'
import './add-comment-form.css'

export default class AddCommentForm extends Component {
  render() {
    return (
      <form className={'add-comment'}>
        <div className={'user-name'}>
          <label htmlFor={'user-name'}>User name:</label>
          <input
            className={'input'}
            type={'text'}
            id={'user-name'}
            name={'user-name'}
            placeholder={'Enter you name'}
            defaultValue={'user name'}
          />
        </div>
        <div className={'text'}>
          <label htmlFor={'text'}>Comment:</label>
          <textarea
            className={'input'}
            id={'text'}
            name={'text'}
            placeholder={'Enter you comment'}
            defaultValue={'Comment'}
          />
        </div>
        <div className={'buttons'}>
          <input className={'button'} type={'reset'} />
          <input
            className={'button'}
            type={'button'}
            onClick={this.addComment}
            value={'Add comment'}
          />
        </div>
      </form>
    )
  }

  addComment = () => {
    const user = document.getElementById('user-name').value
    const text = document.getElementById('text').value
    document.getElementById('user-name').value = ''
    document.getElementById('text').value = ''
    return this.props.addComment(user, text, this.props.articleId)
  }
}
