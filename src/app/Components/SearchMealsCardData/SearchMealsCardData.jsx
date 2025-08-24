import React from "react";

const SearchMealsCardData = ({ meal }) => {
  console.log(meal);
  return (
    <div>
      <div className="card bg-base-100 m-5 shadow-sm">
        <figure>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{meal.strMeal}</h2>
          <p>strCategory {meal.strCategory}</p>
          <p>strArea {meal.strArea}</p>
        </div>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default SearchMealsCardData;
