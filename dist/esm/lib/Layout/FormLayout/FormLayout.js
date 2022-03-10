import { jsxs, jsx } from 'react/jsx-runtime';
import FormLayoutStyles from './FormLayout.module.css.js';
import Space from '../../../components/Space/Space2.js';

function FormLayout(_ref) {
  let {
    align,
    children,
    className,
    descriptionText,
    error,
    id,
    label,
    labelOptional,
    layout = 'vertical',
    style,
    flex,
    responsive = true,
    size = 'medium',
    beforeLabel,
    afterLabel
  } = _ref;
  let containerClasses = [FormLayoutStyles['sbui-formlayout']];

  if (size) {
    containerClasses.push(FormLayoutStyles[`sbui-formlayout--${size}`]);
  }

  if (flex) {
    containerClasses.push(FormLayoutStyles['sbui-formlayout--flex']);

    if (align === 'left') {
      containerClasses.push(FormLayoutStyles['sbui-formlayout--flex-left']);
    }

    if (align === 'right') {
      containerClasses.push(FormLayoutStyles['sbui-formlayout--flex-right']);
    }
  } else {
    containerClasses.push(responsive ? FormLayoutStyles['sbui-formlayout--responsive'] : FormLayoutStyles['sbui-formlayout--non-responsive']);
  }

  if (className) {
    containerClasses.push(className);
  }

  const labelled = Boolean(label || beforeLabel || afterLabel);
  return jsxs("div", Object.assign({
    className: containerClasses.join(' ')
  }, {
    children: [labelled || labelOptional || layout === 'horizontal' ? jsxs(Space, Object.assign({
      direction: layout && layout === 'horizontal' || flex && layout && layout === 'vertical' ? 'vertical' : 'horizontal',
      className: '' + (layout !== 'horizontal' && !flex ? FormLayoutStyles['sbui-formlayout__label-container-horizontal'] : FormLayoutStyles['sbui-formlayout__label-container-vertical'])
    }, {
      children: [labelled && jsxs("label", Object.assign({
        className: FormLayoutStyles['sbui-formlayout__label'],
        htmlFor: id
      }, {
        children: [beforeLabel && jsx("span", Object.assign({
          className: FormLayoutStyles['sbui-formlayout__label-before'],
          id: id + '-before'
        }, {
          children: beforeLabel
        }), void 0), label, afterLabel && jsx("span", Object.assign({
          className: FormLayoutStyles['sbui-formlayout__label-after'],
          id: id + '-after'
        }, {
          children: afterLabel
        }), void 0)]
      }), void 0), labelOptional && jsx("span", Object.assign({
        className: FormLayoutStyles['sbui-formlayout__label-opt'],
        id: id + '-optional'
      }, {
        children: labelOptional
      }), void 0)]
    }), void 0) : null, jsxs("div", Object.assign({
      className: layout !== 'horizontal' ? FormLayoutStyles['sbui-formlayout__content-container-horizontal'] : FormLayoutStyles['sbui-formlayout__content-container-vertical'] + (align === 'right' ? ` ${FormLayoutStyles['sbui-formlayout__content-container-vertical--align-right']}` : ''),
      style: style
    }, {
      children: [children, error && jsx("p", Object.assign({
        className: FormLayoutStyles['sbui-formlayout__error']
      }, {
        children: error
      }), void 0), descriptionText && jsx("p", Object.assign({
        className: FormLayoutStyles['sbui-formlayout__description'],
        id: id + '-description'
      }, {
        children: descriptionText
      }), void 0)]
    }), void 0)]
  }), void 0);
}

export { FormLayout };
