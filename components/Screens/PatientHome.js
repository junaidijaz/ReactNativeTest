import React, { Component } from "react";
import { 
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from "react-native";


import { createDrawerNavigator,DrawerItems } from "react-navigation";
import HomeScreen from "./Home";
import AskQuestion from "./AskQuestions";
import Favourite from "./Favourite";
import Appointment from "./Appointments";
import Logout from "./Logout"
 

import colors from "../../src/util/colors";

export default class PatientHome extends Component {
    render() {
        return (
            <AppDrawerNavigator/>
        );
    }
}

const CustomDrawerComponent = (props) =>( 
    <SafeAreaView style = {styles.safeArea}>
    <View style = {styles.nav_header}>
        <Image  source = {require("../../assets/dummy_dp.png")} style = {styles.dp}   ></Image>
        <Text style= {styles.name} >aftab Ishfaq</Text>
    </View>
    <ScrollView backgroundColor={colors.colorPrimaryDark}>
        <DrawerItems{...props}/>
    </ScrollView>
    </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
    SearchTheDoctor:HomeScreen,
    AskQuestion:AskQuestion,  
    Appointments:Appointment,
    Favourite:Favourite,
    Logout:Logout,
},{
    contentComponent:CustomDrawerComponent,
    contentOptions:{
        activeTintColor:colors.colorAccent
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    safeArea:{
        flex:1,
        backgroundColor:colors.colorPrimaryDark
    },
    nav_header : {
        marginTop:8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.colorPrimaryDark,
        height:175
    },
    dp : {
        height:120 ,
        width:120,
        marginBottom:4,
        borderRadius:60
    },
    name:{
        color:'white',
        fontSize:18
    }
});