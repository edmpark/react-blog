import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import AddPost from "./components/AddPost";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Title 1",
      content: "Hello there this is a sentence.",
    },
    {
      id: 2,
      title: "Title 2",
      content: "Hello there this is also a sentence.",
    },
  ]);

  //Add Post
  const addPost = (post) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newPost = { id, ...post };
    setPosts([...posts, newPost]);
  };

  //Delete Post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Header />
      <AddPost onAdd={addPost} />
      <Posts posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default App;
