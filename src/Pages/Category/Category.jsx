import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Category = () => {
  const { category } = useParams(); // URL से category name
  const { featuredMedicines } = useSelector((state) => state.homeProduct);
  const products = featuredMedicines?.[category] || [];

  if (!products.length) return <h2>Loading...</h2>;

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4 text-capitalize">{category} Medicines</h2>
        <div className="row">
          {products.map((item) => (
            <div key={item.p_id} className="col-sm-6 col-md-4 col-lg-3">
              <Card
                className="card w-100 mb-4"
                image={item.p_Img}
                title={item.p_Title}
                price={item.p_Price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
