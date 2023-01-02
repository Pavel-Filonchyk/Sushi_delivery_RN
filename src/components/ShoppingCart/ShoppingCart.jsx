import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { sendSushiCart } from '../../core/actions/sendSushiCartAction'
import ShopList from './ShopList/ShopList'

export default function ShoppingCart({navigation}) {
    const sushiInCart = useSelector((state) => state.addToCartReducer.sushiInCart)
    const totalPrice = useSelector((state) => state.addToCartReducer.totalPrice)
    const dispatch = useDispatch()

    const onSushiCart = () => {
        dispatch(sendSushiCart())
        navigation.navigate('checkout')
    }

    const cardNames = sushiInCart?.flat().map(card =>{
        return (<ShopList
            card={card}
            key={card.id} 
        />)
    })
    return (
        <View style={styles.shoppingCart}>
            <View style={styles.wrapBtnBack}>
                <MaterialCommunityIcons name="format-list-group" size={30} color="#eb5a1e" 
                    onPress={() => navigation.navigate('sushi')}
                />
            </View>
            {cardNames}
            <View style={styles.totalPrice}>
                <Text style={styles.textTotalPrice}>Total price: {totalPrice}$</Text>
            </View>
            <View style={styles.blockCheckout}>
                <MaterialIcons name="wallet-travel" size={40} color="#eb5a1e" 
                    onPress={() => onSushiCart()}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    shoppingCart: {
        backgroundColor: 'white',
        height: '100%'
    },
    wrapBtnBack: {
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 10,
    },
    totalPrice: {
        width: '100%',
        alignItems: 'center'
    },
    textTotalPrice: {
        color: '#eb5a1e',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 20
    },
    blockCheckout: {
        alignItems: 'center',
        height: 40,
        width: '100%',
        position: 'absolute',
        bottom: 60,
    }
})