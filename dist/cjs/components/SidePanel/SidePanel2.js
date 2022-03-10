'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var SidePanel_module = require('./SidePanel.module.css.js');
var index_module = require('../../node_modules/@radix-ui/react-dialog/dist/index.module.js');
var headlessui_esm = require('../../node_modules/@headlessui/react/dist/headlessui.esm.js');
var Space = require('../Space/Space2.js');
var Button = require('../Button/Button2.js');
var Typography = require('../Typography/Typography2.js');
var IconX = require('../Icon/icons/IconX/IconX2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [open, setOpen] = React__default["default"].useState(visible ? visible : false);
  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);

  function stopPropagation(e) {
    e.stopPropagation();
  }

  const sidePanelClasses = [SidePanel_module["default"]['sbui-sidepanel']];
  const left = align === 'left';
  const containerClasses = [SidePanel_module["default"]['sbui-sidepanel-container']];

  if (left) {
    containerClasses.push(SidePanel_module["default"]['sbui-sidepanel--left']);
  } else {
    containerClasses.push(SidePanel_module["default"]['sbui-sidepanel--right']);
  }

  if (className) containerClasses.push(className);
  let footerClasses = [SidePanel_module["default"]['sbui-sidepanel-footer-container']];

  if (!customFooter) {
    footerClasses.push(SidePanel_module["default"]['sbui-sidepanel-footer']);
  }

  const footerContent = customFooter ? jsxRuntime.jsx("div", Object.assign({
    className: footerClasses.join(' ')
  }, {
    children: customFooter
  }), void 0) : jsxRuntime.jsx("div", Object.assign({
    className: footerClasses.join(' ')
  }, {
    children: jsxRuntime.jsxs(Space["default"], Object.assign({
      style: {
        width: '100%',
        justifyContent: alignFooter === 'right' ? 'flex-end' : 'flex-start'
      }
    }, {
      children: [jsxRuntime.jsx(Button["default"], Object.assign({
        disabled: loading,
        type: "outline",
        onClick: () => onCancel ? onCancel() : null
      }, {
        children: cancelText
      }), void 0), jsxRuntime.jsx(Button["default"], Object.assign({
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

  return jsxRuntime.jsxs(index_module.Root, Object.assign({
    open: open,
    onOpenChange: handleOpenChange
  }, {
    children: [triggerElement && jsxRuntime.jsx(index_module.Trigger, Object.assign({
      className: SidePanel_module["default"][`sbui-sidepanel__trigger`]
    }, {
      children: triggerElement
    }), void 0), jsxRuntime.jsxs(headlessui_esm.Transition, Object.assign({
      show: open
    }, {
      children: [jsxRuntime.jsx(index_module.Overlay, Object.assign({
        forceMount: true
      }, {
        children: jsxRuntime.jsx(headlessui_esm.Transition.Child, Object.assign({
          enter: SidePanel_module["default"][`sbui-sidepanel-overlay--enter`],
          enterFrom: SidePanel_module["default"][`sbui-sidepanel-overlay--enterFrom`],
          enterTo: SidePanel_module["default"][`sbui-sidepanel-overlay--enterTo`],
          leave: SidePanel_module["default"][`sbui-sidepanel-overlay--leave`],
          leaveFrom: SidePanel_module["default"][`sbui-sidepanel-overlay--leaveFrom`],
          leaveTo: SidePanel_module["default"][`sbui-sidepanel-overlay--leaveTo`]
        }, {
          children: jsxRuntime.jsx("div", Object.assign({
            className: SidePanel_module["default"]['sbui-sidepanel-overlay-container']
          }, {
            children: jsxRuntime.jsx("div", {
              className: SidePanel_module["default"]['sbui-sidepanel-overlay']
            }, void 0)
          }), void 0)
        }), void 0)
      }), void 0), jsxRuntime.jsx(index_module.Content, Object.assign({
        forceMount: true,
        style: {
          width: '100vw'
        }
      }, {
        children: jsxRuntime.jsx("div", Object.assign({
          className: containerClasses.join(' ')
        }, {
          children: jsxRuntime.jsx(headlessui_esm.Transition.Child, Object.assign({
            enter: SidePanel_module["default"][`sbui-sidepanel--enter`],
            enterFrom: left ? SidePanel_module["default"][`sbui-sidepanel--enterFrom--left`] : SidePanel_module["default"][`sbui-sidepanel--enterFrom`],
            enterTo: SidePanel_module["default"][`sbui-sidepanel--enterTo`],
            leave: SidePanel_module["default"][`sbui-sidepanel--leave`],
            leaveFrom: SidePanel_module["default"][`sbui-sidepanel--leaveFrom`],
            leaveTo: left ? SidePanel_module["default"][`sbui-sidepanel--leaveTo--left`] : SidePanel_module["default"][`sbui-sidepanel--leaveTo`]
          }, {
            children: jsxRuntime.jsx("div", Object.assign({
              className: wide ? SidePanel_module["default"]['sbui-sidepanel--wide'] : SidePanel_module["default"]['sbui-sidepanel--medium']
            }, {
              children: jsxRuntime.jsxs("div", Object.assign({
                className: sidePanelClasses.join(' '),
                onClick: stopPropagation
              }, {
                children: [jsxRuntime.jsxs(Space["default"], Object.assign({
                  size: 6,
                  direction: "vertical",
                  style: {
                    minHeight: '0',
                    flex: '1 1 0%',
                    overflowY: 'scroll'
                  }
                }, {
                  children: [jsxRuntime.jsxs("header", Object.assign({
                    className: SidePanel_module["default"]['sbui-sidepanel-header']
                  }, {
                    children: [jsxRuntime.jsxs(Space["default"], Object.assign({
                      size: 3,
                      direction: "row",
                      style: {
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }
                    }, {
                      children: [title && jsxRuntime.jsx(Typography["default"].Title, Object.assign({
                        className: "m-0",
                        level: 4
                      }, {
                        children: title
                      }), void 0), jsxRuntime.jsx("div", Object.assign({
                        className: SidePanel_module["default"]['sbui-sidepanel-close-container']
                      }, {
                        children: jsxRuntime.jsx(Button["default"], {
                          "aria-label": "Close panel",
                          onClick: onCancel,
                          type: "text",
                          shadow: false,
                          style: {
                            padding: 0
                          },
                          icon: jsxRuntime.jsx(IconX["default"], {
                            size: "xlarge",
                            strokeWidth: 2
                          }, void 0)
                        }, void 0)
                      }), void 0)]
                    }), void 0), jsxRuntime.jsx("div", {
                      children: description && jsxRuntime.jsx(Typography["default"].Text, Object.assign({
                        type: "secondary"
                      }, {
                        children: description
                      }), void 0)
                    }, void 0)]
                  }), void 0), jsxRuntime.jsx("div", Object.assign({
                    className: SidePanel_module["default"]['sbui-sidepanel-content']
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

exports["default"] = SidePanel;
