import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text)
    }
    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                    <input onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
                    <button onclick={() => setText('')} class="flex-shrink-0 bg-blue-500 hover:bg-blue-700 order-blue-500 hover:border-blue-700 text-white font-bold py-2 px-4 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ImageSearch;