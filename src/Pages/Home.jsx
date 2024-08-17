import React, { useState } from 'react';
import Searching from '../Component/Searching';
import Products from '../Component/Products';
import Categorization from '../Component/Categorization';

const Home = () => {
    const [searchProductByName, setSearchProductByName] = useState('')
    const [filters, setFilters] = useState({
        brandName: '',
        categoryName: '',
        priceRange: [0, 10000], // Default price range
    });

    const handleFilterChange = (newFilters) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters,
        }));
    };
    return (
        <div className='grid lg:grid-cols-4 gap-4 my-6 mx-6'>
            <div className='space-y-4 w-full lg:col-span-1'>
            <Searching setSearchProductByName={setSearchProductByName}></Searching>
            <Categorization onFilterChange={handleFilterChange} ></Categorization>
            </div>
            <div className='lg:col-span-3'>
            <Products searchProductByName={searchProductByName} filters={filters}></Products>
            </div>
        </div>
    );
};

export default Home;