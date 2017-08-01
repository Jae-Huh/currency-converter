import React, { Component } from 'react'
import { Animated, Keyboard, Platform, Text, View } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor(props) {
    super(props)
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow' // 'keyboardWillShow' and 'keyboardWillHide' won't work on android. Hence the if statement.
    let hideListener = 'keyboardWillHide'
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow'
      hideListener = 'keyboardDidHide'
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow)
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide)
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    // Animated.timing(this.containerImageWidth, {
    //   // below is config for animation
    //   toValue: styles.$smallContainerSize,
    //   duration: ANIMATION_DURATION,
    // }).start()
    //
    // Animated.timing(this.imageWidth, {
    //   toValue: styles.$smallImageSize,
    //   duration: ANIMATION_DURATION,
    // }).start()

    // Animated.parallel replaces lines 27-36.
    // It takes those lines as parameters to synchronise the animation of the two images.
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start()
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ]

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth },
      this.props.tintColor ? {tintColor: this.props.tintColor} : null,
    ]

    return (
      <View style={styles.container}>
        <Animated.Image // Animated has its own components
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
