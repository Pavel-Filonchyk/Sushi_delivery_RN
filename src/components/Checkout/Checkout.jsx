import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { useSelector, useDispatch } from 'react-redux'
import ModalWrapper from '../../wrapers/ModalWrarrer/ModalWrapper'
import AlertWrapper from '../../wrapers/AlertWrapper/AlertWrapper'
import { resetSushiCart } from '../../core/actions/addToCartAction'

const Checkout = ({ navigation }) => {

    const bill = useSelector((state) => state.sendSushiCartReduser.bill)
    const dispatch = useDispatch()
    
    const [showCheckout, setShowCheckout] = useState(true)
    const [showAlert, setAlert] = useState(false)
    
    const onBuySushi = () => {
        setShowCheckout(false)
        setAlert(true)
        dispatch(resetSushiCart())
    }

    const closeAlert = () => {
        setAlert(false)
        navigation.navigate('sushi')
    }
    const onCloseCheckout = () => {
        setShowCheckout(false)
        navigation.navigate('sushi')
    }
    return (
        <View>
            <ModalWrapper showCheckout={showCheckout} name='showCheckout'>
                <View style={styles.mainWrap}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Here is your order</Text>
                        <Ionicons style={{marginRight: 26, marginTop: 10}} name="md-close-sharp" size={20} color="black" 
                            onPress={() => onCloseCheckout()}
                        />
                    </View> 
                    {
                        bill?.check?.map(item => {
                            return (
                                <View key={item.sushiName} style={styles.wrapCart}>
                                    <Text style={styles.text}>{item.sushiName}</Text>
                                    <Text style={styles.text}>{item.price} $</Text>
                                </View>
                            )
                        })
                    } 
                    <Text style={styles.price}>Total price { bill?.totalPrice} $</Text>
                    <View style={styles.wrapBtn}>
                        <AntDesign name="wallet" size={35} color="#eb5a1e"
                            onPress={() => onBuySushi()}
                        /> 
                    </View>  
                </View> 
            </ModalWrapper>
            <AlertWrapper showAlert={showAlert}>
                <View style={styles.mainWrap}>
                    <View style={styles.wrapAlert}>
                        <Text style={styles.textAlert}>Payment method not set</Text>
                        <Text style={styles.textAlert}>Try again</Text>
                    </View>
                    <View style={styles.wrapBtn}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => closeAlert()}
                        >
                            <Text style={{fontWeight: '700', color:'#eb5a1e', fontSize: 20}}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View> 
            </AlertWrapper>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({
    mainWrap: {
        height: '100%',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: '#eb5a1e',
    },
    title: {
        color: '#121212',
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 20 
    },
    wrapCart: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        justifyContent: 'space-between',
        padding: 6
    },
    text: {
        padding: 6,
		fontSize: 18,
		fontWeight: '600'
    },
    price: {
        marginTop: 8,
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: '600',
        color: '#eb5a1e',
    },
    wrapBtn: {
        position: 'absolute',
        bottom: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapAlert: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 20
    },
    textAlert: {
		fontSize: 25,
		fontWeight: '600',
    },
    btn: {
        width: 40,
        height: 26,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#eb5a1e',
		borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
