import * as React from "react";
import { Article } from "./Article";

export default class ArticleList extends React.Component {
  state = {
    openArticleId: null
  };

  render() {
    return (
      <ul>
        {this.props.articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={this.state.openArticleId === article.id}
            toggleVisibility={this.toggleVisibility}
          />
        ))}
      </ul>
    );
  }

  toggleVisibility = id => {
    this.setState({
      openArticleId: id
    });
  };
}
