import React from "react";
import TodolistItem from "../src/index.jsx";

class Example extends React.Component {
  constructor(props){
    super(props);
    const item = {
      id: 1,
      title: "Foo Bar Baz Foo Bar Baz Bar Bar Baz",
      complete: false,
      highlight: false
    };
    this.state = { item };
  }

  handleHover(){
    const { item } = this.state;
    item.highlight = !item.highlight;
    this.setState({item});
  };

  handleClick(origin, selection){
    const { item } = this.state;
    if(origin === "checkbox"){
      item.complete = !item.complete;
      this.setState({item});
    } else {
      this.setState({selection});
    }
  };

  render() {
    const { theme } = this.props;
    const { item, selection } = this.state;

    const styles = {
      fontFamily: theme.baseFont.family,
      fontSize: theme.baseFont.size,
      width: theme.baseUnit * 10
    };

    return (
      <section style={ styles }>
        <TodolistItem
          handleTitleClick={ this.handleClick.bind(this, "title") }
          handleCheckboxClick={ this.handleClick.bind(this, "checkbox") }
          handleHover={ this.handleHover.bind(this) }
          parentId={ "1" }
          theme={ theme }
          item={ item }/>
        <p>Selection: { JSON.stringify(selection) || "click title" }</p>
      </section>
    );
  }
}

export default Example;
