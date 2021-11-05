import React, { useState, useEffect } from "react";
import axios from "axios";

function LastTry() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
      .then((response) => {
        console.log(response);
        // const obj = response.json;

        // console.log(obj);
        setPosts(response.data.cards);
        console.log(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return Boolean(post.name) && <h2 key={index}>{post.name}</h2>;
      })}
    </div>
  );
}

export default LastTry;
