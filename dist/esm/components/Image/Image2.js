import { jsx, Fragment } from 'react/jsx-runtime';
import ImageStyles from './Image.module.css.js';

function Image(_ref) {
  let {
    source,
    style,
    className,
    type,
    alt,
    responsive
  } = _ref;
  let classes = [ImageStyles['sbui-image-normal']];
  classes.push(type === 'rounded' && ImageStyles['sbui-image-rounded']);
  classes.push(type === 'circle' && ImageStyles['sbui-image-circle']);
  if (responsive) classes.push(ImageStyles['sbui-image-responsive']);
  if (className) classes.push(className);
  return jsx(Fragment, {
    children: jsx("img", {
      className: classes.join(' '),
      src: source,
      style: style,
      alt: alt
    }, void 0)
  }, void 0);
}

export { Image as default };
