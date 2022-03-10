import { jsx } from 'react/jsx-runtime';
import TitleStyles from './Title.module.css.js';

function Title(_ref) {
  let {
    className,
    level = 1,
    children,
    style
  } = _ref;
  let classes = [TitleStyles['sbui-typography-title']];

  if (className) {
    classes.push(className);
  }

  const CustomTag = `h${level}`;
  return jsx(CustomTag, Object.assign({
    style: style,
    className: classes.join(' ')
  }, {
    children: children
  }), void 0);
}

export { Title as default };
