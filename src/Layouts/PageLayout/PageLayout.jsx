import Navbar from "../../Components/Navbar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
