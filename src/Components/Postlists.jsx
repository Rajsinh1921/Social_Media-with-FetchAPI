import React, { useContext } from "react";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from "./WelcomeMessage";
import { PostListContext } from "../ContextAPI/post-list-store";

function Postlists() {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post, index) => <Card key={index} post={post} />)}
    </>
  );
}

export default Postlists;
