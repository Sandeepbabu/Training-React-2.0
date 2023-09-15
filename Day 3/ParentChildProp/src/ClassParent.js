import React from 'react';
import ClassChild from './ClassChild';

class ClassParent extends React.Component{
    render(){
        const greeting = "Hello world";
        return(
            <div>
                <ClassChild props={greeting}/>
            </div>
        )
    }
}
export default ClassParent;