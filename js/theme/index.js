import _ from "lodash";

import getTheme from "native-base/src/theme/components";
import variables from "./variables";
import buttonTheme from "./components/Button";
import buttonTheme from "./components/Content";

const theme = () => {
  const nbTheme = getTheme(variables);
  const overrides = {
    "NativeBase.Content": {
      ...buttonTheme(variables)
    },
    "NativeBase.Button": {
      ...buttonTheme(variables)
    }
  };

  return _.merge(nbTheme, overrides);
};

export default theme;
