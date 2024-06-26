import React from 'react';
import { useContext } from 'react';
import CartItemContainerComponent from '../../../Components/Buyer Components/Cart Components/CartItemContainer.component';
import ProfileCardComponent from '../../../Components/Buyer Components/Profile Card/ProfileCard.component';
import { ProductContext } from '../../../Context/product.context';
import { UserContext } from '../../../Context/user.context';
import { useNavigate } from 'react-router-dom';

const CartComponent = () => {
    const { totalCartItem, totalCartPrice, productInCart, insertProductInPurchase, PURCHASE_FROM_PAGE,  } = useContext(ProductContext);
    const { isProfileCardOpen } = useContext(UserContext);
    const navigate = useNavigate();
    const addToPurchase = ()=> {
        insertProductInPurchase(productInCart, PURCHASE_FROM_PAGE.cart);
        navigate('/purchase');
    }

    return (
        <div className='p-24 flex flex-col gap-4'>
            {
                isProfileCardOpen && <ProfileCardComponent />
            }
            <div className="flex flex-col gap-8">
                <CartItemContainerComponent />
                {
                    productInCart.length ?
                        (<div className="p-2 text-left mt-4">
                            <h3 className=' text-2xl font-bold pb-2'>Price Details</h3>
                            <hr className=' border border-gray-500' />
                            <div className=" flex justify-between md:flex-row flex-col">
                                <div className=" p-4 text-xl flex flex-col gap-4">
                                    <p>{`Items: ${totalCartItem}`}</p>
                                    <p>Delivery Charges: 5</p>
                                    <p className=' font-bold'>Total Amount: ${totalCartPrice}</p>
                                </div>
                                <div className=" flex justify-end items-end p-4">
                                    <button onClick={addToPurchase} className='bg-green-700 text-white p-2 rounded-md w-full'>Continue</button>
                                </div>

                            </div>
                        </div>) : ""
                }
            </div>
        </div>

    );
}

export default CartComponent;
