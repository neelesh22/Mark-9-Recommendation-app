import "./styles.css";
import React, { useState } from "react";

const genreList = {
  Pop: [
    {
      name: "Single Ladies",
      descp: "‘Single Ladies (Put a Ring on It)’ by Beyoncé",
      rating: "5/5"
    },
    {
      name: "Umbrella",
      descp: "‘Umbrella’ by Rihanna featuring Jay-Z",
      rating: "4.7/5"
    },
    {
      name: "Shake it Off",
      descp: "‘Shake it Off’ by Taylor Swift",
      rating: "4.5/5"
    }
  ],

  Jazz: [
    {
      name: "Honeysuckle Rose",
      descp:
        "A popular song from the 1930s, ‘Honeysuckle Rose’ was composed by pianist, singer and entertainer Fats Waller, with lyrics by Andy Razaf. The song was published in 1929. ",
      rating: "5/5"
    },
    {
      name: "Mack The Knife",
      descp:
        " Written by Bertolt Brecht and Kurt Weill in 1928, Mack The Knife isn’t the usual story of romance or lost love; it’s based on the story of an 18th Century English thief! ",
      rating: "5/5"
    },
    {
      name: "Cantaloupe Island",
      descp:
        "Recorded and performed by many artists over the years, pianist-composer Herbie Hancock‘s version of Cantaloupe Island is the definitive version for many jazz fans.",
      rating: "5/5"
    }
  ],

  Rock: [
    {
      name: "I Love Rock 'N Roll",
      descp: "I Love Rock 'N Roll (1981) — Joan Jett",
      rating: "4.8/5"
    },
    {
      name: "Born to Run",
      descp: "Born to Run (1975) — Bruce Springsteen.",
      rating: "5/5"
    },
    {
      name: "Starman",
      descp: "Starman (1972) — David Bowie",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Pop");
  function categoryClickHandler(type) {
    setCategory(type);
  }
  return (
    <div className="App">
      <h1> Song Recommendation </h1>

      <div>
        {Object.keys(genreList).map((type) => (
          <button onClick={() => categoryClickHandler(type)}>{type}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {genreList[selectedCategory].map((genre) => (
            <li key={genre.name}>
              <div className="name"> {genre.name} </div>
              <div className="descp"> {genre.descp} </div>
              <div className="rating"> {genre.rating} </div>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
