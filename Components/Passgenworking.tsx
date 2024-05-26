import * as yup from "yup";

import { View, Text,StyleSheet,Alert } from 'react-native'
import React from 'react'

const Passgenworking = () => {
    const clickme = () => {
        Alert.alert('passgenworking')
    }
    return (
        <View style={styles.starbutton}>
            <Text onPress={clickme} style = {styles.buttontext}>passgenworking</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    starbutton:{
        width:300,
        height:60,
        borderRadius:40,
        backgroundColor:'#4d4af1',
        margin:10,
        left:20,
        top:550,
      },
      buttontext:{
        fontFamily:'PoetsenOne-Regular',
        fontSize:35,
        fontWeight: 'semibold',
        color:'#f0f0fc',
        alignSelf: 'center',
        textAlign: 'center',
        margin:10,
    
      }
})
export default Passgenworking