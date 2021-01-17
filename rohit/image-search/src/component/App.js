import React from "react";
import Unsplash from "./api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { Images: [] };

  componentDidMount() {
    this.onSearchSubmit("Nature");
  }

  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ Images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList Images={this.state.Images} />
      </div>
    );
  }
}

export default App;
