import { jsxs, jsx } from 'react/jsx-runtime';
import LoadingStyles from './Loading.module.css.js';
import IconLoader from '../Icon/icons/IconLoader/IconLoader2.js';

function Loading(_ref) {
  let {
    children,
    active
  } = _ref;
  let classNames = [LoadingStyles['sbui-loading']];

  if (active) {
    classNames.push(LoadingStyles['sbui-loading--active']);
  }

  return jsxs("div", Object.assign({
    className: classNames.join(' ')
  }, {
    children: [jsx("div", Object.assign({
      className: LoadingStyles['sbui-loading-content']
    }, {
      children: children
    }), void 0), active && jsx(IconLoader, {
      size: "xlarge",
      className: LoadingStyles['sbui-loading-spinner']
    }, void 0)]
  }), void 0);
}

export { Loading as default };
