'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var Toggle_module = require('./Toggle.module.css.js');

function Toggle(_ref) {
  let {
    disabled,
    id,
    layout = 'vertical',
    error,
    descriptionText,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    onChange,
    defaultChecked,
    checked,
    className,
    align = 'right',
    size = 'medium'
  } = _ref;

  var _a;

  const [intChecked, setIntChecked] = React.useState((_a = defaultChecked || checked) !== null && _a !== void 0 ? _a : false); // check if toggle checked is true or false
  // if neither true or false the toggle will rely on component state internally

  const active = checked !== null && checked !== void 0 ? checked : intChecked;

  function onClick(e) {
    // '`onChange` callback for this component
    if (onChange) onChange(!active);
    setIntChecked(!intChecked);
  }

  let toggleClasses = [Toggle_module["default"]['sbui-toggle'], Toggle_module["default"][`sbui-toggle--${size}`]];
  if (active) toggleClasses.push(Toggle_module["default"]['sbui-toggle--active']);
  let handleClasses = [Toggle_module["default"]['sbui-toggle__handle']];
  if (active) handleClasses.push(Toggle_module["default"]['sbui-toggle__handle--active']);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    className: className,
    label: label,
    afterLabel: afterLabel,
    beforeLabel: beforeLabel,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    align: layout === 'vertical' ? align : undefined,
    flex: layout === 'vertical' ? true : false,
    descriptionText: descriptionText,
    size: size
  }, {
    children: jsxRuntime.jsx("button", Object.assign({
      type: "button",
      "aria-pressed": "false",
      className: toggleClasses.join(' '),
      onClick: onClick,
      disabled: disabled
    }, {
      children: jsxRuntime.jsx("span", {
        "aria-hidden": "true",
        className: handleClasses.join(' ')
      }, void 0)
    }), void 0)
  }), void 0);
}

exports["default"] = Toggle;
