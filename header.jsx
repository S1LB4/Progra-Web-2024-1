import './header.css'
import React from 'react';


export const AmazonHeader = ()  => {

   return(
    <>
        <header>
            <div className="start">
                <div className="flex-logo">
                <a href="#"><img src="https://pngimg.com/d/amazon_PNG25.png" alt=""/></a>
                    <div className="map">
                        <i className="map-maker"></i>
                        <div>
                            <span>Deliver to:</span>
                            <span>Colombia</span>
                        </div>
                    </div>
                </div>

                <div className="input-container">
                    <span>All</span>
                    <i className="fa-carret-down"></i>

                    <input type="text"/>
                    <i className="search"></i>
                </div>
                <div className="flex right">
                    <div className="flex_lang">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/399/741/small/american-flag-icon-vector.jpg" alt=""/>
                        <i className="fa-carret-down"></i>
                    </div>
                    <div className="sign">
                            <span>Hello, Sign In</span>
                                <div className="flex ac">
                                    <span>Account & Lists</span>
                                    <i className="fa-carret-down"></i>
                                </div>
                    </div>
                    <div className="sign">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                    <div className="flex cart">
                        <i className="fa-shopping-cart"></i>
                        <span className="ca">Cart</span>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="second-1">
                    <i className='fa-bars'></i>
                    <span>All</span>
                </div>
                <div className="second-2">
                    <ul>
                        <li>Today's Deal</li>
                        <li>Customer Service</li>
                        <li>Registry</li>
                        <li>Gisft Cards</li>
                        <li>Sell</li>
                    </ul>
                </div>

            </div>
            </header>
    </>
   )
}
