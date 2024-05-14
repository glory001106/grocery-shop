import React from 'react';
import SearchAlert from '../SearchAlert/SearchAlert';
import SearchItemCard from '../SearchItemCard/SearchItemCard';

const SearchModal = () => {
    return (
        <div>
            <input type="checkbox" id="search-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-80 relative">
                    <label htmlFor="search-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <SearchItemCard />
                    <SearchAlert />
                </div>
            </div>
        </div>
    );
};

export default SearchModal;