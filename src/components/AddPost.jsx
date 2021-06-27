import { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, content });

    setTitle("");
    setContent("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Content</label>
        <input
          type="text"
          placeholder="Add Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <input type="submit" value="Post" />
    </form>
  );
};

export default AddPost;
