/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleProvider } from "native-base";

import theme from "./js/theme";
import MyScreen from "./js/components/MyScreen";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={theme()}>
        <MyScreen />
      </StyleProvider>
    );
  }
}
