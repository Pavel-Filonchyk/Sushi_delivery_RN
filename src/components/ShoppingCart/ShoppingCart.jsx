import React from 'react'
//import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

//import { sendSushiCart } from '../../core/actions/sendSushiCartAction'
import ShopList from './ShopList/ShopList'


export default function ShoppingCart({navigation}) {
    const sushiInCart = useSelector((state) => state.addToCartReducer.sushiInCart)
    const totalPrice = useSelector((state) => state.addToCartReducer.totalPrice)
    console.log(sushiInCart)
    const dispatch = useDispatch()

    const onSushiCart = () => {
        //dispatch(sendSushiCart())
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
                <MaterialIcons name="wallet-travel" size={30} color="#eb5a1e" />
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
        marginTop: 180,
        marginLeft: 10,
        marginBottom: 20
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
        position: 'fixed',
        bottom: 40,
        left: '50%',
        height: 40,
        width: '100%',

    }
})