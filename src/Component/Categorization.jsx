import React, { useState } from 'react';

const Categorization = ({onFilterChange}) => {
    const [brandName, setBrandName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000]);

    const handleFilterChange = () => {
        onFilterChange({
            brandName,
            categoryName,
            priceRange,
        });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleFilterChange();
            }}
            className='space-y-4'
        >
            <input
                className="rounded-lg border-2 border-[#18181B] bg-transparent px-4 py-2 text-[#18181B] focus:outline-none w-full"
                type="text"
                name='brandName'
                placeholder='Brand name...'
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
            />
            <input
                className="rounded-lg border-2 border-[#18181B] bg-transparent px-4 py-2 text-[#18181B] focus:outline-none w-full"
                type="text"
                name='categoryName'
                placeholder='Category name...'
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <div className="flex space-x-2">
                <input
                    className="rounded-lg border-2 border-[#18181B] bg-transparent px-4 py-2 text-[#18181B] focus:outline-none w-1/2"
                    type="number"
                    name='minPrice'
                    placeholder='Min price'
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                />
                <input
                    className="rounded-lg border-2 border-[#18181B] bg-transparent px-4 py-2 text-[#18181B] focus:outline-none w-1/2"
                    type="number"
                    name='maxPrice'
                    placeholder='Max price'
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                />
            </div>
            <button
                type="submit"
                className="group relative flex w-full items-center rounded-lg border-2 border-[#18181B] p-4 text-[#18181B] font-bold text-xl justify-center"
            >
                <span>Filter</span>
            </button>
        </form>
    );
};

export default Categorization;