import axios from "axios";
import React, { useEffect, useState } from "react";

const CharacterList = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results)
        setInfo(response.data.info)
      });
  }, []);

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-wrap justify-center">
        {data.map((data) => {
          return (
            <div
              className="flex flex-col gap-4 px-24 py-4 items-center"
              key={data.id}
            >
              <img
                className="w-full object-cover"
                src={data.image}
                alt={data.name}
              />
              <p className="text-black font-sans">{data.name}</p>
            </div>
          );
        })}

      </div>
      <div className="flex justify-center gap-4">
        <button className={`px-4 py-2 rounded-md ${info?.prev == null ? "bg-gray-300 cursor-default" : "bg-pink-500"}`}>Prev</button>
        <button className={`px-4 py-2 rounded-md ${info?.next == null ? "bg-gray-300 cursor-default" : "bg-pink-500"}`}>Next</button>
      </div>
    </div>
  );
};

export default CharacterList;
