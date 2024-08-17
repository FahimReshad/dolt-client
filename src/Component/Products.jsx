import React, { useEffect, useState } from "react";
import axiosPublic from "./AxiosPublic";

const Products = ({ searchProductByName, filters }) => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(1); // Added state to track total pages
  const limit = 9; // Products per page

  const updatePageNumber = (num) => {
    if (num >= totalPages || num < 0) return;
    setPageNumber(num);
  };

  useEffect(() => {
    const { brandName, categoryName, priceRange } = filters;
    const params = {
      productName: searchProductByName,
      brandName,
      categoryName,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sortBy: sortOption,
      page: pageNumber,
      limit, // Include limit in request
    };

    axiosPublic
      .get("/products", { params })
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.totalCount / limit)); // Calculate total pages based on response
      })
      .catch((error) => console.error(error));
  }, [searchProductByName, filters, sortOption, pageNumber]);

  return (
    <>
      <div className="mb-4">
        <label htmlFor="sort" className="text-white">
          Sort by:{" "}
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-[#18181B] text-white p-2 rounded font-semibold"
        >
          <option value="newest">Date Added: Newest First</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>
      {products.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]"
              key={product._id}
            >
              <img
                width={400}
                height={400}
                className="w-full lg:h-[300px] md:h-[250px] h-[200px] rounded-lg object-cover"
                src={product.productImage}
                alt={product.productName}
              />
              <div className="grid gap-2">
                <h1 className="lg:text-2xl text-xl font-semibold text-white">
                  {product.productName}
                </h1>
                <p className="text-lg font-medium dark:text-white/95">
                  {product.description}
                </p>
                <div className="flex justify-between items-start text-white">
                  <h2 className="text-center lg:text-2xl text-xl font-medium">
                    Price: ${product.price}
                  </h2>
                  <h2 className="text-center lg:text-2xl text-xl font-medium">
                    Ratings: {product.ratings}
                  </h2>
                </div>
                <div className="flex justify-between items-start text-white">
                  <h2 className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">
                    Category: {product.category}
                  </h2>
                  <h2 className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">
                    Brand: {product.brandName}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-black">No products found.</div>
      )}
      {/* pagination */}
      <div className="flex justify-center items-center gap-5 bg-white p-2  rounded-md w-fit mx-auto select-none mt-6 ">
        {/* left arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className="text-[12px] cursor-pointer font-bold px-1 py-1"
        >
          PREV
        </div>
        <div className="flex justify-center items-center gap-2">
          {[...Array(totalPages).keys()].map((item) => (
            <div
              key={item}
              onClick={() => {
                setPageNumber(item);
              }}
              className={`cursor-pointer hover:scale-110 border-b-2 text-sm scale-100 transition-all duration-200 px-3 ${
                pageNumber === item ? "border-[#18181B]" : "border-white"
              } text-[#18181B] py-[6px] font-bold`}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber + 1);
          }}
          className="text-[12px] cursor-pointer font-bold px-1 py-1"
        >
          NEXT
        </div>
      </div>
    </>
  );
};

export default Products;
