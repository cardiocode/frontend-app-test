import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';
import References from './References';
import Info from './Info';

const Stack = createStackNavigator();

export default function App() {
  return (
       <NavigationContainer >
      <Stack.Navigator initialRouteName='SignUp'>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={Main} options={{headerShown: false}} />
        <Stack.Screen name='References' component={References} options={{headerShown: false}} />
        <Stack.Screen name='Info' component={Info} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}                                                              

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  redText: {
    color: 'green',
    fontWeight: 'bold',
  },
  blueText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
