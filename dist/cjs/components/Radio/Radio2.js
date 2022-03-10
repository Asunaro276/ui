'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var Radio_module = require('./Radio.module.css.js');
var RadioContext = require('./RadioContext.js');
var Space = require('../Space/Space2.js');

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
  const [activeId, setActiveId] = React.useState('');
  React.useEffect(() => {
    setActiveId(value);
  }, [value]);

  const parentCallback = e => {
    if (onChange) onChange(e);
    setActiveId(e.target.id);
  };

  return jsxRuntime.jsx(RadioContext.RadioContext.Provider, Object.assign({
    value: {
      parentCallback,
      type,
      name,
      activeId,
      parentSize: size
    }
  }, {
    children: jsxRuntime.jsx("fieldset", Object.assign({
      className: Radio_module["default"]['sbui-radio-fieldset']
    }, {
      children: jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
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
        children: jsxRuntime.jsx("div", Object.assign({
          className: Radio_module["default"]['sbui-radio-group-contents']
        }, {
          children: jsxRuntime.jsx(Space["default"], Object.assign({
            direction: "vertical",
            size: "px",
            minus: true
          }, {
            children: options ? options.map(option => {
              return jsxRuntime.jsx(Radio, {
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
  return jsxRuntime.jsx(RadioContext.RadioContext.Consumer, {
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
      let classes = [Radio_module["default"]['sbui-radio-container'], Radio_module["default"]['sbui-radio-label'], Radio_module["default"][`sbui-radio-container--${parentSize ? parentSize : size}`]];

      if (type === 'cards') {
        classes.push(Radio_module["default"]['sbui-radio-container--card']);
      }

      if (type === 'cards' && active) {
        classes.push(Radio_module["default"]['sbui-radio-container--card--active']);
      }

      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e); // '`onChange` callback for this component

        if (onChange) onChange(e);
      }

      return jsxRuntime.jsxs("label", Object.assign({
        id: id,
        className: classes.join(' ')
      }, {
        children: [jsxRuntime.jsx("input", {
          id: markupId,
          name: markupName,
          type: "radio",
          className: Radio_module["default"]['sbui-radio'],
          checked: active,
          disabled: disabled,
          value: value ? value : markupId,
          onChange: onInputChange,
          onFocus: onFocus ? event => onFocus(event) : undefined
        }, void 0), jsxRuntime.jsxs("div", {
          children: [jsxRuntime.jsxs("span", Object.assign({
            className: Radio_module["default"]['sbui-radio-label-text']
          }, {
            children: [beforeLabel && jsxRuntime.jsx("span", Object.assign({
              className: Radio_module["default"]['sbui-radio__label-text-before']
            }, {
              children: beforeLabel
            }), void 0), label, afterLabel && jsxRuntime.jsx("span", Object.assign({
              className: Radio_module["default"]['sbui-radio__label-text-after']
            }, {
              children: afterLabel
            }), void 0)]
          }), void 0), description && jsxRuntime.jsx("span", Object.assign({
            className: Radio_module["default"]['sbui-radio-label-description']
          }, {
            children: description
          }), void 0)]
        }, void 0)]
      }), void 0);
    }
  }, void 0);
}

Radio.Group = RadioGroup;

exports["default"] = Radio;
