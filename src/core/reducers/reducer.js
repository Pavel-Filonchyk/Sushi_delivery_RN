const initialState = {
    sushi: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){ 

        case 'GET_SUSHI_SUCCESS':
            const { '-NKc0ecdlXkS8SRzz7wA': data } = action.payload
        return {
            ...state,
            sushi: [...data],
        }
        case 'ON_PLUS':
            const id = action.payload
            const itemIndx = state.sushi.flat().findIndex(item => item.id === id)
            const itemInState = state.sushi.flat().find(item => item.id === id)
            const newItem = {
                ...itemInState,
                counter: ++itemInState.counter,
            }
            return {
            ...state, 
            sushi: [
                ...state.sushi.flat().splice(0, itemIndx),
                newItem,
                ...state.sushi.flat().splice(itemIndx + 1)
            ]
        }
        case 'ON_MINUS':
            const idx = action.payload
            console.log(idx)
            const itemInx = state.sushi.flat().findIndex(item => item.id === idx)
            const itemState = state.sushi.flat().find(item => item.id === idx)
            if (itemState.counter > 1){
                const changedItem = {
                    ...itemState,
                    counter: --itemState.counter
                }
                return {
                    ...state, 
                    sushi: [
                        ...state.sushi.flat().splice(0, itemInx),
                        changedItem,
                        ...state.sushi.flat().splice(itemInx + 1)
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
        default: 
        return state;  
    }
}

export default reducer

