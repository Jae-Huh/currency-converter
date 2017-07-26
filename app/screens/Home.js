import React from 'react'
import { StatusBar, View } from 'react-native'

import { Container } from '../components/Container'

// StatusBar prop translucent is for android, barStyle for ios.
export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
  </Container>
)
