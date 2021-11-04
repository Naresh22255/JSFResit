import React, { useState, useEffect } from "react";

function PokemonFetch() {
  const [posts, setPosts] = useState([]);

  const [pokeName, setPokeName] = useState([]);

  useEffect(() => {
    //fetch the data
    const getPosts = async () => {
      try {
        //try to run the code
        const response = await fetch(
          "https://api.pokemontcg.io/v1/cards?setCode=base1"
        );

        const data = await response.json();

        console.log(data.cards[0]);

        const data1 = data.cards;

        const newName = data.cards.map((card) => {
          //   console.log(card.name);
          return card.name;
          //   console.log(name);
          //   setPokeName(name);
          //   return name;
        });

        // console.log(newName);

        // set data to state
        setPokeName(newName);
        console.log(newName);

        setPosts(data1);

        console.log(data1);
      } catch (error) {
        // If any error, catch the error.
        console.log(error);
      }
    };

    getPosts();
  }, []);

  //   const newCards = posts.cards;

  //   console.log(newCards);

  return (
    <div>
      {Object.keys(pokeName).map((names, index) => (
        <div>
          <h6 key={index}>{names}</h6>
          <h1>{names}</h1>
        </div>
      ))}

      {/* from state render to UI */}
      {Object.keys(posts).map((names, index) => {
        return (
          <div>
            <h6 key={index}>{names}</h6>
            <h1>{names}</h1>
          </div>
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
