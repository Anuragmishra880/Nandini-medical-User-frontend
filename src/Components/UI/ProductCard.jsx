import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../../store/cartAction";
const ProductCard = ({ item }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      alert("Please login first");
      navigate("/login");
      
      return;
    }

    dispatch(AddToCart(item._id, 1));
  };
  return (
    <div className="bg-white border rounded-3 p-3 h-100 shadow-sm product-card">
      <div className="text-center mb-3">
        <img
          src={item.productImage?.url}
          alt={item.productTitle}
          className="img-fluid"
          style={{ height: "140px", objectFit: "contain" }}
        />
      </div>

      <h6 className="fw-semibold text-dark mb-1">{item.productTitle}</h6>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
        {" "}
        <span className="fw-bold fs-5">₹{item.productPrice}</span>
        <button
          onClick={handleAddToCart}
          className="btn btn-outline-primary btn-sm "
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
