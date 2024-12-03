import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../../public/productData.json"; // Import the JSON array

// Extract unique categories from the product list
const categories = ["All", ...new Set(products.map((p) => p.category))];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center text-3xl font-bold mb-10">
        <h1>Explore Cutting-Edge Gadgets</h1>
      </div>
      <div className="flex justify-center">
        {/* Left Category Panel */}
        <div className="w-52 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer rounded-3xl text-center p-2 ${
                  selectedCategory === category
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Product Display Panel */}
        <div className="w-3/4 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.product_id}
                className="border rounded-lg shadow-lg p-4 bg-base-50"
              >
                <img
                  src={product.product_image}
                //   src="https://www.androidheadlines.com/wp-content/uploads/2024/09/apple-iphone-16-2-1154x649.webp"
                  alt={product.product_title}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-4">
                  {product.product_title}
                </h3>
                <div className="mt-2 flex justify-between items-center">
                  <span className="font-bold text-purple-500">
                    ${product.price}
                  </span>
                  <Link to={`/product/${product.product_id}`}>
                    <button className="btn btn-primary btn-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
