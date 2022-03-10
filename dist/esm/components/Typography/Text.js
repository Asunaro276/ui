import { jsx } from 'react/jsx-runtime';
import TextStyles from './Text.module.css.js';

function Text(_ref) {
  let {
    className,
    children,
    style,
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strikethrough,
    strong,
    small
  } = _ref;
  let classes = [TextStyles['sbui-typography-text']];

  if (className) {
    classes.push(className);
  }

  if (type) {
    classes.push(TextStyles[`sbui-typography-text-${type}`]);
  }

  if (disabled) {
    classes.push(TextStyles[`sbui-typography-text-disabled`]);
  }

  if (underline) {
    classes.push(TextStyles[`sbui-typography-text-underline`]);
  }

  if (strikethrough) {
    classes.push(TextStyles[`sbui-typography-text-strikethrough`]);
  }

  if (small) {
    classes.push(TextStyles['sbui-typography-text-small']);
  }

  if (code) return jsx("code", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (mark) return jsx("mark", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (keyboard) return jsx("kbd", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  if (strong) return jsx("strong", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
  return jsx("span", Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
}

export { Text as default };
