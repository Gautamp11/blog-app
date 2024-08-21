import { useContext } from "react";
// import { supabase } from "../supabase";
import { Link } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";
import { AuthContext } from "../context/AuthContext";

function Posts() {
  const { posts } = useContext(PostsContext);
  const { user } = useContext(AuthContext);

  // const otherPosts = posts.filter((post) => post.user_id !== user?.id);

  return (
    <>
      <h2 className='text-3xl '>All Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className={`border-b mb-4 pb-4 p-2 rounded-md ${
              post.user_id === user?.id ? "bg-gray-100" : ""
            }`}
          >
            <h2 className='text-xl capitalize font-semibold tracking-wide'>
              {post.title}
            </h2>
            <p>{post.content.substring(0, 50)}...</p>
            <Link to={`/posts/${post.id}`} className='text-blue-500'>
              Read more
            </Link>
            {post.user_id === user?.id && (
              <h2 className='italic text-sm mt-2'>Created by you.</h2>
            )}
          </div>
        ))
      ) : (
        <p>No other posts found.</p>
      )}
    </>
  );
}

export default Posts;
