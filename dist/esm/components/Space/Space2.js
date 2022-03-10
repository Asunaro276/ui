import { jsx } from 'react/jsx-runtime';
import SpaceStyles from './Space.module.css.js';

function Space(_ref) {
  let {
    direction,
    size = 2,
    className,
    block,
    style,
    minus,
    children
  } = _ref;
  const classes = [];
  classes.push(direction === 'vertical' ? 'sbui-space-col' : 'sbui-space-row');
  classes.push(SpaceStyles['sbui-' + (minus ? 'minus-' : '') + 'space-' + (direction === 'vertical' ? 'y' : 'x') + '-' + size]);

  if (block) {
    classes.push(SpaceStyles['sbui-space--block']);
  }

  if (className) {
    classes.push(className);
  }

  return jsx("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: children
  }), void 0);
}

export { Space as default };
