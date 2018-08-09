import * as React from "react";
import { Comment } from "./Comment";

export class CommentList extends React.Component {
  state = {
    openCommentId: null
  };

  render() {
    const { comments } = this.props;
    if (!comments) return <div>Нет комментариев</div>;
    return (
      <div>
        Comments:
        <ul>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              isOpen={this.state.openCommentId === comment.id}
              toggleVisibility={this.toggleVisibility}
            />
          ))}
        </ul>
      </div>
    );
  }

  toggleVisibility = id => {
    this.setState({
      openCommentId: this.state.openCommentId === id ? null : id
    });
  };
}
