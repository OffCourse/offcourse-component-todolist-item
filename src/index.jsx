import React from "react";
import classnames from "classnames";

class TodolistItem extends React.Component {
  constructor(props){
    super(props);
    this.name = "todolist_item";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { item, onCheckboxClick, onTitleClick } = this.props;
    let { title, id, complete } = item;
    let isComplete = complete ? "complete" : "incomplete";

    return (
      <section className={ this.classes() }>
        <span className={ `checkbox checkbox-is-${isComplete}` }
              onClick={ onCheckboxClick.bind(this, id) }></span>
        <span className="title title-resource"
              onClick={ onTitleClick.bind(this, item) }>{ title }</span>
      </section>
    );
  }
}

TodolistItem.defaultProps = {
  onCheckboxClick: () =>{},
  onTitleClick: () =>{}
};

TodolistItem.propTypes = {
  onCheckboxClick: React.PropTypes.func,
  onTitleClick: React.PropTypes.func,
  item: React.PropTypes.object.isRequired
};

export default TodolistItem;
