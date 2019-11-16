import React from 'react'
import { registerRootComponent } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './Home/HomeScreen'
import AnotherScreen from './Another/AnotherScreen'

const AppNavigator = createBottomTabNavigator(
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
