import { jsxs, jsx } from 'react/jsx-runtime';
import { Root, Trigger, Content, Arrow, Close } from '../../node_modules/@radix-ui/react-popover/dist/index.module.js';
import DropdownStyles from './Popover.module.css.js';
import IconX from '../Icon/icons/IconX/IconX2.js';

function Popover(_ref) {
  let {
    align = 'center',
    ariaLabel,
    arrow = false,
    children,
    className,
    defaultOpen = false,
    modal,
    onOpenChange,
    open,
    overlay,
    portalled,
    showClose,
    side = 'bottom',
    sideOffset = 6,
    style
  } = _ref;
  let classes = [DropdownStyles['sbui-popover__content']];

  if (className) {
    classes.push(className);
  }

  return jsxs(Root, Object.assign({
    defaultOpen: defaultOpen,
    modal: modal,
    onOpenChange: onOpenChange,
    open: open
  }, {
    children: [jsx(Trigger, Object.assign({
      className: DropdownStyles['sbui-popover__trigger'],
      "aria-label": ariaLabel
    }, {
      children: children
    }), void 0), jsxs(Content, Object.assign({
      sideOffset: sideOffset,
      side: side,
      align: align,
      className: classes.join(' '),
      style: style,
      portalled: portalled
    }, {
      children: [arrow && jsx(Arrow, {
        className: DropdownStyles['sbui-popover__arrow'],
        offset: 10
      }, void 0), overlay, showClose && jsx(Close, Object.assign({
        className: DropdownStyles['sbui-popover__close']
      }, {
        children: jsx(IconX, {
          size: 16
        }, void 0)
      }), void 0)]
    }), void 0)]
  }), void 0);
}

export { Popover as default };
