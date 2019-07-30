import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductList } from "../../actions/products.action";
import { addCartItem } from "../../actions/cart.actions";
import Product from "./Product";
import "./product-list.css";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  componentDidMount() {
    if(this.props.products.length === 0) {
      this.props.getProductList();
    }
  }

  addCartItem = product => {
    this.props.addCartItem(product);
  };

  sortByName = () => {
    this.setState({
      products: this.props.products.sort((a,b) => (a.name > b.name) ? 1 : -1)
    });
  };
  sortByPrice = () => {
    this.setState({
      products: this.props.products.sort((a,b) => (b.price > a.price) ? 1 : -1)
    });
  };
  sortByAvailability = () => {
    this.setState({
      products: this.props.products.sort((a,b) => (b.available > a.available) ? 1 : -1)
    });
  };

  renderProducts() {
    //console.log("this.props.products", this.props.products);
    return (
      <div>
        <div>
          Sort by: {" "}
          <button onClick ={this.sortByPrice}>Highest price</button> |{" "}
          <button onClick={this.sortByName}>Name A-Z</button> |{" "}
          <button onClick ={this.sortByAvailability}>Availability</button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.products.map((product, index) => (
            <Product
              key={product.id}
              product={product}
              index={index}
              addCartItem={this.addCartItem}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App-product_list">
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
});

export default connect(
  mapStateToProps,
  { getProductList, addCartItem }
)(ProductList);
