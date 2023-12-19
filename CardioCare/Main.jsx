import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main()  { 

    const navigation = useNavigation();

    const gotoReferences = () => {
        navigation.navigate('References')
    }
    const gotoInfo = () => {
        navigation.navigate('Info')
    }
    const gotoHome = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.redText}>CardioCare</Text>
            </View>
            <TouchableOpacity style={styles.ImageContainer} >
                <Image style={styles.image} source={require('./images/Ellipse.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.PlusContainer} >
                <Image style={styles.plus} source={require('./images/Vector.png')}/>
            </TouchableOpacity>

            <View style={styles.LastContainer}>
                <View style={styles.inner}>
                <TouchableOpacity  onPress={gotoHome} >
                    <Image style={styles.logo} source={require('./images/Home.png')}/>
                </TouchableOpacity>

                <TouchableOpacity  onPress={gotoReferences}>
                    <Image style={styles.logo1} source={require('./images/References.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={gotoInfo} >
                    <Image style={styles.logo} source={require('./images/Info.png')}/>
                </TouchableOpacity>
                </View>
            </View>
            
        </View>
        </View>
    )
  }


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height:900
      },
        redText: {
            position:'absolute',
            color: 'white',
            fontWeight: 'bold',
            fontSize:30,
            fontFamily:'Roboto',
            marginTop:-2,
            marginLeft:90
          },
          container: {
            backgroundColor:'#66BFBF',
            flexDirection: 'row', 
            alignItems: 'center',
            height:100
          },
          textContainer: {
            flexDirection: 'row',
            marginBottom:5
          },
          image:{
            position:'absolute',
            marginTop:-1,
            marginLeft:320,
          },
          plus:{
            position:'absolute',
            marginTop:610,
            marginLeft:310,
            width:36,
            height:37,
          },
          LastContainer:{
            backgroundColor:'#EAF6F6',
            width:385,
            height:55,
            position:'absolute',
            top:755,
          },
          inner:{
            flexDirection:'row',
            top:10,
            justifyContent:'space-around'
          },
          logo:{
            width:35,
            height:34,
          },
          logo1:{
            width:26,
            height:34,
          }
})
