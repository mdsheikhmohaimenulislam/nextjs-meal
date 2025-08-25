import React from "react";
import SingleProduct from "./singlePage/page";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  // force cache kor la data age tha kai cache tha ke!
  //   const res = await fetch("http://localhost:3000/api/items",{cache:"force-cache"});
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  const products = data.data;

//   server side a redirect method...
  if (products.length > 3) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 mb-10 m-5 gap-5">
      {products.map((product, index) => (
        <SingleProduct key={index} product={product} />
      ))}
    </div>
  );
}
