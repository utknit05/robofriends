import React from 'react';
import Card from './Card';



const CardList = ({ robo }) =>{
    // throw new Error('hiiiiii!');
	const cardComponent = robo.map((user,i) => 
		<Card key={user.id} id={user.id} name={user.name} email={user.email}/>
		)

	return (
	    <div>
		   { cardComponent }
		</div>
	 	);
}

export default CardList; 