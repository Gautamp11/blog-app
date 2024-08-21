function Comment({ comment }) {
  return (
    <div className='border-b border-gray-300 py-2'>
      <p className='text-sm font-semibold'>User {comment.user_email}</p>
      <p>{comment.content}</p>
    </div>
  );
}

export default Comment;
