"use client";
import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const MealSearchInput = () => {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const route = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // searchMeals();
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    route.push(url);
  }, [search]);
  return (
    <div>
      <input
        placeholder="Search by name..."
        className="border-3 bg-white  text-violet-800 p-2  rounded-sm font-bold"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearchInput;
