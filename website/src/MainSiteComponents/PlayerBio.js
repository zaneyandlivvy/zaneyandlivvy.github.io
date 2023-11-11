import React from 'react';

function PlayerBio ({ photo, name, aliases, birthday, height, weight, strengths, weaknesses, hair, eyes, features }) {
  
	return (
    <div className="player-bio">
      <img src={photo} alt={name} style={{height: '500px', borderRadius: '20px'}} />
      <div className='player-info'>
		<h1 style={{textAlign: 'center'}}>{name}</h1>
		<p><strong>Known aliases:</strong> {aliases}</p>
		<p><strong>Birthday:</strong> {birthday}</p>
		<p><strong>Height:</strong> {height}</p>
		<p><strong>Weight:</strong> {weight}</p>
		<p><strong>Hair color:</strong> {hair}</p>
		<p><strong>Eye color:</strong> {eyes}</p>
		<p><strong>Identifying features:</strong> {features}</p>
		<p><strong>Strengths:</strong> {strengths}</p>
		<p><strong>Weaknesses:</strong> {weaknesses}</p>
	  </div>
    </div>
  );
};

export default PlayerBio;