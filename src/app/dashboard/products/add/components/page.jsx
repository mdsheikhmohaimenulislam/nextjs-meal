"use client";

import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export default function AddFrom() {

   const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData from the form element
    const formData = new FormData(e.target);

    // Convert FormData to an object or array for logging
    const data = Object.fromEntries(formData.entries());

    // data send to mongoDB
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (result) {
      toast.success("Successfully Products add ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // Reset the form
      e.target.reset();
      router.push("/products"); // navigate to /products
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Product name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Product name"
            />
            <label className="label">Product details</label>
            <input
              name="details"
              type="text"
              className="input"
              placeholder="Product details"
            />
            <label className="label">Product content</label>
            <input
              name="number"
              type="number"
              className="input"
              placeholder="Product content"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
