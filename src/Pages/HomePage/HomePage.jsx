import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import Sidebar from "../../Components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col">
        <div className="w-full h-20"></div>
      </div>

      <div className="flex flex-grow justify-center items-center overflow-scroll pt-5">
        <FeedPosts />
      </div>
    </div>
  );
};
export default HomePage;
