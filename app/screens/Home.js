import React from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'

// StatusBar prop translucent is for android, barStyle for ios.
export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
)
