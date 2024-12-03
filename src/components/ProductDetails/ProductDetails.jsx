import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component"; // Install: npm i react-rating-stars-component
import { useCartWishlist } from "../CartWishlist/CartWishlistContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist, wishlist } = useCartWishlist();

  useEffect(() => {
    fetch("../../../public/productData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find(
          (item) => item.product_id === (productId)
        );
        setProduct(foundProduct);
      });
  }, [productId]);

  if (!product) {
    return <div className="text-center">Product Not Found! {productId}</div>;
  }

  const isInWishlist = wishlist.some(
    (item) => item.product_id === product.product_id
  );

  return (
    <>
      <div className="mb-20">
        <div className="font-sans w-full">
          <div className="text-center text-white bg-purple-500 pt-4 pb-28">
            <div className="max-w-full">
              <h1 className="font-sans text-3xl font-extrabold w-2/3 mx-auto">
                Product Details
              </h1>
              <p className="py-8 text-sm text-white w-1/2 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        <div className="border-solid border-2 border-zinc-200 -mt-20 w-2/5 max-w-4xl mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
          <img
            // src={product.product_image}
            src="https://www.androidheadlines.com/wp-content/uploads/2024/09/apple-iphone-16-2-1154x649.webp"
            alt={product.product_title}
            className="w-full h-64 object-cover mb-6 rounded-md"
          />
          <h1 className="text-3xl font-bold mb-4">{product.product_title}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="font-semibold">Price: ${product.price.toFixed(2)}</p>
          <ul className="mt-4">
            {product.specification.map((spec, index) => (
              <li key={index} className="text-sm text-gray-600">
                - {spec}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Availability: {product.availability ? "In Stock" : "Out of Stock"}
          </p>
          <div className="mt-2">
            <ReactStars
              count={5}
              value={product.rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <FaShoppingCart /> Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className={`flex items-center gap-2 ${
                isInWishlist ? "bg-gray-400" : "bg-red-500"
              } text-white px-4 py-2 rounded hover:${
                isInWishlist ? "bg-gray-400" : "bg-red-600"
              }`}
              disabled={isInWishlist}
            >
              <FaHeart /> {isInWishlist ? "Added" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
