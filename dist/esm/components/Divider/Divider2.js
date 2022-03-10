import { jsx } from 'react/jsx-runtime';
import DividerStyles from './Divider.module.css.js';

function Divider(_ref) {
  let {
    children,
    className,
    light = false,
    orientation = 'center',
    style,
    type = 'horizontal'
  } = _ref;
  let classes = [type === 'horizontal' ? DividerStyles['sbui-divider'] : DividerStyles['sbui-divider-vertical']];
  if (light) classes.push(DividerStyles['sbui-divider--light']);

  if (children) {
    classes.push(DividerStyles[`sbui-divider--${orientation}`]);
  } else if (!children && type === 'horizontal') {
    classes.push(DividerStyles[`sbui-divider--no-text`]);
  }

  if (className) classes.push(className);
  return jsx("div", Object.assign({
    className: classes.join(' '),
    role: "seperator",
    style: style
  }, {
    children: children && jsx("span", Object.assign({
      className: DividerStyles['sbui-divider__content']
    }, {
      children: children
    }), void 0)
  }), void 0);
}

export { Divider as default };
