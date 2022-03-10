import { jsxs, jsx } from 'react/jsx-runtime';
import Typography from '../Typography/Typography2.js';
import CardStyles from './Card.module.css.js';

function Card(_ref) {
  let {
    children,
    className,
    cover,
    hoverable,
    style,
    title,
    titleExtra
  } = _ref;
  let classes = [CardStyles['sbui-card']];
  if (hoverable) classes.push(CardStyles['sbui-card--hoverable']);
  if (className) classes.push(className);
  return jsxs("div", Object.assign({
    className: classes.join(' '),
    style: style
  }, {
    children: [title && jsxs("div", Object.assign({
      className: CardStyles['sbui-card-head']
    }, {
      children: [jsx(Typography.Text, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: title
      }), void 0), jsx(Typography.Link, Object.assign({
        style: {
          margin: 0
        }
      }, {
        children: titleExtra
      }), void 0)]
    }), void 0), cover, jsx("div", Object.assign({
      className: CardStyles['sbui-card-content']
    }, {
      children: children
    }), void 0)]
  }), void 0);
}

function Meta(_ref2) {
  let {
    title,
    description,
    style,
    className
  } = _ref2;
  return jsxs("div", Object.assign({
    style: style,
    className: className
  }, {
    children: [jsx(Typography.Title, Object.assign({
      style: {
        margin: '0'
      },
      level: 5
    }, {
      children: title
    }), void 0), jsx("div", {
      children: jsx(Typography.Text, Object.assign({
        type: "secondary"
      }, {
        children: description
      }), void 0)
    }, void 0)]
  }), void 0);
}

Card.Meta = Meta;

export { Card as default };
