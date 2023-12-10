import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../ContextAPI/post-list-store";

function Card({ post }) {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags, index) => (
          <span key={index} className="badge text-bg-primary tags">
            {tags}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Card;
