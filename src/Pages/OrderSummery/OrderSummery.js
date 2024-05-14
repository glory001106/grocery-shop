import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { FaArrowRight } from "react-icons/fa";
import { TbTrashX } from "react-icons/tb";

const OrderSummery = () => {
    const { cartProducts, handleClearCart } = useContext(ProductContext);
    console.log(cartProducts)
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let discount = 0;

    for (const item of cartProducts) {
        total = total + parseInt(item.price) * item.quantity;
        quantity = quantity + item.quantity;
    }
    tax = (total * 0.2).toFixed(2);
    discount = (total * 0.1).toFixed(2);

    if (total > 100) {
        shipping = 19;
    }
    else if (total > 50 && total < 100) {
        shipping = 15;
    }
    else if (total < 1) {
        shipping = 0;
    }
    else {
        shipping = 9;
    }

    grandTotal = ((total + parseFloat(tax) + shipping) - discount).toFixed(2);

    return (
        <div className='mt-5 mb-10'>
            <h3 className='text-center font-bold text-2xl'>Order Summery</h3>
            <hr className='my-2 h-1 w-11/12 mx-auto'></hr>
            <table className="w-9/12 mx-auto text-lg mt-5">
                <tbody>
                    <tr className='font-bold'>
                        <td>Total Items : </td>
                        <td className=' text-red-500'>{quantity}</td>
                    </tr>
                    <tr>
                        <td>Sub Total : </td>
                        <td>$ {total}</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost : </td>
                        <td>$ {shipping}</td>
                    </tr>
                    <tr>
                        <td>Vat : </td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr>
                        <td>Discounts : </td>
                        <td>$ {discount}</td>
                    </tr>
                    <tr>
                        <td>Grand Total : </td>
                        <td>$ {grandTotal}</td>
                    </tr>
                </tbody>
            </table>
            {
                cartProducts.length > 0 &&
                <div className='mt-10 w-8/12 mx-auto'>
                <Link to="/checkout">
                    <Button
                        gradientDuoTone="purpleToPink"
                        className='w-full mb-5'
                        onClick={()=>handleClearCart("")}
                    >
                        CheckOut
                        <span className='ml-3'><FaArrowRight /></span>
                    </Button>
                </Link>
                <Button onClick={()=>handleClearCart("clear")} className='w-full' gradientMonochrome="failure">
                    Clear Cart
                    <span className='ml-3 text-xl'><TbTrashX/></span>
                </Button>
            </div>
            }
        </div>
    );
};

export default OrderSummery;