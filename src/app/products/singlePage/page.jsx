import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>{product.category}</p>
          <p>{product.details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
