import React from 'react';

const Items = (props) => (
	<div>
		<h3>What To Do With:</h3>
		{props.items.map(item => 
			<div key={item.id}> 
				<h1>{item.name}</h1>
				<img src={item.img_url} alt={item.name}/>
				<p>Material: {item.material}</p>
				<p>Alternative Options: {item.alternative}</p>
				<p>How To Recycle: {item.instructions}</p>
			</div>
		)}
	</div>
)

export default Items;