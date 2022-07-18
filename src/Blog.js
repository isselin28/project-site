import ContentColumn from "./components/ContentColumn/ContentColumn";
import Profile from "./components/Profile/Profile";
import TechList from "./components/TechList/TechList";
import MenuBar from "./components/MenuBar/MenuBar";
import "./Blog.css";

function Blog() {
  return (
    <div class="pageContainer">
      <div class="leftContainer">
        <div class="profileContainer">
          <Profile />
        </div>
        <div class="menuContainer">
          <MenuBar />
        </div>
      </div>
      <ContentColumn />
    </div>
  );
}

export default Blog;
