import React, { useContext, useState } from "react";
import Searching from "../Component/Searching";
import Products from "../Component/Products";
import Categorization from "../Component/Categorization";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const [searchProductByName, setSearchProductByName] = useState("");
  const [filters, setFilters] = useState({
    brandName: "",
    categoryName: "",
    priceRange: [0, 10000], // Default price range
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  if (loading) {
    <div className="w-10 h-10">
      <div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full">
        <span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span>{" "}
        <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span>
        <span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span>
      </div>
    </div>;
    return;
  }
  return (
    <div className="grid lg:grid-cols-4 gap-4 my-6 mx-6">
      <div className="space-y-4 w-full lg:col-span-1">
        <Searching setSearchProductByName={setSearchProductByName}></Searching>
        <Categorization onFilterChange={handleFilterChange}></Categorization>
      </div>
      <div className="lg:col-span-3">
        <Products
          searchProductByName={searchProductByName}
          filters={filters}
        ></Products>
      </div>
    </div>
  );
};

export default Home;
