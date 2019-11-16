import React from 'react'
import { registerRootComponent } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, Header } from 'react-navigation-stack'
import HomeScreen from './Home/HomeScreen'
import AnotherScreen from './Another/AnotherScreen'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Another: {
      screen: AnotherScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
  return <AppContainer />
}

registerRootComponent(App)
