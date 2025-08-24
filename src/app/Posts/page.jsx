import SinglePostData from "../Components/SinglePostData/SinglePostData";

export const metadata = {
  title: "Post"
}


export const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();

  return <div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
      {
       posts.map((post,index) => <SinglePostData key={index} post={post} />)
      }
    </div>
  </div>;
};

export default Posts;
