/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import {createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import { Provider } from 'react-redux'
import store from './src/publics/redux/store'


import Home from './screens/Home'
import Login from './screens/Login'
import Register from './screens/Register'
import detailPokemon from './screens/detailPokemon'
import newPokemon from './screens/newPokemon'

import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const StackNavigation = createStackNavigator({

  Login : {screen: Login, navigationOptions: {header: null}},
  Main : {screen: Home, navigationOptions: {header: null}},
  Register : {screen: Register, navigationOptions: {header: null}},
  newPokemon : {screen: newPokemon, navigationOptions: {header: null}},
  detailPokemon : {screen: detailPokemon},
  initialRouteMain : 'Login'
})

// const SwitchNavigation = createSwitchNavigator({

// 	splashScreen:{screen:splashScreen},
// 	Main:{screen:StackNavigation},
// 	initialRouteName: 'splashScreen'
// })

const AppContainer = createAppContainer(StackNavigation)

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}

export default App