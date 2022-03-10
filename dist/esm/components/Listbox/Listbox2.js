import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, Fragment } from 'react';
import { Listbox as Ee, Transition as mt } from '../../node_modules/@headlessui/react/dist/headlessui.esm.js';
import { FormLayout } from '../../lib/Layout/FormLayout/FormLayout.js';
import SelectStyles from './SelectStyled.module.css.js';
import InputIconContainer from '../../lib/Layout/InputIconContainer.js';
import InputErrorIcon from '../../lib/Layout/InputErrorIcon.js';
import IconCheck from '../Icon/icons/IconCheck/IconCheck2.js';
import { flatten } from 'lodash';

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
  const [selected, setSelected] = useState(defaultValue || undefined);
  const [selectedNode, setSelectedNode] = useState({});
  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);
  useEffect(() => {
    const data = children;
    const content = flatten(data);

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

  let selectClasses = [SelectStyles['sbui-listbox']];
  if (error) selectClasses.push(SelectStyles['sbui-listbox--error']);
  if (icon) selectClasses.push(SelectStyles['sbui-listbox--with-icon']);
  if (size) selectClasses.push(SelectStyles[`sbui-listbox--${size}`]);
  if (borderless) selectClasses.push(SelectStyles['sbui-listbox--borderless']);
  return jsx(FormLayout, Object.assign({
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
    children: jsx("div", Object.assign({
      className: SelectStyles['sbui-listbox-container']
    }, {
      children: jsx(Ee, Object.assign({
        value: selected,
        onChange: handleOnChange
      }, {
        children: _ref2 => {
          let {
            open
          } = _ref2;
          return jsxs("div", Object.assign({
            className: "relative"
          }, {
            children: [jsxs(Ee.Button, Object.assign({
              className: selectClasses.join(' ')
            }, {
              children: [icon && jsx(InputIconContainer, {
                icon: icon
              }, void 0), jsxs("span", Object.assign({
                className: SelectStyles['sbui-listbox-addonbefore']
              }, {
                children: [(selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.addOnBefore) && jsx(selectedNode.addOnBefore, {}, void 0), jsx("span", Object.assign({
                  className: SelectStyles['sbui-listbox-label']
                }, {
                  children: selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.label
                }), void 0)]
              }), void 0), jsx("span", Object.assign({
                className: SelectStyles['sbui-listbox-chevron-container']
              }, {
                children: jsx("svg", Object.assign({
                  className: SelectStyles['sbui-listbox-chevron'],
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor",
                  "aria-hidden": "true"
                }, {
                  children: jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                    clipRule: "evenodd"
                  }, void 0)
                }), void 0)
              }), void 0), error && jsx("div", Object.assign({
                className: SelectStyles['sbui-listbox-actions-container']
              }, {
                children: error && jsx(InputErrorIcon, {
                  size: size
                }, void 0)
              }), void 0)]
            }), void 0), jsx(mt, Object.assign({
              show: open,
              as: Fragment,
              leave: SelectStyles['sbui-listbox-transition--leave'],
              leaveFrom: SelectStyles['sbui-listbox-transition--leave-from'],
              leaveTo: SelectStyles['sbui-listbox-transition--leave-to']
            }, {
              children: jsx(Ee.Options, Object.assign({
                static: true,
                className: SelectStyles['sbui-listbox-option-container']
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
  return jsx(Ee.Option, Object.assign({
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
      return jsxs("div", Object.assign({
        className: classNames(SelectStyles['sbui-listbox-option'], active ? SelectStyles['sbui-listbox-option--active'] : ' ', disabled ? SelectStyles['sbui-listbox-option--disabled'] : ' ')
      }, {
        children: [jsxs("div", Object.assign({
          className: SelectStyles['sbui-listbox-option__inner']
        }, {
          children: [addOnBefore && addOnBefore({
            active,
            selected
          }), jsx("span", {
            children: typeof children === 'function' ? children({
              active,
              selected
            }) : children
          }, void 0)]
        }), void 0), selected ? jsx("span", Object.assign({
          className: classNames(active ? SelectStyles['sbui-listbox-option__check--active'] : '', SelectStyles['sbui-listbox-option__check'])
        }, {
          children: jsx(IconCheck, {
            className: SelectStyles['sbui-listbox-option__check__icon'],
            "aria-hidden": "true"
          }, void 0)
        }), void 0) : null]
      }), void 0);
    }
  }), id);
}

Listbox.Option = SelectOption;

export { Listbox as default };
