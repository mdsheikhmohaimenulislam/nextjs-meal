import Link from "next/link";
import React from "react";

const SinglePostData = ({ post }) => {



  return (
    <div>
      <div className="card bg-base-100 m-5 shadow-sm">
        {/* <figure>
          <img src={post?.strCategoryThumb} alt={post?.strCategory} />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">{post?.title}</h2>
          <div className="card-actions">
            <p>{post?.body}</p>
          </div>
        </div>
        <Link href={`/Posts/${post?.id}`}>
          <button className="btn btn-primary w-full">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SinglePostData;
