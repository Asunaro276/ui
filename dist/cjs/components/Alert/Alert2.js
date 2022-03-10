'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconAlertTriangle = require('../Icon/icons/IconAlertTriangle/IconAlertTriangle2.js');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var IconInfo = require('../Icon/icons/IconInfo/IconInfo2.js');
var IconX = require('../Icon/icons/IconX/IconX2.js');
var IconXCircle = require('../Icon/icons/IconXCircle/IconXCircle2.js');
var Alert_module = require('./Alert.module.css.js');

const icons = {
  danger: jsxRuntime.jsx(IconXCircle["default"], {
    size: "medium"
  }, void 0),
  success: jsxRuntime.jsx(IconCheck["default"], {
    size: "medium"
  }, void 0),
  warning: jsxRuntime.jsx(IconAlertTriangle["default"], {
    size: "medium"
  }, void 0),
  info: jsxRuntime.jsx(IconInfo["default"], {
    size: "medium"
  }, void 0)
};

const Alert = _ref => {
  let {
    variant = 'success',
    className,
    title,
    withIcon,
    closable,
    children
  } = _ref;
  const [visible, setVisible] = React.useState(true);
  let containerClasses = [Alert_module["default"]['sbui-alert-container']];
  containerClasses.push(Alert_module["default"][`sbui-alert-container--${variant}`]);
  if (className) containerClasses.push(className);
  let descriptionClasses = [Alert_module["default"]['sbui-alert-description']];
  descriptionClasses.push(Alert_module["default"][`sbui-alert-description--${variant}`]);
  let closeButtonClasses = [Alert_module["default"]['sbui-close-button']];
  closeButtonClasses.push(Alert_module["default"][`sbui-close-button--${variant}`]);
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: visible && jsxRuntime.jsx("div", Object.assign({
      className: containerClasses.join(' ')
    }, {
      children: jsxRuntime.jsxs("div", Object.assign({
        className: "flex"
      }, {
        children: [jsxRuntime.jsx("div", Object.assign({
          className: "flex-shrink-0"
        }, {
          children: withIcon && icons[variant]
        }), void 0), jsxRuntime.jsxs("div", Object.assign({
          className: "ml-3"
        }, {
          children: [jsxRuntime.jsx("h3", Object.assign({
            className: "sbui-alert-title"
          }, {
            children: title
          }), void 0), jsxRuntime.jsx("div", Object.assign({
            className: descriptionClasses.join(' ')
          }, {
            children: children
          }), void 0)]
        }), void 0), closable && jsxRuntime.jsx("div", Object.assign({
          className: "ml-auto pl-3"
        }, {
          children: jsxRuntime.jsx("div", Object.assign({
            className: "-mx-1.5 -my-1.5"
          }, {
            children: jsxRuntime.jsx("button", Object.assign({
              "aria-label": "Close alert",
              onClick: () => setVisible(false),
              className: closeButtonClasses.join(' ')
            }, {
              children: jsxRuntime.jsx(IconX["default"], {
                size: "xlarge",
                strokeWidth: 1.5
              }, void 0)
            }), void 0)
          }), void 0)
        }), void 0)]
      }), void 0)
    }), void 0)
  }, void 0);
};

exports["default"] = Alert;
