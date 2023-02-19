import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHouse } from '../../redux/actions';
import style from './HouseCard.module.css';


// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {
    

    render() {

        return (
            <div className={style.container}>
              <button className={style.btnDelete} onClick={()=> this.props.deleteHouse(this.props.id)}>✘</button>
              <Link to={`/houses/${this.props.id}`}>
              <h3 className={style.name}>{this.props.name}</h3>
              </Link>
              <p className={style.region}>{`Region: ${this.props.region}`}</p>
              <p className={style.words}>{`Words: ${this.props.words}`}</p>
            </div>
        );
    };
};

export const mapDispatchToProps = {
    deleteHouse,
}

export default connect(null, mapDispatchToProps)(HouseCard);
