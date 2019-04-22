import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "native-base";
import CustomHeader from "../extras/CustomHeader";


export default class Favourite extends Component {

    // static navigationOptions = {
    //     header:null
    //   }

    static navigationOptions = {
        drawerIcon: ({tintColor}) =>(
            <Icon name = "heart" style = {{fontSize:24, color:tintColor}} />
        )
    }

    render() {
        return (
            <View style = {{flex:1}}>
            <CustomHeader title="Favoites" onPress = {()=> this.props.navigation.openDrawer()}>

            </CustomHeader>

            <View style={styles.container}>
                <Text>favourite</Text>
            </View>

            </View>
        );
    }
}
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});