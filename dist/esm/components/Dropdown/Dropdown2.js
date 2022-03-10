import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Root, TriggerItem as TriggerItem$1, Trigger, Content, Arrow, Item as Item$1, CheckboxItem, ItemIndicator, RadioItem, RadioGroup as RadioGroup$1, Label as Label$1 } from '../../node_modules/@radix-ui/react-dropdown-menu/dist/index.module.js';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import DropdownStyles from './Dropdown.module.css.js';

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
  let classes = [DropdownStyles['sbui-dropdown__content']];

  if (className) {
    classes.push(className);
  }

  return jsxs(Root, Object.assign({
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [isNested ? jsx(TriggerItem$1, Object.assign({
      className: DropdownStyles['sbui-dropdown__trigger-item']
    }, {
      children: children
    }), void 0) : jsx(Trigger, Object.assign({
      className: DropdownStyles['sbui-dropdown__trigger']
    }, {
      children: children
    }), void 0), jsxs(Content, Object.assign({
      portalled: true,
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style
    }, {
      children: [arrow && jsx(Arrow, {
        className: DropdownStyles['sbui-dropdown__arrow'],
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
  return jsxs(Item$1, Object.assign({
    className: DropdownStyles['sbui-dropdown-item'],
    disabled: disabled,
    onSelect: onClick
  }, {
    children: [icon && icon, jsx("span", {
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
  return jsxs("div", Object.assign({
    className: DropdownStyles['sbui-dropdown-item-trigger']
  }, {
    children: [icon && icon, jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Misc(_ref4) {
  let {
    children,
    icon
  } = _ref4;
  return jsxs("div", Object.assign({
    className: DropdownStyles['sbui-dropdown-misc']
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
    ItemIndicator: ItemIndicator$1
  } = _ref5;
  const [checked, setChecked] = useState(propsChecked ? propsChecked : false);

  const handleChange = e => {
    if (onChange) onChange(e);
    setChecked(e);
  };

  return jsxs(CheckboxItem, Object.assign({
    checked: checked,
    onCheckedChange: handleChange,
    className: `${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-input']}`,
    disabled: disabled
  }, {
    children: [jsxs(ItemIndicator, Object.assign({
      className: DropdownStyles['sbui-dropdown-input__check']
    }, {
      children: [ItemIndicator$1 ? ItemIndicator$1 : jsx(IconCheck, {
        size: "tiny"
      }, void 0), jsx(CheckboxItem, {}, void 0)]
    }), void 0), jsx("span", {
      children: children
    }, void 0)]
  }), void 0);
}
function Radio(_ref6) {
  let {
    children,
    value,
    ItemIndicator: ItemIndicator$1
  } = _ref6;
  return jsxs(RadioItem, Object.assign({
    value: value,
    className: `${DropdownStyles['sbui-dropdown-item']} ${DropdownStyles['sbui-dropdown-input']}`
  }, {
    children: [jsx(ItemIndicator, Object.assign({
      className: DropdownStyles['sbui-dropdown-input__check']
    }, {
      children: ItemIndicator$1 ? ItemIndicator$1 : jsx(IconCheck, {
        size: "tiny"
      }, void 0)
    }), void 0), jsx("span", {
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
function Label(_ref8) {
  let {
    children
  } = _ref8;
  return jsx(Label$1, Object.assign({
    className: DropdownStyles['sbui-dropdown-label']
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

export { Checkbox, Item, Label, Misc, Radio, RadioGroup, TriggerItem, Dropdown as default };
