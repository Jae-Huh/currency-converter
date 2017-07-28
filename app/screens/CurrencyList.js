import React from 'react'
import { FlatList, StatusBar, Text, View } from 'react-native'

import currencies from '../data/currencies'

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barstyle="default" translucent={false} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </View>
)

export default CurrencyList
