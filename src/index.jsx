import React, { PropTypes } from "react";
import Radium from "radium";
import Styles from "./styles";

@Radium
class TodolistItem extends React.Component {

  static propTypes = {
    handleHover: PropTypes.func,
    handleTitleClick: PropTypes.func,
    handleCheckboxClick: PropTypes.func,
    item: PropTypes.object.isRequired,
    theme: PropTypes.object
  };

  static defaultProps = {
    handleCheckboxClick: () =>{},
    handleTitleClick: () => {},
    handleHover: () => {},
    theme: {}
  };

  constructor(props){
    super(props);
    this.name = "todolist_item";
  }

  render() {
    const { item, parentId, handleTitleClick,
            handleCheckboxClick, theme, handleHover } = this.props;
    const { id, title, complete, highlight } = item;
    const isCompleted = complete ? "complete" : "incomplete";
    const isHighlighted = highlight ? "highlight" : "noHighlight";
    const itemTitle = title.length <= 28 ? title : title.substring(0, 28) + " ...";
    const styles = new Styles(theme);

    return (
      <li className={ this.name }
          style={ [styles.base, styles.outer, styles[isHighlighted]] }
          onMouseOut={ handleHover.bind(this, item.id, false) }
          onMouseOver={ handleHover.bind(this, item.id, true) }>
        <p style={ [styles.base, styles.inner] }>
          <span style={ [styles.checkbox, styles[isCompleted]] }
                onClick={ handleCheckboxClick.bind(this, item.id) }/>
          <span onClick={ handleTitleClick.bind(this, item.id) }>
            { itemTitle }
          </span>
        </p>
      </li>
    );
  }
}

export default TodolistItem;
