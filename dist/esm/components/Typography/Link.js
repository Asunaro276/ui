import { jsx } from 'react/jsx-runtime';
import LinkStyles from './Link.module.css.js';

function Link(_ref) {
  let {
    children,
    target = '_blank',
    href,
    className,
    onClick,
    style
  } = _ref;
  let classes = [LinkStyles['sbui-typography'], LinkStyles['sbui-typography-link']];

  if (className) {
    classes.push(className);
  }

  return jsx("a", Object.assign({
    onClick: onClick,
    className: classes.join(' '),
    href: href,
    target: target,
    rel: "noopener noreferrer",
    style: style
  }, {
    children: children
  }), void 0);
}

export { Link as default };
