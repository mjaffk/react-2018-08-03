import * as React from "react";
import { CommentList } from "./CommentList";

export class Article extends React.PureComponent {
  render() {
    console.log("R");
    const { article, isOpen } = this.props;
    return (
      <li>
        {article.title}
        <button onClick={this.handleClick}>{isOpen ? "close" : "open"}</button>
        {isOpen ? <p>{article.text}</p> : null}
        {isOpen ? <CommentList comments={article.comments} /> : null}
      </li>
    );
  }

  handleClick = () => {
    this.props.toggleVisibility(this.props.article.id);
  };
}
