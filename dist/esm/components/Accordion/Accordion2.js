import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createContext, useContext, useCallback } from 'react';
import { Disclosure as Ye, Transition as mt } from '../../node_modules/@headlessui/react/dist/headlessui.esm.js';
import AccordionStyles from './Accordion.module.css.js';
import IconChevronUp from '../Icon/icons/IconChevronUp/IconChevronUp2.js';
import Typography from '../Typography/Typography2.js';

const AccordionContext = /*#__PURE__*/createContext({
  defaultActiveId: [],
  icon: jsx(IconChevronUp, {
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
    icon = jsx(IconChevronUp, {
      strokeWidth: 2
    }, void 0),
    iconPosition = 'right',
    bordered,
    onChange
  } = _ref;
  let containerClasses = [AccordionStyles['sbui-accordion-container']];

  if (bordered) {
    containerClasses.push(AccordionStyles['sbui-accordion-container--bordered']);
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
  return jsx(AccordionContext.Provider, Object.assign({
    value: contextValue
  }, {
    children: jsx("div", Object.assign({
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
  } = useContext(AccordionContext);
  let panelClasses = [AccordionStyles['sbui-accordion-item__panel']];
  let buttonClasses = [AccordionStyles['sbui-accordion-item__button']];

  if (className) {
    buttonClasses.push(className);
  }

  const isDefaultActive = id ? defaultActiveId === null || defaultActiveId === void 0 ? void 0 : defaultActiveId.includes(id) : false;
  const handleOnChange = useCallback(open => () => {
    if (onChange) {
      onChange({
        id,
        label,
        open
      });
    }
  }, [onChange, id, label]);
  return jsx(Ye, Object.assign({
    defaultOpen: isDefaultActive
  }, {
    children: _ref3 => {
      let {
        open
      } = _ref3;
      return jsxs(Fragment, {
        children: [jsxs(Ye.Button, Object.assign({
          className: open ? `${buttonClasses.join(' ')} sbui-accordion-item__button--open` : buttonClasses.join(' ')
        }, {
          children: [iconPosition === 'left' && icon, jsx(Typography.Text, {
            children: label
          }, void 0), iconPosition === 'right' && icon]
        }), void 0), jsx(mt, Object.assign({
          show: open,
          enter: AccordionStyles[`sbui-accordion-item__panel--enter`],
          enterFrom: AccordionStyles[`sbui-accordion-item__panel--enterFrom`],
          enterTo: AccordionStyles[`sbui-accordion-item__panel--enterTo`],
          leave: AccordionStyles[`sbui-accordion-item__panel--leave`],
          leaveFrom: AccordionStyles[`sbui-accordion-item__panel--leaveFrom`],
          leaveTo: AccordionStyles[`sbui-accordion-item__panel--leaveTo`],
          afterEnter: handleOnChange(open),
          afterLeave: handleOnChange(open)
        }, {
          children: jsx(Ye.Panel, Object.assign({
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

export { Item, Accordion as default };
