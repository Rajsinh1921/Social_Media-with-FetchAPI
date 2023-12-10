import PostListProvider from "./ContextAPI/post-list-store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Slidebar from "./Components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleSidebarClick = (state) => setSelectedTab(state);

  return (
    <PostListProvider>
      <div className="mainContainer">
        <Slidebar
          handleSidebarClick={handleSidebarClick}
          selectedTab={selectedTab}
        />
        <div className="righthandContainer">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
      <Footer />
    </PostListProvider>
  );
}

export default App;
