import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBoxInShoppingCart,removeBoxFromShoppingCart, getCopyOfShoppingCart, addProductToBox } from '../shoppingCart'

function ProductDetail ({product}) {

  const addProductToCart = function (event) {
    // event.preventDefault()
    // const shoppingCart = getCopyOfShoppingCart()
    // const currentBox = localStorage.getItem('currentBoxId')
    // console.log(shoppingCart, currentBox)
    // if (shoppingCart[currentBox] && category.title === 'Box'){
    //   console.error('Only one box per box!')
    // } else if ((shoppingCart[currentBox] && shoppingCart[currentBox].length <= 10) || category.title === 'Box') {
    //   addProductToBox(event.target.name)
    // } else if (shoppingCart[currentBox] && shoppingCart[currentBox].length > 10) {
    //     console.error('Only 10 items may be selected per box (excluding box itself). Create another box in order to select more items!')
    // } else {
    //   console.error('Must select a box before other items!');
    // }
    // console.log('shopping cart: ', getCopyOfShoppingCart())
  }


  return (
    <div className='productList'>
      <div key={product.id} className='product'>
        <img src={product.img}/>
        <div>{product.title}</div>
        <p>{product.description}</p>
        <button name={product.id} onClick={addProductToCart}>Add</button>
      </div>
    </div>
  );
}