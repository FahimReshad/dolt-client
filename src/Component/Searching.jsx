import React, { useState } from 'react';

const Searching = ({setSearchProductByName}) => {
    const [searchProductName, setSearchProductName] = useState('')
    const handleSearchProduct = (e) => {
        e.preventDefault()
        setSearchProductByName(searchProductName)
    }


const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.value;
    setSearchProductName(productName)
}
    return (
            <form onSubmit={handleSearchProduct} className='flex w-full'>
            <input className="rounded-lg border-2 border-[#18181B] bg-transparent px-4 py-2 text-[#18181B] focus:outline-none border-r-0 rounded-r-none w-full" type="text" name='productName' placeholder='Product name........' value={searchProductName} onChange={handleSearch} />
            <button></button>
            <button className="group relative flex w-36 items-center rounded-lg border-2 border-[#18181B] p-4 text-[#18181B] border-l-0 rounded-l-none font-bold"><span>Search</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-[#18181B] duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
            </form>
    );
};

export default Searching;