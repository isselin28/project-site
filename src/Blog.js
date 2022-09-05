import ContentColumn from "./components/ContentColumn/ContentColumn";
import Profile from "./components/Profile/Profile";
import MenuBar from "./components/MenuBar/MenuBar";
import "./Blog.css";
import { isMobileDevice } from "./utils";
import Burger from "./components/MobileMenu/Burger";

function Blog() {
  const isMobile = isMobileDevice();
  return (
    <>
      {!isMobile && (
        <div class="pageContainer">
          <div class="leftContainer">
            <Profile />
            <MenuBar />
          </div>
          <ContentColumn />
        </div>
      )}
      {isMobile && (
        <>
          <Burger />
          <div class="mobilePageContainer">
            <ContentColumn />
          </div>
        </>
      )}
    </>
  );
}

export default Blog;
