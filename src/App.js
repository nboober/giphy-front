import React from 'react';
import SearchBar from '../src/components/searchBar'
import GiphContainer from '../src/containers/giphContainer'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      searchText: "",
      images: []
    }
  }

  searchText = (event) => {
    this.setState({
        searchText: event.target.value
    })
  }

  runSearch = () => {

    let object = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
          Accepts: 'application/json'
      },
      body: JSON.stringify({
        term: this.state.searchText
      })
    }

    fetch("http://localhost:3000/get_gifs", object).then(response => response.json()).then(imagesArray => this.setState({images: imagesArray.data}))
  }

  render(){
    return(
      <div>
        <SearchBar 
          search={this.searchText} 
          run={this.runSearch}/>
        <GiphContainer images={this.state.images}/>
      </div>
    )
  }
}

export default App;
