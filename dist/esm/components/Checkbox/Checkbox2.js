import { __rest } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import { CheckboxContext } from './CheckboxContext.js';
import CheckboxStyles from './Checkbox.module.css.js';

function Group(_ref) {
  let {
    id,
    layout = 'vertical',
    error,
    descriptionText,
    label,
    afterLabel,
    beforeLabel,
    labelOptional,
    children,
    className,
    name,
    options,
    onChange,
    size = 'medium'
  } = _ref;

  const parentCallback = e => {
    if (onChange) onChange(e);
  };

  return jsx(FormLayout, Object.assign({
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
    children: jsx(CheckboxContext.Provider, Object.assign({
      value: {
        parentCallback,
        name,
        parentSize: size
      }
    }, {
      children: options ? options.map(option => {
        return jsx(Checkbox, {
          id: option.id,
          value: option.value,
          label: option.label,
          beforeLabel: option.beforeLabel,
          afterLabel: option.afterLabel,
          checked: option.checked,
          name: option.name,
          description: option.description
        }, void 0);
      }) : children
    }), void 0)
  }), void 0);
}

function Checkbox(_a) {
  var {
    className,
    id,
    label,
    afterLabel,
    beforeLabel,
    description,
    name,
    checked,
    value,
    onChange,
    onFocus,
    onBlur,
    size = 'medium',
    disabled = false
  } = _a,
      props = __rest(_a, ["className", "id", "label", "afterLabel", "beforeLabel", "description", "name", "checked", "value", "onChange", "onFocus", "onBlur", "size", "disabled"]);

  const inputName = name;
  return jsx(CheckboxContext.Consumer, {
    children: _ref2 => {
      let {
        parentCallback,
        name,
        parentSize
      } = _ref2;
      // if id does not exist, use label
      const markupId = id ? id : label.toLowerCase().replace(/^[^A-Z0-9]+/gi, '').replace(/ /g, '-'); // if name does not exist on Radio then use Context Name from Radio.Group
      // if that fails, use the id

      const markupName = inputName ? inputName : name ? name : markupId; // check if checkbox checked is true or false
      // if neither true or false the checkbox will rely on native control

      const active = checked !== null && checked !== void 0 ? checked : undefined;
      let containerClasses = [CheckboxStyles['sbui-checkbox-container'], CheckboxStyles[`sbui-checkbox-container--${parentSize ? parentSize : size}`]];
      if (className) containerClasses.push(className);

      function onInputChange(e) {
        // '`onChange` callback for parent component
        if (parentCallback) parentCallback(e); // '`onChange` callback for this component

        if (onChange) onChange(e);
      }

      return jsxs("div", Object.assign({
        className: containerClasses.join(' ')
      }, {
        children: [jsx("input", Object.assign({
          id: markupId,
          name: markupName,
          type: "checkbox",
          className: CheckboxStyles['sbui-checkbox'],
          onChange: onInputChange,
          onFocus: onFocus ? event => onFocus(event) : undefined,
          onBlur: onBlur ? event => onBlur(event) : undefined,
          checked: active,
          value: value ? value : markupId,
          disabled: disabled
        }, props), void 0), jsx("div", Object.assign({
          className: CheckboxStyles['sbui-checkbox__label-container']
        }, {
          children: jsxs("label", Object.assign({
            className: CheckboxStyles['sbui-checkbox__label-container__label'],
            htmlFor: markupId
          }, {
            children: [jsxs("span", Object.assign({
              className: CheckboxStyles['sbui-checkbox__label-container__label__span']
            }, {
              children: [beforeLabel && jsx("span", Object.assign({
                className: CheckboxStyles['sbui-checkbox__label-text-before']
              }, {
                children: beforeLabel
              }), void 0), label, afterLabel && jsx("span", Object.assign({
                className: CheckboxStyles['sbui-checkbox__label-text-after']
              }, {
                children: afterLabel
              }), void 0)]
            }), void 0), description && jsx("p", Object.assign({
              className: CheckboxStyles['sbui-checkbox__label-container__label__p']
            }, {
              children: description
            }), void 0)]
          }), void 0)
        }), void 0)]
      }), void 0);
    }
  }, void 0);
}
Checkbox.Group = Group;

export { Checkbox, Checkbox as default };
