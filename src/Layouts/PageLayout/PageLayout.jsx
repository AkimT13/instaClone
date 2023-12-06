import { useLocation } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
const PageLayout = ({ children }) => {
  const { pathName } = useLocation();
  return (
    <div>
      <div> {pathName !== "/auth" ? <Sidebar /> : null}</div>
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
