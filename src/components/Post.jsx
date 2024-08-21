import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import Comment from "./Comment";
import { AuthContext } from "../context/AuthContext";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      setPost(data);
    };

    const fetchComments = async () => {
      const { data } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", id)
        .order("created_at", { ascending: false });
      setComments(data);
    };

    fetchPost();
    fetchComments();
  }, [id]);

  async function handleAddComment() {
    if (!user) {
      alert("You need to be logged in to comment");
      return;
    }

    const { error } = await supabase.from("comments").insert([
      {
        post_id: id,
        user_id: user.id,
        content: newComment,
        user_email: user.email,
      },
    ]);
    if (error) console.log("Error adding comment: ", error);
    else {
      setNewComment("");

      //refertch comments
      const { data } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", id);
      setComments(data);
    }
  }

  if (!post) return;
  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4 font-semibold text-center'>{post.title}</h1>
      <p>{post.content}</p>

      <div className='mt-6'>
        <h2 className='text-xl mb-2 font-semibold'>Comments</h2>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      <div className='mt-8'>
        <textarea
          className='border border-gray-300 p-2 w-full'
          rows='3'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className='mt-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900'
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}

export default Post;
