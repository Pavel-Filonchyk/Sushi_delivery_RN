import { StyleSheet, Text, View, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
export default function Header() {
  return (
    <View style={styles.wrapLogo}>
      <Image 
        style={styles.logo}
        source={require('./img/LogoRoll.png')}
      />
      <Text style={styles.mainTitle}>Sushi delivery</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  mainTitle: {
    margin: 3,
    fontSize: 24,
    fontWeight: 700,
},
  wrapLogo: {
    height: 165,
    backgroundColor: "floralwhite",
    width: '100%',
    alignItems: 'center',
    padding: 20,
    position: 'fixed',
    zIndex: 100
  },
  logo: {
    width: 100,
    height: 100,
  },
 
})

