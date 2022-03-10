import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { TabsContext } from './TabsContext.js';
import TabsStyles from './Tabs.module.css.js';
import Space from '../Space/Space2.js';
import Button from '../Button/Button2.js';
import Divider from '../Divider/Divider2.js';

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
  const [activeTab, setActiveTab] = useState(defaultActiveId ? defaultActiveId : // if no defaultActiveId is set use the first panel
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

  return jsxs(Space, Object.assign({
    direction: "vertical",
    size: 4
  }, {
    children: [jsxs("div", Object.assign({
      id: id,
      role: "tablist",
      "aria-label": id,
      style: tabBarStyle
    }, {
      children: [jsxs(Space, Object.assign({
        className: TabsStyles['sbui-tab-bar-container'],
        size: 0
      }, {
        children: [jsxs(Space, Object.assign({
          size: tabBarGutter ? tabBarGutter : underlined ? 6 : 3,
          className: TabsStyles['sbui-tab-bar-inner-container'] + (scrollable ? ` ${TabsStyles['sbui-tab-bar--scrollable']}` : '')
        }, {
          children: [addOnBefore, children.map(tab => {
            const activeMatch = active === tab.props.id;
            return jsx(Button, Object.assign({
              icon: tab.props.icon,
              size: size,
              block: block,
              shadow: !block,
              className: underlined && activeMatch ? `${TabsStyles['sbui-tab-button-underline']} ${TabsStyles['sbui-tab-button-underline--active']}` : underlined ? TabsStyles['sbui-tab-button-underline'] : '',
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
      }), void 0), underlined && jsx(Divider, {}, void 0)]
    }), void 0), jsx(TabsContext.Provider, Object.assign({
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
  return children && jsx(TabsContext.Consumer, {
    children: _ref3 => {
      let {
        activeId
      } = _ref3;
      const active = activeId === id;
      return jsx("div", Object.assign({
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

export { Panel, Tabs as default };
