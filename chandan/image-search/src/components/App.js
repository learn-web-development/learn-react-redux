import React from 'react';
import ImageList from './ImageList';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';


class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (searchTerm) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: searchTerm
      }
    })
    this.setState({images: response.data.results});
    // console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}

export default App;
