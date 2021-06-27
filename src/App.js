import { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPost] = useState([
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

  return (
    <div>
      <Header />
      <Posts posts={posts} />
    </div>
  );
};

export default App;
