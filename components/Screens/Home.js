import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../extras/CustomHeader"
import {
  Icon,
  Left,
  Right,
  Header,
  Body,
  Title,
  Container,
  Button
} from "native-base";
import color from "../../src/util/colors";

export default class Home extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  };

  render() {
    return (
      <View style={styles.main}>
        <CustomHeader title="Find The Doctors"  onPress = {()=>this.props.navigation.openDrawer()} />
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

 

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    color: color.colorPrimaryDark
  }
});
