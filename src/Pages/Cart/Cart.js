import React from 'react';
import { useContext } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductsProvider';
import useTitle from '../../Title/useTitle';

const Cart = () => {
    const { cartProducts } = useContext(ProductContext);
    useTitle("Cart");

    return (
        <div>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box h-screen w-96 mr-5 relative">
                    <div>
                        <label htmlFor="cart-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='font-semibold text-3xl text-center'>Shopping Cart</h1>
                        <hr className='my-2 h-1 bg-emerald-400'></hr>
                    </div>
                    {
                        cartProducts.length ?
                            <div>
                                <div className="overflow-auto">
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>Items</th>
                                                <th className='text-center'>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartProducts.map(product =>
                                                    <tr key={product.id}>
                                                        <td>{product.name}</td>
                                                        <td className=' flex justify-center items-center'>
                                                            <span className='mx-2'>{product.quantity}</span>
                                                        </td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <Link to='/review'><label htmlFor="cart-modal" className="btn hover:bg-success w-full modal-action justify-center">Review Cart <span className='ml-3 text-xl'><MdShoppingCartCheckout/></span></label></Link>
                            </div>
                            : <p className='text-xl text-orange-500 text-center  mt-16'>Your cart is empty <br /> Please add items.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;