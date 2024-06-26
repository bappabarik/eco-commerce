import React, { useContext } from 'react';
import { ProductContext } from '../../../Context/product.context';
import CartItemComponent from './CartItem.component';

const CartItemContainerComponent = () => {
    const { productInCart } = useContext(ProductContext);
    return (
        <div className='flex flex-col gap-4 md:pt-8 pt-24 justify-center items-center'>
            {
                productInCart.length ? productInCart.map((product)=><CartItemComponent product={product} key={product.productId}/>) : <h2 style={{
                    fontSize: '50px',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginTop: '80px',
                    color: 'green'
                }}>Cart is Empty</h2>
            }
        </div>
    );
}

export default CartItemContainerComponent;
