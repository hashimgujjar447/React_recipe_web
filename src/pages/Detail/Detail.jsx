/* eslint-disable react/jsx-key */

import { useContext, useEffect } from "react";

import { globalContext } from "../../context";
import { useParams } from "react-router-dom";

function Detail() {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleClick,
    favoritesList,
  } = useContext(globalContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-cyan-700">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleClick(recipeDetailsData?.recipe)}
            className="p-3 px-8 bg-black text-white rounded-lg text-sm uppercase font-medium inline-block mt-3  shadow-md tracking-wider"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorite"
              : "Add to favorite"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul>
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-2xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
