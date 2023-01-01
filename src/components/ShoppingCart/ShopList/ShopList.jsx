import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { deleteItem, addToCounter, deductFromCounter } from '../../../core/actions/addToCartAction'

export default function ShopList({card}) {
    const {id, url, weight, sushiName, counter, price} = card
    const dispatch = useDispatch()

    const onPlus = (id) => {
        dispatch(addToCounter(id))
    }
    
    const onMinus = (id) => {
        dispatch(deductFromCounter(id))
    }
    const onDelete = (id) => {
        dispatch(deleteItem(id))
    }
    return (
        <View style={styles.wrapCart}>
            <View style={styles.wrapperElems}>
                <Image style={{width: 40, height: 40}} source={{uri : url}}/>
                <Text style={styles.cartItemTitle}>{sushiName}</Text>
            </View>
            <View style={styles.wrapperItems}>
                <View style={styles.items}>
                    <TouchableOpacity style={styles.itemsControl} 
                        onPress={() => onMinus(id)}
                    ><Text style={{fontWeight: '700'}}>-</Text></TouchableOpacity>
                     <View style={styles.itemsCurrent} >
                        <Text style={{fontWeight: '600'}}>{counter}</Text>
                    </View>
                    <TouchableOpacity style={styles.itemsControl} 
                        onPress={() => onPlus(id)}
                    ><Text style={{fontWeight: '700'}}>+</Text></TouchableOpacity>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceCurrency}>{price}$</Text>
                </View>
                <View style={styles.cross}>
                    <AntDesign name="delete" size={20} color="black" 
                        onPress={() => onDelete(id)}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapCart: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        padding: 10,
        backgroundColor: 'white'
    },
    wrapperElems: {
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        width: '50%',
        marginLeft: 1
    },
    cartItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 5
    },
    wrapperItems: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%'
    },
    items: {
        flexDirection: 'row',
        backgroundColor: '#f2ede7',
        borderRadius: 8,
        width: 120,
        justifyContent: 'center',
        fontSize: 18,
        height: 30,
    },
    itemsControl: {
        width: 35,
        height: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#eb5a1e',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    
    },
    itemsCurrent: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        flexDirection: 'row',
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceCurrency: {
        fontSize: 15,
        fontWeight: '600',
    },
    cross: {
       justifyContent: 'center',
	    marginRight: '1%'
    }
})