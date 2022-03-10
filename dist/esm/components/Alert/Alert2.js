import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import IconAlertTriangle from '../Icon/icons/IconAlertTriangle/IconAlertTriangle2.js';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import IconInfo from '../Icon/icons/IconInfo/IconInfo2.js';
import IconX from '../Icon/icons/IconX/IconX2.js';
import IconXCircle from '../Icon/icons/IconXCircle/IconXCircle2.js';
import AlertStyles from './Alert.module.css.js';

const icons = {
  danger: jsx(IconXCircle, {
    size: "medium"
  }, void 0),
  success: jsx(IconCheck, {
    size: "medium"
  }, void 0),
  warning: jsx(IconAlertTriangle, {
    size: "medium"
  }, void 0),
  info: jsx(IconInfo, {
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
  const [visible, setVisible] = useState(true);
  let containerClasses = [AlertStyles['sbui-alert-container']];
  containerClasses.push(AlertStyles[`sbui-alert-container--${variant}`]);
  if (className) containerClasses.push(className);
  let descriptionClasses = [AlertStyles['sbui-alert-description']];
  descriptionClasses.push(AlertStyles[`sbui-alert-description--${variant}`]);
  let closeButtonClasses = [AlertStyles['sbui-close-button']];
  closeButtonClasses.push(AlertStyles[`sbui-close-button--${variant}`]);
  return jsx(Fragment, {
    children: visible && jsx("div", Object.assign({
      className: containerClasses.join(' ')
    }, {
      children: jsxs("div", Object.assign({
        className: "flex"
      }, {
        children: [jsx("div", Object.assign({
          className: "flex-shrink-0"
        }, {
          children: withIcon && icons[variant]
        }), void 0), jsxs("div", Object.assign({
          className: "ml-3"
        }, {
          children: [jsx("h3", Object.assign({
            className: "sbui-alert-title"
          }, {
            children: title
          }), void 0), jsx("div", Object.assign({
            className: descriptionClasses.join(' ')
          }, {
            children: children
          }), void 0)]
        }), void 0), closable && jsx("div", Object.assign({
          className: "ml-auto pl-3"
        }, {
          children: jsx("div", Object.assign({
            className: "-mx-1.5 -my-1.5"
          }, {
            children: jsx("button", Object.assign({
              "aria-label": "Close alert",
              onClick: () => setVisible(false),
              className: closeButtonClasses.join(' ')
            }, {
              children: jsx(IconX, {
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

export { Alert as default };
