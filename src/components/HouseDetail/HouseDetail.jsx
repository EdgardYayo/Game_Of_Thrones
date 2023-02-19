import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';
import style from './HouseDetail.module.css';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    let id = props.match.params.houseId;
    const dispatch = useDispatch();
    const house = useSelector((state) => state.house)
    const history = useHistory()

    console.log(house)
    React.useEffect(() => {
      dispatch(getHouse(id))
    },[dispatch, id]);

    const handleNextHouse = (e) => {
      if(parseInt(id) === 3){
        return 
      }
      
      id = parseInt(id) + 1
      history.push(`/houses/${id}`)
    } 

    const handlePreviousHouse = (e) => {
      if(parseInt(id) === 1){
        return 
      }
      
      id = parseInt(id) - 1
      history.push(`/houses/${id}`)
    } 

    return (
        <div className={style.container}>
          <section className={style.subcont}>
          <h1>{house.name}</h1>
          <h3>{house.words}</h3>
          <button className={style.arrows} disabled={ parseInt(id) === 1 ? true : false } onClick={handlePreviousHouse}>↢</button>
          <button className={style.arrows} disabled={ parseInt(id) === 3 ? true : false } onClick={handleNextHouse}>↣</button>
          </section>
          <article className={style.character}>
          {house.characters?.map(char => {
            return (
              <CharacterCard 
              fullName={char.fullName}
              family={char.family}
              title={char.title}
              imageUrl={char.imageUrl}
              key={char.id}
              houseId={char.houseId}
              />
              )
            })
          }
          </article>
        </div>
    );
};

export default HouseDetail;
