import React from "react";
import { getProducts } from "../actions/products/getProducts";
// import { redirect } from "next/navigation";

// export const dynamic = "force-dynamic"

export default async function ProductsPage() {
  // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env.local;

  // force cache kor la data age tha kai cache tha ke!
  //   const res = await fetch("http://localhost:3000/api/items",{cache:"force-cache"});
  //   const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  //   const data = await res.json();
  // const products = data ;

  const data = await getProducts();


  //   server side a redirect method...
  // if (products.length > 3) {
  //   redirect("/");
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 mb-10 m-5 gap-5">
      {data.map((product, index) => {
        return (
          <div key={product._id || index}>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p>{product?.category}</p>
                <p>{product?.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
