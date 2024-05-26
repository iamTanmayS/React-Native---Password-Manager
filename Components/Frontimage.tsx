import { NavigationContainer } from '@react-navigation/native'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { StyleSheet, Text, View,Image, SafeAreaView,Animated,Appearance,Pressable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { Screen } from 'react-native-screens'

type Frontimageprops = NativeStackScreenProps<RootStackParamList,'Frontimage'>
const Frontimage =( {navigation}: Frontimageprops) => {
   
   const clickme = ()=> {
    console.log("click me")
   }
  return (
  <SafeAreaView>
    <View style = {styles.imageview}>
    <Animatable.Image animation ={"zoomIn"} style = {styles.imagesize} source={{uri:'https://i.ibb.co/Yd7DSWv/Frontimage.png'}}/>
    </View>
    <View style ={styles.descriptionview}>
      <Text style = {styles.textdescription}>Enhance Safety</Text>
      <Text style = {styles.textdescription}>With</Text>
      <Text style = {styles.textdescription}>Passgen</Text>
    </View> 
    <View style={styles.buttonview}>
    <Animatable.View animation={'zoomIn'} style={styles.starbutton}>
    <TouchableOpacity onPress={() => navigation.navigate("Passwordgen")}>
      <Text style = {styles.buttontext} >Get Started</Text>
    </TouchableOpacity>
    </Animatable.View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imagesize:{
    width:"100%",
    height : "100%",  
    justifyContent: "center",
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    right: "13%",
    margin:5,
  },
  imageview:{
    width: '130%',
    position:'relative',
    height: '70%',
    
    
  },
  textdescription:{
    fontFamily:'PoetsenOne-Regular',
    fontSize:40,
    fontWeight: 'semibold',
    color:'#4d4af1',
    alignSelf: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
    margin:5,
   
    
    

  },
  descriptionview:{
    position:'relative',
    width:"100%",
    height:"30%",
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop:30,
    
  },
  buttonview:{
    position:"relative",
    width: "100%",
    height: "11%",
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    
  },
  starbutton:{
    width:"90%",
    height:"70%",
    borderRadius:40,
    backgroundColor:'#FFA62F',
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    top:"140%"


  },

  buttontext:{
    fontFamily:'PoetsenOne-Regular',
    fontSize:35,
    fontWeight: 'semibold',
    color:'#f0f0fc',
    textAlign: 'center',
    margin:10,
  }
})

export default Frontimage;