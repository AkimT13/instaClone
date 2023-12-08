import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import Sidebar from "../../Components/Sidebar";
import StorySection from "../../Components/StorySection";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col">
        <div className="w-full h-20"></div>
      </div>

      <div className="flex flex-grow justify-center overflow-scroll mt-28 ">
        <div className="overflow-scroll">
          <FeedPosts />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
