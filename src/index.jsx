import React from "react";
import classnames from "classnames";

class TodolistItem extends React.Component {
  constructor(props){
    super(props);
    this.name = "todolist_item";
  }

  classes(){
    let { item } = this.props;
    let highlightClass = `${this.name}-is-highlighted`;
    return classnames({
      [this.name]: true,
      [highlightClass]: item.highlight
    });
  }

  render() {
    let { item, handleTitleClick, handleCheckboxClick, handleHover } = this.props;
    let { title, id, complete, highlight } = item;
    let isComplete = complete ? "complete" : "incomplete";

    if(title.length > 28){
      title = item.title.substring(0, 28) + " ...";
    }

    return (
      <li onMouseOut={ handleHover.bind(this, id, false) }
          onMouseOver={ handleHover.bind(this, id, true) }
          className={ this.classes() }>
        <span className={ `checkbox checkbox-is-${isComplete}` }
              onClick={ handleCheckboxClick.bind(this, id) }></span>
        <span className="title title-resource"
              onClick={ handleTitleClick.bind(this, item) }>{ title }</span>
      </li>
    );
  }
}

TodolistItem.defaultProps = {
  handleCheckboxClick: () =>{},
  handleTitleClick: () => {},
  handleHover: () => {}
};

TodolistItem.propTypes = {
  handleHover: React.PropTypes.func,
  handleTitleClick: React.PropTypes.func,
  handleCheckboxClick: React.PropTypes.func,
  item: React.PropTypes.object.isRequired
};

export default TodolistItem;
