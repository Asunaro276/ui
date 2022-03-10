import { __rest } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { IconContext } from './IconContext.js';
import IconStyles from './Icon.module.css.js';

function Icon(_a) {
  var {
    className,
    size,
    type,
    color,
    strokeWidth,
    fill = undefined,
    stroke = undefined,
    background,
    src
  } = _a,
      props = __rest(_a, ["className", "size", "type", "color", "strokeWidth", "fill", "stroke", "background", "src"]);

  return jsx(IconContext.Consumer, {
    children: _ref => {
      let {
        contextSize,
        className: contextClassName
      } = _ref;
      const defaultSizes = {
        tiny: 14,
        small: 18,
        medium: 20,
        large: 20,
        xlarge: 24,
        xxlarge: 30,
        xxxlarge: 42
      };
      const defaultSize = defaultSizes['large']; // const iconSize = typeof size === 'string' ? defaultSizes[contextSize] : 21

      let iconSize = 21; // use contextSize of parent (via context hook) if one exists

      if (contextSize) {
        iconSize = contextSize ? typeof contextSize === 'string' ? defaultSizes[contextSize] : contextSize : defaultSize;
      } // use size prop of this component if one exists


      if (size) {
        iconSize = size ? typeof size === 'string' ? defaultSizes[size] : size : defaultSize;
      } // confitional used for Icons with no color settings
      // default these icons to use 'currentColor' ie, the text color


      const noColor = !color && !fill && !stroke;
      let classes = ['sbui-icon', className];

      if (contextClassName) {
        classes.push(contextClassName);
      }

      const Icon = // custom SVG file
      jsx("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        color: !noColor ? color : 'currentColor',
        fill: !noColor ? fill ? fill : 'none' : 'none',
        stroke: !noColor ? stroke : 'currentColor',
        strokeWidth: strokeWidth,
        className: classes.join(' '),
        width: iconSize,
        height: iconSize
      }, props, {
        children: src
      }), void 0);

      return background ? jsx("div", Object.assign({
        // circle coloured background
        className: `${IconStyles['sbui-icon-container']} ${IconStyles[`sbui-icon-container--${background}`]}`
      }, {
        children: Icon
      }), void 0) : Icon;
    }
  }, void 0);
}

export { Icon as default };
