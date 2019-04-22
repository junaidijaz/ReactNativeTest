/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
// import SplashScreen from "react-native-splash-screen";
import LoginScreen from "./components/Screens/Login";
import HomeScreen from "./components/Screens/PatientHome";
import RegisterScreen from "./components/Screens/Register";
import Colors from "./src/util/colors";

import {createStackNavigator} from "react-navigation"

export default class App extends Component {
  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  
  home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerTitle: "Register",
      headerBackTitle: "Back",
      headerTintColor: Colors.colorPrimary,
      headerStyle: {
        backgroundColor: Colors.colorPrimaryDark
      }
    }
  }
});
