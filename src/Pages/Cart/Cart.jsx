import { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  removeItem,
  updateCartQty,
  clearCart,
} from "../../store/cartAction";
import { useNavigate, NavLink } from "react-router-dom";
export default function CartPage() {
  const { user, authLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, loading, error } = useSelector((state) => state.cart);
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(fetchCart());
  }, [user,authLoading, dispatch]);

  if (loading) return <p className="text-center mt-4">Loading cart...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  const totalPrice = cartItems?.reduce(
    (acc, item) => acc + item.productId?.productPrice * item.quantity,
    0,
  );

  return (
    <div className="container cart-page mt-4">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cartItems?.length === 0 ? (
        <div className="empty-cart text-center py-5">
          <p className="lead">Your cart is empty.</p>
          <NavLink to="/shop" className="btn btn-primary">
            Browse Products
          </NavLink>
        </div>
      ) : (
        <>
          {cartItems?.map((item) => {
            const subtotal =
              (item.productId?.productPrice || 0) * item.quantity;

            return (
              <div
                key={item.productId?._id}
                className="cart-item card shadow-sm mb-3"
              >
                <div className="row align-items-center p-3 g-3">
                  {/* Product Image */}
                  <div className="col-12 col-md-2 text-center">
                    <div className="img-box">
                      <img
                        src={
                          item.productId?.productImage?.secure_url ||
                          item.productId?.productImage?.url
                        }
                        alt={item.productId?.productTitle}
                        className="cart-img"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="col-12 col-md-3 text-center text-md-start">
                    <h5 className="mb-1">{item.productId?.productTitle}</h5>
                    <p className="text-muted mb-0">
                      ₹ {item.productId?.productPrice}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="col-12 col-md-3">
                    <div className="qty-box justify-content-center justify-content-md-start">
                      <button
                        className="btn btn-light border"
                        onClick={() =>
                          item.quantity > 1 &&
                          dispatch(
                            updateCartQty(
                              item.productId._id,
                              item.quantity - 1,
                            ),
                          )
                        }
                      >
                        −
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-light border"
                        onClick={() =>
                          dispatch(
                            updateCartQty(
                              item.productId._id,
                              item.quantity + 1,
                            ),
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="col-12 col-md-2 text-center">
                    <strong>₹ {subtotal}</strong>
                  </div>

                  {/* Remove */}
                  <div className="col-12 col-md-2 text-center text-md-end">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => dispatch(removeItem(item.productId._id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Cart Summary */}
          <div className="cart-summary card shadow-sm mt-4">
            <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h4>Total: ₹ {totalPrice}</h4>
              <div className="d-flex flex-column flex-md-row gap-2">
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
                <NavLink className="btn btn-success" to='/order-checkout'>Checkout</NavLink>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
