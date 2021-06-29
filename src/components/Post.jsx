import { FaTimes } from "react-icons/fa";

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <FaTimes
        style={{
          color: "red",
          cursor: "pointer",
        }}
        onClick={() => onDelete(post.id)}
      />
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
