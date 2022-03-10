import { jsx, jsxs } from 'react/jsx-runtime';
import React__default, { useEffect } from 'react';
import SlidePanelStyles from './SidePanel.module.css.js';
import { Root, Trigger, Overlay, Content } from '../../node_modules/@radix-ui/react-dialog/dist/index.module.js';
import { Transition as mt } from '../../node_modules/@headlessui/react/dist/headlessui.esm.js';
import Space from '../Space/Space2.js';
import Button from '../Button/Button2.js';
import Typography from '../Typography/Typography2.js';
import IconX from '../Icon/icons/IconX/IconX2.js';

const SidePanel = _ref => {
  let {
    className,
    children,
    title,
    description,
    visible,
    wide = false,
    loading,
    align = 'right',
    alignFooter = 'right',
    hideFooter = false,
    customFooter = undefined,
    onConfirm,
    onCancel,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    triggerElement
  } = _ref;
  const [open, setOpen] = React__default.useState(visible ? visible : false);
  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  const sidePanelClasses = [SlidePanelStyles['sbui-sidepanel']];
  const left = align === 'left';
  const containerClasses = [SlidePanelStyles['sbui-sidepanel-container']];

  if (left) {
    containerClasses.push(SlidePanelStyles['sbui-sidepanel--left']);
  } else {
    containerClasses.push(SlidePanelStyles['sbui-sidepanel--right']);
  }

  if (className) containerClasses.push(className);
  let footerClasses = [SlidePanelStyles['sbui-sidepanel-footer-container']];

  if (!customFooter) {
    footerClasses.push(SlidePanelStyles['sbui-sidepanel-footer']);
  }

  const footerContent = customFooter ? jsx("div", Object.assign({
    className: footerClasses.join(' ')
  }, {
    children: customFooter
  }), void 0) : jsx("div", Object.assign({
    className: footerClasses.join(' ')
  }, {
    children: jsxs(Space, Object.assign({
      style: {
        width: '100%',
        justifyContent: alignFooter === 'right' ? 'flex-end' : 'flex-start'
      }
    }, {
      children: [jsx(Button, Object.assign({
        disabled: loading,
        type: "outline",
        onClick: () => onCancel ? onCancel() : null
      }, {
        children: cancelText
      }), void 0), jsx(Button, Object.assign({
        loading: loading,
        onClick: () => onConfirm ? onConfirm() : null
      }, {
        children: confirmText
      }), void 0)]
    }), void 0)
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
      className: SlidePanelStyles[`sbui-sidepanel__trigger`]
    }, {
      children: triggerElement
    }), void 0), jsxs(mt, Object.assign({
      show: open
    }, {
      children: [jsx(Overlay, Object.assign({
        forceMount: true
      }, {
        children: jsx(mt.Child, Object.assign({
          enter: SlidePanelStyles[`sbui-sidepanel-overlay--enter`],
          enterFrom: SlidePanelStyles[`sbui-sidepanel-overlay--enterFrom`],
          enterTo: SlidePanelStyles[`sbui-sidepanel-overlay--enterTo`],
          leave: SlidePanelStyles[`sbui-sidepanel-overlay--leave`],
          leaveFrom: SlidePanelStyles[`sbui-sidepanel-overlay--leaveFrom`],
          leaveTo: SlidePanelStyles[`sbui-sidepanel-overlay--leaveTo`]
        }, {
          children: jsx("div", Object.assign({
            className: SlidePanelStyles['sbui-sidepanel-overlay-container']
          }, {
            children: jsx("div", {
              className: SlidePanelStyles['sbui-sidepanel-overlay']
            }, void 0)
          }), void 0)
        }), void 0)
      }), void 0), jsx(Content, Object.assign({
        forceMount: true,
        style: {
          width: '100vw'
        }
      }, {
        children: jsx("div", Object.assign({
          className: containerClasses.join(' ')
        }, {
          children: jsx(mt.Child, Object.assign({
            enter: SlidePanelStyles[`sbui-sidepanel--enter`],
            enterFrom: left ? SlidePanelStyles[`sbui-sidepanel--enterFrom--left`] : SlidePanelStyles[`sbui-sidepanel--enterFrom`],
            enterTo: SlidePanelStyles[`sbui-sidepanel--enterTo`],
            leave: SlidePanelStyles[`sbui-sidepanel--leave`],
            leaveFrom: SlidePanelStyles[`sbui-sidepanel--leaveFrom`],
            leaveTo: left ? SlidePanelStyles[`sbui-sidepanel--leaveTo--left`] : SlidePanelStyles[`sbui-sidepanel--leaveTo`]
          }, {
            children: jsx("div", Object.assign({
              className: wide ? SlidePanelStyles['sbui-sidepanel--wide'] : SlidePanelStyles['sbui-sidepanel--medium']
            }, {
              children: jsxs("div", Object.assign({
                className: sidePanelClasses.join(' '),
                onClick: stopPropagation
              }, {
                children: [jsxs(Space, Object.assign({
                  size: 6,
                  direction: "vertical",
                  style: {
                    minHeight: '0',
                    flex: '1 1 0%',
                    overflowY: 'scroll'
                  }
                }, {
                  children: [jsxs("header", Object.assign({
                    className: SlidePanelStyles['sbui-sidepanel-header']
                  }, {
                    children: [jsxs(Space, Object.assign({
                      size: 3,
                      direction: "row",
                      style: {
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }
                    }, {
                      children: [title && jsx(Typography.Title, Object.assign({
                        className: "m-0",
                        level: 4
                      }, {
                        children: title
                      }), void 0), jsx("div", Object.assign({
                        className: SlidePanelStyles['sbui-sidepanel-close-container']
                      }, {
                        children: jsx(Button, {
                          "aria-label": "Close panel",
                          onClick: onCancel,
                          type: "text",
                          shadow: false,
                          style: {
                            padding: 0
                          },
                          icon: jsx(IconX, {
                            size: "xlarge",
                            strokeWidth: 2
                          }, void 0)
                        }, void 0)
                      }), void 0)]
                    }), void 0), jsx("div", {
                      children: description && jsx(Typography.Text, Object.assign({
                        type: "secondary"
                      }, {
                        children: description
                      }), void 0)
                    }, void 0)]
                  }), void 0), jsx("div", Object.assign({
                    className: SlidePanelStyles['sbui-sidepanel-content']
                  }, {
                    children: children
                  }), void 0)]
                }), void 0), !hideFooter && footerContent]
              }), void 0)
            }), void 0)
          }), void 0)
        }), void 0)
      }), void 0)]
    }), void 0)]
  }), void 0);
};

export { SidePanel as default };
