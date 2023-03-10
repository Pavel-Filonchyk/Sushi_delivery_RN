const initialState = {
    sushi: [],
}

const getSushiReducer = (state = initialState, action) => {
    switch (action.type){ 

        case 'GET_SUSHI_SUCCESS':
        return {
            ...state,
            sushi: action.payload,
        }
        case 'ON_PLUS':
            const id = action.payload
            console.log(id)
            const itemIndx = state.sushi.flat().findIndex(item => item._id === id)
            const itemInState = state.sushi.flat().find(item => item._id === id)
            const newItem = {
                ...itemInState,
                counter: ++itemInState.counter,
            }
            return {
            ...state, 
            sushi: [
                ...state.sushi.flat().slice(0, itemIndx),
                newItem,
                ...state.sushi.flat().slice(itemIndx + 1)
            ]
        }
        case 'ON_MINUS':
            const idx = action.payload
            const itemInx = state.sushi.flat().findIndex(item => item._id === idx)
            const itemState = state.sushi.flat().find(item => item._id === idx)
            if (itemState.counter > 1){
                const changedItem = {
                    ...itemState,
                    counter: --itemState.counter
                }
                return {
                    ...state, 
                    sushi: [
                        ...state.sushi.flat().slice(0, itemInx),
                        changedItem,
                        ...state.sushi.flat().slice(itemInx + 1)
                    ]
                }
            }else{
                const changedItem = {
                    ...itemState,
                    counter: 1
                }
                return {
                    ...state, 
                    sushi: [
                        ...state.sushi.flat().splice(0, itemInx),
                        changedItem,
                        ...state.sushi.flat().splice(itemInx + 1)
                    ]
                }
            }
        case 'RESET_SUSHI_CART':
            const resetElems = state.sushi.map(item => {
                return {
                    sushiName: item.sushiName,
                    amount: item.amount,
                    weight: item.weight,
                    price: item.price,
                    url: item.url,
                    counter: 1,
                    id: item.id
                }
            })
        return {
            ...state,
           sushi: resetElems
        } 
        default: 
        return state;  
    }
}

export default getSushiReducer

