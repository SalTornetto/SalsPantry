import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav id="pantryNav" className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
<NavLink to={"/"}>
      <ul className="flex gap-5">
        <li>
          <img
            src={process.env.PUBLIC_URL + '/pizza.png'}
            // src='%PUBLIC_URL%/pizzaslice.png'
            alt="Sal's Pantry Logo"
            className="h-14 w-14 rotate-45" // Limit size and rotate
            style={{ maxWidth: '150px', maxHeight: '150px', top: '50px' }} // Ensure maximum size
          />
        </li>
        <li>
          <h2 className="text-4xl font-semibold text-white hover:text-gray-100 duration-300"
          style={{  bottom: '50px' }}
          >
            <NavLink to={"/"}>Sal's Pantry</NavLink>
          </h2>
        </li>
      </ul>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-black/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-sky-700 focus:shadow-sky-400 text-white"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-white hover:text-gray-500 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-white hover:text-gray-500 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
