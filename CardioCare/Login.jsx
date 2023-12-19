import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native'
import {React,useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

const gotoSignUp = () =>{
    navigation.navigate('SignUp');
}

const gotoLogin = () =>{
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
                    "Welcome!"
            </Text>
            <Text style={styles.login}>Please login into your existing account </Text>
            <Image source={require('./images/heart.png')} style={styles.heart}/>
            <Text style={styles.text1}>ACCOUNT INFORMATION</Text>
            <TextInput
                  style={styles.input}
                  placeholder="Enter your email" />
            <TextInput
                style={styles.password}
                placeholder="Password"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
                <Image source={require('./images/visibility.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={gotoLogin}>
                  <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 
            <View style={styles.textContainer2}>
                    <Text style={styles.account}>Don't have an account?</Text>
                    <Text onPress={gotoSignUp} style={{ fontSize:12,fontWeight: 'bold',fontFamily:'Roboto',color: '#4EADEE', textDecorationLine: 'underline' }}> Sign Up</Text>
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
          cardiocareKeepYour: {
            marginLeft: -136,
            marginTop:-40,
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
          login:{
            fontSize:13,
            fontWeight: 'bold',
            fontFamily:'Roboto',
            position:'absolute',
            marginTop:170,
            marginLeft:40,
          },
          heart:{
            width:190,
            height:157,
            marginTop:150,
            marginLeft:96,
      },
      text1:{
        fontSize:11,
        fontWeight: 'bold',
        fontFamily:'Roboto',
        color:'#000000',
        marginTop:35,
        marginLeft:30
    },
    input: {
        height: 48,
        backgroundColor:'#D9D9D9',
        color:'#767E8B',
        paddingHorizontal: 10,
        width:330,
        borderRadius:8,
        position:"absolute",
        marginTop:480,
        marginLeft:25,
      },
      toggleButton: {
        position:'absolute',
        marginLeft: 315,
        marginTop:563,
      },
      password: {
        height: 48,
        backgroundColor: '#D9D9D9',
        color: '#767E8B',
        paddingHorizontal: 10,
        width: 330,
        borderRadius: 8,
        position:'absolute',
        marginTop:550,
        marginLeft:25,
      },
      buttonContainer: {
        backgroundColor: '#FF0063',
        borderRadius: 8,
        alignItems: 'center',
        width:330,
        height: 48,
        position:'absolute',
        marginTop:620,
        marginLeft:25,

      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:10,
      },
      textContainer2:{
        flexDirection: 'row',
        position:'absolute',
        marginTop:705,
        marginLeft:60,
      },
      account:{
        fontSize:12,
        fontWeight: 'bold',
        fontFamily:'Roboto',
      },
})