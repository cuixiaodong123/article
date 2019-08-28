"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var Demo =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Demo, _Component);

  function Demo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        blockName = _this$props.blockName,
        ownerName = _this$props.ownerName,
        viewCount = _this$props.viewCount,
        replyCount = _this$props.replyCount,
        voteCount = _this$props.voteCount,
        creationDate = _this$props.creationDate,
        content = _this$props.content;
    return _react["default"].createElement("div", {
      className: "article-container"
    }, _react["default"].createElement("h1", null, title ? title : ''), _react["default"].createElement("div", {
      className: "subheader"
    }, blockName ? _react["default"].createElement("span", null, "\u677F\u5757:", blockName) : '', ownerName ? _react["default"].createElement("span", null, "\u4F5C\u8005:", ownerName) : '', viewCount ? _react["default"].createElement("span", null, _react["default"].createElement(_icon["default"], {
      type: "eye"
    }), _react["default"].createElement("span", null, viewCount)) : '', replyCount ? _react["default"].createElement("span", null, _react["default"].createElement(_icon["default"], {
      type: "message"
    }), _react["default"].createElement("span", null, replyCount)) : '', voteCount ? _react["default"].createElement("span", null, _react["default"].createElement(_icon["default"], {
      type: "like"
    }), _react["default"].createElement("span", null, voteCount)) : '', creationDate ? _react["default"].createElement("span", null, "\u53D1\u8868\u4E8E:", creationDate) : ''), _react["default"].createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  };

  return Demo;
}(_react.Component);

var _default = Demo;
exports["default"] = _default;