import React from "react";
import TodolistItem from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);

    let item = {
      id: 1,
      title: "Foo Bar Baz Foo Bar Baz Bar Bar Baz",
      complete: false,
      highlight: false
    };

    this.state = { item };
  }
  handleHover(){
    let { item } = this.state;
    item.highlight = !item.highlight;
    this.setState({item});
  };
  handleClick(origin, selection){
    let { item } = this.state;
    if(origin === "checkbox"){
      item.complete = !item.complete;
      this.setState({item});
    } else {
      this.setState({selection});
    }
  };

  render() {
    let { item, selection } = this.state;
    return (
      <section>
        <TodolistItem
          handleTitleClick={ this.handleClick.bind(this, "title") }
          handleCheckboxClick={ this.handleClick.bind(this, "checkbox") }
          handleHover={ this.handleHover.bind(this) }
          item={ item }/>
          <p>Selection: { JSON.stringify(selection) || "click title" }</p>
      </section>
    );
  }
}

export default Example;

/*eslint no-alert:0 */
/*eslint no-undef:0 */
