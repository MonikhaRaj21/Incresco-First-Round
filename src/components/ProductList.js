import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link,useParams} from "react-router-dom";
 export default class Products extends Component{
     render(){
         //if(this.props.productLists){
            return(
                <div className='row'>
                    {this.props.productLists.map((product) => (
                        <div className='col-3 productListArray' key={product.productId}>
                            <div className="singleProduct">
                                <div className='row'>
                                    <img className='productSampleImage' src={product.searchImage} alt={product.productName}></img>
                                    <p className='productName'>{product.productName}</p>
                                </div>
                                <div className=" row productPriceDiv">
                                    <div className='col-6 productPrice'>Rs. {product.price}</div>
                                    <div className="col-6">
                                        <button onClick={() => this.props.addToCart(product)} className="button primary">
                                            Add To Cart
                                        </button>
                                     </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
       // }
     }
 }