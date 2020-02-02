import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <input type="text" onChange={(event)=>this.props.search(event)}/>
                <input type="submit" value="Search" onClick={this.props.run}/>
            </div>
        )
    }
}

export default SearchBar;