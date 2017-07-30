import { StatusBar } from 'react-native' // Needed for android devices as CurrencyList is rendered underneath the status bar
import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'
import Options from '../screens/Options'
import Themes from '../screens/Themes'

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // Without 'navigationOptions', there is an empty part on top of the screen. This is to delete that.
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
}, {
  headerMode: 'screen', // Navigation bar comes and goes *with* screen, rather than being continuosly on screen which is the default on ios.
})

const currencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title, // This is how to access the title on top as specified in './screens/Home' handlePressBaseCurrency and handlePressQuoteCurrency functions
    }),
  },
})

export default StackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: currencyListStack,
  },
}, {
  mode: 'modal',
  cardStyle: {
    paddingTop: StatusBar.currentHeight,
  },
  headerMode: 'none', // This gets rid of double headers on top
})
