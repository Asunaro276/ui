'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var FormLayout_module = require('./FormLayout.module.css.js');
var Space = require('../../../components/Space/Space2.js');

function FormLayout(_ref) {
  let {
    align,
    children,
    className,
    descriptionText,
    error,
    id,
    label,
    labelOptional,
    layout = 'vertical',
    style,
    flex,
    responsive = true,
    size = 'medium',
    beforeLabel,
    afterLabel
  } = _ref;
  let containerClasses = [FormLayout_module["default"]['sbui-formlayout']];

  if (size) {
    containerClasses.push(FormLayout_module["default"][`sbui-formlayout--${size}`]);
  }

  if (flex) {
    containerClasses.push(FormLayout_module["default"]['sbui-formlayout--flex']);

    if (align === 'left') {
      containerClasses.push(FormLayout_module["default"]['sbui-formlayout--flex-left']);
    }

    if (align === 'right') {
      containerClasses.push(FormLayout_module["default"]['sbui-formlayout--flex-right']);
    }
  } else {
    containerClasses.push(responsive ? FormLayout_module["default"]['sbui-formlayout--responsive'] : FormLayout_module["default"]['sbui-formlayout--non-responsive']);
  }

  if (className) {
    containerClasses.push(className);
  }

  const labelled = Boolean(label || beforeLabel || afterLabel);
  return jsxRuntime.jsxs("div", Object.assign({
    className: containerClasses.join(' ')
  }, {
    children: [labelled || labelOptional || layout === 'horizontal' ? jsxRuntime.jsxs(Space["default"], Object.assign({
      direction: layout && layout === 'horizontal' || flex && layout && layout === 'vertical' ? 'vertical' : 'horizontal',
      className: '' + (layout !== 'horizontal' && !flex ? FormLayout_module["default"]['sbui-formlayout__label-container-horizontal'] : FormLayout_module["default"]['sbui-formlayout__label-container-vertical'])
    }, {
      children: [labelled && jsxRuntime.jsxs("label", Object.assign({
        className: FormLayout_module["default"]['sbui-formlayout__label'],
        htmlFor: id
      }, {
        children: [beforeLabel && jsxRuntime.jsx("span", Object.assign({
          className: FormLayout_module["default"]['sbui-formlayout__label-before'],
          id: id + '-before'
        }, {
          children: beforeLabel
        }), void 0), label, afterLabel && jsxRuntime.jsx("span", Object.assign({
          className: FormLayout_module["default"]['sbui-formlayout__label-after'],
          id: id + '-after'
        }, {
          children: afterLabel
        }), void 0)]
      }), void 0), labelOptional && jsxRuntime.jsx("span", Object.assign({
        className: FormLayout_module["default"]['sbui-formlayout__label-opt'],
        id: id + '-optional'
      }, {
        children: labelOptional
      }), void 0)]
    }), void 0) : null, jsxRuntime.jsxs("div", Object.assign({
      className: layout !== 'horizontal' ? FormLayout_module["default"]['sbui-formlayout__content-container-horizontal'] : FormLayout_module["default"]['sbui-formlayout__content-container-vertical'] + (align === 'right' ? ` ${FormLayout_module["default"]['sbui-formlayout__content-container-vertical--align-right']}` : ''),
      style: style
    }, {
      children: [children, error && jsxRuntime.jsx("p", Object.assign({
        className: FormLayout_module["default"]['sbui-formlayout__error']
      }, {
        children: error
      }), void 0), descriptionText && jsxRuntime.jsx("p", Object.assign({
        className: FormLayout_module["default"]['sbui-formlayout__description'],
        id: id + '-description'
      }, {
        children: descriptionText
      }), void 0)]
    }), void 0)]
  }), void 0);
}

exports.FormLayout = FormLayout;
