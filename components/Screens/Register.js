import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";


import Colors from "../../src/util/colors";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

const offset = (Platform.OS === 'android') ? -1000 : 0;

export default class Register extends Component {

constructor(props)
{
  super(props);
  this.state = {
      fname:'',
      lname:'',
      emailAddress:'',
      password:'',
      cPasssword : '',
      gender:'male',
  }
}

  registerUser()
  {
    const {fname,lname,emailAddress,password,cPasssword,gender} = this.state;

    if(fname == '' || lname == '' || emailAddress == '' || password == '' || cPasssword == '' )
    {
      alert('Please fill all feilds');
      return
    }
   
  }

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
                {/* Logo  */}

                <View style={styles.logoContainer}>
                  <Image
                    source={require("../../assets/logotitle/logo_title.png")}
                  />
                </View>

                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>REGISTER</Text>
                </View>
                <View style={styles.formContainer}>
                  {/* First name and last name */}
                  <View style={styles.nameContainer}>
                    <TextInput
                      style={styles.flnameTxt}
                      placeholder="First Name"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      autoCorrect={false}
                      returnKeyType="next"
                      onChangeText = {fname => this.setState({fname})}
                      onSubmitEditing={() => this.refs.lname.focus()}
                    />
                    <TextInput
                      style={styles.flnameTxt}
                      placeholder="Last Name"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      autoCorrect={false}
                      onSubmitEditing={() => this.refs.email.focus()}
                      onChangeText = {(lname) => this.setState({lname})}
                      ref={"lname"}
                      returnKeyType="next"
                    />
                  </View>

                  <TextInput
                    style={styles.textInput}
                    placeholder="Email Address"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.pass.focus()}
                    onChangeText = {emailAddress => this.setState({emailAddress})}
                    keyboardType="email-address"
                    ref={"email"}
                    returnKeyType="next"
                  />

                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    autoCorrect={false}
                    secureTextEntry
                    ref={"pass"}
                    onChangeText = {password => this.setState({password})}
                    onSubmitEditing={() => this.refs.cpass.focus()}
                    returnKeyType="next"
                  />

                  <TextInput
                    style={styles.textInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    autoCorrect={false}
                    secureTextEntry
                    ref={"cpass"}
                    onChangeText = {cPasssword => this.setState({cPasssword})}
                    onSubmitEditing={() => this.refs.pass.focus()}
                  />

                  <Text style={styles.genderText}> Gender</Text>

                  <RadioForm
                    radio_props={radio_props}
                    onPress={value => {
                      this.setState({ value: value });
                    }}
                    formHorizontal={true}
                    style={styles.radioForm}
                    labelHorizontal={true}
                    animatation={true}
                    buttonColor={"#ffff"}
                    buttonStyle={{}}
                    buttonSize={15}
                    labelStyle={{
                      marginRight: 8,
                      fontSize: 15,
                      color: Colors.colorText
                    }}
                  />
                  {/* Register Button */}

                  <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => this.registerUser()}
                  >
                    <Text style={styles.textBtnRegister}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
           
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
 

const radio_props = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  logoContainer: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flexDirection: "column"
  },
  radioForm: {
    marginLeft: 8,
    marginTop: 8
  },
  textBtnRegister: {
    color: "#FFFF",
    fontSize: 15,
    fontWeight: "bold"
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.colorPrimaryDark
  },
  textInput: {
    marginTop:8,
   paddingVertical:8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#ffff"
  },

  flnameTxt: {
    paddingVertical:5,
    flex: 1,
    marginTop:8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#ffff"
  },
  titleText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  genderText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    marginLeft: 8,
    marginTop: 8,
    fontWeight: "bold"
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24
  },
  nameContainer: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
  }
});
