export default variables => {
  const buttonTheme = {
    ".block": {
      ".iconVeryLeft": {
        "NativeBase.Icon": {
          flex: 0,
          borderRightWidth: 1,
          margin: 0,
          padding: 20
        },

        "NativeBase.Text": {
          flex: 1,
          textAlign: 'center'
        },

        padding: 0,
        display: 'flex',
        justifyContent: 'flex-start'
      }
    },

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
