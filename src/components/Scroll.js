import React from 'react';

const Scroll = (props) => {
    return(
       <div style= {{ overflowY: 'scroll', border: '5px double yellow', height: '500px'}}>
    	{props.children}
       </div>
    );
}

export default Scroll;