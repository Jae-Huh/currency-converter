import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

// import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',

  // to show outline of each element on mobile device for development: use 'outline: 1'
})

// export default () => <Home />
export default () => <CurrencyList />
