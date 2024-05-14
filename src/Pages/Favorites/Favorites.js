import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import { removeFromDb } from '../../cartManagement/cartManagement';
import { FaTrashAlt} from "react-icons/fa";

const Favorites = () => {

    const { savedProducts, setSavedProducts } = useContext(ProductContext);

    const removeFavItem = (id) =>{
        const remaining = savedProducts.filter(product => product.id !== id);
        setSavedProducts(remaining);
        removeFromDb(id, "fav");
    }

    return (
        <div className='relative'>
            <input type="checkbox" id="favorites-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box h-screen w-96 mr-5">
                    <div>
                        <label htmlFor="favorites-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='font-semibold text-3xl text-center'>Favorite Items</h1>
                        <hr className='my-2 h-1 bg-emerald-400'></hr>
                    </div>
                    {
                        savedProducts.length ?
                            <div>
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th className='text-center'>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            savedProducts.map(product=>
                                            <tr key={product.id}>
                                                <td>{product.name}</td>
                                                <td className='text-center'><span>$ {product.price}</span></td>
                                                <td className='text-red-600'><button className='p-2 rounded-full bg-red-100 hover:text-orange-400' onClick={()=>removeFavItem(product.id)}><FaTrashAlt/></button></td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                    
                                </table>
                            </div> : <p className='text-xl text-orange-500 text-center  mt-16'>You didn't add any item yet. <br />Please add your favorite item.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;