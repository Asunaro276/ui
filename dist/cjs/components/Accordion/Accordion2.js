'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var headlessui_esm = require('../../node_modules/@headlessui/react/dist/headlessui.esm.js');
var Accordion_module = require('./Accordion.module.css.js');
var IconChevronUp = require('../Icon/icons/IconChevronUp/IconChevronUp2.js');
var Typography = require('../Typography/Typography2.js');

const AccordionContext = /*#__PURE__*/React.createContext({
  defaultActiveId: [],
  icon: jsxRuntime.jsx(IconChevronUp["default"], {
    strokeWidth: 2
  }, void 0),
  iconPosition: 'right',
  onChange: undefined
});

function Accordion(_ref) {
  let {
    children,
    className,
    defaultActiveId = [],
    icon = jsxRuntime.jsx(IconChevronUp["default"], {
      strokeWidth: 2
    }, void 0),
    iconPosition = 'right',
    bordered,
    onChange
  } = _ref;
  let containerClasses = [Accordion_module["default"]['sbui-accordion-container']];

  if (bordered) {
    containerClasses.push(Accordion_module["default"]['sbui-accordion-container--bordered']);
  }

  if (className) {
    containerClasses.push(className);
  }

  const contextValue = {
    defaultActiveId,
    icon,
    iconPosition,
    onChange
  };
  return jsxRuntime.jsx(AccordionContext.Provider, Object.assign({
    value: contextValue
  }, {
    children: jsxRuntime.jsx("div", Object.assign({
      className: containerClasses.join(' ')
    }, {
      children: children
    }), void 0)
  }), void 0);
}

function Item(_ref2) {
  let {
    children,
    className,
    label,
    id
  } = _ref2;
  const {
    defaultActiveId,
    icon,
    iconPosition,
    onChange
  } = React.useContext(AccordionContext);
  let panelClasses = [Accordion_module["default"]['sbui-accordion-item__panel']];
  let buttonClasses = [Accordion_module["default"]['sbui-accordion-item__button']];

  if (className) {
    buttonClasses.push(className);
  }

  const isDefaultActive = id ? defaultActiveId === null || defaultActiveId === void 0 ? void 0 : defaultActiveId.includes(id) : false;
  const handleOnChange = React.useCallback(open => () => {
    if (onChange) {
      onChange({
        id,
        label,
        open
      });
    }
  }, [onChange, id, label]);
  return jsxRuntime.jsx(headlessui_esm.Disclosure, Object.assign({
    defaultOpen: isDefaultActive
  }, {
    children: _ref3 => {
      let {
        open
      } = _ref3;
      return jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [jsxRuntime.jsxs(headlessui_esm.Disclosure.Button, Object.assign({
          className: open ? `${buttonClasses.join(' ')} sbui-accordion-item__button--open` : buttonClasses.join(' ')
        }, {
          children: [iconPosition === 'left' && icon, jsxRuntime.jsx(Typography["default"].Text, {
            children: label
          }, void 0), iconPosition === 'right' && icon]
        }), void 0), jsxRuntime.jsx(headlessui_esm.Transition, Object.assign({
          show: open,
          enter: Accordion_module["default"][`sbui-accordion-item__panel--enter`],
          enterFrom: Accordion_module["default"][`sbui-accordion-item__panel--enterFrom`],
          enterTo: Accordion_module["default"][`sbui-accordion-item__panel--enterTo`],
          leave: Accordion_module["default"][`sbui-accordion-item__panel--leave`],
          leaveFrom: Accordion_module["default"][`sbui-accordion-item__panel--leaveFrom`],
          leaveTo: Accordion_module["default"][`sbui-accordion-item__panel--leaveTo`],
          afterEnter: handleOnChange(open),
          afterLeave: handleOnChange(open)
        }, {
          children: jsxRuntime.jsx(headlessui_esm.Disclosure.Panel, Object.assign({
            className: panelClasses.join(' '),
            static: true
          }, {
            children: children
          }), void 0)
        }), void 0)]
      }, void 0);
    }
  }), void 0);
}
Accordion.Item = Item;

exports.Item = Item;
exports["default"] = Accordion;
