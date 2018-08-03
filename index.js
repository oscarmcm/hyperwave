'use strict';
const foregroundColor = '#CACACA';
const backgroundColor = '#27212e';
const selectionColor = 'rgba(235, 100, 186, 0.15)';
const hotPink = '#EB64B9';

const lightWhite = '#FFFFFF';
const lightBlack = 'rgba(255, 255, 255, 0.2)';
const white = '#F3EFE0';
const black = '#000000';
const red = '#E25822';
const green = '#74dfc4';
const yellow = '#ffe261';
const blue = '#40b4c4';
const magenta = '#b381c5';
const cyan = '#b4dce7';
const darkBlue = '#242029';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    selectionColor,
    borderColor: darkBlue,
    cursorColor: hotPink,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: lightWhite,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: white
    },
    css: `
      ${config.css}
      .hyper_main {
        border: none !important;
      }
      .header_header {
        color: ${foregroundColor};
      }
      .header_windowHeaderWithBorder {
        border-color: none !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_tab.tab_active {
        background: ${backgroundColor};
        color: ${white};
        transition: all 140ms ease;
        border-bottom: 1px solid ${hotPink} !important;
      }
      .tab_tab:not(.tab_active) {
        background: ${darkBlue};
        color: ${lightBlack};
      }
      .tab_tab:not(.tab_active):hover {
        background: ${darkBlue};
        color: ${white};
        transition: background 140ms ease;
      }
      .tab_icon {
        width: 15px;
        height: 15px;
      }
      .tab_shape {
        width: 7px;
        height: 7px;
      }
      .splitpane_divider {
        background-color: ${darkBlue} !important;
      }
      `
  });
};
