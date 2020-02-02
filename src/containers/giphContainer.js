import React from 'react'

class GiphContainer extends React.Component{

    render(){
        return(
            <div>
                {this.props.images.map((image)=>{
                    
                    return <img src={image.images.fixed_height.url}/>
                    
                })}
            </div>
        )
    }
}

export default GiphContainer;