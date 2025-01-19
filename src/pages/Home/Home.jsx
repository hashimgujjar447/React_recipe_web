import ListItems from "../../components/item-list/ListItems";
import { globalContext } from "../../context";
import { useContext } from "react";

function Home() {
  const { recipeList, loading } = useContext(globalContext);

  if (loading) return <div className="container mx-auto py-6">Loading...</div>;

  return (
    <div className="container mx-auto py-8 flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <ListItems key={item.id} item={item} />)
      ) : (
        <div className=" w-full">
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
