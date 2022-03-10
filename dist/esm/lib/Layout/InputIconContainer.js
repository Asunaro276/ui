import { jsx } from 'react/jsx-runtime';
import InputIconContainerStyles from './InputIconContainer.module.css.js';

function InputIconContainer(_ref) {
  let {
    icon
  } = _ref;
  return jsx("div", Object.assign({
    className: InputIconContainerStyles['sbui-input-icon-container']
  }, {
    children: icon
  }), void 0);
}

export { InputIconContainer as default };
