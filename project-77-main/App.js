import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLogin from './screens/SignUpLogin';
import WelcomeScreen from './screens/welcomescreens';
import ExchangeScreen from './screens/exchangescreen';
import HomeScreen from './screens/homescreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default class  App extends React.Component{
    render(){
  return (
    <View style={styles.container}>
    <SignUpLogin/>
    <AppContainer/>
    <WelcomeScreen/>
    </View>
  );
    }
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
var AppContainer = createAppContainer(BottomTabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});