import React from 'react';

class States extends React.Component{
    
//state={
    User={
    name:"Hi!! i am one"
}

    updateName(){
        // this.setState(
        //     name:"Good Afternoon"

            this.setState(this.User={
            name:"Have a good day"}
        
        );
    }   

    render(){
        return(
        <div>
            {/* <h1>{this.state.name}</h1> */}
           <h1>{this.User.name}</h1>
        <button onClick={()=>this.updateName()}> UPDATE </button>
        </div>
            )
    }
}

export default States;