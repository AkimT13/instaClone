import Navbar from "../../Components/navbar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
