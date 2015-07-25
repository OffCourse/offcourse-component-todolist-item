import React, { PropTypes } from "react";
import classnames from "classnames";

class TodolistItem extends React.Component {

  static propTypes = {
    handleHover: PropTypes.func,
    handleTitleClick: PropTypes.func,
    handleCheckboxClick: PropTypes.func,
    item: PropTypes.object.isRequired
  };

  static defaultProps = {
    handleCheckboxClick: () =>{},
    handleTitleClick: () => {},
    handleHover: () => {}
  };

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
    let { item, parentId, handleTitleClick, handleCheckboxClick, handleHover } = this.props;
    let { title, id, complete, highlight } = item;
    let isComplete = complete ? "complete" : "incomplete";

    if(title.length > 28){
      title = item.title.substring(0, 28) + " ...";
    }

    return (
      <li onMouseOut={ handleHover.bind(this, item.id, false) }
          onMouseOver={ handleHover.bind(this, item.id, true) }
          className={ this.classes() }>
        <p>
          <span className={ `checkbox checkbox-is-${isComplete}` }
                onClick={ handleCheckboxClick.bind(this, item.id) }></span>
          <span className={ `${this.name}-title` }
                onClick={ handleTitleClick.bind(this, item.id) }>{ title }</span>
        </p>
      </li>
    );
  }
}

export default TodolistItem;
