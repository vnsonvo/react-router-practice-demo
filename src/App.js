import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useHistory,
// } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My first Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit sequi doloribus magni dolores voluptates dignissimos vitae officiis architecto adipisci. Dolor, mollitia animi ratione atque amet repellendus quasi rerum fuga?",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit sequi doloribus magni dolores voluptates dignissimos vitae officiis architecto adipisci. Dolor, mollitia animi ratione atque amet repellendus quasi rerum fuga?",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit sequi doloribus magni dolores voluptates dignissimos vitae officiis architecto adipisci. Dolor, mollitia animi ratione atque amet repellendus quasi rerum fuga?",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit sequi doloribus magni dolores voluptates dignissimos vitae officiis architecto adipisci. Dolor, mollitia animi ratione atque amet repellendus quasi rerum fuga?",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
      {/* <Router> */}
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route exact path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
