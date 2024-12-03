import { useState } from "react";
import { useCartWishlist } from "../CartWishlist/CartWishlistContext";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("cart");
  const [isSorted, setIsSorted] = useState(false);
  const { cart, wishlist } = useCartWishlist();

  const switchTab = (tab) => {
    setActiveTab(tab);
    setIsSorted(false); // Reset sorting when switching tabs
  };

  // Sort cart items by price (descending)
  const sortCartByPrice = () => {
    setIsSorted(true);
  };

  // Calculate total cart price
  const totalCartPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container w-3/4 mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <div className="tabs flex justify-center">
        <button
          className={`tab tab-bordered ${
            activeTab === "cart" ? "tab-active" : ""
          }`}
          onClick={() => switchTab("cart")}
        >
          Cart
        </button>
        <button
          className={`tab tab-bordered ${
            activeTab === "wishlist" ? "tab-active" : ""
          }`}
          onClick={() => switchTab("wishlist")}
        >
          Wish List
        </button>
      </div>

      <div className="mt-6">
        {/* Cart Tab */}
        {activeTab === "cart" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>No items in the cart</p>
            ) : (
              <div>
                <button
                  className="btn btn-sm btn-outline mb-4"
                  onClick={sortCartByPrice}
                >
                  Sort by Price
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(isSorted
                    ? [...cart].sort((a, b) => b.price - a.price)
                    : cart
                  ).map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-md">
                      <figure>
                        <img
                        //   src={item.product_image}
                          src="https://www.androidheadlines.com/wp-content/uploads/2024/09/apple-iphone-16-2-1154x649.webp"
                          alt={item.product_title}
                          className="h-48 w-full object-cover"
                        />
                      </figure>
                      <div className="card-body">
                        <h3 className="card-title">{item.product_title}</h3>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold mt-4">
                  Total Price: ${totalCartPrice.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Wish List</h2>
            {wishlist.length === 0 ? (
              <p>No items in the wishlist</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((item) => (
                  <div key={item.id} className="card bg-base-100 shadow-md">
                    <figure>
                      <img
                        // src={item.product_image}
                        src="https://www.androidheadlines.com/wp-content/uploads/2024/09/apple-iphone-16-2-1154x649.webp"
                        alt={item.product_title}
                        className="h-48 w-full object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">{item.product_title}</h3>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
