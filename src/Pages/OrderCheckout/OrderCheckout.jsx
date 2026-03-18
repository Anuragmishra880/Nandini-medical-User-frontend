import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.productId.productPrice * item.quantity,
    0
  );

  const handleBuyNow = () => {
    alert("This is a demo checkout. Payment integration not implemented.");
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Order Summary</h2>

      {/* <h4 className="mb-3">Order Summary</h4> */}

      <div className="row">
        {cartItems.map((item) => (
          <div key={item._id} className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{item.productId.productTitle}</h5>
                <p className="card-text">
                  Price: ₹{item.productId.productPrice}
                </p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="fw-bold">
                  Subtotal: ₹{item.productId.productPrice * item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-4 p-3 border-top">
        <h4>Total: ₹{totalPrice}</h4>
        <button className="btn btn-primary btn-lg" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;