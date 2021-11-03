import React, { useState, useEffect } from "react";

function PokemonFetch() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    //fetch the data
    const getPosts = async () => {
      try {
        //try to run the code
        const response = await fetch(
          "https://api.pokemontcg.io/v1/cards?setCode=base1"
        );

        const data = await response.json();

        console.log(data.cards[1].id);
        // set data to state
        setPosts(data);
      } catch (error) {
        // If any error, catch the error.
        console.log(error);
      }
    };

    getPosts();
  }, []);
  return (
    <div>
      {/* from state render to UI */}
      {Object.keys(posts).map((poke, key) => {
        return (
          // <img src={posts[key]} alt="post" />;
          console.log(poke)
        );
      })}
    </div>
  );
}

export default PokemonFetch;

// function PokemonFetch() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     await fetch("https://api.pokemontcg.io/v1/cards?setCode=base1")
//       .then((response) => response.json())
//       .then((receivedData) => setData(receivedData));
//   };
//   console.log(data);
//   return (
//     <div>
//       <p> Fetch/ Async / Await</p>
//       {data.map((user) => (
//         <div>{user.name} </div>
//       ))}
//     </div>
//   );
// }

// export default PokemonFetch;
