import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { useRef, useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputFieldRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();

    getData(searchQuery);

    setSearchQuery("");
    inputFieldRef.current.blur();
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
    } catch (err) {}
  };
  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-gray-600 text-lg">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputFieldRef={inputFieldRef}
          searchHandler={searchHandler}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
