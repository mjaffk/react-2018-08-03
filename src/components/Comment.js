import * as React from "react";

export class Comment extends React.PureComponent {
  render() {
    console.log("C");
    const { comment, isOpen } = this.props;
    return (
      <li>
        {comment.user}
        <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
        {isOpen ? <p>{comment.text}</p> : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.comment.id);
  };
}
