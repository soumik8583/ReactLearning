import React, { createElement } from 'react';
const Hello=()=>{
    /*return (
        <div>
            <h1>hello in JSX video</h1>
        </div>
    )*/

    //without JSX
    //return React.createElement('div',null, 'h1' ,'hello in JSX video');
    //in this case it not come as expected, 
    //for this we need call the method again in side the method
    return React.createElement('div',null, React.createElement('h1',null,'hello in JSX video'));
}
export default Hello;