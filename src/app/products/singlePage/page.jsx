import React from "react";

const SingleProduct = ({ product }) => {

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.details}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
