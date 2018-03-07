import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Button, Icon, Text } from "native-base";

class MyScreen extends Component {
  render() {
    return (
      <Container>
        <Content nopadding>
          <Button block bordered>
            <Text>A default button</Text>
          </Button>

          <Button block bordered small>
            <Text>A small button</Text>
          </Button>

          <Button block bordered small>
            <Text style={styles.customButtonSmallText}>
              A small button with custom fontsize
            </Text>
          </Button>

          <Button block bordered style={styles.customButton}>
            <Text style={styles.customButtonText}>Custom style</Text>
          </Button>

          <Button block custom bordered>
            <Text>A small button</Text>
          </Button>

          <Button block iconVeryLeft primary>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  customButton: {
    height: 5
  },
  customButtonSmallText: {
    fontSize: 5
  },
  customButtonText: {
    fontSize: 10
  }
});

export default MyScreen;
