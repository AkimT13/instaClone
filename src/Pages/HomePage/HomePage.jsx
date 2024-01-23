import FeedPosts from "../../Components/FeedPosts/FeedPosts";
import Sidebar from "../../Components/Sidebar";
import StorySection from "../../Components/StorySection";
import PageLayout from "../../Layouts/PageLayout/PageLayout";
import TopStories from "../../Components/NewsArticles/TopStories";

const HomePage = () => {
  return (
    <PageLayout>
      <div className="flex h-screen bg-zinc-950">
        <div className="flex flex-col">
          <div className="w-full h-20"></div>
        </div>

        <div className="flex flex-grow justify-center overflow-scroll mt-28 ">
          <div className="overflow-scroll">
            <TopStories />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default HomePage;
