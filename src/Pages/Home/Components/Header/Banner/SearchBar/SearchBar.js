import React, { useContext } from 'react';
import { ProductContext } from '../../../../../../contexts/ProductsProvider';

const SearchBar = () => {

    const {handleSearchProduct} = useContext(ProductContext);

    return (
        <form className=' flex h-14'>
            <input id='searchBox' className='w-full rounded-tl-xl rounded-bl-xl' type="text" name="search" placeholder='What do you want?'/>
            <label onClick={handleSearchProduct} className='flex items-center py-2 px-5 bg-emerald-500 text-white font-bold rounded-br-xl rounded-tr-xl hover:bg-emerald-300' htmlFor="search-modal">Search</label>
        </form>
    );
};

export default SearchBar;