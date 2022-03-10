'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var headlessui_esm = require('../../node_modules/@headlessui/react/dist/headlessui.esm.js');
var FormLayout = require('../../lib/Layout/FormLayout/FormLayout.js');
var SelectStyled_module = require('./SelectStyled.module.css.js');
var InputIconContainer = require('../../lib/Layout/InputIconContainer.js');
var InputErrorIcon = require('../../lib/Layout/InputErrorIcon.js');
var IconCheck = require('../Icon/icons/IconCheck/IconCheck2.js');
var lodash = require('lodash');

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function Listbox(_ref) {
  let {
    children,
    className,
    descriptionText,
    error,
    icon,
    id,
    label,
    labelOptional,
    layout,
    onChange,
    value,
    style,
    size = 'medium',
    defaultValue,
    borderless = false
  } = _ref;
  const [selected, setSelected] = React.useState(defaultValue || undefined);
  const [selectedNode, setSelectedNode] = React.useState({});
  React.useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);
  React.useEffect(() => {
    const data = children;
    const content = lodash.flatten(data);

    function findNode(value) {
      return content.find(node => node.props.value == value);
    }
    /*
     * value prop overrides everything
     */


    if (value) {
      setSelected(value);
      const node = findNode(value);
      setSelectedNode((node === null || node === void 0 ? void 0 : node.props) ? node.props : undefined);
      return;
    }
    /*
     * if no value prop, then use selected state
     */


    if (selected) {
      const node = findNode(selected);
      setSelectedNode((node === null || node === void 0 ? void 0 : node.props) ? node.props : undefined);
    } else {
      /*
       * if no selected value (including a `defaultvalue`), then use first child
       */
      setSelectedNode(content[0].props);
    }
  }, [children, selected, value]);

  function handleOnChange(e) {
    if (onChange) onChange(e);
    setSelected(e);
  }

  let selectClasses = [SelectStyled_module["default"]['sbui-listbox']];
  if (error) selectClasses.push(SelectStyled_module["default"]['sbui-listbox--error']);
  if (icon) selectClasses.push(SelectStyled_module["default"]['sbui-listbox--with-icon']);
  if (size) selectClasses.push(SelectStyled_module["default"][`sbui-listbox--${size}`]);
  if (borderless) selectClasses.push(SelectStyled_module["default"]['sbui-listbox--borderless']);
  return jsxRuntime.jsx(FormLayout.FormLayout, Object.assign({
    label: label,
    labelOptional: labelOptional,
    layout: layout,
    id: id,
    error: error,
    descriptionText: descriptionText,
    className: className,
    style: style,
    size: size
  }, {
    children: jsxRuntime.jsx("div", Object.assign({
      className: SelectStyled_module["default"]['sbui-listbox-container']
    }, {
      children: jsxRuntime.jsx(headlessui_esm.Listbox, Object.assign({
        value: selected,
        onChange: handleOnChange
      }, {
        children: _ref2 => {
          let {
            open
          } = _ref2;
          return jsxRuntime.jsxs("div", Object.assign({
            className: "relative"
          }, {
            children: [jsxRuntime.jsxs(headlessui_esm.Listbox.Button, Object.assign({
              className: selectClasses.join(' ')
            }, {
              children: [icon && jsxRuntime.jsx(InputIconContainer["default"], {
                icon: icon
              }, void 0), jsxRuntime.jsxs("span", Object.assign({
                className: SelectStyled_module["default"]['sbui-listbox-addonbefore']
              }, {
                children: [(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.addOnBefore) && jsxRuntime.jsx(selectedNode.addOnBefore, {}, void 0), jsxRuntime.jsx("span", Object.assign({
                  className: SelectStyled_module["default"]['sbui-listbox-label']
                }, {
                  children: selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.label
                }), void 0)]
              }), void 0), jsxRuntime.jsx("span", Object.assign({
                className: SelectStyled_module["default"]['sbui-listbox-chevron-container']
              }, {
                children: jsxRuntime.jsx("svg", Object.assign({
                  className: SelectStyled_module["default"]['sbui-listbox-chevron'],
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "aria-hidden": "true"
                }, {
                  children: jsxRuntime.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                  }, void 0)
                }), void 0)
              }), void 0), error && jsxRuntime.jsx("div", Object.assign({
                className: SelectStyled_module["default"]['sbui-listbox-actions-container']
              }, {
                children: error && jsxRuntime.jsx(InputErrorIcon["default"], {
                  size: size
                }, void 0)
              }), void 0)]
            }), void 0), jsxRuntime.jsx(headlessui_esm.Transition, Object.assign({
              show: open,
              as: React.Fragment,
              leave: SelectStyled_module["default"]['sbui-listbox-transition--leave'],
              leaveFrom: SelectStyled_module["default"]['sbui-listbox-transition--leave-from'],
              leaveTo: SelectStyled_module["default"]['sbui-listbox-transition--leave-to']
            }, {
              children: jsxRuntime.jsx(headlessui_esm.Listbox.Options, Object.assign({
                static: true,
                className: SelectStyled_module["default"]['sbui-listbox-option-container']
              }, {
                children: children
              }), void 0)
            }), void 0)]
          }), void 0);
        }
      }), void 0)
    }), void 0)
  }), void 0);
}

function SelectOption(_ref3) {
  let {
    id,
    className,
    value,
    children,
    label,
    addOnBefore,
    disabled = false
  } = _ref3;
  // console.log('children typeof', typeof children)
  return jsxRuntime.jsx(headlessui_esm.Listbox.Option, Object.assign({
    value: value,
    disabled: disabled
  }, {
    children: _ref4 => {
      let {
        selected,
        active
      } = _ref4;
      // if (active) {
      //   console.log('selected', selected, 'active', active)
      //   console.log(label)
      // }
      return jsxRuntime.jsxs("div", Object.assign({
        className: classNames(SelectStyled_module["default"]['sbui-listbox-option'], active ? SelectStyled_module["default"]['sbui-listbox-option--active'] : ' ', disabled ? SelectStyled_module["default"]['sbui-listbox-option--disabled'] : ' ')
      }, {
        children: [jsxRuntime.jsxs("div", Object.assign({
          className: SelectStyled_module["default"]['sbui-listbox-option__inner']
        }, {
          children: [addOnBefore && addOnBefore({
            active,
            selected
          }), jsxRuntime.jsx("span", {
            children: typeof children === 'function' ? children({
              active,
              selected
            }) : children
          }, void 0)]
        }), void 0), selected ? jsxRuntime.jsx("span", Object.assign({
          className: classNames(active ? SelectStyled_module["default"]['sbui-listbox-option__check--active'] : '', SelectStyled_module["default"]['sbui-listbox-option__check'])
        }, {
          children: jsxRuntime.jsx(IconCheck["default"], {
            className: SelectStyled_module["default"]['sbui-listbox-option__check__icon'],
            "aria-hidden": "true"
          }, void 0)
        }), void 0) : null]
      }), void 0);
    }
  }), id);
}

Listbox.Option = SelectOption;

exports["default"] = Listbox;
