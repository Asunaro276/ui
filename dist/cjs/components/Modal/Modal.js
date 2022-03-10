'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Modal_module = require('./Modal.module.css.js');
var index_module = require('../../node_modules/@radix-ui/react-dialog/dist/index.module.js');
var headlessui_esm = require('../../node_modules/@headlessui/react/dist/headlessui.esm.js');
var Space = require('../Space/Space2.js');
var Button = require('../Button/Button2.js');
var Typography = require('../Typography/Typography2.js');
var IconX = require('../Icon/icons/IconX/IconX2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Modal = _ref => {
  let {
    children,
    customFooter = undefined,
    closable,
    description,
    hideFooter = false,
    alignFooter = 'left',
    layout = 'horizontal',
    loading = false,
    cancelText = 'Cancel',
    onConfirm = () => {},
    onCancel = () => {},
    confirmText = 'Confirm',
    showIcon = false,
    title,
    footerBackground,
    icon,
    variant = 'success',
    visible = false,
    size = 'large',
    style,
    overlayStyle,
    contentStyle,
    className = '',
    overlayClassName,
    triggerElement
  } = _ref;
  const [open, setOpen] = React__default["default"].useState(visible ? visible : false);
  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  let footerClasses = [Modal_module["default"]['sbui-modal-footer']];

  if (footerBackground) {
    footerClasses.push(Modal_module["default"]['sbui-modal-footer--with-bg']);
  }

  let modalClasses = [Modal_module["default"][`sbui-modal`], Modal_module["default"][`sbui-modal--${size}`]];
  if (className) modalClasses.push(className);
  let overlayClasses = [Modal_module["default"]['sbui-modal-overlay']];
  if (overlayClassName) overlayClasses.push(overlayClassName);
  const footerContent = customFooter ? customFooter : jsxRuntime.jsxs(Space["default"], Object.assign({
    style: {
      width: '100%',
      justifyContent: layout === 'vertical' ? 'center' : alignFooter === 'right' ? 'flex-end' : 'flex-start'
    }
  }, {
    children: [jsxRuntime.jsx(Button["default"], Object.assign({
      type: "outline",
      onClick: onCancel,
      disabled: loading
    }, {
      children: cancelText
    }), void 0), jsxRuntime.jsx(Button["default"], Object.assign({
      onClick: onConfirm,
      loading: loading,
      danger: variant === 'danger'
    }, {
      children: confirmText
    }), void 0)]
  }), void 0);

  function handleOpenChange(open) {
    if (visible !== undefined && !open) {
      // controlled component behaviour
      onCancel();
    } else {
      // un-controlled component behaviour
      setOpen(open);
    }
  }

  return jsxRuntime.jsxs(index_module.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange
  }, {
    children: [triggerElement && jsxRuntime.jsx(index_module.Trigger, Object.assign({
      className: Modal_module["default"][`sbui-modal__trigger`]
    }, {
      children: triggerElement
    }), void 0), jsxRuntime.jsxs(headlessui_esm.Transition, Object.assign({
      show: open
    }, {
      children: [jsxRuntime.jsx(index_module.Overlay, {
        children: jsxRuntime.jsx(headlessui_esm.Transition.Child, Object.assign({
          enter: Modal_module["default"][`sbui-modal-overlay--enter`],
          enterFrom: Modal_module["default"][`sbui-modal-overlay--enterFrom`],
          enterTo: Modal_module["default"][`sbui-modal-overlay--enterTo`],
          leave: Modal_module["default"][`sbui-modal-overlay--leave`],
          leaveFrom: Modal_module["default"][`sbui-modal-overlay--leaveFrom`],
          leaveTo: Modal_module["default"][`sbui-modal-overlay--leaveTo`]
        }, {
          children: jsxRuntime.jsx("div", Object.assign({
            className: Modal_module["default"]['sbui-modal-overlay-container']
          }, {
            children: jsxRuntime.jsx("div", {
              className: overlayClasses.join(' '),
              style: overlayStyle
            }, void 0)
          }), void 0)
        }), void 0)
      }, void 0), jsxRuntime.jsx(index_module.Content, Object.assign({
        forceMount: true,
        style: {
          width: '100vw'
        }
      }, {
        children: jsxRuntime.jsx("div", Object.assign({
          className: Modal_module["default"]['sbui-modal-container'] + ' ' + className,
          onClick: () => onCancel ? onCancel() : null
        }, {
          children: jsxRuntime.jsx("div", Object.assign({
            className: Modal_module["default"]['sbui-modal-flex-container']
          }, {
            children: jsxRuntime.jsx(headlessui_esm.Transition.Child, Object.assign({
              enter: Modal_module["default"][`sbui-modal--enter`],
              enterFrom: Modal_module["default"][`sbui-modal--enterFrom`],
              enterTo: Modal_module["default"][`sbui-modal--enterTo`],
              leave: Modal_module["default"][`sbui-modal--leave`],
              leaveFrom: Modal_module["default"][`sbui-modal--leaveFrom`],
              leaveTo: Modal_module["default"][`sbui-modal--leaveTo`],
              className: "fixed inset-0 overflow-y-auto"
            }, {
              children: jsxRuntime.jsxs("div", Object.assign({
                className: modalClasses.join(' '),
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                onClick: stopPropagation,
                style: style
              }, {
                children: [jsxRuntime.jsx("div", Object.assign({
                  className: Modal_module["default"]['sbui-modal-content'],
                  style: contentStyle
                }, {
                  children: jsxRuntime.jsxs(Space["default"], Object.assign({
                    size: 5,
                    style: {
                      alignItems: layout === 'vertical' ? 'center' : 'flex-start'
                    },
                    direction: layout
                  }, {
                    children: [icon ? icon : null, jsxRuntime.jsxs(Space["default"], Object.assign({
                      size: 4,
                      direction: "vertical",
                      style: {
                        alignItems: 'flex-start',
                        textAlign: layout === 'vertical' ? 'center' : null,
                        width: '100%'
                      }
                    }, {
                      children: [jsxRuntime.jsxs("span", Object.assign({
                        style: {
                          width: 'inherit'
                        }
                      }, {
                        children: [title && jsxRuntime.jsx(Typography["default"].Title, Object.assign({
                          style: {
                            marginBottom: '.1rem',
                            marginTop: '0'
                          },
                          level: 4
                        }, {
                          children: title
                        }), void 0), description && jsxRuntime.jsx(Typography["default"].Text, {
                          children: description
                        }, void 0)]
                      }), void 0), children, !footerBackground && !hideFooter && footerContent]
                    }), void 0)]
                  }), void 0)
                }), void 0), !hideFooter && footerBackground && jsxRuntime.jsx("div", Object.assign({
                  className: footerClasses.join(' ')
                }, {
                  children: footerContent
                }), void 0), closable && jsxRuntime.jsx("div", Object.assign({
                  className: Modal_module["default"]['sbui-modal-close-container']
                }, {
                  children: jsxRuntime.jsx(Button["default"], {
                    onClick: onCancel,
                    type: "text",
                    shadow: false,
                    icon: jsxRuntime.jsx(IconX["default"], {
                      size: "medium"
                    }, void 0)
                  }, void 0)
                }), void 0)]
              }), void 0)
            }), void 0)
          }), void 0)
        }), void 0)
      }), void 0)]
    }), void 0)]
  }), void 0);
};

exports["default"] = Modal;
