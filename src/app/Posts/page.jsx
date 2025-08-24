import SinglePostData from "../Components/SinglePostData/SinglePostData";

export const getPosts = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const data = res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();

  return <div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
      {
       posts.categories.map((post,index) => <SinglePostData key={index} post={post} />)
      }
    </div>
  </div>;
};

export default Posts;
