import React, { useEffect, useState } from "react";
import Unsplash from "./api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    onSearchSubmit("Nature");
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList Images={images} />
    </div>
  );
};

export default App;
