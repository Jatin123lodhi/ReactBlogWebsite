import { useParams, useNavigate } from "react-router-dom";
import { Post } from "./PostListing";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { BASE_URL } from "../utils";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post>();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/getPost.php?postId=${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of posts retrieved from the PHP server
        setPost(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mx-4">
       
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white p-2  rounded-lg px-4"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="m-4 md:mx-[5%] lg:mx-[15%] p-4 lg:p-8 border rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-bold text-gray-500">{post?.title} </h1>
        <div className="flex font-semibold text-gray-600 gap-5  my-4">
          <h4 className="capitalize">{post?.category_name}</h4>
          <span>{post?.created_at.split(" ")[0]}</span>
        </div>
        <Markdown className="text-gray-600 mt-5 text-xl markdown-container">{post?.content}</Markdown>
      </div>
    </>
  );
};

export default PostDetail;
