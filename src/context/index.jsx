/* eslint-disable react-refresh/only-export-components */

import PropTypes from "prop-types";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const globalContext = createContext(null);
export default function GlobalContext({ children }) {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
    );
    const data = await response.json();
    if (data?.data?.recipes) {
      console.log(data.data.recipes);
      setRecipeList(data.data.recipes);
      setSearchParam("");
      navigate("/");
      setLoading(false);
    }
  }

  function handleClick(currItemSelected) {
    let cpDetail = [...favoritesList];
    const ind = cpDetail.findIndex((item) => item.id === currItemSelected.id);
    if (ind === -1) {
      cpDetail.push(currItemSelected);
    } else {
      cpDetail.splice(ind, 1);
    }
    setFavoritesList(cpDetail);
  }

  return (
    <globalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        recipeList,
        handleSubmit,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        handleClick,
        favoritesList,
        setFavoritesList,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}
GlobalContext.propTypes = {
  children: PropTypes.node.isRequired,
};
