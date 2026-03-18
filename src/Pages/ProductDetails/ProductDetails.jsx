import { NavLink, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddToCart } from "../../store/cartAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products/${id}`);
      const result = await res.json();
      setProduct(result.data);
    };
    fetchProduct();
  }, [id]);

  const { loading, error } = useSelector((state) => state.product);

  const handleAddToCart = () => {
    dispatch(AddToCart(product._id, 1));
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;
  if (!product) return <p className="text-center">Product not found</p>;

  return (
   
    <div className="product-details">
  <div className="product-image">
    <img
      src={product.productImage?.secure_url || product.productImage?.url}
      alt={product.productTitle}
    />
  </div>

  <div className="product-info">
    <h2>{product.productTitle}</h2>
    <p>{product.productDescription}</p>
    <h4>₹ {product.productPrice}</h4>

    <div className="product-actions">
      <NavLink to="/cart" onClick={handleAddToCart}>
        Add to Cart
      </NavLink>
      <button>Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
