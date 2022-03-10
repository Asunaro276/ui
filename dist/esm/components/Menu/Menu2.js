import { jsx, jsxs } from 'react/jsx-runtime';
import { DropdownContext } from '../../lib/Overlay/OverlayContext.js';
import Typography from '../Typography/Typography2.js';
import MenuStyles from './Menu.module.css.js';
import Space from '../Space/Space2.js';

function Menu(_ref) {
  let {
    children,
    className,
    style
  } = _ref;
  return jsx("div", Object.assign({
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "options-menu",
    className: className,
    style: style
  }, {
    children: children
  }), void 0);
}

function Item(_ref2) {
  let {
    children,
    icon,
    active,
    rounded,
    onClick,
    doNotCloseOverlay = false,
    showActiveBar = false,
    style
  } = _ref2;
  let classes = [MenuStyles['sbui-menu__item']];
  if (active) classes.push(MenuStyles['sbui-menu__item--active']);
  if (active && showActiveBar) classes.push(MenuStyles['sbui-menu__item--active--bar']);
  if (rounded) classes.push(MenuStyles['sbui-menu__item--rounded']);
  const itemOnClick = onClick;
  return (// DropdownContext allows for MenuItem to
    // close parent dropdown onClick
    jsx(DropdownContext.Consumer, {
      children: _ref3 => {
        let {
          onClick
        } = _ref3;

        function handleClick(e) {
          if (!doNotCloseOverlay) onClick(e);
          if (itemOnClick) itemOnClick(e);
        }

        return jsx("div", Object.assign({
          className: classes.join(' '),
          role: "menuitem",
          onClick: handleClick,
          style: style
        }, {
          children: jsx(Typography.Text, {
            children: jsxs(Space, {
              children: [icon && icon, jsx("span", Object.assign({
                className: MenuStyles['sbui-menu__content']
              }, {
                children: children
              }), void 0)]
            }, void 0)
          }, void 0)
        }), void 0);
      }
    }, void 0)
  );
}
function Group(_ref4) {
  let {
    children,
    icon,
    title
  } = _ref4;
  return jsxs("div", Object.assign({
    className: MenuStyles['sbui-menu__group']
  }, {
    children: [jsxs(Space, {
      children: [icon && icon, jsx(Typography.Text, Object.assign({
        type: "secondary"
      }, {
        children: title
      }), void 0)]
    }, void 0), children]
  }), void 0);
}
function Misc(_ref5) {
  let {
    children
  } = _ref5;
  return jsx("div", Object.assign({
    className: MenuStyles['sbui-menu__misc']
  }, {
    children: jsx(Typography.Text, {
      children: jsx("span", Object.assign({
        className: MenuStyles['sbui-menu__content']
      }, {
        children: children
      }), void 0)
    }, void 0)
  }), void 0);
}
Menu.Item = Item;
Menu.Group = Group;
Menu.Misc = Misc;

export { Group, Item, Misc, Menu as default };
