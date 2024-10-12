import React, { useState, useEffect } from "react";

const Meme = () => {
  // State to manage the current meme being displayed
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // useEffect to fetch memes from the API when the component loads
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes))
      .catch((error) => console.error("Error fetching memes:", error));
  }, []);

  // Function to get a random meme image
  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Function to handle changes in the input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main className="p-9 lg:w-[50%] lg:mx-auto">
      <div className="grid grid-cols-2 gap-12 mb-6">
        <div>
          <label htmlFor="topText" className="block mb-1">
            Top Text
          </label>
          <input
            id="topText"
            name="topText" // Added name attribute
            type="text"
            placeholder="top text"
            className="border-2 text-xl p-1 indent-1 w-full"
            value={meme.topText}
            onChange={handleChange} // Modified: Use handleChange function
          />
        </div>
        <div>
          <label htmlFor="bottomText" className="block mb-1">
            Bottom Text
          </label>
          <input
            id="bottomText"
            name="bottomText" // Added name attribute
            type="text"
            placeholder="bottom text"
            className="border-2 text-xl p-1 indent-1 w-full"
            value={meme.bottomText}
            onChange={handleChange} // Modified: Use handleChange function
          />
        </div>
        <button
          onClick={getMemeImage}
          className="bg-[linear-gradient(90deg,_#672280_1.18%,_#A626D3_100%)] col-span-2 rounded-md text-white text-xl font-bold p-4 cursor-pointer"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img
          src={meme.randomImage}
          alt="Random Meme"
          className="w-full sm:h-[60vh] lg:max-h-[60vh] object-cover rounded-md"
        />
        <h2
          className="lg:text-6xl text-3xl mt-4 top-0 absolute w-[80%] text-center left-1/2 transform -translate-x-1/2 my-4 px-1.5 font-[impact] uppercase text-white tracking-wide
            [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000]"
        >
          {meme.topText}
        </h2>
        <h2
          className="lg:text-6xl text-3xl mt-4 bottom-0 absolute w-[80%] text-center left-1/2 transform -translate-x-1/2 my-4 px-1.5 font-[impact] uppercase text-white tracking-wide
            [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,0_2px_0_#000,2px_0_0_#000,0_-2px_0_#000,-2px_0_0_#000,2px_2px_5px_#000]"
        >
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default Meme;
