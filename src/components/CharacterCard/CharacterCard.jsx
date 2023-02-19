import React from 'react';
import style from './CharacterCard.module.css';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
const CharacterCard = ({imageUrl,id,fullName,title,family}) => {
    
    return (
        <div className={style.container}>
          <img className={style.img} src={imageUrl} alt="character"/>
          <span className={style.bottom}></span>
          <p className={style.name}>{fullName}</p>
          <p className={style.title}>Title: {title}</p>
          <p className={style.family}>{family}</p>
        </div>
    );
};

export default CharacterCard;
