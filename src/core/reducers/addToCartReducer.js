const initialState = {
    sushi: [],
    sushiInCart: [],
    totalPrice: 0,
    sushi: [],
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type){ 
        case 'ADD_TO_CART_SUCCESS':
            const data = action.payload
            const id = data[0]
            const sushi = data[1]
            // if the elem is already in the cart
            // 1. find identical elems by index in elems
            // 2. find identical items by index in items and take its price and changed counter
            // 3. add the counters and multiply by the price 
            const itemInx = state.sushiInCart.flat().findIndex(item => item.id === id)
            const findItem = sushi.flat().find(item => item.id === id)
            const itemsInState = state.sushiInCart.flat().find(item => item.id === id)
            
            const firstPrice = Number(findItem.counter) *  Number(findItem.price)
            if (itemInx >= 0){
                const sumCounters = Number(itemsInState.counter) + Number(findItem.counter)
                const newItem = {
                    ...itemsInState,
                    counter: sumCounters,
                    price: sumCounters *  Number(findItem.price)
                }
                return {
                    ...state, 
                    sushiInCart: [
                        ...state.sushiInCart.slice(0, itemInx),
                        newItem,
                        ...state.sushiInCart.slice(itemInx + 1)
                    ],
                    totalPrice: state.totalPrice + Number(firstPrice),
                    sushi: sushi
                }
            }
            // if the elem is not in the cart
            const elem = sushi.flat().find(item => item.id === id)
            const newElem = {
                sushiName: elem.sushiName,
                amount: elem.amount,
                weight: elem.weight,
                price: findItem.counter * findItem.price,
                url: elem.url,
                counter: findItem.counter,
                id: elem.id
            };
        return {
            ...state,
        sushiInCart: [
            ...state.sushiInCart,
            newElem
        ],
        totalPrice: state.totalPrice + Number(newElem.price),
        sushi: sushi
        }
        case 'ADD_TO_COUNTER': 
            const idx = action.payload
            const elemInd = state.sushiInCart.flat().findIndex(item => item.id === idx)
            const elemInState = state.sushiInCart.flat().find(item => item.id === idx)
            const findItems = state.sushi.flat().find(item => item.id === idx)
            const newElement = {
                ...elemInState,
                counter: ++elemInState.counter,
                price: elemInState.counter * Number(findItems.price)
            }
                return {
                    ...state, 
                    sushiInCart: [
                        ...state.sushiInCart.flat().slice(0, elemInd),
                        newElement,
                        ...state.sushiInCart.flat().slice(elemInd + 1)
                    ],
                    totalPrice: state.totalPrice + Number(findItems.price)
                }
        case 'DEDUCT_FROM_COUNTER': 
            const inx = action.payload
            const elemIndex = state.sushiInCart.flat().findIndex(item => item.id === inx)
            const elemIntoState = state.sushiInCart.flat().find(item => item.id === inx)
            const findElem = state.sushi.flat().find(item => item.id === inx)
            const deletePrice = Number(elemIntoState.price) - Number(findElem.price)
            if (elemIntoState.counter > 1){
                const changedElem = {
                    ...elemIntoState,
                    counter: --elemIntoState.counter,
                    price: deletePrice
                }
                return {
                    ...state, 
                    sushiInCart: [
                        ...state.sushiInCart.flat().slice(0, elemIndex),
                        changedElem,
                        ...state.sushiInCart.flat().slice(elemIndex + 1)
                    ],
                    totalPrice: state.totalPrice - Number(findElem.price)
                }
                
            }else{
                const changedElem = {
                    ...elemIntoState,
                    counter: 1,
                }
                return {
                    ...state, 
                    sushiInCart: [
                        ...state.sushiInCart.flat().slice(0, elemIndex),
                        changedElem,
                        ...state.sushiInCart.flat().slice(elemIndex + 1)
                    ],
                    totalPrice: state.totalPrice - 0
                }
            }
        case 'DELETE_ITEM':
            const ind = action.payload
            const index = state.sushiInCart.flat().findIndex(item => item.id === ind)
            const findItms = state.sushiInCart.flat().find(item => item.id === ind)
            return {
                ...state,
                sushiInCart: [
                    ...state.sushiInCart.slice(0, index),
                    ...state.sushiInCart.slice(index + 1)
                ],
                totalPrice: state.totalPrice - Number(findItms.price)
            } 
        default: 
        return state;  
    }
}

export default addToCartReducer

//   [actions.resetSushiCart]: (state, data) => {
    
//     return {
//         ...state,
//         sushiInCart: [],
//         totalPrice: 0
//     }  
//   },
  