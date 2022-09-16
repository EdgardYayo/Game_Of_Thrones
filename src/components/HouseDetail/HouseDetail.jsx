import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouse } from '../../redux/actions';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
    const id = props.match.params.houseId;
    const dispatch = useDispatch();
    const house = useSelector((state) => state.houses)

    React.useEffect(() => {dispatch(getHouse(id)) },[dispatch, id]);

    return (
        <div>
          {house.name}
          {house.words}
          {house.characters?.map(char => {
              return (
                <CharacterCard 
                 fullName={char.fullName}
                 family={char.family}
                 title={char.title}
                 id={char.id}
                 imageUrl={char.imageUrl}
                 key={char.id}
                 houseId={char.houseId}
                />
              )
            })
          }
        </div>
    );
};

export default HouseDetail;
