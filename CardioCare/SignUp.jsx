import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function SignUp() {
  const navigation = useNavigation();

  const gotoLogin = ()=>{
    navigation.navigate('Login');
  }
  const gotoMain = ()=>{
    navigation.navigate('Main');
  }

  return (
       <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image source={require('./images/one.png')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.redText}>Cardio</Text>
                    <Text style={styles.blueText}>Care</Text>
                </View>
                
            </View>
            <Text style={styles.cardiocareKeepYour}>
            {"\"CardioCare:Keep\nyour heart healthy,\non the go.\""}
            </Text>
            <Image source={require('./images/heart.png')} style={styles.heart}/>
            <Text style={styles.text1}>ENTER ACCOUNT INFORMATION</Text>
            <TextInput
                  style={styles.input}
                    placeholder="Enter your name" />
            <TextInput
                  style={styles.input2}
                  placeholder="Enter your email" />
            <TextInput
                  style={styles.input3}
                  placeholder="Enter your passwaord" />   

            <TouchableOpacity style={styles.buttonContainer} onPress={gotoMain}>
                  <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity> 
            <View style={styles.textContainer2}>
                    <Text style={styles.account}>Already have an account?</Text>
                    <Text onPress={gotoLogin} style={{ fontSize:12,fontWeight: 'bold',fontFamily:'Roboto',color: '#4EADEE', textDecorationLine: 'underline' }}> Login</Text>
            </View>
       </View>
  )
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height:900
  },
    image:{
        width:35,
        height:35,
    },
    input: {
      height: 48,
      backgroundColor:'#D9D9D9',
      color:'#767E8B',
      paddingHorizontal: 10,
      width:330,
      borderRadius:8,
      position:"absolute",
      marginTop:450,
      marginLeft:25,
    },
    input2: {
      height: 48,
      backgroundColor:'#D9D9D9',
      color:'#767E8B',
      paddingHorizontal: 10,
      width:330,
      borderRadius:8,
      position:"absolute",
      marginTop:515,
      marginLeft:25,
    },
    input3: {
      height: 48,
      backgroundColor:'#D9D9D9',
      color:'#767E8B',
      paddingHorizontal: 10,
      width:330,
      borderRadius:8,
      position:"absolute",
      marginTop:580,
      marginLeft:25,
    },
    heart:{
          width:190,
          height:157,
          marginTop:120,
          marginLeft:96,
    },
   
    redText: {
      color: '#66BFBF',
      fontWeight: 'bold',
      fontSize:30,
      fontFamily:'Roboto',
    },
    
    blueText: {
      color: '#FF0063',
      fontWeight: 'bold',
      fontSize:30,
      fontFamily:'Roboto',
    },
    text1:{
        fontSize:11,
        fontWeight: 'bold',
        fontFamily:'Roboto',
        color:'#000000',
        marginTop:35,
        marginLeft:30
    },
    account:{
      fontSize:12,
      fontWeight: 'bold',
      fontFamily:'Roboto',
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: 50,
        marginLeft:70,
      },
      textContainer: {
        flexDirection: 'row',
        marginLeft: 5, 
        marginBottom:5
      },
      textContainer2:{
        flexDirection: 'row',
        position:'absolute',
        marginTop:705,
        marginLeft:60,
      },
      cardiocareKeepYour: {
        marginLeft: -136,
        marginTop:-60,
        top: 177,
        fontSize: 19,
        lineHeight: 22,
        fontFamily: 'Roboto',
        width: 273,
        fontWeight: "900",
        textAlign: "center",
        color: 'black',
        left: "50%",
        position: "absolute",
      },
      buttonContainer: {
        backgroundColor: '#FF0063',
        borderRadius: 8,
        alignItems: 'center',
        width:330,
        height: 48,
        position:'absolute',
        marginTop:645,
        marginLeft:25,

      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:10,
      },
      
  });
