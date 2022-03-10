import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import ContextMenuStyles from './ContextMenu.module.css.js';
import { Root, Trigger, Content, Item as Item$1, CheckboxItem, ItemIndicator, RadioItem, RadioGroup as RadioGroup$1, Label as Label$1 } from '../../node_modules/@radix-ui/react-context-menu/dist/index.module.js';

function ContextMenu(_ref) {
  let {
    onOpenChange,
    alignOffset = 6,
    overlay,
    children,
    className,
    style
  } = _ref;
  let classes = [ContextMenuStyles['sbui-contextmenu__content']];

  if (className) {
    classes.push(className);
  }

  return jsxs(Root, Object.assign({
    onOpenChange: onOpenChange
  }, {
    children: [jsx(Trigger, Object.assign({
      className: ContextMenuStyles['sbui-contextmenu__trigger']
    }, {
      children: children
    }), void 0), jsx(Content, Object.assign({
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
  return jsxs(Item$1, Object.assign({
    className: ContextMenuStyles['sbui-contextmenu-item'],
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Misc(_ref3) {
  let {
    children,
    icon
  } = _ref3;
  return jsxs("div", Object.assign({
    className: ContextMenuStyles['sbui-contextmenu-misc']
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
    ItemIndicator: ItemIndicator$1
  } = _ref4;
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false);

  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };

  return jsxs(CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${ContextMenuStyles['sbui-contextmenu-item']} ${ContextMenuStyles['sbui-contextmenu-input']}`,
    disabled: disabled
  }, {
    children: [jsxs(ItemIndicator, Object.assign({
      className: ContextMenuStyles['sbui-contextmenu-input__check']
    }, {
      children: [ItemIndicator$1 ? ItemIndicator$1 : jsx(IconCheck, {
        size: "tiny"
      }, void 0), jsx(CheckboxItem, {}, void 0)]
    }), void 0), jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Radio(_ref5) {
  let {
    children,
    value,
    ItemIndicator: ItemIndicator$1
  } = _ref5;
  return jsxs(RadioItem, Object.assign({
    value: value,
    className: `${ContextMenuStyles['sbui-contextmenu-item']} ${ContextMenuStyles['sbui-contextmenu-input']}`
  }, {
    children: [jsx(ItemIndicator, Object.assign({
      className: ContextMenuStyles['sbui-contextmenu-input__check']
    }, {
      children: ItemIndicator$1 ? ItemIndicator$1 : jsx(IconCheck, {
        size: "tiny"
      }, void 0)
    }), void 0), jsx("span", {
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
  const [value, setValue] = useState(propsValue ? propsValue : '');

  const handleChange = e => {
    if (onChange) onChange(e);
    setValue(e);
  };

  return jsx(RadioGroup$1, Object.assign({
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
  return jsx(Label$1, Object.assign({
    className: ContextMenuStyles['sbui-contextmenu-label']
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

export { Checkbox, Item, Label, Misc, Radio, RadioGroup, ContextMenu as default };
