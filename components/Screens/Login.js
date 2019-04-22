import React, { Component } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform
} from "react-native";

import Colors from "../../src/util/colors";

const offset = Platform.OS === "android" ? -1000 : 0;

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="light-content" />

        <ImageBackground
          source={require("../../assets/backgroungimage/signup_bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={offset}
            style={styles.container}
            enabled
          >
            <TouchableWithoutFeedback
              style={styles.container}
              onPress={Keyboard.dismiss}
            >
              <View style={styles.container}>
                {/*logo */}
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../../assets/logotitle/logo_title.png")}
                  />
                </View>
                <View style={styles.logoInfo}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Pateint Login
                  </Text>
                </View>

                <View style={styles.Form}>
                  {/* user name */}
                  <View style={styles.inputFeild}>
                    <Image
                      source={require("../../assets/icuserpass/ic_user_name.png")}
                      style={styles.sideImage}
                    />
                    <TextInput
                      placeholder="Email Adress/User Name"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      style={styles.textinput}
                      autoCorrect={false}
                      returnKeyType="next"
                      keyboardType="email-address"
                      onSubmitEditing={() => this.refs.pass.focus()}
                    />
                  </View>

                  {/* user password */}
                  <View style={styles.inputFeild}>
                    <Image
                      source={require("../../assets/icuserpass/ic_user_pass.png")}
                      style={styles.sideImage}
                    />

                    <TextInput
                      placeholder="Enter Password"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      style={styles.textinput}
                      autoCorrect={false}
                      secureTextEntry
                      ref={"pass"}
                      returnKeyType="go"
                    />
                  </View>

                  {/* login btn*/}
                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => this.props.navigation.replace("home")}
                  >
                    <Text style={styles.textBtnLogin}>Login</Text>
                  </TouchableOpacity>

                  <View style={styles.forgotPasswordText}>
                    <Text style={{ fontWeight: "bold" }}>forgot Password?</Text>
                    <Text>
                      Not a member?
                      <Text
                        style={{ fontWeight: "bold" }}
                        onPress={() =>
                          this.props.navigation.navigate("register")
                        }
                      >
                        {" "}
                        Rgister here
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.colorPrimaryDark
  },
  Form: {
    alignContent: "center",
    alignItems: "stretch",
    justifyContent: "center"
  },
  inputFeild: {
    marginTop: 8,
    backgroundColor: "#ffff",
    flexDirection: "row",
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center"
  },
  textinput: {
    paddingHorizontal: 10,
    flex: 1,
    height: 40,
    backgroundColor: "#ffff"
  },
  sideImage: {
    marginLeft: 10
  },

  btnContainer: {
    backgroundColor: Colors.colorPrimary,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 8,
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center"
  },
  logoInfo: {
    alignItems: "center"
  },

  textBtnLogin: {
    color: "#FFFF",
    fontSize: 15,
    fontWeight: "bold"
  },
  forgotPasswordText: {
    marginTop: 8,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
