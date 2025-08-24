import Link from "next/link";
import React from "react";

const SinglePostData = ({ post }) => {
  const {strCategory,strCategoryThumb} = post || {}

  return (
    <div>
      <div className="card bg-base-100 m-5 shadow-sm">
        <figure>
          <img
            src={strCategoryThumb}
            alt={strCategory}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <div className="card-actions w-full">
          </div>
        </div>
           <Link href="/">
            <button className="btn btn-primary w-full">Details</button>
           </Link>
      </div>
    </div>
  );
};

export default SinglePostData;
