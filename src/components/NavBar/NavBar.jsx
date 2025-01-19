import { NavLink } from "react-router-dom";
import { globalContext } from "../../context/index";
import { useContext } from "react";

function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(globalContext);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h1 className="text-2xl font-semibold text-gray-600 ">RecipeApp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for recipes"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="p-4 px-6 lg:w-96 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-300"
        />
      </form>
      <div className="flex gap-6">
        <NavLink
          className="text-black hover:text-gray-700 duration-200"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="text-black hover:text-gray-700 duration-200"
          to={"/favorite"}
        >
          Favorite
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
