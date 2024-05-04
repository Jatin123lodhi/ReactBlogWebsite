import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface Post {
  id: string;
  category_id: string;
  title: string;
  content: string;
  created_at: string;
  category_name: string;
}

const PostListing = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost/backend_blog_app/api/getPosts.php")
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of posts retrieved from the PHP server
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  return (
    <div>
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts?.map((post: Post) => (
          <div
            className=" bg-sky-400  hover:bg-sky-700    mb-4 p-2 px-4 rounded-lg transition-transform transform hover:scale-105 duration-700 ease-in-out"
            key={post?.id}
          >
            <Link to={`/post/${post?.id}`}>
              <div className="flex flex-col  ">
                <div className=" min-h-48">
                  <h2 className=" text-xl font-bold text-white min-h-14">
                    {post?.title.length > 70
                      ? post?.title.substring(0, 70) + "..."
                      : post?.title}
                  </h2>
                  <p className="text-white my-4 min-h-14">
                    {post?.content.length > 100
                      ? post?.content.substring(0, 100) + "..."
                      : post?.content}
                  </p>
                </div>

                <div className=" flex font-semibold text-white justify-between items-end gap-2 mb-2">
                  <h4 className="capitalize">{post?.category_name}</h4>
                  <span>{post?.created_at.split(" ")[0]}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {posts?.length==0 && <div className="text-center">There are no blogs.</div>}
    </div>
  );
};

export default PostListing;
