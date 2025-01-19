/* eslint-disable react/jsx-key */

import ItemLists from "../../components/item-list/ListItems";
import { globalContext } from "../../context";
import { useContext } from "react";

export default function Favorite() {
  const { favoritesList } = useContext(globalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <ItemLists item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
