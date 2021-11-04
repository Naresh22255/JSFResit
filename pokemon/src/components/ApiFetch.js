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

  //     console.log(user.cards[1].name);
  //     setPosts(user);
  //     console.log(posts);
  //   }

  useEffect(() => {
    // fetchData();

    const request = axios
      .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
      .then((response) => {
        setPosts(response.data.cards);
        console.log(response.data.cards);
        return request;
      })
      .catch((err) => {
        console.log(err);
      }, []);

    // return () => {
    //   cleanup;
    // };
  }, []);

  //   console.log(name);

  return (
    <div>
      <h2>Fetching Api</h2>
      <ul>
        {Object.keys(posts).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiFetch;
