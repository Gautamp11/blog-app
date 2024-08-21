import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

function Home() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl mb-8 text-center font-semibold text-gray-800'>
        Blog Posts
      </h1>
      <CreatePost />
      <div className=' grid grid-cols-2 gap-8'>
        <Posts />
      </div>
    </div>
  );
}

export default Home;
