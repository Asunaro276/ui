import { jsx } from 'react/jsx-runtime';
import InputErrorIconStyles from './InputErrorIcon.module.css.js';
import IconAlertCircle from '../../components/Icon/icons/IconAlertCircle/IconAlertCircle2.js';

function InputErrorIcon(_ref) {
  let {
    style,
    size
  } = _ref;
  return jsx("div", Object.assign({
    className: InputErrorIconStyles['sbui-input-error-icon'],
    style: style
  }, {
    children: jsx(IconAlertCircle, {
      size: size,
      strokeWidth: 2,
      stroke: '#f56565',
      className: ""
    }, void 0)
  }), void 0);
}

export { InputErrorIcon as default };
