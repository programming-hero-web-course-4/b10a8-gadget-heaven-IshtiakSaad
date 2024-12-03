import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component"; // Install: npm i react-rating-stars-component
import { useCartWishlist } from "../CartWishlist/CartWishlistContext";
import { toast, ToastContainer } from "react-toastify"; // Importing Toastify
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify styles
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist, wishlist } = useCartWishlist();

  useEffect(() => {
    fetch("../../../public/productData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.product_id === productId);
        setProduct(foundProduct);
      });
  }, [productId]);

  if (!product) {
    return <div className="text-center">Product Not Found! {productId}</div>;
  }

  const isInWishlist = wishlist.some(
    (item) => item.product_id === product.product_id
  );

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.product_title} has been added to your cart!`, {
      position: "top-center",
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success(`${product.product_title} has been added to your wishlist!`, {
      position: "top-center",
    });
  };

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
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
        <div className="flex gap-6 border-solid border-2 border-zinc-200 -mt-20 w-full max-w-5xl mx-auto my-10 p-4 bg-white shadow-lg rounded-lg">
          <div>
            <img
              src={product.product_image}
              alt={product.product_title}
              className="w-full h-64 object-cover mb-6 rounded-md"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.product_title}</h1>
            <p className="font-semibold">Price: ${product.price.toFixed(2)}</p>
            <p className="my-4 bg-green-100 text-green-800 border-solid border-green-800 border-2 inline-block px-2 py-1 rounded-full">
              {product.availability ? "In Stock" : "Out of Stock"}
            </p>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-lg mb-4 font-bold">Specification:</p>
            <ol className="mt-4 list-decimal pl-5">
              {product.specification.map((spec, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {spec}
                </li>
              ))}
            </ol>
            <p className="text-lg mt-4 font-bold">Rating: {product.rating}</p>
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
                onClick={handleAddToCart}
                className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600"
              >
                Add to Cart <FaShoppingCart />
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`flex items-center gap-2 rounded-full ${
                  isInWishlist ? "bg-gray-400" : "bg-red-500"
                } text-white px-3 py-2 rounded hover:${
                  isInWishlist ? "bg-gray-400" : "bg-red-600"
                }`}
                disabled={isInWishlist}
              >
                <FaHeart /> {isInWishlist ? "Added" : ""}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container to render the toast messages */}
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
