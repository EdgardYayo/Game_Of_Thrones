import React from 'react';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = ({imageUrl,id,fullName,title,family}) => {
    
    return (
        <div>
          <img src={imageUrl}/>
          <p>ID: {id}</p>
          <p>Name: {fullName}</p>
          <p>Title: {title}</p>
          <p>Family: {family}</p>
        </div>
    );
};

export default CharacterCard;
