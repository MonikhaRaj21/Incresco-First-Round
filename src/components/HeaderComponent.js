import React, { Component } from 'react';
import Wishlist from './svg/heart-solid.svg';
import Bag from './svg/shopping-bag-solid.svg';
import Profile from './svg/user-alt-solid.svg';



class HeaderComponent extends Component{
    render(){
        return(
            <div className="headerDiv">
                <h3 className="headerText">Product Discovery</h3>
                <div className="row">
                    <div className="col-8">
                        <ul className="nav nav-pills navText">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="/product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 iconDiv">
                        <ul className="iconList">
                            <li className="corner"><a href="/Profile"><img src={Profile} alt="" width="20"/></a></li>
                            <li className="corner"><a href="/Wishlist"><img src={Wishlist} alt="" width="20"/></a></li>
                            <li className="corner"><a href="/Bag"><img src={Bag} alt="" width="20"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComponent;