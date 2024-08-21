// Profile.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { PostsContext } from "../context/PostsContext";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useContext(AuthContext);
  const { posts } = useContext(PostsContext);

  const userPosts = posts.filter((post) => post.user_id === user.id);

  if (!user) return <p>Loading...</p>;

  return (
    <div className='p-4 flex flex-col'>
      <div className='mb-4'>
        {/* <h2 className='text-xl font-semibold'>Email: {user.email}</h2> */}

        {/* Display other user details if needed */}
      </div>
      <h2 className='text-3xl mb-8 font-semibold text-center '>Your Posts</h2>
      <div className='grid grid-cols-2 '>
        {userPosts.length > 0 ? (
          userPosts.map((post) => (
            <div key={post.id} className='border-b mb-4 pb-4'>
              <h2 className='text-xl capitalize'>{post.title}</h2>
              <p>{post.content.substring(0, 50)}...</p>
              <Link to={`/posts/${post.id}`} className='text-blue-500'>
                Read more
              </Link>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
