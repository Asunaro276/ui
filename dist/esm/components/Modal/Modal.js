import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useEffect } from 'react';
import ModalStyles from './Modal.module.css.js';
import { Root, Trigger, Overlay, Content } from '../../node_modules/@radix-ui/react-dialog/dist/index.module.js';
import { Transition as mt } from '../../node_modules/@headlessui/react/dist/headlessui.esm.js';
import Space from '../Space/Space2.js';
import Button from '../Button/Button2.js';
import Typography from '../Typography/Typography2.js';
import IconX from '../Icon/icons/IconX/IconX2.js';

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
  const [open, setOpen] = React__default.useState(visible ? visible : false);
  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  let footerClasses = [ModalStyles['sbui-modal-footer']];

  if (footerBackground) {
    footerClasses.push(ModalStyles['sbui-modal-footer--with-bg']);
  }

  let modalClasses = [ModalStyles[`sbui-modal`], ModalStyles[`sbui-modal--${size}`]];
  if (className) modalClasses.push(className);
  let overlayClasses = [ModalStyles['sbui-modal-overlay']];
  if (overlayClassName) overlayClasses.push(overlayClassName);
  const footerContent = customFooter ? customFooter : jsxs(Space, Object.assign({
    style: {
      width: '100%',
      justifyContent: layout === 'vertical' ? 'center' : alignFooter === 'right' ? 'flex-end' : 'flex-start'
    }
  }, {
    children: [jsx(Button, Object.assign({
      type: "outline",
      onClick: onCancel,
      disabled: loading
    }, {
      children: cancelText
    }), void 0), jsx(Button, Object.assign({
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

  return jsxs(Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange
  }, {
    children: [triggerElement && jsx(Trigger, Object.assign({
      className: ModalStyles[`sbui-modal__trigger`]
    }, {
      children: triggerElement
    }), void 0), jsxs(mt, Object.assign({
      show: open
    }, {
      children: [jsx(Overlay, {
        children: jsx(mt.Child, Object.assign({
          enter: ModalStyles[`sbui-modal-overlay--enter`],
          enterFrom: ModalStyles[`sbui-modal-overlay--enterFrom`],
          enterTo: ModalStyles[`sbui-modal-overlay--enterTo`],
          leave: ModalStyles[`sbui-modal-overlay--leave`],
          leaveFrom: ModalStyles[`sbui-modal-overlay--leaveFrom`],
          leaveTo: ModalStyles[`sbui-modal-overlay--leaveTo`]
        }, {
          children: jsx("div", Object.assign({
            className: ModalStyles['sbui-modal-overlay-container']
          }, {
            children: jsx("div", {
              className: overlayClasses.join(' '),
              style: overlayStyle
            }, void 0)
          }), void 0)
        }), void 0)
      }, void 0), jsx(Content, Object.assign({
        forceMount: true,
        style: {
          width: '100vw'
        }
      }, {
        children: jsx("div", Object.assign({
          className: ModalStyles['sbui-modal-container'] + ' ' + className,
          onClick: () => onCancel ? onCancel() : null
        }, {
          children: jsx("div", Object.assign({
            className: ModalStyles['sbui-modal-flex-container']
          }, {
            children: jsx(mt.Child, Object.assign({
              enter: ModalStyles[`sbui-modal--enter`],
              enterFrom: ModalStyles[`sbui-modal--enterFrom`],
              enterTo: ModalStyles[`sbui-modal--enterTo`],
              leave: ModalStyles[`sbui-modal--leave`],
              leaveFrom: ModalStyles[`sbui-modal--leaveFrom`],
              leaveTo: ModalStyles[`sbui-modal--leaveTo`],
              className: "fixed inset-0 overflow-y-auto"
            }, {
              children: jsxs("div", Object.assign({
                className: modalClasses.join(' '),
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "modal-headline",
                onClick: stopPropagation,
                style: style
              }, {
                children: [jsx("div", Object.assign({
                  className: ModalStyles['sbui-modal-content'],
                  style: contentStyle
                }, {
                  children: jsxs(Space, Object.assign({
                    size: 5,
                    style: {
                      alignItems: layout === 'vertical' ? 'center' : 'flex-start'
                    },
                    direction: layout
                  }, {
                    children: [icon ? icon : null, jsxs(Space, Object.assign({
                      size: 4,
                      direction: "vertical",
                      style: {
                        alignItems: 'flex-start',
                        textAlign: layout === 'vertical' ? 'center' : null,
                        width: '100%'
                      }
                    }, {
                      children: [jsxs("span", Object.assign({
                        style: {
                          width: 'inherit'
                        }
                      }, {
                        children: [title && jsx(Typography.Title, Object.assign({
                          style: {
                            marginBottom: '.1rem',
                            marginTop: '0'
                          },
                          level: 4
                        }, {
                          children: title
                        }), void 0), description && jsx(Typography.Text, {
                          children: description
                        }, void 0)]
                      }), void 0), children, !footerBackground && !hideFooter && footerContent]
                    }), void 0)]
                  }), void 0)
                }), void 0), !hideFooter && footerBackground && jsx("div", Object.assign({
                  className: footerClasses.join(' ')
                }, {
                  children: footerContent
                }), void 0), closable && jsx("div", Object.assign({
                  className: ModalStyles['sbui-modal-close-container']
                }, {
                  children: jsx(Button, {
                    onClick: onCancel,
                    type: "text",
                    shadow: false,
                    icon: jsx(IconX, {
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

export { Modal as default };
