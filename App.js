// import {Provider} from 'react-redux'
// import store from './src/core/store'
import Header from './src/components/Header/Header'
import Main from './src/components/Main/Main'
import ShoppingCart from './src/components/ShoppingCart/ShoppingCart.jsx'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
export default function App() {
 
  return (
    
      <NavigationContainer>
        <Header/>
        <Stack.Navigator initialRouteName="sushi">
          <Stack.Screen name="sushi" component={Main} options={{ headerShown: false }}/>
          <Stack.Screen name="cart" component={ShoppingCart}/>
        </Stack.Navigator>
      </NavigationContainer>

  )
}
