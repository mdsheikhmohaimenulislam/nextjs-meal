import React from "react";

export const getSinglePost = async (params_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params_id}`
  );
  const data = res.json();
  return data;
};

// Dynamic Generated metadata specific blog post
export async function generateMetadata({ params }) {
  const id = (await params).id;

  // fetch post data
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

const DetailsPages = async ({ params }) => {
  const p = await params;
  console.log(p.id);
  const singlePost = await getSinglePost(p.id);
  console.log(singlePost);

  return (
    <div className="mt-20  place-content-center place-items-center">
      <div className="card bg-base-100 w-96 card-lg shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{singlePost?.title}</h2>
          <p>{singlePost?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPages;
