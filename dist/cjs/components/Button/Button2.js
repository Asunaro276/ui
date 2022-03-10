'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Button_module = require('./Button.module.css.js');
var IconContext = require('../Icon/IconContext.js');
var IconLoader = require('../Icon/icons/IconLoader/IconLoader2.js');

const Button = /*#__PURE__*/React.forwardRef((_a, ref) => {
  var {
    block,
    className,
    children,
    danger,
    disabled = false,
    onClick,
    icon,
    iconRight,
    loading = false,
    loadingCentered = false,
    shadow = true,
    size = 'tiny',
    style,
    type = 'primary',
    htmlType,
    ariaSelected,
    ariaControls,
    tabIndex,
    role,
    as,
    textAlign = 'center'
  } = _a,
      props = _tslib.__rest(_a, ["block", "className", "children", "danger", "disabled", "onClick", "icon", "iconRight", "loading", "loadingCentered", "shadow", "size", "style", "type", "htmlType", "ariaSelected", "ariaControls", "tabIndex", "role", "as", "textAlign"]); // button ref


  const containerRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  React.useImperativeHandle(ref, () => ({
    container: () => {
      return containerRef.current;
    },
    button: () => {
      return buttonRef.current;
    }
  })); // styles

  const showIcon = loading || icon;
  let classes = [Button_module["default"]['sbui-btn']];
  let containerClasses = [Button_module["default"]['sbui-btn-container']];
  classes.push(Button_module["default"][`sbui-btn-${type}`]);

  if (block) {
    containerClasses.push(Button_module["default"]['sbui-btn--w-full']);
    classes.push(Button_module["default"]['sbui-btn--w-full']);
  }

  if (danger) {
    classes.push(Button_module["default"]['sbui-btn--danger']);
  }

  if (shadow && type !== 'link' && type !== 'text') {
    classes.push(Button_module["default"]['sbui-btn-container--shadow']);
  }

  if (size) {
    classes.push(Button_module["default"][`sbui-btn--${size}`]);
  }

  if (className) {
    classes.push(className);
  }

  const iconLoaderClasses = [Button_module["default"]['sbui-btn--anim--spin']];

  if (loadingCentered) {
    iconLoaderClasses.push(Button_module["default"][`sbui-btn-loader--center`]);
  }

  if (loading && loadingCentered) {
    classes.push(Button_module["default"][`sbui-btn--text-fade-out`]);
  }

  classes.push(Button_module["default"][`sbui-btn--text-align-${textAlign}`]); // custom button tag

  const CustomButton = _a => {
    var props = _tslib.__rest(_a, []);

    const Tag = as;
    return jsxRuntime.jsx(Tag, Object.assign({}, props), void 0);
  };

  const RenderedButton = _ref => {
    let {
      children
    } = _ref;
    return as ? jsxRuntime.jsx(CustomButton, Object.assign({
      className: classes.join(' '),
      onClick: onClick,
      style: style
    }, {
      children: children
    }), void 0) : jsxRuntime.jsx("button", Object.assign({}, props, {
      ref: buttonRef,
      className: classes.join(' '),
      disabled: loading || disabled && true,
      onClick: onClick,
      style: style,
      type: htmlType,
      "aria-selected": ariaSelected,
      "aria-controls": ariaControls,
      tabIndex: tabIndex,
      role: role
    }, {
      children: children
    }), void 0);
  };

  return jsxRuntime.jsx("span", Object.assign({
    ref: containerRef,
    className: containerClasses.join(' ')
  }, {
    children: jsxRuntime.jsxs(RenderedButton, {
      children: [showIcon && (loading ? jsxRuntime.jsx(IconLoader["default"], {
        size: size,
        className: iconLoaderClasses.join(' ')
      }, void 0) : icon ? jsxRuntime.jsx(IconContext.IconContext.Provider, Object.assign({
        value: {
          contextSize: size
        }
      }, {
        children: icon
      }), void 0) : null), children && jsxRuntime.jsx("span", {
        children: children
      }, void 0), iconRight && !loading && jsxRuntime.jsx(IconContext.IconContext.Provider, Object.assign({
        value: {
          contextSize: size
        }
      }, {
        children: iconRight
      }), void 0)]
    }, void 0)
  }), void 0);
});

exports["default"] = Button;
