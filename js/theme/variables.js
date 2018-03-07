import materialVariables from "native-base/src/theme/variables/material";

const customVariables = {
  textColor: "#5C6F82",
  inverseTextColor: 'yellow',

  // Buttons
  buttonHeight: 48,
  buttonSmallHeight: 30,
  buttonSmallFontSize: 8,
  buttonCustomHeight: 100,
  buttonCustomFontSize: 18
};

export default {
  ...materialVariables,
  ...customVariables
};
