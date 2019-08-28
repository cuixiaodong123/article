import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";

var Demo =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Demo, _Component);

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
    return React.createElement("div", {
      className: "article-container"
    }, React.createElement("h1", null, title ? title : ''), React.createElement("div", {
      className: "subheader"
    }, blockName ? React.createElement("span", null, "\u677F\u5757:", blockName) : '', ownerName ? React.createElement("span", null, "\u4F5C\u8005:", ownerName) : '', viewCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "eye"
    }), React.createElement("span", null, viewCount)) : '', replyCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "message"
    }), React.createElement("span", null, replyCount)) : '', voteCount ? React.createElement("span", null, React.createElement(_Icon, {
      type: "like"
    }), React.createElement("span", null, voteCount)) : '', creationDate ? React.createElement("span", null, "\u53D1\u8868\u4E8E:", creationDate) : ''), React.createElement("div", {
      className: "content",
      dangerouslySetInnerHTML: {
        __html: content
      }
    }));
  };

  return Demo;
}(Component);

export default Demo;