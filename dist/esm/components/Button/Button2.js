import { __rest } from '../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import ButtonStyles from './Button.module.css.js';
import { IconContext } from '../Icon/IconContext.js';
import IconLoader from '../Icon/icons/IconLoader/IconLoader2.js';

const Button = /*#__PURE__*/forwardRef((_a, ref) => {
  var {
    block,
    className,
    children,
    danger,
    disabled = false,
    onClick,
    icon,
    iconRight,
    loading = false,
    loadingCentered = false,
    shadow = true,
    size = 'tiny',
    style,
    type = 'primary',
    htmlType,
    ariaSelected,
    ariaControls,
    tabIndex,
    role,
    as,
    textAlign = 'center'
  } = _a,
      props = __rest(_a, ["block", "className", "children", "danger", "disabled", "onClick", "icon", "iconRight", "loading", "loadingCentered", "shadow", "size", "style", "type", "htmlType", "ariaSelected", "ariaControls", "tabIndex", "role", "as", "textAlign"]); // button ref


  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  useImperativeHandle(ref, () => ({
    container: () => {
      return containerRef.current;
    },
    button: () => {
      return buttonRef.current;
    }
  })); // styles

  const showIcon = loading || icon;
  let classes = [ButtonStyles['sbui-btn']];
  let containerClasses = [ButtonStyles['sbui-btn-container']];
  classes.push(ButtonStyles[`sbui-btn-${type}`]);

  if (block) {
    containerClasses.push(ButtonStyles['sbui-btn--w-full']);
    classes.push(ButtonStyles['sbui-btn--w-full']);
  }

  if (danger) {
    classes.push(ButtonStyles['sbui-btn--danger']);
  }

  if (shadow && type !== 'link' && type !== 'text') {
    classes.push(ButtonStyles['sbui-btn-container--shadow']);
  }

  if (size) {
    classes.push(ButtonStyles[`sbui-btn--${size}`]);
  }

  if (className) {
    classes.push(className);
  }

  const iconLoaderClasses = [ButtonStyles['sbui-btn--anim--spin']];

  if (loadingCentered) {
    iconLoaderClasses.push(ButtonStyles[`sbui-btn-loader--center`]);
  }

  if (loading && loadingCentered) {
    classes.push(ButtonStyles[`sbui-btn--text-fade-out`]);
  }

  classes.push(ButtonStyles[`sbui-btn--text-align-${textAlign}`]); // custom button tag

  const CustomButton = _a => {
    var props = __rest(_a, []);

    const Tag = as;
    return jsx(Tag, Object.assign({}, props), void 0);
  };

  const RenderedButton = _ref => {
    let {
      children
    } = _ref;
    return as ? jsx(CustomButton, Object.assign({
      className: classes.join(' '),
      onClick: onClick,
      style: style
    }, {
      children: children
    }), void 0) : jsx("button", Object.assign({}, props, {
      ref: buttonRef,
      className: classes.join(' '),
      disabled: loading || disabled && true,
      onClick: onClick,
      style: style,
      type: htmlType,
      "aria-selected": ariaSelected,
      "aria-controls": ariaControls,
      tabIndex: tabIndex,
      role: role
    }, {
      children: children
    }), void 0);
  };

  return jsx("span", Object.assign({
    ref: containerRef,
    className: containerClasses.join(' ')
  }, {
    children: jsxs(RenderedButton, {
      children: [showIcon && (loading ? jsx(IconLoader, {
        size: size,
        className: iconLoaderClasses.join(' ')
      }, void 0) : icon ? jsx(IconContext.Provider, Object.assign({
        value: {
          contextSize: size
        }
      }, {
        children: icon
      }), void 0) : null), children && jsx("span", {
        children: children
      }, void 0), iconRight && !loading && jsx(IconContext.Provider, Object.assign({
        value: {
          contextSize: size
        }
      }, {
        children: iconRight
      }), void 0)]
    }, void 0)
  }), void 0);
});

export { Button as default };
