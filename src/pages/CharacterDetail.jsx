import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id.toString()}`)
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const handleBackNavigation = () => {
    navigate(-1);
  };
  return (
    <div>
      <img src={data.image} alt={data.name} />
      <h1>{data.name}</h1>
      <button onClick={handleBackNavigation}>Back</button>
    </div>
  );
};

export default CharacterDetail;
