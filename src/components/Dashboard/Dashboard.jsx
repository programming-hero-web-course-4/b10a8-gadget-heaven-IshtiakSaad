import { useCartWishlist } from "../CartWishlist/CartWishlistContext";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const {
    cart,
    wishlist,
    removeFromCart,
    removeFromWishlist,
    addToCart,
    clearCart,
  } = useCartWishlist(); // Add clearCart from context
  const [activeTab, setActiveTab] = useState("cart");
  const [isSorted, setIsSorted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // For redirection

  // Use useMemo to only recompute the sorted cart when cart or isSorted changes
  const sortedCart = useMemo(() => {
    return isSorted
      ? [...cart].sort((a, b) => a.price - b.price) // Ascending order by price
      : cart;
  }, [isSorted, cart]);

  const totalCost = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }, [cart]);

  const handlePurchase = () => {
    // Clear the entire cart at once using clearCart
    clearCart();

    // Open modal after cart is cleared
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal and navigate to the home page
    setIsModalOpen(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="bg-base-200 min-h-screen">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="text-center text-white bg-purple-500 py-8">
        <h1 className="text-4xl font-extrabold">Dashboard</h1>
        <p className="text-sm mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="mt-4">
          <button
            className={`tab ${activeTab === "cart" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("cart")}
          >
            Cart
          </button>
          <button
            className={`tab ${activeTab === "wishlist" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="w-3/4 mx-auto px-4 py-8">
        {activeTab === "cart" ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Cart</h2>
              <div className="flex items-center gap-4">
                <p className="font-semibold">Total cost: ${totalCost}</p>
                <button
                  onClick={() => setIsSorted(!isSorted)}
                  className="btn btn-sm border-solid border-2 border-purple-500 rounded-full text-purple-600"
                >
                  Sort by Price {isSorted ? "▲" : "▼"}
                </button>
                <button
                  onClick={handlePurchase}
                  className="btn btn-sm rounded-full bg-purple-500 text-white border-purple-500"
                  disabled={cart.length === 0 || totalCost === "0.00"} // Disable button if cart is empty or total is 0
                >
                  Purchase
                </button>
              </div>
            </div>

            {sortedCart.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {sortedCart.map((item) => (
                  <div
                    key={item.product_id}
                    className="card card-compact bg-white p-4 rounded-lg shadow-md flex flex-row justify-between items-center"
                  >
                    <div className="flex items-center gap-6">
                      <img
                        src={item.product_image}
                        alt={item.product_title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-bold mb-2">{item.product_title}</h3>
                        <p className="text-gray-500 mb-2 text-sm">
                          {item.description}
                        </p>
                        <p className="font-bold mb-2">
                          Price: ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-circle btn-error"
                      onClick={() => removeFromCart(item.product_id)}
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-4">Your cart is empty!</p>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Wishlist</h2>
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {wishlist.map((item) => (
                  <div
                    key={item.product_id}
                    className="card card-compact bg-white p-4 rounded-lg shadow-md flex flex-row justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.product_image}
                        alt={item.product_title}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="font-bold mb-2">{item.product_title}</h3>
                        <p className="text-gray-500 mb-2 text-sm">
                          {item.description}
                        </p>
                        <p className="font-bold mb-2">
                          Price: ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          addToCart(item);
                          removeFromWishlist(item.product_id);
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-circle btn-error"
                        onClick={() => removeFromWishlist(item.product_id)}
                      >
                        ✖
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center mt-4">Your wishlist is empty!</p>
            )}
          </div>
        )}
      </div>

      {/* Modal for Purchase Confirmation */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7518/7518799.png"
              alt=""
              className="w-1/2 mx-auto mb-2"
            />
            <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
            <p className="mb-4">Your purchase was successful.</p>
            <button
              onClick={handleCloseModal}
              className="btn btn-sm rounded-full bg-purple-500 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
