import React, { useContext } from 'react';
import { ProductContext } from '../../../../Context/product.context';
import { Link, useNavigate } from 'react-router-dom';

const ProductListComponent = ({ product }) => {
    const { productId, productName, productDescription, productPrice, productImageURL, productRating } = product;
    const { insertProductInWishlist, insertProductInCart, insertProductInPurchase, PURCHASE_FROM_PAGE } = useContext(ProductContext);
    const navigate = useNavigate();
    const addToCart = () => insertProductInCart(product);
    const addToWishlist = () => insertProductInWishlist(product);
    const addToPurchase = () => {
        insertProductInPurchase(product, PURCHASE_FROM_PAGE.main);
        navigate('/purchase');
    }
    return (
        <>
            <div className="p-2 border-2 md:w-full w-[18rem] justify-center items-center bg-slate-100 rounded-md drop-shadow-md flex flex-col gap-2 md:flex-row">
                <Link to={`/${productId}`}>
                    <div className="p-2 bg-cover md:max-w-[28rem]">
                        <img src={productImageURL} alt=""
                            className=''
                        />
                    </div>
                </Link>
                <div className="p-2 h-auto flex flex-col justify-between w-full">
                    <Link to={`/${productId}`}>
                        <div className="flex gap-5 flex-col text-wrap">
                            <h2 className='text-xl'>{productName}</h2>
                            <p className='break-words text-wrap'>{productDescription}
                            </p>

                            <h1 className='text-xl'>Price: <b>${productPrice}</b></h1>

                            <span>Ratings:
                                <br />
                                <i class="fa-solid fa-star text-2xl"></i>
                                <i class="fa-solid fa-star text-2xl"></i>
                                <i class="fa-solid fa-star text-2xl"></i>
                                <i class="fa-solid fa-star text-2xl"></i>
                                <i class="fa-regular fa-star text-2xl"></i>
                            </span>
                        </div>
                    </Link>
                    <div className="p-2 flex gap-2 justify-center flex-col md:flex-row">
                        <button onClick={addToPurchase} className='bg-green-700 text-white p-2 rounded-md w-full'>Buy Now <i class="fa-solid fa-bolt"></i></button>
                        <button onClick={addToWishlist} className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Wishlist <i class="fa-solid fa-heart text-slate-100 text-lg" /></button>
                        <button onClick={addToCart} className='bg-green-700 text-white p-2 rounded-md w-full'>Add to Cart <i class="fa-solid fa-cart-shopping text-slate-100" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListComponent;
