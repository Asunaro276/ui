'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var TabsContext = require('./TabsContext.js');
var Tabs_module = require('./Tabs.module.css.js');
var Space = require('../Space/Space2.js');
var Button = require('../Button/Button2.js');
var Divider = require('../Divider/Divider2.js');

function Tabs(_ref) {
  let {
    id,
    children,
    defaultActiveId,
    activeId,
    type,
    size,
    block,
    tabBarGutter,
    tabBarStyle,
    onChange,
    onClick,
    scrollable,
    addOnBefore,
    addOnAfter
  } = _ref;
  const [activeTab, setActiveTab] = React.useState(defaultActiveId ? defaultActiveId : // if no defaultActiveId is set use the first panel
  children && children[0].props ? children[0].props.id : ''); // activeId state can be overriden externally with `active`
  // defaults to use activeTab

  const active = activeId ? activeId : activeTab;

  function onTabClick(id) {
    const newTabSelected = id !== active;
    setActiveTab(id);
    if (onClick) onClick(id);
    if (onChange && newTabSelected) onChange(id);
  } // for styling the tabs for underline style


  const underlined = type === 'underlined'; // for styling the tabs for cards style
  // this is so 1 tab can be displayed

  if (children && !Array.isArray(children)) {
    children = [children];
  }

  return jsxRuntime.jsxs(Space["default"], Object.assign({
    direction: "vertical",
    size: 4
  }, {
    children: [jsxRuntime.jsxs("div", Object.assign({
      id: id,
      role: "tablist",
      "aria-label": id,
      style: tabBarStyle
    }, {
      children: [jsxRuntime.jsxs(Space["default"], Object.assign({
        className: Tabs_module["default"]['sbui-tab-bar-container'],
        size: 0
      }, {
        children: [jsxRuntime.jsxs(Space["default"], Object.assign({
          size: tabBarGutter ? tabBarGutter : underlined ? 6 : 3,
          className: Tabs_module["default"]['sbui-tab-bar-inner-container'] + (scrollable ? ` ${Tabs_module["default"]['sbui-tab-bar--scrollable']}` : '')
        }, {
          children: [addOnBefore, children.map(tab => {
            const activeMatch = active === tab.props.id;
            return jsxRuntime.jsx(Button["default"], Object.assign({
              icon: tab.props.icon,
              size: size,
              block: block,
              shadow: !block,
              className: underlined && activeMatch ? `${Tabs_module["default"]['sbui-tab-button-underline']} ${Tabs_module["default"]['sbui-tab-button-underline--active']}` : underlined ? Tabs_module["default"]['sbui-tab-button-underline'] : '',
              type: activeMatch && !underlined ? 'primary' : 'text',
              onClick: () => onTabClick(tab.props.id),
              ariaSelected: activeMatch ? true : false,
              ariaControls: tab.props.id,
              tabIndex: activeMatch ? 0 : -1,
              role: "tab"
            }, {
              children: tab.props.label
            }), `${tab.props.id}-tab-button`);
          })]
        }), void 0), addOnAfter]
      }), void 0), underlined && jsxRuntime.jsx(Divider["default"], {}, void 0)]
    }), void 0), jsxRuntime.jsx(TabsContext.TabsContext.Provider, Object.assign({
      value: {
        activeId: active
      }
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function Panel(_ref2) {
  let {
    children,
    id
  } = _ref2;
  return children && jsxRuntime.jsx(TabsContext.TabsContext.Consumer, {
    children: _ref3 => {
      let {
        activeId
      } = _ref3;
      const active = activeId === id;
      return jsxRuntime.jsx("div", Object.assign({
        id: id,
        role: "tabpanel",
        tabIndex: active ? 0 : -1,
        "aria-labelledby": id,
        hidden: !active
      }, {
        children: children
      }), void 0);
    }
  }, void 0);
}
Tabs.Panel = Panel;

exports.Panel = Panel;
exports["default"] = Tabs;
