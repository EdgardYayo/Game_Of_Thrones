import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllHouses } from '../../redux/actions';
import HouseCard from '../HouseCard/HouseCard';
import GOT from '../../img-cp2/main-image-cp2.jpg';
import style from './Houses.module.css';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS 
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
    componentDidMount(){
        this.props.getAllHouses()
        console.log(this.props);
    }


    render() {
        return (
            <div className={style.container}>
              <h1 className={style.title}>Game of Thrones</h1>
              <div className={style.img}>
              <img src={GOT} alt='main-img'/>
              </div>
              <h3 className={style.subtitle}>Houses</h3>
              <div className={style.houseCard}>
              { this.props.houses?.map(house => {
                  return (
                      <HouseCard 
                      id={house.id}
                      region={house.region}
                      name={house.name}
                      words={house.words} 
                      characters={house.characters}   
                      key={house.id}
                      />
                      )
                    })}
                    </div>
            </div>
        );
    };
};

export const mapStateToProps = (state) => {
    return {
        houses: state.houses
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllHouses: () => dispatch(getAllHouses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Houses);

