import { jsxs, jsx } from 'react/jsx-runtime';
import BadgeStyles from './Badge.module.css.js';

function Badge(_ref) {
  let {
    color,
    children,
    size,
    dot
  } = _ref;
  let classes = [BadgeStyles['sbui-badge']];

  if (color) {
    classes.push(BadgeStyles[`sbui-badge--${color}`]);
  }

  if (size === 'large') {
    classes.push(BadgeStyles['sbui-badge--large']);
  }

  return jsxs("span", Object.assign({
    className: classes.join(' ')
  }, {
    children: [dot && jsx("svg", Object.assign({
      className: `${BadgeStyles[`sbui-badge-dot`]} ${BadgeStyles[`sbui-badge--${color}`]}`,
      fill: "currentColor",
      viewBox: "0 0 8 8"
    }, {
      children: jsx("circle", {
        cx: "4",
        cy: "4",
        r: "3"
      }, void 0)
    }), void 0), children]
  }), void 0);
}

export { Badge as default };
