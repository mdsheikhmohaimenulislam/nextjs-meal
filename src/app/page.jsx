
import SingleMealsData from "./Components/SingleMealsData/SingleMealsData";

export const metadata = {
  title: "Home",
};



export const getMeals = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const meals = await getMeals();


  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {meals.categories.map((meal, index) => (
          <SingleMealsData key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}

// className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10"
