import ContentColumn from "./components/ContentColumn/ContentColumn";
import Profile from "./components/Profile/Profile";
import MenuBar from "./components/MenuBar/MenuBar";
import "./Blog.css";

function Blog() {
  return (
    <div class="pageContainer">
      <div class="leftContainer">
        <Profile />
        <MenuBar />
      </div>
      <ContentColumn />
    </div>
  );
}

export default Blog;
