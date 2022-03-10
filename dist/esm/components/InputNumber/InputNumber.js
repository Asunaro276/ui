import { jsx, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import InputErrorIcon from '../../lib/Layout/InputErrorIcon.js';
import IconChevronDown from '../Icon/icons/IconChevronDown/IconChevronDown2.js';
import IconChevronUp from '../Icon/icons/IconChevronUp/IconChevronUp2.js';
import InputIconContainer from '../../lib/Layout/InputIconContainer.js';
import InputNumberStyles from './InputNumber.module.css.js';
import Space from '../Space/Space2.js';

function InputNumber(_ref) {
  let {
    addedInputClasses,
    autoComplete,
    autofocus,
    className,
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
    value,
    step,
    style,
    size = 'medium',
    min,
    max,
    borderless = false
  } = _ref;
  const inputClasses = [InputNumberStyles['sbui-inputnumber']];
  const iconUpClasses = [InputNumberStyles['sbui-inputnumber-button'], InputNumberStyles['sbui-inputnumber-button-up']];
  const inputRefCurrent = inputRef ? inputRef : /*#__PURE__*/React__default.createRef();
  const iconDownClasses = [InputNumberStyles['sbui-inputnumber-button'], InputNumberStyles['sbui-inputnumber-button-down']];
  const iconNavClasses = [InputNumberStyles['sbui-inputnumber-nav']];
  if (error) inputClasses.push(InputNumberStyles['sbui-inputnumber--error']);
  if (icon) inputClasses.push(InputNumberStyles['sbui-inputnumber--with-icon']);

  if (size) {
    inputClasses.push(InputNumberStyles[`sbui-inputnumber--${size}`]);
    iconNavClasses.push(InputNumberStyles[`sbui-inputnumber-nav--${size}`]);
  }

  if (borderless) inputClasses.push(InputNumberStyles['sbui-inputnumber--borderless']);

  const onClickChevronUp = () => {
    var _a, _b;

    (_a = inputRefCurrent.current) === null || _a === void 0 ? void 0 : _a.stepUp();

    if (onChange) {
      (_b = inputRefCurrent.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent('change', {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    }
  };

  const onClickChevronDown = () => {
    var _a, _b;

    (_a = inputRefCurrent.current) === null || _a === void 0 ? void 0 : _a.stepDown();

    if (onChange) {
      (_b = inputRefCurrent.current) === null || _b === void 0 ? void 0 : _b.dispatchEvent(new InputEvent('change', {
        view: window,
        bubbles: true,
        cancelable: false
      }));
    }
  };

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
        className: InputNumberStyles['sbui-inputnumber-container']
      }, {
        children: [jsx("input", {
          autoComplete: autoComplete,
          autoFocus: autofocus,
          defaultValue: defaultValue,
          disabled: disabled,
          id: id,
          name: name,
          onChange: onChange ? event => onChange(event) : undefined,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: onBlur ? event => onBlur(event) : undefined,
          onKeyDown: onKeyDown ? event => onKeyDown(event) : undefined,
          placeholder: placeholder,
          ref: inputRefCurrent,
          type: 'number',
          value: value,
          step: step,
          className: inputClasses.join(' ') + addedInputClasses,
          min: min,
          max: max
        }, void 0), jsxs("div", Object.assign({
          className: iconNavClasses.join(' ')
        }, {
          children: [jsx(IconChevronUp, {
            className: iconUpClasses.join(' '),
            onClick: onClickChevronUp,
            onMouseDown: e => {
              e.preventDefault();
            }
          }, void 0), jsx(IconChevronDown, {
            className: iconDownClasses.join(' '),
            onClick: onClickChevronDown,
            onMouseDown: e => {
              e.preventDefault();
            }
          }, void 0)]
        }), void 0), icon && jsx(InputIconContainer, {
          icon: icon
        }, void 0), error ? jsx(Space, Object.assign({
          className: InputNumberStyles['sbui-inputnumber-actions-container'],
          size: 1
        }, {
          children: error && jsx(InputErrorIcon, {
            size: size
          }, void 0)
        }), void 0) : null]
      }), void 0)
    }), void 0)
  }), void 0);
}

export { InputNumber as default };
