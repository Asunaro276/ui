'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_module = require('../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var Dropdown_module = require('./Dropdown.module.css.js');

function Dropdown(_ref) {
  let {
    open,
    onOpenChange,
    align = 'center',
    //Default value
    side = 'bottom',
    //Default value
    sideOffset = 6,
    overlay,
    children,
    className,
    style,
    arrow,
    isNested
  } = _ref;
  let classes = [Dropdown_module["default"]['sbui-dropdown__content']];

  if (className) {
    classes.push(className);
  }

  return jsxRuntime.jsxs(index_module.Root, Object.assign({
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [isNested ? jsxRuntime.jsx(index_module.TriggerItem, Object.assign({
      className: Dropdown_module["default"]['sbui-dropdown__trigger-item']
    }, {
      children: children
    }), void 0) : jsxRuntime.jsx(index_module.Trigger, Object.assign({
      className: Dropdown_module["default"]['sbui-dropdown__trigger']
    }, {
      children: children
    }), void 0), jsxRuntime.jsxs(index_module.Content, Object.assign({
      portalled: true,
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style
    }, {
      children: [arrow && jsxRuntime.jsx(index_module.Arrow, {
        className: Dropdown_module["default"]['sbui-dropdown__arrow'],
        offset: 10
      }, void 0), overlay]
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
    className: Dropdown_module["default"]['sbui-dropdown-item'],
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function TriggerItem(_ref3) {
  let {
    children,
    icon,
    disabled
  } = _ref3;
  return jsxRuntime.jsxs("div", Object.assign({
    className: Dropdown_module["default"]['sbui-dropdown-item-trigger']
  }, {
    children: [icon && icon, jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Misc(_ref4) {
  let {
    children,
    icon
  } = _ref4;
  return jsxRuntime.jsxs("div", Object.assign({
    className: Dropdown_module["default"]['sbui-dropdown-misc']
  }, {
    children: [icon && icon, children]
  }), void 0);
}
function Checkbox(_ref5) {
  let {
    children,
    checked: propsChecked,
    onChange,
    disabled,
    ItemIndicator
  } = _ref5;
  const [checked, setChecked] = React.useState(propsChecked ? propsChecked : false);

  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };

  return jsxRuntime.jsxs(index_module.CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${Dropdown_module["default"]['sbui-dropdown-item']} ${Dropdown_module["default"]['sbui-dropdown-input']}`,
    disabled: disabled
  }, {
    children: [jsxRuntime.jsxs(index_module.ItemIndicator, Object.assign({
      className: Dropdown_module["default"]['sbui-dropdown-input__check']
    }, {
      children: [ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      }, void 0), jsxRuntime.jsx(index_module.CheckboxItem, {}, void 0)]
    }), void 0), jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Radio(_ref6) {
  let {
    children,
    value,
    ItemIndicator
  } = _ref6;
  return jsxRuntime.jsxs(index_module.RadioItem, Object.assign({
    value: value,
    className: `${Dropdown_module["default"]['sbui-dropdown-item']} ${Dropdown_module["default"]['sbui-dropdown-input']}`
  }, {
    children: [jsxRuntime.jsx(index_module.ItemIndicator, Object.assign({
      className: Dropdown_module["default"]['sbui-dropdown-input__check']
    }, {
      children: ItemIndicator ? ItemIndicator : jsxRuntime.jsx(IconCheck["default"], {
        size: "tiny"
      }, void 0)
    }), void 0), jsxRuntime.jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function RadioGroup(_ref7) {
  let {
    children,
    value: propsValue,
    onChange
  } = _ref7;
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
function Label(_ref8) {
  let {
    children
  } = _ref8;
  return jsxRuntime.jsx(index_module.Label, Object.assign({
    className: Dropdown_module["default"]['sbui-dropdown-label']
  }, {
    children: children
  }), void 0);
}
Dropdown.Item = Item;
Dropdown.Misc = Misc;
Dropdown.Checkbox = Checkbox;
Dropdown.Radio = Radio;
Dropdown.RadioGroup = RadioGroup;
Dropdown.Label = Label;
Dropdown.TriggerItem = TriggerItem;

exports.Checkbox = Checkbox;
exports.Item = Item;
exports.Label = Label;
exports.Misc = Misc;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.TriggerItem = TriggerItem;
exports["default"] = Dropdown;
