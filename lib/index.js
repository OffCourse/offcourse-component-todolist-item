"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var TodolistItem = (function (_React$Component) {
  function TodolistItem(props) {
    _classCallCheck(this, TodolistItem);

    _get(Object.getPrototypeOf(TodolistItem.prototype), "constructor", this).call(this, props);
    this.name = "todolist_item";
  }

  _inherits(TodolistItem, _React$Component);

  _createClass(TodolistItem, [{
    key: "classes",
    value: function classes() {
      var _classnames;

      var item = this.props.item;

      var highlightClass = this.name + "-is-highlighted";
      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, highlightClass, item.highlight), _classnames));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props;
      var item = _props.item;
      var handleTitleClick = _props.handleTitleClick;
      var handleCheckboxClick = _props.handleCheckboxClick;
      var handleHover = _props.handleHover;
      var title = item.title;
      var id = item.id;
      var complete = item.complete;
      var highlight = item.highlight;

      var isComplete = complete ? "complete" : "incomplete";

      if (title.length > 28) {
        title = item.title.substring(0, 28) + " ...";
      }

      return _react2["default"].createElement(
        "li",
        { onMouseOut: handleHover.bind(this, id, false),
          onMouseOver: handleHover.bind(this, id, true),
          className: this.classes() },
        _react2["default"].createElement("span", { className: "checkbox checkbox-is-" + isComplete,
          onClick: handleCheckboxClick.bind(this, id) }),
        _react2["default"].createElement(
          "span",
          { className: "title title-resource",
            onClick: handleTitleClick.bind(this, item) },
          title
        )
      );
    }
  }]);

  return TodolistItem;
})(_react2["default"].Component);

TodolistItem.defaultProps = {
  handleCheckboxClick: function handleCheckboxClick() {},
  handleTitleClick: function handleTitleClick() {},
  handleHover: function handleHover() {}
};

TodolistItem.propTypes = {
  handleHover: _react2["default"].PropTypes.func,
  handleTitleClick: _react2["default"].PropTypes.func,
  handleCheckboxClick: _react2["default"].PropTypes.func,
  item: _react2["default"].PropTypes.object.isRequired
};

exports["default"] = TodolistItem;
module.exports = exports["default"];