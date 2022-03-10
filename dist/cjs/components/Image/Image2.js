'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Image_module = require('./Image.module.css.js');

function Image(_ref) {
  let {
    source,
    style,
    className,
    type,
    alt,
    responsive
  } = _ref;
  let classes = [Image_module["default"]['sbui-image-normal']];
  classes.push(type === 'rounded' && Image_module["default"]['sbui-image-rounded']);
  classes.push(type === 'circle' && Image_module["default"]['sbui-image-circle']);
  if (responsive) classes.push(Image_module["default"]['sbui-image-responsive']);
  if (className) classes.push(className);
  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx("img", {
      className: classes.join(' '),
      src: source,
      style: style,
      alt: alt
    }, void 0)
  }, void 0);
}

exports["default"] = Image;
