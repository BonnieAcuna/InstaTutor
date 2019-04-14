import React from 'react'
import autoscroll from 'autoscroll-react'
 
// import Item from './Item'
 
class SearchFtTutors extends React.Component {
    render(){
        
        return (
            <div>
                {this.props.renderSearchedTutors()}
            </div>
        
        )
    }
}
 
export default autoscroll(SearchFtTutors)