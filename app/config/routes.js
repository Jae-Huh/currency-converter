import { StatusBar } from 'react-native' // Needed for android devices as CurrencyList is rendered underneath the status bar
import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // Without 'navigationOptions', there is an empty part on top of the screen. This is to delete that.
      header: () => null,
    },
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title, // This is how to access the title on top as specified in './screens/Home' handlePressBaseCurrency and handlePressQuoteCurrency functions
    }),
  },
}, {
  mode: 'modal',
  cardStyle: {
    paddingTop: StatusBar.currentHeight,
  },
})
