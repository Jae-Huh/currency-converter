import EStyleSheet from 'react-native-extended-stylesheet'
import { StatusBar } from 'react-native' // For Android devices to show the gear button at the right place


const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20, // All ios devices' status bars are 20 pixels high
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight, // This line is only for android. Doesn't work for ios devices
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
})

export default styles
