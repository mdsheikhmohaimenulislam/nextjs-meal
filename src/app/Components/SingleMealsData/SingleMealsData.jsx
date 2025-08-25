import Image from "next/image";
import React from "react";

const SingleMealsData = ({ meal }) => {
  return (
    <div>
      <div className="card bg-base-100 m-5 shadow-sm">
        <figure>
          <Image width={641} height={641} src={meal.strCategoryThumb} alt={meal.strCategory} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{meal.strCategory}</h2>
          {/* <p>{meal.strCategoryDescription}</p> */}
        </div>

        {/* <button className="btn btn-primary w-full">Buy Now</button> */}
      </div>
    </div>
  );
};

export default SingleMealsData;
