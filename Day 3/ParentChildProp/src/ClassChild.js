import React from 'react';
class ClassChild extends React.Component{
    render(){
        const{props} = this.props;
        return(
            <div> 
                <h4> {props}</h4>
            </div>
        )
    }
} export default ClassChild