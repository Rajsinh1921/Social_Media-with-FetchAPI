import React, { useContext, useRef } from "react";
import { PostListContext } from "../ContextAPI/post-list-store";

function CreatePosts() {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const reactionsElement = useRef();
  const hashTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashTags = hashTagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    reactionsElement.current.value = "";
    hashTagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        reactions: reactions,
        userId: userId,
        tags: hashTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Enter your User Id</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your User id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your post title"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <textarea
          rows={4}
          type="text"
          className="form-control"
          placeholder="Tell us more about it"
          ref={postContentElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post reactionsElement</label>
        <textarea
          type="text"
          className="form-control"
          placeholder="Enter the number of reactionsElement here"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter your hashtags here</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please, enter tags using space"
          ref={hashTagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePosts;
