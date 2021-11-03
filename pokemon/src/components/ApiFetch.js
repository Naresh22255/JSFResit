import React, { useState, useEffect } from "react";
import "./ApiFetch.scss";
import axios from "axios";

function ApiFetch() {
  const [posts, setPosts] = useState([]);

  //   async function fetchData() {
  //     let response = await axios(
  //       `https://api.pokemontcg.io/v1/cards?setCode=base1`
  //     );
  //     let user = await response.data;
  //     setPosts(user);
  //     console.log(posts.cards);
  //   }

  useEffect(() => {
    // fetchData();

    axios
      .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
      .then((response) => {
        setPosts(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // return () => {
    //   cleanup;
    // };
  }, [posts]);
  return (
    <div>
      <h2>Fetching Api</h2>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.cards}>{post}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default ApiFetch;
