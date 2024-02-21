import './box.css'
import React from 'react';
import { Prodcuts, Products2 } from '../data/Products.jsx';

export const AmazonBox = ()  => {
    const handleLeftButton = function(event){
        console.log('check');
        const conect = document.querySelector('.product-slide');
        conect.scrollLeft -= 1100;
        event.preventDefault();
    }
    const handleRightButton = function(event){
        console.log('check');
        const conect = document.querySelector('.product-slide');
        conect.scrollLeft -= 1100;
        event.preventDefault();
    }
   return(
    <>
    <section className='sect-1'>
        <div className="container">
            <div className='container-1'>
                <div className="product">
                    <div className="box">
                        <h3>Men Clothing</h3>
                        <div className='box-1'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/81gHzitlpsL._AC_SL1500_.jpg" alt="" />
                                <span>Sport Shirts</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61UKXyB9h9L._AC_SL1500_.jpg" alt="" />
                                <span>Men's Tracksuit</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61I9rZGUhbL._AC_SL1500_.jpg" alt="" />
                                <span>Cargo Pants</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/81IRrgWkxjL._AC_SL1500_.jpg" alt="" />
                                <span>Men Hoodie</span>
                            </div>
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Gaming accesories</h3>
                        <div className='box-1'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61MzemTbRVL._SX679_.jpg" alt="" />
                                <span>Mouse Pad</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/71A8gMWDq5L._AC_SX679_.jpg" alt="" />
                                <span>Headsets</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/71GVFq2hkfL._AC_SX679_.jpg" alt="" />
                                <span>Keyboard</span>
                            </div>
                            <div>
                                <img src="https://i0.wp.com/m.media-amazon.com/images/I/61MJXznbAhS._AC_SL1000_.jpg?fit=%2C&ssl=1" alt="" />
                                <span>Mouse</span>
                            </div>
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Makeup</h3>
                        <div className='box-1'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/51SVPLLWcrL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>Blush</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/31hYsy1Cj1L._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>Powder</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/41P4K4lguJL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>iluminator</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/51MaYfCQrwL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>Shadows</span>
                            </div>
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="box">
                        <h3>Hololive</h3>
                        <div className='box-1'>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61X-4aIAhJL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>Gawr Gura</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/51utdGPk+CL._AC_SY300_SX300_.jpg" alt="" />
                                <span>Usada Pekora</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/61p31Tx3ElL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                                <span>Watson Amelia</span>
                            </div>
                            <div>
                                <img src="https://m.media-amazon.com/images/I/616EAh0RG6L._AC_SY879_.jpg" alt="" />
                                <span>Calliope Mori</span>
                            </div>
                            <p>Show More</p>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="box">
                    <h3>School Supplies</h3>
                    <div className="box-2">
                        <div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BTS24/Fuji_BTS_Dash_card_2x._SY608_CB583656338_.jpg" alt="" />
                        </div>
                        <a href="#">Show more</a>
                    </div>
                    </div>

                    <div className="box">
                    <h3>Free shipping</h3>
                    <div className="box-2">
                        <div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/1460058_2528408_us_gw_pc_single_category_card_1x_758x608_us-en._SY608_CB609924804_.jpg
                " alt="" />
                        </div>
                        <a href="#">Learn more</a>
                    </div>
                    </div>

                    <div className="box">
                    <h3>Gamers Paradise</h3>
                    <div className="box-2">
                        <div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546843_2940864_758x608_2X_en_US._SY608_CB613273467_.jpg" alt="" />
                        </div>
                        <a href="#">Show more</a>
                    </div>
                    </div>

                    <div className="box">
                    <h3>Personal Care</h3>
                    <div className="box-2">
                        <div>
                            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v10._SY608_CB573698005_.jpg" alt="" />
                        </div>
                        <a href="#">Show more</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className='slider'>
                <div className='box-images'>
                    <div className='slide'>
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" alt="" />
                    </div>
                    <div className='slide'>
                        <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section className='sect-2'>
        <div className="slide-2">
            <div className="L-btn" onClick={handleLeftButton}><i className='left'></i></div>
            <div className="btn-R" onClick={handleRightButton}><i className='right'></i></div>
            <h3>Best Sellers in Sports & Outdoors</h3>
            <ul className='product-slide'>

                {Prodcuts.map((product) => (
                    <>
                    <img src={product.img} alt="" />
                    </>
                ))}

            </ul>
        </div>
    </section>

    <section className='sect-2'>
        <div className="slide-2">
            <div className="L-btn btn-1a"><i className='left'></i></div>
            <div className="btn-R btn-1b"><i className='right'></i></div>
            <h3>Best Sellers in Books</h3>
            <ul className='product-slide product-slide-1'>

            {Products2.map((product2) => (
                    <>
                    <img src={product2.img} alt="" />
                    </>
                ))}


            </ul>
        </div>
    </section>

    <script src="./middle.jsx"></script>
    </>
    )
 }
