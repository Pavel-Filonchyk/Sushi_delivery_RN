
export const GET_SUSHI_URL = 'https://sushi-c34e9-default-rtdb.europe-west1.firebasedatabase.app/sushi.json'

export const BUY_SUSHI = 'https://sushi-c34e9-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
export const deleteSushi = (id) => {
    return `https://sushi-c34e9-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`
}
// export const POST_LOGIN = `${REACT_APP_SERVER_URL}/login`
// export const POST_REGISTRATION = `${REACT_APP_SERVER_URL}/registration`

// export const LOGIN = `${REACT_APP_SERVER_URL}`