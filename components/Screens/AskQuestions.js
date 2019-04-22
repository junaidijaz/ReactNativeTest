import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import CustomHeader from "../extras/CustomHeader";


export default class AskQuestions extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="help-circle" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader
          title="AskQuestions"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <View style={styles.container}>
          <Text>askQuestions</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
