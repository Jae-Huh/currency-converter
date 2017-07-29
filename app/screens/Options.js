import React, { Component } from 'react'
import { ScrollView, StatusBar, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ListItem, Separator } from '../components/List'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md' // 'ios' prefix for icons on ios device, md for android
const ICON_COLOR = '#868686'
const ICON_SIZE = 23

class Options extends Component {
  handleThemePress = () => {
    console.log('press themes')
  }

  handleSitePress = () => {
    console.log('press site')
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
        <ListItem
          text="fixer.io"
          onPress={this.handleSitePress}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default Options
