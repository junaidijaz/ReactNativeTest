import React, { Component } from "react";
import {Text} from "react-native";
import { Icon, Left, Right, Header, Body, Title, Container,Button } from "native-base";
import color from "../../src/util/colors"
import { tsPropertySignature } from "@babel/types";


const CustomHeader = (props) => {
  return(
    <Header>
          <Left>
            <Button transparent onPress = { () =>  props.onPress()}  >
              <Icon name='menu' style = {{color:color.colorPrimaryDark}} />
            </Button>
          </Left>
          <Body>
            <Text style = {{fontWeight:'bold'}} >{props.title}</Text>
          </Body>
          <Right />
        </Header>
  );
}
 

export default CustomHeader;
 
