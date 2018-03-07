export default variables => {
  const buttonTheme = {
    ".small": {
      height: variables.buttonSmallHeight,

      "NativeBase.Text": {
        fontSize: variables.buttonSmallFontSize
      }
    },

    ".custom": {
      ".bordered": {
        borderWidth: 3,

        "NativeBase.Text": {
          fontSize: 5
        }
      },

      "NativeBase.Text": {
        fontSize: variables.buttonCustomFontSize
      },

      height: variables.buttonCustomHeight,
    },

    height: variables.buttonHeight,
  };

  return buttonTheme;
};
