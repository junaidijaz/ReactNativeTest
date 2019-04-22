import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { Icon } from "native-base";


export default class Logout extends Component {

    // static navigationOptions = {
    //     header:null
    //   }

    static navigationOptions = {
        drawerIcon: ({tintColor}) =>(
            <Icon name = "exit" style = {{fontSize:24, color:tintColor}} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>favourite</Text>
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