import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getSushi, onPlus, onMinus } from '../../core/actions/getSushiAction'
import { addToCart } from '../../core/actions/addToCartAction'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Platform} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Main({ navigation }) {
    const sushi = useSelector((state) => state.getSushiReducer.sushi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSushi())
    }, [])
    
    const isOnPlus = (id) => {
        dispatch(onPlus(id)) 
    }
    const isOnMinus = (id) => {
        dispatch(onMinus(id))
    }
    const isAddToCart = (id) => {   
        dispatch(addToCart(id))
    }
   
    return (
        <View>
            <ScrollView>
                <View style={styles.wrapCard}>
                    <Text style={styles.title}>Promptly and tasty</Text>
                        {
                            sushi?.map(item =>{ 
                                return (
                                <View key={item.sushiName} >
                                    <View style={styles.card}>
                                        <Text style={styles.sushiName}>{item.sushiName}</Text>
                                        <Image style={{width: 230, height: 160}} source={{uri : item.url}}/>
                                        <Text style={{margin: 5, marginBottom: 10, fontWeight: '600'}}>{item.amount} pcs.</Text>
                                            <View style={styles.items}>
                                                <TouchableOpacity style={styles.itemsControl} 
                                                    onPress={() => isOnMinus(item._id)}
                                                ><Text style={{fontWeight: '700'}}>-</Text></TouchableOpacity>
                                                <View style={styles.itemsCurrent} >
                                                    <Text style={{fontWeight: '600'}}>{item.counter}</Text>
                                                </View>
                                                <TouchableOpacity style={styles.itemsControl} 
                                                    onPress={() => isOnPlus(item._id)}
                                                ><Text style={{fontWeight: '700'}}>+</Text></TouchableOpacity>
                                            </View>
                                            <View style={styles.price}>
                                                <Text style={styles.priceWeight}>{item.weight}g.</Text>
                                                <Text style={styles.priceWeight}>{item.price}$</Text>
                                            </View>
                                            <TouchableOpacity style={styles.btn}
                                                onPress={() => isAddToCart(item._id)}
                                            >
                                                <Text style={styles.btnTitle}>+ add to cart</Text>
                                            </TouchableOpacity> 
                                    </View>
                                </View>   
                            )
                        })
                    }
                </View>
            </ScrollView>
            <View style={styles.iconCart}>
                <FontAwesome name="opencart" size={30} color='#eb5a1e' 
                    onPress={() => navigation.navigate('cart')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        margin: 5,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15
    },
    wrapCard: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    card: {
        alignItems: 'center', 
	    height: 'auto',
        width: 260,
        marginBottom: 25,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#eb5a1e',
        borderRadius: 8,
    },
    sushiName: {
        margin: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    items: {
        flexDirection: 'row',
        backgroundColor: '#f2ede7',
        borderRadius: 8,
        width: 150,
        justifyContent: 'center',
        fontSize: 18,
        height: 35,
        marginTop:5
    },
    itemsControl: {
        width: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#eb5a1e',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemsCurrent: {
        width: 50,
	    marginTop: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    price: {
        flexDirection: 'row',
        width: 100,
        height: 'auto',
	    marginTop: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceWeight: {
        fontSize: 15,
        fontWeight: '600',
        margin: 5
    },
    btn: {
        width: 100,
        height: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#eb5a1e',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
        color: '#eb5a1e',
        borderRadius: 4,
    },
    btnTitle: {
        color: '#eb5a1e',
        fontSize: 14,
        fontWeight: '500'
    },
    iconCart: {
        width: 50,
        height: 50,
        right: 0,
        position: 'absolute',
        top: 10,
      }
  })