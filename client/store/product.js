import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT'

/**
 * INITIAL STATE
 */
const currentProduct = {}

/**
 * ACTION CREATORS
 */
const getProduct = product => ({type: GET_PRODUCT, product})

/**
 * THUNK CREATORS
 */
export const fetchProduct = id => dispatch =>
{
  axios.get(`/api/products/${id}`)
    .then(res => {
      dispatch(getProduct(res.data))
    })
    .catch(err => console.log(err))
}


/**
 * REDUCER
 */
export default function (state = currentProduct, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    default:
      return state
  }
}
