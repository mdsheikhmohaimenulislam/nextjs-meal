import SearchMealsCardData from "../Components/SearchMealsCardData/SearchMealsCardData";
import MealSearchInput from "./components/MealSearchInput";

// Server components....




const SearchMeals = async ({ searchParams }) => {
  const query = await searchParams;

  const searchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      //   setMeals(data?.meals || []);
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await searchMeals();

  return (
    <div>
      <div className="text-center mt-5">
        <MealSearchInput />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {meals?.map((meal) => (
          <SearchMealsCardData key={meal?.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default SearchMeals;
