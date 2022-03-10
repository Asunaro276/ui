import { __rest } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import InputErrorIcon from '../../lib/Layout/InputErrorIcon.js';
import InputIconContainer from '../../lib/Layout/InputIconContainer.js';
import InputStyles from './Input.module.css.js';
import IconCopy from '../Icon/icons/IconCopy/IconCopy2.js';
import Space from '../Space/Space2.js';
import Button from '../Button/Button2.js';
import Typography from '../Typography/Typography2.js';

function Input(_a) {
  var {
    autoComplete,
    autoFocus,
    className,
    copy,
    defaultValue,
    descriptionText,
    disabled,
    error,
    icon,
    id,
    inputRef,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    layout,
    name,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    placeholder,
    type,
    value,
    style,
    reveal = false,
    actions,
    size = 'medium',
    borderless = false
  } = _a,
      props = __rest(_a, ["autoComplete", "autoFocus", "className", "copy", "defaultValue", "descriptionText", "disabled", "error", "icon", "id", "inputRef", "label", "afterLabel", "beforeLabel", "labelOptional", "layout", "name", "onChange", "onBlur", "onFocus", "onKeyDown", "placeholder", "type", "value", "style", "reveal", "actions", "size", "borderless"]);

  const [copyLabel, setCopyLabel] = useState('Copy');
  const [hidden, setHidden] = useState(true); // if `type` is not assigned, default to text input

  if (!type) {
    type = 'text';
  }

  let inputClasses = [InputStyles['sbui-input']];
  if (error) inputClasses.push(InputStyles['sbui-input--error']);
  if (icon) inputClasses.push(InputStyles['sbui-input--with-icon']);
  if (size) inputClasses.push(InputStyles[`sbui-input--${size}`]);
  if (borderless) inputClasses.push(InputStyles['sbui-input--borderless']);

  function onCopy(value) {
    navigator.clipboard.writeText(value).then(function () {
      /* clipboard successfully set */
      setCopyLabel('Copied');
      setTimeout(function () {
        setCopyLabel('Copy');
      }, 3000);
    }, function () {
      /* clipboard write failed */
      setCopyLabel('Failed to copy');
    });
  }

  function onReveal() {
    setHidden(false);
  }

  const hiddenPlaceholder = '**** **** **** ****';
  return jsx("div", Object.assign({
    className: className
  }, {
    children: jsx(FormLayout, Object.assign({
      label: label,
      afterLabel: afterLabel,
      beforeLabel: beforeLabel,
      labelOptional: labelOptional,
      layout: layout,
      id: id,
      error: error,
      descriptionText: descriptionText,
      style: style,
      size: size
    }, {
      children: jsxs("div", Object.assign({
        className: InputStyles['sbui-input-container']
      }, {
        children: [jsx("input", Object.assign({
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          disabled: disabled,
          id: id,
          name: name,
          onChange: onChange ? event => onChange(event) : undefined,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: onBlur ? event => onBlur(event) : undefined,
          onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
          placeholder: placeholder,
          ref: inputRef,
          type: type,
          value: reveal && hidden ? hiddenPlaceholder : value,
          className: inputClasses.join(' ')
        }, props), void 0), icon && jsx(InputIconContainer, {
          icon: icon
        }, void 0), copy || error || actions ? jsxs(Space, Object.assign({
          className: InputStyles['sbui-input-actions-container'],
          size: 1
        }, {
          children: [error && jsx(InputErrorIcon, {
            size: size
          }, void 0), copy && !(reveal && hidden) ? jsx(Button, Object.assign({
            size: "tiny",
            type: "default",
            onClick: () => onCopy(value),
            icon: jsx(IconCopy, {}, void 0)
          }, {
            children: copyLabel
          }), void 0) : null, reveal && hidden ? jsx(Button, Object.assign({
            size: "tiny",
            type: "default",
            onClick: onReveal
          }, {
            children: "Reveal"
          }), void 0) : null, actions && actions]
        }), void 0) : null]
      }), void 0)
    }), void 0)
  }), void 0);
}

function TextArea(_ref) {
  let {
    autoComplete,
    autofocus,
    className,
    descriptionText,
    disabled,
    error,
    icon,
    id,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    layout,
    name,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    placeholder,
    value,
    style,
    rows = 4,
    limit,
    size,
    borderless = false
  } = _ref;
  const [charLength, setCharLength] = useState(0);
  let classes = [InputStyles['sbui-input']];
  if (error) classes.push(InputStyles['sbui-input--error']);
  if (icon) classes.push(InputStyles['sbui-input--with-icon']);
  if (size) classes.push(InputStyles[`sbui-input--${size}`]);
  if (borderless) classes.push(InputStyles['sbui-input--borderless']);

  function onInputChange(e) {
    setCharLength(e.target.value.length);

    if (onChange) {
      onChange(e);
    }
  }

  return jsxs(FormLayout, Object.assign({
    className: className,
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    style: style,
    size: size
  }, {
    children: [jsx("textarea", Object.assign({
      autoComplete: autoComplete ? 'on' : 'off',
      autoFocus: autofocus,
      disabled: disabled,
      id: id,
      name: name,
      rows: rows,
      cols: 100,
      placeholder: placeholder,
      onChange: onInputChange,
      onFocus: onFocus ? event => onFocus(event) : undefined,
      onBlur: onBlur ? event => onBlur(event) : undefined,
      onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
      value: value,
      className: classes.join(' '),
      maxLength: limit
    }, {
      children: value
    }), void 0), limit && jsxs(Typography.Text, Object.assign({
      type: "secondary",
      style: {
        marginTop: '0.5rem',
        display: 'block'
      }
    }, {
      children: [charLength, "/", limit]
    }), void 0)]
  }), void 0);
}

Input.TextArea = TextArea;

export { Input as default };
