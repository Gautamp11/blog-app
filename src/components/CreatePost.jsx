import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabase";
import { PostsContext } from "../context/PostsContext";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);
  const { posts, setPosts } = useContext(PostsContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      alert("you need to be logged in to create a post");
      return;
    }

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title,
          content,
          user_id: user.id,
        },
      ])
      .select();

    if (error) {
      console.log("Error creating post ", error);
    } else {
      setTitle("");
      setContent("");
      setPosts([data[0], ...posts]);
    }
  }
  return (
    <form onSubmit={handleSubmit} className='p-4 mb-4 bg-gray-100 rounded-md'>
      <h2 className='text-2xl mb-4'>Create New Post</h2>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className='border mb-4 p-2 w-full'
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className='border mb-4 p-2 w-full'
      />
      <button
        type='submit'
        className='bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900'
      >
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
