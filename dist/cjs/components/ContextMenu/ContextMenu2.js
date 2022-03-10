'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var ContextMenu_module = require('./ContextMenu.module.css.js');
var index_module = require('../../node_modules/@radix-ui/react-context-menu/dist/index.module.js');

function ContextMenu(_ref) {
  let {
    onOpenChange,
    alignOffset = 6,
    overlay,
    children,
    className,
    style
  } = _ref;
  let classes = [ContextMenu_module["default"]['sbui-contextmenu__content']];

  if (className) {
    classes.push(className);
  }

  return jsxRuntime.jsxs(index_module.Root, Object.assign({
    onOpenChange: onOpenChange
  }, {
    children: [jsxRuntime.jsx(index_module.Trigger, Object.assign({
      className: ContextMenu_module["default"]['sbui-contextmenu__trigger']
    }, {
      children: children
    }), void 0), jsxRuntime.jsx(index_module.Content, Object.assign({
      sideOffset: alignOffset,
      className: classes.join(' '),
      style: style
    }, {
      children: overlay
    }), void 0)]
  }), void 0);
}

function Item(_ref2) {
  let {
    children,
    icon,
    disabled,
    onClick
  } = _ref2;
  return jsxRuntime.jsxs(index_module.Item, Object.assign({
    className: ContextMenu_module["default"]['sbui-contextmenu-item'],
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Misc(_ref3) {
  let {
    children,
    icon
  } = _ref3;
  return jsxRuntime.jsxs("div", Object.assign({
    className: ContextMenu_module["default"]['sbui-contextmenu-misc']
  }, {
    children: [icon && icon, children]
  }), void 0);
}
function Checkbox(_ref4) {
  let {
    children,
    checked: propsChecked,
    onChange,
    disabled,
    ItemIndicator
  } = _ref4;
  const [checked, setChecked] = React.useState(propsChecked ? propsChecked : false);

  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };

  return jsxRuntime.jsxs(index_module.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${ContextMenu_module["default"]['sbui-contextmenu-item']} ${ContextMenu_module["default"]['sbui-contextmenu-input']}`,
    disabled: disabled
  }, {
    children: [jsxRuntime.jsxs(index_module.ItemIndicator, Object.assign({
      className: ContextMenu_module["default"]['sbui-contextmenu-input__check']
    }, {
      children: [ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      }, void 0), jsxRuntime.jsx(index_module.CheckboxItem, {}, void 0)]
    }), void 0), jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Radio(_ref5) {
  let {
    children,
    value,
    ItemIndicator
  } = _ref5;
  return jsxRuntime.jsxs(index_module.RadioItem, Object.assign({
    value: value,
    className: `${ContextMenu_module["default"]['sbui-contextmenu-item']} ${ContextMenu_module["default"]['sbui-contextmenu-input']}`
  }, {
    children: [jsxRuntime.jsx(index_module.ItemIndicator, Object.assign({
      className: ContextMenu_module["default"]['sbui-contextmenu-input__check']
    }, {
      children: ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      }, void 0)
    }), void 0), jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function RadioGroup(_ref6) {
  let {
    children,
    value: propsValue,
    onChange
  } = _ref6;
  const [value, setValue] = React.useState(propsValue ? propsValue : '');

  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };

  return jsxRuntime.jsx(index_module.RadioGroup, Object.assign({
    value: value,
    onValueChange: handleChange
  }, {
    children: children
  }), void 0);
}
function Label(_ref7) {
  let {
    children
  } = _ref7;
  return jsxRuntime.jsx(index_module.Label, Object.assign({
    className: ContextMenu_module["default"]['sbui-contextmenu-label']
  }, {
    children: children
  }), void 0);
}
ContextMenu.Item = Item;
ContextMenu.Misc = Misc;
ContextMenu.Checkbox = Checkbox;
ContextMenu.Radio = Radio;
ContextMenu.RadioGroup = RadioGroup;
ContextMenu.Label = Label;

exports.Checkbox = Checkbox;
exports.Item = Item;
exports.Label = Label;
exports.Misc = Misc;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports["default"] = ContextMenu;
