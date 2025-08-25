import Image from "next/image";
import React from "react";

export const getSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Dynamic Generated metadata specific blog post
export async function generateMetadata({ params }) {
  const id = (await params).id;

  // fetch post data
  const [singleMeals] = await getSingleMeals(id);
  //   console.log(singleMeals);
  // console.log(singleMeals[0].strInstructions);

  return {
    title: singleMeals?.strMeal,
    description: singleMeals?.strInstructions,
  };
}

const SearchMealsDetails = async ({ params }) => {
  const p = await params;
  const [meals] = await getSingleMeals(p?.id);
//   console.log(meals);

  return (
    <div className="mt-20 mb-20 place-content-center place-items-center">
      <div className="card bg-base-100 w-96 card-lg shadow-sm">
        <div className="card p-4 shadow rounded">
          <figure>
            <Image width={641} height={641} src={meals?.strMealThumb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{meals?.strMeal}</h2>
            <p>{meals?.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMealsDetails;
