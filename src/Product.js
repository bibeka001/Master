import React, { component } from "react";
import { Component } from "react/cjs/react.production.min";
class Product extends Component {
  product = {
    name: "boat-rockerz",
    image:
      "https://rukminim1.flixcart.com/image/416/416/kulk9zk0/blanket/f/y/o/eternia-0261bl-0002-raymond-home-original-imag7zsw54fjkypp.jpeg?q=70",
  };
  render() {
    return (
      <>
        <h1>Hello</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="car-header">
                  <img src={this.product.image} />
                  {/* <h4>Product Details: {this.product_Details.name} </h4> */}
                  
                </div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Product;
