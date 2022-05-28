import ContentColumn from "./components/Content/ContentColumn";
import Profile from "./components/Profile/Profile";
import Timeline from "./components/Timeline/Timeline";
import MenuBar from "./components/MenuBar/MenuBar";
import "./Blog.css";

function App() {
  return (
    <div class="pageContainer">
      <div class="leftContainer">
        <Profile />
        <MenuBar />
      </div>
      <ContentColumn />
      <Timeline />
    </div>
  );
}

export default App;
