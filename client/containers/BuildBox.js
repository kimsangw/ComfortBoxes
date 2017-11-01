import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { fetchCategories } from '../store/categories';
import {
  ProductList,
  CategoryList,
  NextSidebar,
  PrevSidebar,
} from '../components';
import { getCopyOfTempShoppingCart, completeBox } from '../shoppingCart';

//BUILD BOX CONTAINER
/**
 * BUILD BOX CONTAINER
 *
 * displays category list: <CategoryList />
 * displays product list corresponding to selected category: <ProductList />
 *
 * mapSTP: Fetches categories array from store
 * mapDTP: brings in thunk that populates category list in DB
 *
 */


export class BuildBox extends Component {
  constructor(props) {
    super(props)
    this.completeBox = this.completeBox.bind(this)
    this.state = {
      redirectToCart: false,
      redirectToHome: false,
      redirectToBuildBox: false,
    }
  }

  componentDidMount () {
    // fetch categories from DB
    this.props.fetchCategories();
  }

  completeBox (redirectTo) {
    const tempCart = getCopyOfTempShoppingCart();
    const current = localStorage.getItem('currentBoxId')
    if (tempCart[current]) {
      completeBox()
      if (redirectTo === 'toHome') {
        this.setState({ redirectToHome: true });
      // if (redirectTo === 'toBuildBox') {
      //   this.setState({ redirectToBuildBox: true });
      } else if (redirectTo === 'toCart') {
        this.setState({ redirectToCart: true });
      }
    } else {
      alert('Cannot complete box without a box product selected')
    }
  }

  render () {

    const currentCategory = this.props.location.pathname.slice(10)
    const categoryTitles = this.props.categories.map(cat => cat.title)
    const nextCategory = categoryTitles[categoryTitles.indexOf(currentCategory) + 1]
    const prevCategory = categoryTitles[categoryTitles.indexOf(currentCategory) - 1]

    if (this.state.redirectToCart) {
      return (
        <Redirect to={'/Cart'} />
      )
    }
    if (this.state.redirectToHome) {
      return (
        <Redirect to={'/'} />
      )
    }
    if (this.state.redirectToHome) {
      return (
        <Redirect to={'/'} />
      )
    }


    return (
      <div id="buildboxPage">
        <CategoryList categories={this.props.categories} />
        <div className="btnGroup">
          <button onClick={() => this.completeBox('toHome')}>Add Box to Cart & Continue Shopping</button>
          <button onClick={() => this.completeBox('toCart')}>Add Box to Cart & Go to Cart</button>
        </div>
        <div className="btnGroup">
        {prevCategory &&
          <PrevSidebar prevCategory={prevCategory} />
        }
        {nextCategory &&
          <NextSidebar nextCategory={nextCategory} />
        }
      </div>
        <ProductList categories={this.props.categories} />
        <div className="btnGroup">
          <button onClick={() => this.completeBox('toHome')}>Add Box to Cart & Continue Shopping</button>
          <button onClick={() => this.completeBox('toCart')}>Add Box to Cart & Go to Cart</button>
        </div>
        <div className="btnGroup">
          {prevCategory &&
            <PrevSidebar prevCategory={prevCategory} />
          }
          {nextCategory &&
            <NextSidebar nextCategory={nextCategory} />
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    categories: state.categories,
  }
}

export default connect(
  mapStateToProps,
  {fetchCategories}
)(BuildBox);
