import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import RadioStyles from './Radio.module.css.js';
import { RadioContext } from './RadioContext.js';
import Space from '../Space/Space2.js';

function RadioGroup(_ref) {
  let {
    id,
    layout,
    error,
    descriptionText,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    children,
    className,
    type,
    options,
    value,
    name,
    onChange,
    size = 'medium'
  } = _ref;
  const [activeId, setActiveId] = useState('');
  useEffect(() => {
    setActiveId(value);
  }, [value]);

  const parentCallback = e => {
    if (onChange) onChange(e);
    setActiveId(e.target.id);
  };

  return jsx(RadioContext.Provider, Object.assign({
    value: {
      parentCallback,
      type,
      name,
      activeId,
      parentSize: size
    }
  }, {
    children: jsx("fieldset", Object.assign({
      className: RadioStyles['sbui-radio-fieldset']
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
        className: className,
        size: size
      }, {
        children: jsx("div", Object.assign({
          className: RadioStyles['sbui-radio-group-contents']
        }, {
          children: jsx(Space, Object.assign({
            direction: "vertical",
            size: "px",
            minus: true
          }, {
            children: options ? options.map(option => {
              return jsx(Radio, {
                id: option.id,
                label: option.label,
                beforeLabel: option.beforeLabel,
                afterLabel: option.afterLabel,
                value: option.value,
                description: option.description
              }, void 0);
            }) : children
          }), void 0)
        }), void 0)
      }), void 0)
    }), void 0)
  }), void 0);
}

function Radio(_ref2) {
  let {
    id,
    disabled,
    value,
    label,
    afterLabel,
    beforeLabel,
    description,
    name,
    checked,
    onChange,
    onFocus,
    size = 'medium'
  } = _ref2;
  const inputName = name;
  return jsx(RadioContext.Consumer, {
    children: _ref3 => {
      let {
        parentCallback,
        type,
        name,
        activeId,
        parentSize
      } = _ref3;
      // if id does not exist, use label
      const markupId = id ? id : label.toLowerCase().toLowerCase().replace(/^[^A-Z0-9]+/gi, '').replace(/ /g, '-'); // if name does not exist on Radio then use Context Name from Radio.Group

      const markupName = inputName ? inputName : name ? name : markupId; // check if radio id is via parent component
      // then check if radio checked prop is true or false
      // if no boolean exists the checkbox will rely on native control

      const active = activeId === markupId ? true : checked ? true : checked === false ? false : undefined;
      let classes = [RadioStyles['sbui-radio-container'], RadioStyles['sbui-radio-label'], RadioStyles[`sbui-radio-container--${parentSize ? parentSize : size}`]];

      if (type === 'cards') {
        classes.push(RadioStyles['sbui-radio-container--card']);
      }

      if (type === 'cards' && active) {
        classes.push(RadioStyles['sbui-radio-container--card--active']);
      }

      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e); // '`onChange` callback for this component

        if (onChange) onChange(e);
      }

      return jsxs("label", Object.assign({
        id: id,
        className: classes.join(' ')
      }, {
        children: [jsx("input", {
          id: markupId,
          name: markupName,
          type: "radio",
          className: RadioStyles['sbui-radio'],
          checked: active,
          disabled: disabled,
          value: value ? value : markupId,
          onChange: onInputChange,
          onFocus: onFocus ? event => onFocus(event) : undefined
        }, void 0), jsxs("div", {
          children: [jsxs("span", Object.assign({
            className: RadioStyles['sbui-radio-label-text']
          }, {
            children: [beforeLabel && jsx("span", Object.assign({
              className: RadioStyles['sbui-radio__label-text-before']
            }, {
              children: beforeLabel
            }), void 0), label, afterLabel && jsx("span", Object.assign({
              className: RadioStyles['sbui-radio__label-text-after']
            }, {
              children: afterLabel
            }), void 0)]
          }), void 0), description && jsx("span", Object.assign({
            className: RadioStyles['sbui-radio-label-description']
          }, {
            children: description
          }), void 0)]
        }, void 0)]
      }), void 0);
    }
  }, void 0);
}

Radio.Group = RadioGroup;

export { Radio as default };
