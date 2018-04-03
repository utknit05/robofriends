import React from 'react';

const Card = ({name, email, id}) => {
	return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3'>
		  <img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
		  <div>
		     <h3> {name} </h3>
		     <p>  {email} </p>
		  </div>
      </div>
	);
}


export default Card;





// {`https://robohash.org/${props.id}`} since it is a template string 
// so we need to add " {} " to convert it into a javascript expression.