const initialState = {
  bill: [],
}

const sendSushiCartReduser = (state = initialState, action) => {
  switch (action.type){ 

      case 'SEND_SUSHI_CART_SUCCESS': 
        return {
          ...state,
          bill: action.payload
        }

      default: 
      return state;  
  }
}

export default sendSushiCartReduser
