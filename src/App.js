import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = "";
    const postsList = [];
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path="/" element={<Home posts={posts} />} />
        <Route
          exact
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
